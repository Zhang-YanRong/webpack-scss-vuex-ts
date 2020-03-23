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

## vue-echarts
---
### 安装
``` javascript
  yarn echarts vue-echarts
```

### 整体引入
``` javascript 
  import Vue from 'vue'
  import ECharts from 'vue-echarts' // 在 webpack 环境下指向 components/ECharts.vue

  // 手动引入 ECharts 各模块来减小打包体积
  import 'echarts/lib/chart/bar'
  import 'echarts/lib/component/tooltip'

  // 如果需要配合 ECharts 扩展使用，只需要直接引入扩展包即可
  // 以 ECharts-GL 为例：
  // 需要安装依赖：npm install --save echarts-gl，并添加如下引用
  import 'echarts-gl'

  // 注册组件后即可使用
  Vue.component('v-chart', ECharts)
```

### vue.config.js
``` javascript 
  module.exports = {
    transpileDependencies: [
      'vue-echarts',
      'resize-detector'
    ]
  }
```

### 调用组件
``` javascript
  <template>
    <v-chart :options="polar"/>
  </template>

  <script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    // 引入组件
    import "@/utils/vue-echarts";
    // 饼图按需引入
    import "echarts/lib/chart/pie";

    @Component
    export default class HelloWorld extends Vue {
      private orgOptions: object = {};

      mounted() {
        // orgOptions 就是echarts的options
        this.orgOptions = {
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          legend: {
            orient: "vertical",
            left: 10,
            data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
          },
          series: [
            {
              name: "访问来源",
              type: "pie",
              radius: ["50%", "70%"],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: "center"
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: "30",
                  fontWeight: "bold"
                }
              },
              labelLine: {
                show: false
              },
              data: [
                { value: 335, name: "直接访问" },
                { value: 310, name: "邮件营销" },
                { value: 234, name: "联盟广告" },
                { value: 135, name: "视频广告" },
                { value: 1548, name: "搜索引擎" }
              ]
            }
          ]
        };
      }
    }
  </script>
  <style scoped lang="scss">
    /**
     * 默认尺寸为 600px×400px，如果想让图表响应尺寸变化，可以像下面这样
     * 把尺寸设为百分比值（同时请记得为容器设置尺寸）。
     */
    .echarts {
      width: 100%;
      height: 100%;
    }
  </style>


```
