<template>
  <div class="home">
    <Theme />
    <div class="scss-mixins position"></div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from "vue-property-decorator";
import Theme from "@/components/Theme.vue";

@Component({
  components: {
    Theme
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
</style>
