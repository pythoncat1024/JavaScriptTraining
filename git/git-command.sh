#!/bin/bash
pwd
git diff --name-only # 只显示有差异的文件名，并且是处于未追踪的状态的
git diff --cached # 显示差异，包含已经被 git add 的文件
git diff --name-status # 只显示有差异的文件名 和文件状态，并且是处于未追踪的状态的
git diff commitID1 commitID2 # 比较两次 commit 之间的差异

git diff > aa.path # 生成 差异文件 patch
git apply aa.patch # 应用 patch ,只是把代码改了，但是并没有 被 git add ,需要手动执行 git add

git diff commitID1 commitID2 > bb.patch

git log -p # 显示 log 的同时，也显示每次 commit 之间的 diff
git log -3 # 只显示最近3次的提交
git log --stat # 显示 log 的同时，也显示修改了那些文件的文件名
git log --shortstat # 显示log 的同时，也显示修改的文件数量
git log --name-status
git log --name-only
git log --name-status -3 --oneline # 很好用
