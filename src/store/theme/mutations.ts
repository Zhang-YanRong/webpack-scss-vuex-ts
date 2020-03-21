import { RootStateTypes } from "./type";

export const mutations = {
  changeTheme(state: RootStateTypes, val: string) {
    state.theme = val;
  }
};
