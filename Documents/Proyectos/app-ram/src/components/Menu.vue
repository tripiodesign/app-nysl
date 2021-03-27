<template>
    <div id="menu">
        <b-navbar toggleable="lg" type="dark" variant="dark" class="border-bottom border-secondary d-lg-flex justify-content-between align-items-center">
            <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

            <b-navbar-brand>Rick & Morty</b-navbar-brand>

            <b-collapse id="nav-text-collapse" is-nav class="justify-content-between">
                <b-navbar-nav class="">
                    <b-nav-text class="text-secondary">API de Rick & Morty | <small><i> by</i> <i class="text-success">Tripio</i><i class="text-warning">Design</i></small></b-nav-text>
                </b-navbar-nav>
                <b-navbar-nav>
                    <b-nav-item :to="{name: 'Home'}" exactActiveClass="active text-success" >Inicio</b-nav-item>
                    <b-nav-item :to="{name: 'Personajes'}" exactActiveClass="active text-success">Personajes</b-nav-item>
                    <b-nav-item :to="{name: 'Ubicaciones'}" exactActiveClass="active text-success">Ubicaciones</b-nav-item>
                    <b-nav-item :to="{name: 'Episodios'}" exactActiveClass="active text-success">Episodios</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: 'Menu'
}
</script>

<style>

</style>