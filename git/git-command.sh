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
git log --name-status # 显示log 的同时，显示该commit 改动的文件
git log --name-only
git log --name-status -3 --oneline # 很好用
git log --author-date-order # 同时显示 author 与 commit date
git log --pretty=format:'commit=%h%nsub=%s%nauthor=%an%ntime=%ar%n'
# 自定义的git log 格式，%h=commitID, %s=title,%an=author,%ar=time,%s=\n
git show commitID # 显示commit 信息
# git 术语
# tree 代表的是目录结构，或者简单地理解为代表一个目录
# blob 用来存储文件内容，或者说表示一个文件
# commit 存储一次提交的信息
# tag 就是标签的意思，实际上是 commit 的别名
git blame -- filePath # blame 对应的文件信息
git blame -- filePath -L 38,66 # 显示38行-66行之间的 blame
git blame -L '/onCreate/',+10 -- app/src/com/ActivityList.java # 从'onCreate'开始往后显示10行
git blame -L '/onCreate/','/init/' -- app/src/com/pycat/activity/chat/ActivityList.java # 显示 从'onCreate'到'init'之间的 blame
git blame --show-number -- abc.txt # 显示blame 同时显示行号
git blame --since=2018-07-23 -- abc.txt # 时间过滤
# git clean 命令
# clean：用来从工作区移除不想要的文件的命令。可以是编译的临时文件或者冲突的文件
# -d 移除未追踪的目录
# -n 预演，并不真正执行
# -x 移除 .gitignore 里面忽略的文件
# -n 与 --dry-run 都是预演，不是真的执行
