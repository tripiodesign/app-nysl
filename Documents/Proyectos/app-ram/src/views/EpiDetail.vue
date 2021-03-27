<template>
    <div id="epDetail" class="">
        <div v-if="$store.state.carga == true" class="pisition-fixed" transition="fade">
            <Carga />
        </div>
        <div v-else>
        <br><br>
            <b-card v-if="this.$route.params.apis" bg-variant="secondary" class="mx-auto p-0" style="max-width: 500px">
                <b-card-body class="p-0 m-0">
                    <h3 class="rounded-pill bg-warning py-3 px-3 mt-3 text-center">{{this.capitulo.name}}</h3>
                        <br>
                    <b-jumbotron bg-variant="dark" text-variant="warning" class="text-right m-0 rounded-0 d-flex justify-content-between align-items-center">
                        <div class="w-50">
                            <h4 class=" text-center text-info">Detalles del capitulo</h4>
                        </div>
                        <div class="">
                            <p class=""><strong class="text-success">Creado el</strong> {{this.capitulo.created}}</p>
                            <p class=""><strong class="text-success">Estrenado el</strong> {{this.capitulo.air_date}}</p>
                        </div>
                    </b-jumbotron>

                    <div class="d-flex justify-content-center fixed-bottom mb-4">
                        <b-button 
                            variant="info" 
                            class="rounded-circle d-flex justify-content-center align-items-center" 
                            style="width: 65px; height: 65px;"
                            :to="{name: 'Personajes'}">
                            <b-icon icon="arrow90deg-left" style="margin-left: -5px; margin-top: 5px;"></b-icon>
                        </b-button>
                    </div>
                </b-card-body>
            </b-card>
            <div v-else class="d-flex justify-content-center align-items-center" style="background-color: #ececec; height:1000px; max-height: 100vh;">
                <div>
                    <b-alert show variant="danger" type="light" class="m-0 rounded-0">
                        <h1 class="text-center">¡Ooops!</h1>
                        <h4 class="text-center">Algo ha ocurrido mal...</h4>
                    </b-alert>
                    <b-jumbotron>
                        <div class="d-flex justify-content-between rounded-0">
                            <p>No hay episodio para mostrar, por favor regresa y selecciona un capitulo</p>
                            <b-button 
                                variant="info" 
                                class="rounded-circle d-flex justify-content-center align-items-center" 
                                style="min-width: 65px; min-height: 65px;"
                                :to="{name: 'Personajes'}">
                                <b-icon icon="arrow90deg-left" style="margin-left: -5px; margin-top: 5px;"></b-icon>
                            </b-button>
                        </div>
                    </b-jumbotron>
                </div>
            </div>   
        </div>
    </div>
</template>

<script>
import Carga from "@/components/Carga";
export default {
    name: "EpiDetail",
    components: {
        Carga,
    },
    data() {
        return {
            api: '',
            capitulo: [],
            creado: []
        }
    },
    methods: {
        getEpi(){
            if(this.$route.params.apis){
                this.$store.state.carga = true;
                setTimeout(()=>{
                    return fetch(this.$route.params.apis)
                        .then(resp=>{
                            // console.log(resp)
                            return resp.json();
                        })
                        .then((data)=>{
                            // console.log(data);
                            this.capitulo = data;
                            // console.log(this.capitulo);
                            // this.capitulo.created = this.capitulo.created.split('');
                            this.creado.push({fecha: ''});
                            console.log(this.creado);
                            // this.creado[0]
                            console.log(this.creado[0].fecha);
                            for (let i = 0; i < this.capitulo.created.length; i++) {
                                // console.log(this.capitulo.created.length)
                                if(this.capitulo.created[i] < 10){
                                    // console.log(this.capitulo.created[i]);
                                    // this.capitulo.created[i].join('')
                                }
                            }
                            console.log(this.creado.fecha);
                            // console.log(this.capitulo.created);
                            this.$store.state.carga = false;
                        })
                        .catch(error => {
                            console.log(error);
                        });
                }, 800);
            }
        }
    },
    mounted() {
        this.getEpi();
        // console.log(this.$route.params.apis);  
    },
}
</script>

<style scoped lang="sass">
.fade-enter-active, .fade-leave-active 
  transition: opacity .8s

.fade-enter, .fade-leave-to 
  opacity: 0

</style>