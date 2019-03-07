# GitHub分支测试
这里测试了在GitHub创建分支
然后在本地分支内创建新文件，然后**只提交到远程分支中**
（也就是说新提交的文件在远程主分支中看不到）

想法如下：
先在本地分支中，把此分支和远程分支创建连接：
此例中为newb分支
`git branch --set-upstream-to=origin/newb`
对应的取消连接命令如下：
`git branch --unset-upstream xxx` xxx为分支名

然后上传文件，测试中使用的是`2.html`文件
```
git push origin aaa:bbb
```
其中：aaa为本地分支，bbb为远程分支
所以此处命令为：
`git push origin newb:newb`
此时，就能看到2.html文件只在newb分支中展示，master分支中没有
*不知道不设置分支连接有没有影响*

另一个测试文件`1.txt`，上传时的命令为：
`git push origin newb`此时并没有指定本地分支和远程分支

刚刚测试了文件`3.md`
此时取消了连接
即执行了命令：
```
git branch --unset-upstream newb
然后新建3.md文件
接着提交到本地仓库，然后提交远程仓库
git push origin newb:newb
```
此时发现： 主分支中仍然没有此文件。
说明：
#### 只要执行push操作的时候指定本地和远程分支，分支的关联与否都没关系！！
