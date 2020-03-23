# scss-webpack-element

## 换肤demo
---
* vuex管理总class
* scss生成主题色
* ts书写方式
* vue.config.js 中css配置默认引入scss文件
* vuex使用namespace方式
* 按需引入element



## scss 用法
---
* ### 组合选择器
    在设置嵌套样式时，默认使用后代选择器，当也支持使用组合选择器匹配其他层级的对象：

    - 使用符号 > 创建子类选择器：匹配一个直接子元素
    - 使用符号 + 或 ~ 创建同级选择器：匹配下一个相邻的同级元素或以下所有同级元素

``` javascript
article {
  ~ article { border-top: 1px dashed #ccc }
  > section { background: #eee }
  dl > {
    dt { color: #333 }
    dd { color: #555 }
  }
  nav + & { margin-top: 0 }
}

// 编译后
article ~ article { border-top: 1px dashed #ccc }
article > footer { background: #eee }
article dl > dt { color: #333 }
article dl > dd { color: #555 }
nav + article { margin-top: 0 }

```

* ### 给混合器传递参数
    混合器并不一定总得生成相同的样式。可以在定义 @mixin name($parameter) 添加形参，并在调用时 @include name(argument) 传递实参以实现更精确的样式，这个功能和 JS 的函数类似。

``` javascript
// 定义混合器
@mixin link-colors($normal, $hover, $visited) {
  color: $normal;
  &:hover { color: $hover; }
  &:visited { color: $visited; }
}

// 调用
a {
  @include link-colors(blue, red, green);
}

// 编译后
a { color: blue; }
a:hover { color: red; }
a:visited { color: green; }
```

* ### 继承

``` javascript
.type {
  margin: 10px;
}
.type a {
  font-weight: bold;
}

.type-info {
  @extend .type;
  font-size: 20px;
}
.type,
.type-info {
  margin: 10px;
}

.type a,
.type-info a {
  font-weight: bold;
}

.type-info {
  font-size: 20px;
}
```

* ### 内置模块