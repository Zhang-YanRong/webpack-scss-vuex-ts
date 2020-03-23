<template>
  <v-chart ref="chart1" :options="orgOptions" :auto-resize="true"></v-chart>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "@/utils/vue-echarts";
// 饼图按需引入
import "echarts/lib/chart/pie";

@Component
export default class HelloWorld extends Vue {
  private orgOptions: object = {};

  mounted() {
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
.echarts {
  width: 100%;
  height: 100%;
}
</style>
