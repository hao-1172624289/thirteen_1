### git基本操作

~~~js
/*我们使用 git clone 从现有 Git 仓库中拷贝项目*/
git clone "Git仓库" "本地目录"      			

git clone git@github.com:hao-1172624289/thirteen.git			//SSH协议(快速、安全)
git clone git://github.com/hao-1172624289/thirteen.git          //GIT协议
git clone https://github.com/hao-1172624289/thirteen.git     	//HTTPS协议

/*Git 为你的每一个提交都记录你的名字与电子邮箱地址，所以第一步需要配置用户名和邮箱地址*/
$ git config(可查看user.name) --global user.name 'hao-1172624289'
$ git config --global user.email 1172624289@qq.com

git add "文件名/目录"  				//可将该文件添加到缓存
git commit -m "注释/说明"			//将缓存区内容添加到仓库中
~~~

