import { createStore } from "vuex";

export default createStore({
  state: {
    userIn: null,
    window: {
      width: 0,
      height: 0
    }
  },
  getters: {
    loguedUser(state) {
      return state.userIn != null ? true : false;
    },
    mailUserIn(state) {
      return state.userIn != null ? state.userIn.user.email : "";
    },
    uidUserIn(state) {
      return state.userIn != null ? state.userIn.user.uid : "";
    }
  },
  actions: {
    setUserAct(context, user) {
      context.commit("setUser", user);
    }
  },
  mutations: {
    setUser(state, user) {
      state.userIn = user;
    }
  },
  modules: {}
});
