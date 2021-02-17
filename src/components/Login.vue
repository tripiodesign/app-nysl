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
            <h5 class="modal-title mx-auto" id="labelModal">Iniciar Sesión</h5>
            <!-- <button
              type="button"
              class="btn-close"
              data-mdb-dismiss="modal"
              aria-label="Close"
            ></button> -->
          </div>
          <div class="modal-body">
            <form>
                <!-- Email input -->
                <div class="form-outline mb-4">
                    <input type="email" id="form1Example1" class="form-control border" />
                    <label class="form-label text-muted" for="form1Example1">Correo electrónico</label>
                </div>

                <!-- Password input -->
                <div class="form-outline mb-4">
                    <input type="password" id="form1Example2" class="form-control border" />
                    <label class="form-label text-muted" for="form1Example2">Contraseña</label>
                </div>

                <!-- 2 column grid layout for inline styling -->
                <div class="row mb-4">
                    <div class="col d-flex justify-content-center">
                    <!-- Checkbox -->
                    <div class="form-check">
                        <input
                        class="form-check-input bg-warning border-warning"
                        type="checkbox"
                        value=""
                        id="form1Example3"
                        checked
                        />
                        <label class="form-check-label" for="form1Example3">Recordarme</label>
                    </div>
                    </div>

                    <div class="col">
                    <!-- Simple link -->
                    <a href="#!" class="text-warning" style="font-size: .8rem">recuperar contraseña</a>
                    </div>
                </div>

                <!-- Submit button -->
                <button type="submit" class="btn btn-success btn-block">Ingresar</button>
            </form>
          </div>

          <div class="modal-footer">
            <button
              type="button"
              class="border-0 text-info"
              data-mdb-dismiss="modal"
              style="background-color: white;"
            >
              Registrarse
            </button>
            
            <button
              type="button"
              class="btn btn-danger"
              data-mdb-dismiss="modal"
            >
              Close
            </button>
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
.form-label
    font-size: .75rem
    background-color: white
</style>
