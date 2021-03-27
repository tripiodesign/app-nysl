<template>
  <div id="login">
    <!-- Modal -->
    <div class="modal fade" id="loginModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body" v-if="$store.getters.loguedUser">
            <div class="card">
              <div class="card-body">
                <div class="d-flex justify-content-center align-items-center">
                  <h5 class="card-title me-2">
                    ¡Bienvenido
                    <small
                      id=""
                      style="font-weight: lighter; font-size: .85em"
                      >{{ $store.getters.mailUserIn }}</small
                    >!
                  </h5>
                </div>
                <hr />
                <div class="row">
                  <div class="card-text">
                    <p id="txtWelcome" class="text-secondary mb-2">
                      El ingreso al sitio a tu cuenta ha sido exitoso. Recuerda
                      mantenerte al día con nuestras
                      <router-link
                        to="/"
                        style="text-decoration: none;"
                        class="text-warning"
                        >novedades</router-link
                      >,
                      <router-link
                        to="/juegos"
                        style="text-decoration: none;"
                        class="text-warning"
                        >juegos</router-link
                      >
                      y
                      <router-link
                        to="/juegos"
                        style="text-decoration: none;"
                        class="text-warning"
                        >comentarios</router-link
                      >
                      de nuestro foro.
                    </p>
                    <small class="text-secondary" style="font-size: .65em;"
                      >Los mensajes vertidos en nuestro foro son especificamente
                      para pruebas de funcionamineto del sitio.</small
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="modal-body" v-else>
            <div class="card">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h5
                    class="accordion-header bg-dark text-white text-center py-4 border border-dark"
                    id="titleLogin"
                  >
                    <a
                      class="card-header btn btn-small text-white bg-transparent border-0"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <strong
                        >Iniciar sesión
                        <i
                          class="btn bt-sm text-success rounded-circle far fa-question-circle"
                        ></i
                      ></strong>
                    </a>
                  </h5>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse rounded-0 border-start-0 border-end-0"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <div class="alert alert-warning  mb-0">
                        <div class="alert-heading">
                          <h6 style="font-size: .85em">
                            <strong class="text-success"
                              >Puedes ingresar al sitio con nuestras cuentas de
                              prueba.</strong
                            >
                          </h6>
                        </div>
                        <hr />
                        <div style="font-size: .8em">
                          <p><u>USUARIOS:</u></p>
                          <p class="m-1">
                            <small>Usuario 1: user1@mail.cl</small>
                          </p>
                          <p class="m-1">
                            <small>Usuario 2: user2@mail.cl</small>
                          </p>
                          <hr />
                          <p class="text-success text-center mb-0 pb-0">
                            La contraseña para nuestras cuentas es:
                            <small>123456</small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!--Card content-->
              <div class="card-body px-lg-5 pt-0">
                <!-- Form -->
                <form
                  class="text-center"
                  style="color: #757575;"
                  @submit.prevent="login"
                >
                  <br />
                  <!-- Email -->
                  <div class="row">
                    <div class="col-12 col-sm-8">
                      <p>E-mail</p>
                      <div class="input-group">
                        <i
                          class="border-success fas fa-at input-group-text d-flex items-align-center"
                        ></i>
                        <input
                          type="email"
                          id="inMail"
                          class="form-control border-success"
                          v-model="mail"
                        />
                      </div>
                      <br />
                      <p>Contraseña</p>
                      <!-- Password -->
                      <div class="input-group">
                        <i
                          class="border-success fas fa-key input-group-text  d-flex items-align-center"
                        ></i>
                        <input
                          type="password"
                          id="inPass"
                          class="form-control border-success"
                          style="text-transform: lowercase;"
                          v-model="pass"
                        />
                      </div>
                      <!-- alerta error -->
                      <div class="row" v-if="msgError">
                        <span class="alert aleret-danger">
                          {{ msgError }}
                        </span>
                      </div>
                      <br />
                      <div class="d-flex justify-content-around">
                        <div class="">
                          <!-- Recuerdame -->
                          <div class="form-check">
                            <input
                              type="checkbox"
                              class="form-check-input my-0"
                              id="materialLoginFormRemember"
                            />
                            <label
                              class="form-check-label mb-1"
                              for="materialLoginFormRemember"
                              >Recuerdame</label
                            >
                          </div>
                        </div>

                        <div>
                          <!-- recuperar pass -->
                          <a href="" class="text-warning"
                            >Olvidaste la contraseña?</a
                          >
                        </div>
                      </div>
                    </div>

                    <div class="col-12 col-sm mt-auto">
                      <!-- noton ingresar -->
                      <button
                        class="btn btn-outline-dark d-block my-2 py-4 w-100"
                        type="submit"
                        style="text-transform:uppercase;"
                      >
                        Ingresar
                      </button>

                      <!-- registrarse -->
                      <p>
                        No eres miembro?
                        <a href="" class="text-warning">Registrate</a>
                      </p>
                    </div>
                  </div>

                  <!-- inicio con rrss -->
                  <!-- <p>or sign in with:</p>
                  <a type="button" class="btn-floating btn-fb btn-sm">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a type="button" class="btn-floating btn-tw btn-sm">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a type="button" class="btn-floating btn-li btn-sm">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                  <a type="button" class="btn-floating btn-git btn-sm">
                    <i class="fab fa-github"></i>
                  </a> -->
                </form>
                <!-- Form -->
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <!-- <router-link type="button" class="btn btn-dark" to="/foro">
              Foro
            </router-link> -->
            <!-- inicio con rrss -->
            <small>
              <a type="button" class="btn-floating btn-fb btn-sm text-success">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a type="button" class="btn-floating btn-tw btn-sm text-success">
                <i class="fab fa-twitter"></i>
              </a>
              <a type="button" class="btn-floating btn-li btn-sm text-success">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a type="button" class="btn-floating btn-git btn-sm text-success">
                <i class="fab fa-github"></i>
              </a>
            </small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import "../firebase/init";
export default {
  name: "Login",
  data() {
    return {
      mail: "",
      pass: "",
      msgError: null,
      autor: firebase.auth().currentUser
        ? firebase.auth().currentUser.email
        : ""
    };
  },
  methods: {
    login() {
      // console.log(this.mail);
      // console.log(this.pass);
      if (this.mail && this.pass) {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.mail, this.pass)
          .then(user => {
            this.$store.dispatch("setUserAct", user);
            this.$router.push("/foro");
            console.log("Validacion correcta");
            // console.log(user);
          })
          .catch(error => {
            console.log(error);
            this.msgError = error.message;
          });
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
    background-color: rgba(255, 255, 255, .6)
</style>
