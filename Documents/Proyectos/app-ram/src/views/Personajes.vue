<template>
    <div id="personajes" style="background-color: #e9ecef" class="w-100" :class="{'position-fixed' : this.$store.state.window.width > 767}">
        <div v-if="$store.state.carga == true" style="transition: all 1000ms linear" transition="fade">
            <Carga />
        </div>
        <div v-else class="d-md-flex justify-content-between">
            <div class="d-none d-md-block m-0 border-right w-100" style="min-width: 200px;max-width: 25%;" role="tablist">
                <br><br>
                <div class="accordion">
                    <b-card class="bg-transparent border-0">
                        <b-button v-b-toggle.seccion1 block square variant="outline-dark" class="rounded-top mb-2">Personajes</b-button>
                        <b-collapse id="seccion1" class="overflow-auto" style="max-height: 50vh; max-width: 100%">
                            <b-navbar class="flex-column p-1">
                                <b-nav v-for="(idpj, i) in personajes" :key="idpj.id" class="w-100 py-0 my-1 bg-warning text-dark border border-light">
                                    <b-link 
                                    v-if="idpj.id == (i+1)" 
                                    :href="'#personaje'+i" 
                                    style="color: white; font-size:.8em; margin-left: -40px" 
                                    class=" py-2 pl-5 pr-4 bg-success rounded-pill">
                                        {{idpj.name}}
                                    </b-link>
                                </b-nav>
                            </b-navbar>
                        </b-collapse>
                    </b-card>
                </div>
            </div>
            
            <div id="containerPj" 
                class="w-100" 
                :class="{'overflow-auto' : this.$store.state.window.width > 767, 'largo-max' : this.$store.state.window.width > 767, '' : this.$store.state.window.width < 768}"
                :style="{height: this.$store.state.window.width > 767 ? '99.5vh' : '100%'}">
                <b-card 
                v-for="(personaje, index) in personajes" 
                :key="personaje.id" 
                :id="'personaje'+ index" 
                bg-variant="transparent" 
                style="max-width: 650px;"
                class="my-3 p-0 mx-0 mx-auto rounded-0 border-top-0 border-left-0 border-right-0 border-bottom">
                    <br><br>
                    <img :src="personaje.image" style="width: 256px; max-width: 90%;" class="d-block mx-auto rounded border-dotted rounded-">
                    <br>
                    <b-badge variant="dark" class="text-right text-warning d-block p-3" style="font-size: 1.3em">{{personaje.name}}</b-badge>
                    <br>
                    <div class="d-flex justify-content-around">
                        <p class="p-2 text-dark bg-warning rounded-pill" style="font-size: .6em"><strong>Tipo:</strong> {{personaje.species}}</p>
                        <p class="p-2 text-dark bg-warning rounded-pill" style="font-size: .6em"><strong>Sexo:</strong> {{personaje.gender}}</p>
                        <p class="p-2 text-dark bg-warning rounded-pill" style="font-size: .6em"><strong>Estado:</strong> {{personaje.status}}</p>
                    </div>
                    <b-container class="mb-4">
                        <b-link class="text-dark d-block my-3" style="font-size: 1rem;"><strong class="text-success">Origen:</strong> {{personaje.origin.name}} <i class="fas fa-map-marker-alt"></i></b-link>
                        <b-link class="text-dark d-block my-3" style="font-size: 1rem;"><strong class="text-success">Ubicación:</strong> {{personaje.location.name}} <i class="fas fa-map-marker-alt"></i></b-link>
                    </b-container>
                    <b-card no-body class="border-0 border-botom mx-auto d-block" style="max-width: 90%">
                        <b-card-header class="p-0 border-0">
                            <b-button block 
                                v-b-toggle="'box' + index" 
                                variant="outline-danger" 
                                style="border-bottom-left-radius: 0; border-bottom-right-radius: 0;" 
                                class="text-left d-flex justify-content-between align-items-center m-0"
                                >Episodios <b-icon icon="collection-play"></b-icon>
                            </b-button>
                        </b-card-header>
                        <b-collapse :id="'box' + index" class="border-0">
                            <b-card-body class="overflow-auto border-bottom border-dark rounded-bottom" style="max-height: 800px;">
                                <b-list-group v-for="(episodio, i) in episodios[index].capitulos[0]" :key="i" class="my-2">
                                    <!-- <li><a class="text-success" :href="personaje.episode[i]">Capitulo {{i+1}}</a></li> -->
                                    <b-list-group-item class="border-top-0 border-right-0 border-left-0 rounded-0 p-0 pl-1" id="">
                                        <b-badge 
                                            variant="dark" 
                                            class="d-block text-warning ml-auto my-0 p-2" 
                                            style="width: 50%; max-width: 100px; font-size: 1em; font-weight: lighter;"
                                            >Cap {{i +1}}</b-badge>
                                        <b-alert show class="rounded-0 my-1" variant="success">
                                            <p>Revisa el capitulo</p>
                                            <b-button 
                                                :to="{
                                                    name: 'Episodio',
                                                    pagina: 1, 
                                                    params: {
                                                        apis: episodio,
                                                    },
                                                }"
                                                variant="outline-dark"
                                                pill
                                                style=""
                                                class="d-flex justify-content-between align-items-center"
                                                >Más <b-icon icon="play-circle"></b-icon>
                                            </b-button>
                                        </b-alert>
                                    </b-list-group-item>
                                </b-list-group> 
                                <b-button v-b-toggle="'box' + index" variant="warning" class="fixed-bottom ml-auto mr-4 mb-4 mx-md-auto rounded-circle" style="width: 50px; height: 50px">
                                    <b-icon icon="arrows-angle-contract"></b-icon>
                                </b-button>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                </b-card>
            </div>

            <div class="mt-4 mx-auto" style="min-width: 250px; width: 500px; max-width: 25%; min-height: 280px">
                <vue-typed-js 
                    class="" 
                    :strings="['Revisa también...', 
                                'Los episodios de la serie...', 
                                'Las ubicaciones de cada personaje...', 
                                'Detalles y más información del sitio...'
                                ]" 
                    :typeSpeed="80" 
                    :backSpeed="100" 
                    :backDelay="2500"
                    :loop="true"
                    :cursorChar="'|'"
                >
                    <h2 class="text-warning ml-4 mr-1 mt-5"><span class="typing text-secondary" style="font-weight: lighter; font-style: italic;"></span></h2>
                </vue-typed-js>
                <div class="flex-column justify-content-center px-2">
                    <b-link class="text-center text-light bg-secondary my-2 p-2 d-block rounded-pill"  :to="{name: 'Home'}"><i>Inicio</i></b-link>
                    <b-link class="text-center text-light bg-secondary my-2 p-2 d-block rounded-pill"  :to="{name: 'Episodios'}"><i>Episodios</i></b-link>
                    <b-link class="text-center text-light bg-secondary my-2 p-2 d-block rounded-pill"  :to="{name: 'Ubicaciones'}"><i>Ubicaciones</i></b-link>
                </div>
                <br>
            </div>
        </div>
    </div>
