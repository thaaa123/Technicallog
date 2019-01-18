### vue-lazyload图片懒加载注意点
1. lazyload的loading img路径   
不能是远程路径图片   
图片路径必须加require() 不然图片会找不到不显示   
```
loading: require('../assets/imgs/plp-placeholder.png')
```
2.切换src 需要变更:key="" 单纯改变src图片不会被重新加载   
3.lazyload img 增加淡入效果  
```
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  img[lazy=loaded] {
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-name: fadeIn;
  }
```