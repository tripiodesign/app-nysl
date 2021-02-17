<template>
  <div id="menuBar">
    <nav id="menu" class="navbar navbar-expand-md bg-dark py-0">
      <!-- logo -->
      <div class="col-sm-9 m-0 p-0" id="contBrand">
        <img src="../assets/img/icono.png" id="logo" alt="" />
      </div>

      <!-- botones login y collapse -->
      <div class="col d-flex justify-content-end align-items-center m-0 p-0">
        <!-- Button trigger modal -->
        <button
          type="button"
          class="btn btn-warning p-3"
          data-mdb-toggle="modal"
          data-mdb-target="#loginModal"
        >
          Iniciar sesión
        </button>

        <button
          type="button"
          class="btn btn-outline-warning navbar-toggler"
          data-mdb-toggle="collapse"
          data-mdb-target="#elMenu"
          aria-expanded="false"
        >
          <i class="fas fa-bars" style="transform: scale(3)"></i>
        </button>
      </div>

      <!-- links menu -->

      <div class="col-12 col-md collapse navbar-collapse me-0 pe-0" id="elMenu">
        <ul
          id="menuTab"
          role="tablist"
          class="nav nav-tabs text-center row d-flex justify-content-center border-0"
        >
          <li class="nav-item col p-0 m-0" role="navigation">
            <router-link
              class="nav-link border-warning text-warning"
              aria-current="page"
              :to="{ name: 'Home' }"
              exact-active-class="active"
              >Inicio</router-link
            >
          </li>
          <!-- <li class="nav-item" role="navigation">
              <router-link class="nav-link disabled" aria-current="page" to="/nosotros" exact-active-class="active">Nosotros</router-link>
            </li> -->
          <li class="nav-item col p-0 m-0" role="navigation">
            <router-link
              class="nav-link border-warning text-warning"
              aria-current="page"
              to="/juegos"
              exact-active-class="active"
              >Juegos</router-link
            >
          </li>
          <li class="nav-item col p-0 m-0" role="navigation">
            <router-link
              class="nav-link disabled"
              aria-current="page"
              to="/contacto"
              exact-active-class="active"
              >Contacto</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "MenuBar",
  props: {}
};
</script>

<style scoped lang="sass"></style>
