#!/bin/bash

function buildBlog() {
    # 获取 Git 项目根目录和构建输出目录
    local gitPath="$(git rev-parse --show-toplevel)"
    local distPath="${gitPath}/docs/build"

    # 目标服务器和路径配置
    local targetPath="/opt/beaver-ssg"
    local remoteHostAlias="aliyun.8.218.root"

    # 构建项目
    npx beaver build docs || { echo "Build failed"; exit 1; }

    # 打包构建好的文件
    (cd "${gitPath}/docs" && tar -czf "build.tar.gz" "build") || { echo "Tar failed"; exit 1; }

    # 将打包好的文件传输到远程服务器
    scp -r "${distPath}.tar.gz" "${remoteHostAlias}:${targetPath}" || { echo "SCP failed"; exit 1; }

    # 在远程服务器上执行一系列命令
    ssh ${remoteHostAlias} bash -c "'
        # rm -rf ${targetPath}/build && rm -f ${targetPath}/build.tar.gz
        tar -xzf ${targetPath}/build.tar.gz -C ${targetPath} || { echo "Tar extract failed"; exit 1; }
        chown -R www-data:www-data ${targetPath} || { echo "Chown failed"; exit 1; }
        systemctl restart nginx || { echo "Nginx restart failed"; exit 1; }
    '"

    echo "Build and deployment successful"
}

buildBlog