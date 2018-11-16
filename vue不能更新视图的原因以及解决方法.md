
### 不能更新视图的原因
+ 数据没有属性  
```
var vm = new Vue({
  data: {
    items: ['a', 'b', 'c']
  }
})
// el 未定义
this.reportConfig.el = 'lit'
```
+ 直接替换数组item  
```
var vm = new Vue({
  data: {
    items: ['a', 'b', 'c']
  }
})
vm.items[1] = 'x' // 不是响应性的
```
+ 修改数据lenght  
```
var vm = new Vue({
  data: {
    items: ['a', 'b', 'c']
  }
})
vm.items.length = 2 // 不是响应性的
```
