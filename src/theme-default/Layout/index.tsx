import { Content } from '@runtime';
import 'uno.css';

export function Layout() {
  return (
    <div>
      <h1 className="ml-4 mt-8 bg-slate-500 rounded-full">Common Content</h1>
      <h1>Doc Content</h1>
      <Content />
    </div>
  );
}
