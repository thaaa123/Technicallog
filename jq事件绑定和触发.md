### jq绑定事件的方式
1. `$('input').click(function () {})`
2. `$('input').on('click', function () { })`
3. `$('input').bind('click', function () { })`
4. `$('input').live('click', function () { })`
5. `$('input').one('click', function () { })`
### 注意事项
+ 只有事件直接绑定在元素上 需要加on 例如 onclick onchange js加载不需要添加
`<button onclick="alert(1)">click</button>`
+ $('input').trigger("click") jq 自动触发被选元素的指定事件类型。
