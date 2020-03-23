<template>
  <div class="home">
    <Theme />
    <div class="scss-mixins position"></div>
    <Echarts class="echart-pie position" />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from "vue-property-decorator";
import Theme from "@/components/Theme.vue";
import Echarts from "@/components/Echarts.vue";

@Component({
  components: {
    Theme,
    Echarts
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.scss-mixins {
  width: 100px;
  height: 100px;
  background: #efefef;
}
.echart-pie {
  width: 400px;
  height: 400px;
}
</style>
