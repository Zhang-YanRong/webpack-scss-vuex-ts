import { RootStateTypes } from "./type";

const mutations = {
  ["changeTheme"](state: RootStateTypes, val: string) {
    console.log(val, "changeTheme");
    state.theme = "theme-" + val;
  }
};

export default mutations;
