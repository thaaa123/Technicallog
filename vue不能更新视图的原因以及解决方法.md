
### 不能更新视图的原因
+ 数据没有属性  
```
var vm = new Vue({
  data: {
    items: ['a', 'b', 'c']
  }
})
// el 未定义
vm.items.el = 'lit'
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
### 解决方法
+ 使用 vue提过的api set  
```
var vm = new Vue({
  data: {
    items: ['a', 'b', 'c']
  }
})
Vue.set(vm.items.el, 'el', 'value')
```
注意事项：如果vm.items.el 已经被赋值 会造成Vue.set()不能监控该属性  
```
var vm = new Vue({
  data: {
    items: ['a', 'b', 'c']
  }
})
vm.items.el = 'lit'
Vue.set(vm.items.el, 'el', 'value') // 会改变数据 但不会响应式
```
+ 使用Object.assign()  
```
var vm = new Vue({
  data: {
    items: ['a', 'b', 'c']
  }
})
vm.items.el = 'lit'
vm.items = Object.assign({}, vm.items)
```
