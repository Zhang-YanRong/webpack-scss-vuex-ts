<template>
  <div class="hello">
    <el-select v-model="theme" @change="changeTheme" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  private theme?: string = "";
  private options?: object[] = [
    {
      label: "黑色",
      value: "black"
    },
    {
      label: "橘色",
      value: "orange"
    }
  ];

  public changeTheme() {
    this.$store.commit("theme/changeTheme", this.theme);
  }
}
</script>
