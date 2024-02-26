import chalk from 'chalk';
import * as execa from 'execa';

import semver from 'semver';
import minimist from 'minimist';
import { createRequire } from 'module';
import fs from 'fs-extra';
import path from 'path';
import Enquirer from 'enquirer';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// for esm
const require = createRequire(import.meta.url);
// parse args
const args = minimist(process.argv.slice(2));
// check if it's a dry run
const isDry = args.dry;

const versionIncrements = ['patch', 'minor', 'major'] as const;

const pkg = require('../package.json');
const currentVersion = pkg.version;

const directRun = (bin: string, args: string[]) => {
  return execa.execa(bin, args, { stdio: 'inherit' });
};

const dryRun = (bin: string, args: string[]) => {
  console.log(chalk.blue(`[dryrun] ${bin} ${args.join(' ')}`));
  return;
};

const run = isDry ? dryRun : directRun;

const step = (msg) => console.log(chalk.cyan(msg));

// get version
function updateVersion(version: string) {
  pkg.version = version;
  fs.writeFileSync(path.resolve(__dirname, '../package.json'), JSON.stringify(pkg, null, 2));
}

async function main() {
  // 1. `patch | minor | major`
  const { release } = await new Enquirer<{ release: string }>().prompt({
    type: 'select',
    name: 'release',
    message: 'Select release type',
    choices: versionIncrements.map((i) => `${i} (${semver.inc(currentVersion, i)})`)
  });
  const targetVersion = release.match(/\((.*)\)/)![1];

  const { confirm } = await new Enquirer<{ confirm: boolean }>().prompt({
    type: 'confirm',
    name: 'confirm',
    message: `Releasing ${targetVersion}. Confirm?`
  });

  if (!confirm) {
    return;
  }
  // 2. test
  step('\nRunning tests...');
  await run('pnpm', ['test:unit']);
  await run('pnpm', ['test:e2e']);

  // 3. change package.json version
  if (!isDry) {
    step('\nUpdate version...');
    updateVersion(targetVersion);
  }

  // 4. pnpm build
  step('\nBuilding package...');
  await run('pnpm', ['build']);

  // 5.  CHANGELOG.md
  step('\nGenerating changelog...');
  await run('pnpm', ['changelog']);

  // 6.  release commit
  step('\nCommitting changes...');
  await run('git', ['add', '-A']);
  await run('git', ['commit', '-m', `'release(ssg): v${targetVersion}' released`]);

  // 7. npm publish
  step('\nPublishing packages...');
  await run('pnpm', ['publish', '--access', 'public']);

  // 8. git push and tag
  step('\nPushing to GitHub...');
  await run('git', ['tag', `v${targetVersion}`]);
  await run('git', ['push', 'origin', `refs/tags/v${targetVersion}`]);
  await run('git', ['push']);
}

main().catch((err) => {
  console.log(err);
  updateVersion(currentVersion);
});
