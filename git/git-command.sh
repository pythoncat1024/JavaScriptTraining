#!/bin/bash
pwd
git help checkout 查看 git checkout 命令帮助
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
git clean -n # 预演，看看会删除哪些文件
git clean -f # 强制删除当前分支下所有未追踪的文件
git commit --allow-empty # 本地没有任何修改，也可以提交
git branch --track lesson origin/dev # 新建一个分支追踪到远程分支
git branch --set-upstream-to=origin/master lesson # 将本地分支追踪到某个远程分支
git branch --unset-upstream lesson # 放弃本地某个分支对远程的追踪
git branch -vv # 查看本地分支与远程分支的关联关系
git branch --contains=fd79483 # 查看某个commit 包含在哪些分支上面
git push -u origin dev:dev # 根据本地 dev 分支，创建一个远程 dev 分支

git branch -r -d origin/lesson # 删除远程分支
git push origin :lesson # 提交删除，让服务器上面的该分支被删除
# git checkout 用来切换分支，或者检出内容到工作目录
git checkout branch_name # 切换到其他分支
# 如果当前:分支有文件改动(非新增)，[看 git版本，有的版本不然切换，有的可以切换，而且保留改动]
git checkout -f branch_name # 如果当前分支有文件改动，则强制取消改动，然后切换到目标分支
git checkout -b dev origin/dev # 建立新分支并追踪
git checkout --orphan=br_name start_point # 从某个起始点[可以是分支名，tag名，或者commitID,HEAD] 建立一个孤立的分支
# 孤立的分支的意思就是当前分支和之前的分支没有任何关联。(此时也没有任何的commit,不过所有的文件和start_point的代码是完全一样的)
# 孤立分支的作用：比如你偷了一套代码。你就可以建立一个孤立分支，让别人没有机会根据提交记录发现这套代码是你偷的
git checkout -- file # 将文件恢复到改动前的状态--> 恢复到暂存区的文件状态
git checkout . # 用点号，就讲本地全部未提交的修改全部恢复了。
#修改某次提交信息：
git commit —amend -c <commit ID>
# 如果 git add 了多个文件，但是只想 commit 某个文件
git commit -- file_path
git cherry-pick commitID # 将某个其他分支的 commit 添加到当前分支，生成一个新的commit 记录
git cherry-pick -n commitID # 仅仅把对应的修改应用过来，需要手动commit
git cherry-pick commitID^..commitID2 # 把 ccommit1 - commit2 之间的全部提交应用到当前分支
git reset HEAD file_path # 把 git add 的文件回退到 add 之前的状态

