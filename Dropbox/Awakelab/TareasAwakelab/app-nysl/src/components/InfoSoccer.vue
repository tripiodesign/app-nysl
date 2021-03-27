<template>
  <div id="infoSoccer">
    <div class="row" v-for="soccer in arrSoccer" :key="soccer.uid"></div>
  </div>
</template>

<script>
import ServiceDB from "../servicios/service";
export default {
  name: "InfoSoccer",
  data() {
    return {
      arrSoccer: []
    };
  },
  methods: {
    async getInfo() {
      setTimeout(() => {
        let service = new ServiceDB();
        service
          .getInfo()
          .then(response => {
            return response.json();
          })
          .then(this.getSoccer);
      }, 1500);
    },
    getSoccer(response) {
      console.log(response);
    }
  },
  mounted() {}
};
</script>

<style></style>
