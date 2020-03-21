<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue";
// export default {
//   name: "Home",
//   components: {
//     HelloWorld
//   }
// };
@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>
