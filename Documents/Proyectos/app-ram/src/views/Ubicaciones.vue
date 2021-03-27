<template>
    <div id="ubicaciones" style="background-color: #e9ecef">
        <div v-if="$store.state.carga == true">
            <Carga />
        </div>
        <div v-else>
            <div v-for="ubicacion in ubicaciones" :key="ubicacion.id">
                <br>
                <div>
                    <i class="fas fa-globe-americas" style="font-size: 2rem"></i>
                    <h5><strong>Nombre:</strong> {{ubicacion.name}}</h5>
                    <p><strong>Tipo</strong> {{ubicacion.type}}</p>
                    <p><strong>Dimension:</strong> {{ubicacion.dimension}}</p>
                    <div>
                        <p><strong>Residentes:</strong></p>
                        <ul v-for="(residente, i) in residentes" :key="i">
                            <li>{{}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Data from "../servicios/ramapi";
import Carga from "@/components/Carga";
export default {
    name: 'Ubicaciones',
    components: {
        Carga,
    },
    data() {
        return {
            ubicaciones:[],
            residentes: [],
        }
    },
    methods: {
        async loadLocation(){
            this.$store.state.carga = true;
            setTimeout(()=>{
                let servicio = new Data();
                servicio.getLocat().then((response)=>{
                    return response.json();
                }).then(this.showLocat).then(this.showResidents).catch((error)=>{
                    console.log(error);
                })
            }, 2000);
        },
        showLocat(response){
            // console.log(response);
            this.ubicaciones = response.results;
            this.$store.state.carga = false;
        },
        showResidents(){
            // muestra las ubicaciones
            for (let i = 0; i < this.ubicaciones.length; i++) {
                this.residentes.push(this.ubicaciones[i].residents)
            } 
            // muestra los residentes de las ubicaciones
            console.log(this.residentes);
        },

    },
    mounted() {
        this.loadLocation();
    },
}
</script>

<style>

</style>