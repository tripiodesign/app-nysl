<template>
  <div id="main" style="height: 100vh">
    <MenuBar class="fixed-top" />
    <Login />
    <br />
    <!-- <LoadScreen /> -->
    <router-view v-slot="{ Component }" class="my-3">
      <transition name="slide-fade">
        <component :is="Component" />
      </transition>
    </router-view>
    <br />
    <Footer class="fixed-bottom" />
    <!-- <PageFooter class="bg-dark text-light" /> -->
  </div>
</template>

<script>
import MenuBar from "../src/components/MenuBar";
import Login from "../src/components/Login";
import Footer from "../src/components/Footer";
// import LoadScreen from '../src/components/LoadScreen'
// import PageFooter from '@/components/PageFooter'

export default {
  name: "App",
  components: {
    MenuBar,
    Login,
    // LoadScreen,
    Footer
    // PageFooter,
  }
  // created () {
  //   this.loadSpin();
  // },
  // methods: {
  //   loadSpin(){
  //     window.onload = function(){
  //       var contenedor = document.getElementById('loadScreen');
  //       contenedor.style.visibility = 'hidden';
  //       contenedor.style.opacity = '0';
  //     }
  //   }
  // },
};
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.4s ease-in-out;
  min-height: 100vh;
}
.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 1, 1, 1);
  min-height: 100vh;
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-100%);
  opacity: 0;
}
.slide-fade-enter-to .slide-fade-leave {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
