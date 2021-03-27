<template>
    <div id="carga">
        <div style="height: 100vh; width: 100vw; z-index: 12000" class="bg-dark d-flex justify-content-center align-items-center position-fixed text-center">
                <b-iconstack font-scale="7" animation="spin" class="">
                    <b-icon stacked icon="dot" variant="success" animation="throb" shift-h="10"></b-icon>
                    <b-icon stacked icon="dot" variant="warning" animation="throb" shift-h="-10"></b-icon>
                    <b-icon stacked icon="dot" variant="danger" animation="throb" shift-v="10"></b-icon>
                    <b-icon stacked icon="dot" variant="primary" animation="throb" shift-v="-10"></b-icon>
                </b-iconstack>
            <!-- <h5 class="ml-2 mt-2 text-light" name="slide-fade">Cargando...</h5> -->
            <div class="position-fixed">
                <vue-typed-js 
                    class="" 
                    :strings="['Cargando...', 
                                'Espere...', 
                                'Ya casi...', 
                                'Gracias por <br> tu visita.'
                              ]" 
                    :typeSpeed="300" 
                    :backDelay="1000"
                    :backSpeed="80" 
                    :loop="true"
                    :cursorChar="'_'"
                >
                    <h5 class="text-warning"><span class="typing" style="color: #abc; font-weight: lighter; font-style: italic;"></span></h5>
                </vue-typed-js>
            </div>
            <!-- <vue-typed-js :strings="['awesome', 'brilliant']" :loop="true" @onComplete="doSmth()">
                <h2>We are a <span class="typing"></span> company!</h2>
            </vue-typed-js> -->
        </div>
        <p class="fixed-bottom text-center mb-5" style="color: #acd;">Proyecto Rick & Morty</p>
    </div>
</template>

<script>
export default {
    name: 'Carga',
    data() {
        return {
            datos: []
        }
    },
    methods: {

    },
    mounted() {

    },
}
</script>

<style lang="sass" scoped>

</style>