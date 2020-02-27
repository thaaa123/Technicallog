### uni使用微信自定义tabbar  
1. 建立文件夹custom-tab-bar 小程序自定义tabbar制定目录  
2. pages.json增加page custom-tab-bar/index 用于执行把vue文件编译小程序文件
3. vue.config.js 增加webpack插件MiniProgramWebpackPlugin (编译生成后的app.json的page会有custom-tab-bar/index页面 需要去要)