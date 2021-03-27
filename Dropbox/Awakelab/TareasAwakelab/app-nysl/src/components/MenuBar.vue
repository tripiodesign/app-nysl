<template>
  <div id="menuBar">
    <nav id="menu" class="navbar-expand-lg row bg-dark py-0">
      <!-- logo -->
      <div
        class="col-3 d-flex justify-content-start items-align-center"
        id="contBrand"
      >
        <img
          src="../assets/img/icono.png"
          id="logo"
          alt=""
          class="navbar-brand m-0"
        />
      </div>

      <!-- botones login y collapse -->
      <div
        class="col col-lg-6 d-flex justify-content-end align-items-center m-0 p-0"
      >
        <!-- Button trigger modal -->
        <div v-if="$store.getters.loguedUser">
          <button
            type="button"
            class="btn btn-warning d-block"
            @click.prevent="goLogOut"
          >
            Cerrar sesión
          </button>
        </div>
        <!-- si no esta logueado -->
        <div v-else>
          <button
            type="button"
            id="btnIn"
            class="btn btn-warning d-block"
            data-bs-toggle="modal"
            data-bs-target="#loginModal"
          >
            Iniciar sesión
          </button>
        </div>
        <!-- boton collapse menu -->
        <a
          class="navbar-toggler text-warning me-2"
          data-bs-toggle="collapse"
          data-bs-target="#elMenu"
          aria-controls="elMenu"
          aria-expanded="false"
        >
          <i class="fas fa-bars" style="font-size: 2rem;"></i>
        </a>
      </div>

      <!-- links menu -->

      <div class="col-12 col-lg collapse navbar-collapse" id="elMenu">
        <ul
          id="menuTab"
          role="tablist"
          class="nav nav-tabs text-center d-flex justify-content-center"
        >
          <li class="nav-item col" role="navigation">
            <router-link
              class="nav-link border-warning border-0 border-bottom text-warning"
              aria-current="page"
              :to="{ name: 'Home' }"
              exact-active-class="active"
              >Inicio</router-link
            >
          </li>
          <!-- <li class="nav-item" role="navigation">
                <router-link class="nav-link disabled" aria-current="page" to="/nosotros" exact-active-class="active">Nosotros</router-link>
              </li> -->
          <li class="nav-item col" role="navigation">
            <router-link
              class="nav-link border-warning border-0 border-bottom text-warning"
              aria-current="page"
              to="/juegos"
              exact-active-class="active"
              >Juegos</router-link
            >
          </li>
          <li class="nav-item col" role="navigation">
            <router-link
              class="nav-link border-warning border-0 border-bottom text-warning"
              aria-current="page"
              to="/foro"
              exact-active-class="active"
              >Foro</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import firebase from "firebase";
import "../firebase/init";
export default {
  name: "MenuBar",
  props: {},
  methods: {
    goLogOut() {
      // this.router.push('/')
      console.log("logOut");
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$store.dispatch("setUserAct", null);
          this.$router.push({ name: "Home" });
        });
    }
  }
};
</script>

<style scoped lang="sass"></style>
