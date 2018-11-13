### jq绑定事件的方式
1. `$('button').click(function () {})`
2. `$('button').on('click', function () { })`
3. `$('button').bind('click', function () { })`
4. `$('button').live('click', function () { })`
5. `$('button').one('click', function () { })`
### 注意事项
+ 只有事件直接绑定在元素上 需要加on 例如 onclick onchange js加载不需要添加 
`<button onclick="alert(1)">click</button>`
+ $('button').trigger("click") jq 自动触发被选元素的指定事件类型。适用于数据改变，但是没有触发事件的场景。
例如
