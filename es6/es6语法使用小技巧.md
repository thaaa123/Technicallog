### es6 数组操作
+ 删除数组
```
let arr = [{id: 1}, {id: 2}]
//  删除id===2的对象id需要唯一性
arr.splice(arr.findIndex(layout => item.id === 2), 1)
```
