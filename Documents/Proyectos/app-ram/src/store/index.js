import Vue from "vue";
import Vuex from "vuex";
// import Data from "../servicios/ramapi"
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    carga: false,
    api: '',
    personajes: [],
    episodios:[],
    ubicaciones: [],
    window: {
      width: 0,
      height: 0,
  },
  },
  getters:{
    // getPjs(state){
    //   let data = new Data();
    //   data()
    // }
  },
  actions: {
    // setPjsAct(context, psersonaje){
    //   return setPjsAct(personajes)
    //         .then(data=>{
    //           context('setPjs', {personajes, data});
    //         })
    // }
  },
  mutations: {
    // setPjs(state, {personajes, data}){
    //   Vue.set(state.api, personajes, data)
    // }
  },
  modules: {},
});
