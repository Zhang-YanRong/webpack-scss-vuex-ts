import { RootStateTypes } from "./type";

const mutations = {
  changeTheme(state: RootStateTypes, val: string) {
    state.theme = val;
  }
};

export default mutations;
