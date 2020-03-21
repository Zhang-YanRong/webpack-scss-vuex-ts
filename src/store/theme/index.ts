import { mutations } from "./mutations";
import { getters } from "./getter";
import { state } from "./state";

const theme = {
  namespaced: true,
  mutations,
  getters,
  state
};

export default theme;
