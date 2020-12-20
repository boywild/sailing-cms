#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 打包静态资源
yarn run build

# 将dist文件发送到远程
sshpass -p ${serverPass} scp -o stricthostkeychecking=no -r dist/ ${serverUser}@${serverIP}:/home/www/sailing-cms
