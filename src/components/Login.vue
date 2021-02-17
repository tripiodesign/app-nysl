<template>
  <div id="login">
    <!-- Modal -->
    <div
      class="modal fade"
      id="loginModal"
      tabindex="-1"
      aria-labelledby="labelModal"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title ms-auto" id="labelModal">Iniciar Sesión</h5>
            <button
              type="button"
              class="btn-close"
              data-mdb-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="login">
                
              <div class="form-outline">
                <input class="form-control border" type="email" id="inpMail" />
                <label class="form-label text-dark bg-light" for="#inpMail">Usuario</label>
              </div>
                <br>
              <div class="form-outline">
                <input class="form-control border" type="password" id="inpPass" />
                <label class="form-label text-dark bg-light" for="#inpPass">Contraseña</label>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-danger"
              data-mdb-dismiss="modal"
            >
              Close
            </button>
            <input 
              type="submit" 
              class="btn btn-success"
              value="Ingresar" 
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import "@/firebase/init";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      pass: "",
      msgError: null
    };
  },
  methods: {
    login() {
      console.log(this.email);
      console.log(this.pass);
      if (this.email && this.pass) {
        firebase
          .auth().singInWithEmailAndPassword(this.email, this.pass)
          .then(user => {
            console.log(user);
          })
          .catch(error => {
            console.log(error);
            this.msgError = error.message;
          });
        console.log("Validacion correcta");
      } else {
        console.log("Credenciales incompletas");
      }
    }
  }
};
</script>

<style lang="sass" scoped>
#login
    position: absolute
    // display: flex
    // justify-content: center
    // items-align: center
    // width: 100%
    // height: 100%
    z-index: 2000
</style>
