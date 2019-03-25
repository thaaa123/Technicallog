### git常见命令
+ 查看当前远程分支   
```
git branch -a
```
+ 查看当前远程代码库地址   
```
git remote -v
```
+ 添加tag
```
git tag -a sit-2019.3.22-1 -m "sit-2019.3.22-1"
```
+ 推送tag
```
git push origin --tags
```
+ 查看代码分支   
```
git branch
```
+ 切换并连接远程分支   
```
git checkout -b dev origin/dev
```
+ 合并分支代码
```
git merge dev or tag
```