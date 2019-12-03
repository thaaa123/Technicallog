### flatten state处理数组
#### 通过处理object对象方式操作数据
+ 数据转换api
```
<!-- 数组变成object对象 -->
export const flattenArr = (arr) => {
    return arr.reduce((map, item) => {
        map[item.id] = item
        return map
    }, {})
}
<!-- object对象变成数组 -->
export const objToArr = (obj) => {
    return Object.keys(obj).map((key) => obj[key])
}
```
+ 操作object对象
```
let files = {
  '1': { id: 1, ...file }
  '2': { id: 2, ...file2 }
}
<!-- 查找一个数据 -->
let file = files[id]

<!-- 修改一个数据 -->
let modifiedFile = { ...file[id], title, isNewFile: false }

<!-- 删除一个数据 -->
delete files[id]

<!-- 返回修改过的新的数组 -->
let modifiedFiles = { ...file, [id]: newFile }

<!-- 删除某个数据返回新的数组 -->
let {[id]: value, ...afterDelete} = files
```

