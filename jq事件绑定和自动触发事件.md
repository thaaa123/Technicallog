### jq绑定事件的方式
1. `$('button').click(function () {})`
2. `$('button').on('click', function () { })`
3. `$('button').bind('click', function () { })`
4. `$('button').live('click', function () { })`
5. `$('button').one('click', function () { })`
### js字段触发事件
`<button onclick="alert(1)">click</button>`
+ $('button').trigger("click") jq 自动触发被选元素的指定事件类型。适用于数据改变，但是没有触发事件的场景。  
例如  
input添加了change事件,js给input重新赋值，需要重新触发change事件  
```
<body>
    <div>
        <input id="age" type="text">
        <button id="button">click</button>
    </div>
    <script>
        $(function () {
            // 注册change事件
            $('#age').change(function () {
                console.log('age changed')
            })
            $('#button').click(function () {
                // 修改value值并且重新触发change事件
                $("#age").attr("value", 2123).trigger('change');
            })
        })
    </script>
</body>
```
### 注意事项
+ 只有事件直接绑定在元素上 需要加on 例如 onclick onchange js加载不需要添加 
