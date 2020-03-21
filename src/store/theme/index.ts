import mutations from "./mutations";
import getters from "./getter";
import state from "./state";

console.log(state, 111);
const theme = {
  namespaced: true,
  mutations,
  getters,
  state
};

export default theme;
