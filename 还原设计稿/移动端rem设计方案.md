### 移动端rem设计方案-手淘方案
.1 meta标签设置  
```
  <meta content="yes" name="apple-mobile-web-app-capable">
  <meta content="yes" name="apple-touch-fullscreen">
  <meta content="telephone=no,email=no" name="format-detection">
```
.2 下载 flexible.js (vue-cil import 'flexible.js' 下载好的js)
```
<script src="http://g.tbcdn.cn/mtb/lib-flexible/0.3.4/??flexible_css.js,flexible.js"></script>
```
.3 vue-cli3 install pxtorem px自动转rem
```
npm i postcss-pxtorem -save
```
```
// 配置 postcss-pxtorem package.json  
  "postcss": {
    "plugins": {
      "autoprefixer": {},
      "postcss-pxtorem": {
        "rootValue": 75,  // 设计稿尺寸
        "propList": ["*", "!font*"] // font-size 不被转换rem
      }
    }
  }
```
4. 字号不使用rem   
+ scss 解决方案
```
// 根据 dpr改变
@mixin font-dpr($font-size) {
  font-size: $font-size;
  [data-dpr="2"] & {
    font-size: $font-size * 2;
  }
  [data-dpr="3"] & {
    font-size: $font-size * 3;
  }
}

@mixin samll {
  @include font-dpr(16px)
}
```