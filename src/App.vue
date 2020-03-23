<template>
  <div id="app" :class="theme">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {
  mounted() {
    process.env.VUE_APP_ENV === "dev"
      ? console.log("dev1")
      : console.log("test");
  }

  get theme(): string {
    return this.$store.getters["theme/theme"];
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
}
</style>
