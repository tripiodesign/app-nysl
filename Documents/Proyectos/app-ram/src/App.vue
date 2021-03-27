<template>
  <div id="app">
    <div >
      <div v-if="$store.state.carga == false">
        <Menu class="fixed-top"/>
      </div>
      <vue-page-transition name="fade">
        <router-view style="min-height: 98.5vh; max-height: 100%;" />
      </vue-page-transition>
    </div>
  </div>
</template>

<script>
import Menu from "@/components/Menu"
export default {
  name: 'App',
  components: {
    Menu,
  }
}
</script>

<style lang="scss">

</style>