</template>

<script>
import Carga from "@/components/Carga"
import Data from "../servicios/ramapi";
export default {
    name: 'Personajes',
    components: {
        Carga,
    },
    data() {
        return {
            urlPersonajes: '',
            urlUbicaciones: '',
            urlEpisodios: '',
            personajes: [],
            ubicaciones: [],
            episodios: [],
            capitulos: [],
            error: '',
        }
    },
    methods: {     
        async getApis(){
            this.$store.state.carga = true;
            setTimeout(()=>{
                let data = new Data();
                data.getData()
                    .then(resp=>resp.json())
                    .then(response=>{
                        // console.log(response);
                        this.urlPersonajes = response.characters;
                        this.urlUbicaciones = response.locations;
                        // this.$store.state.ubicaciones = return response.locations;
                        this.urlEpisodios = response.episodes;
                        // this.$store.state.episodios = return response.episodes;
                        // console.log(this.urlPersonajes);
                        // console.log(this.urlUbicaciones);
                        // console.log(this.urlEpisodios);
                    })
                    .then(()=>{
                        return fetch(this.urlPersonajes)
                        // console.log(pjs);
                    })
                    .then(data=>data.json())
                    .then(info=>{
                        // console.log(info.results)
                        this.personajes = info.results;
                        // this.$store.state.personajes = info.results;
                        // console.log(this.$store.state.personajes);
                    })
                    .then(()=>{
                        // console.log(this.personajes[0].episode)
                        // console.log(this.episodios)
                        for (let i = 0; i < this.personajes.length; i++) {
                            // console.log(this.personajes[i]);
                            // this.episodios.push({id:''});
                            this.episodios.push({id: '', capitulos:[]});
                            this.episodios[i].capitulos.push(this.personajes[i].episode);
                            // console.log(this.episodios[i].capitulos[0]);
                            
                            for (let index = 0; index < this.episodios[i].capitulos[0].length; index++) {  
                                console.log(this.episodios[i].capitulos[0][i])
                            }   
                        }
                        console.log(this.episodios)
                        // console.log(this.personajes[0].episode)
                        this.$store.state.carga = false;
                    })
                    .catch(error=>{
                        console.log(error);
                        return this.error = error;
                    })
            }, 3000)
        },

        resizeWindow(){
            this.$store.state.window.width = window.innerWidth;
            console.log( 'Ancho: ' + this.$store.state.window.width);
            this.$store.state.window.height = window.innerHeight;
            console.log( 'Largo: ' + this.$store.state.window.height);
        }
    },
    mounted() {
        this.getApis();
        window.addEventListener('resize', this.resizeWindow);
        this.resizeWindow();
    },
    destroyed() {
        window.removeEventListener('resize', this.resizeWindow);
    },
}
</script>

<style lang="sass" scoped>
#botonGroup
    max-height: 500px
    overflow: hidden

.largo-max
    max-height: 99.8vh
.mw-50
    max-width: 50%
</style>