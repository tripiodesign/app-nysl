import { shallowMount } from "@vue/test-utils";

// Mis componentes //
import Carrusel from "@/components/Carrusel.vue";
import Chat from "@/components/Chat.vue";
// import ContainDetail from "@/components/ContainDetail.vue";
import ContainHome from "@/components/ContainHome.vue";
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import ListaPartidos from "@/components/ListaPartidos.vue";
import Login from "@/components/Login.vue";
import MenuBar from "@/components/MenuBar.vue";

// importar vuex para store simulado //
import { createStore } from "vuex";

// Simulacion de Store //
const tienda = createStore({
  state: {
    userIn: null
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

// Pruebas de renderizado de componentes //
describe("Carrusel.vue", () => {
  it("Render Carrusel", () => {
    const wrapper = shallowMount(Carrusel);
    // console.log(wrapper.html());
    expect(wrapper.html());
  });
});

describe("Chat.vue", () => {
  it("Render Chat", () => {
    const wrapper = shallowMount(Chat, {
      global: { plugins: [tienda] },
      props: { titulo: "Hola mundo" }
    });
    // console.log(wrapper.html());
    expect(wrapper.html());
  });
});

// describe("ContainDetail.vue", ()=>{
//   it("Render ContainDetail", ()=>{

//   })
// })

describe("ContainHome.vue", () => {
  it("Render ContainHome", () => {
    const wrapper = shallowMount(ContainHome);
    // console.log(wrapper.html());
    expect(wrapper.html());
  });
});

describe("Footer.vue", () => {
  it("Render Footer", () => {
    const wrapper = shallowMount(Footer);
    // console.log(wrapper.html());
    expect(wrapper.html());
  });
});

describe("Header.vue", () => {
  it("Render Header", () => {
    const wrapper = shallowMount(Header, {
      props: { titulo: "Hola mundo" }
    });
    // console.log(wrapper.html());
    expect(wrapper.html());
  });
});

describe("ListaPartidos.vue", () => {
  it("Render ListaPartidos", () => {
    const wrapper = shallowMount(ListaPartidos);
    // console.log(wrapper.html());
    expect(wrapper.html());
  });

  it("Check de Lista de partidos en componente", () => {
    const wrapper = shallowMount(ListaPartidos);

    const div = wrapper.find("div");
    expect(div.exists()).toBe(true);

    const byId = wrapper.find("#playList");
    expect(byId.element.id).toBe("playList");
  });
});

describe("Login.vue", () => {
  it("Render Login", () => {
    const wrapper = shallowMount(Login, {
      global: {
        plugins: [tienda]
      }
    });
    // console.log(wrapper.html());
    expect(wrapper.html());
  });
});

// Chequeo de Modal Login existente //
describe("Login.vue", () => {
  it("Check autor del login", () => {
    const wrapper = shallowMount(Login, {
      global: { plugins: [tienda] }
    });
    const div = wrapper.find("div");
    expect(div.exists()).toBe(true);

    const byId = wrapper.find("#loginModal");
    expect(byId.element.id).toBe("loginModal");
  });
});

describe("MenuBar.vue", () => {
  it("Render MenuBar", () => {
    const wrapper = shallowMount(MenuBar, {
      global: {
        plugins: [tienda]
      }
    });
    // console.log(wrapper.html());
    expect(wrapper.html());
  });

  // Chequeo de boton login en MenuBar //
  it("Check boton login", () => {
    const wrapper = shallowMount(MenuBar, {
      global: {
        plugins: [tienda]
      }
    });

    const div = wrapper.find("div");
    expect(div.exists()).toBe(true);

    const byId = wrapper.find("#btnIn");
    expect(byId.element.id).toBe("btnIn");
  });
});
