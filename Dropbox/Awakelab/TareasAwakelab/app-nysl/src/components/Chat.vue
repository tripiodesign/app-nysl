<template>
  <div id="chat" class="w-100" :class="{ 'position-fixed max-height': $store.state.window.width > 767 }">
    <br />
    <!-- Formulario mensaje -->
    <div
      class="card border border-0 d-md-none"
      v-if="$store.getters.loguedUser"
    >
      <div class="card-body">
        <h4 class="card-title">Deja tu comentario.</h4>
        <form @submit.prevent="postear">
          <!-- Tema input -->
          <div class="input-group mb-3">
            <i
              class="fas fa-info input-group-text d-flex items-align-center p-3"
              style="text-transform: uppercase;"
            ></i>
            <input
              type="text"
              id="inTema"
              class="form-control"
              placeholder="Tema / Asunto"
              v-model="mensaje.tema"
              style="text-transform:uppercase;"
              required
            />
          </div>

          <!-- Name input -->
          <div class="input-group mb-3">
            <i
              class="fas fa-user input-group-text d-flex items-align-center"
            ></i>
            <input
              type="text"
              id="inName"
              class="form-control"
              placeholder="Nombre"
              v-model="mensaje.nombre"
              required
            />
          </div>

          <!-- Email input -->
          <div class="input-group mb-3">
            <i class="fas fa-at input-group-text d-flex items-align-center"></i>
            <input
              type="text"
              id="inEmail"
              class="form-control"
              placeholder="E-mail"
              style="text-transform: lowercase;"
              v-model="mensaje.autor"
              required
            />
          </div>

          <!-- Message input -->
          <div class="input-group mb-3">
            <i
              class="far fa-comment-dots input-group-text d-flex items-align-center"
            ></i>
            <textarea
              name="comment"
              v-model="mensaje.comentario"
              placeholder="Mensaje..."
              class="form-control border-top-0 border-left-0 border-right-0"
              id="inMsg"
              rows="5"
              required
            >
            </textarea>
            <!-- <input type="text" id="inMsg" :row="5" class="form-control"> -->
          </div>

          <!-- Checkbox -->
          <!-- <div class="form-check d-flex justify-content-center mb-4">
                        <input
                        class="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form4Example4"
                        checked
                        />
                        <label class="form-check-label" for="form4Example4">
                        Send me a copy of this message
                        </label>
                    </div> -->

          <!-- Submit button -->
          <button
            type="submit"
            class="btn btn-success w-100 mb-4 p-3"
            style="text-transform: uppercase"
          >
            Publicar
          </button>
        </form>
      </div>
    </div>
    <!-- contenedor de mensajes -->
    <div class="mt-1">
      <!-- titulo seccion -->
      <h2 class="text-center my-0">
        <span class="badge bg-dark text-warning d-block mx-auto pt-3"
          >Publicaciones</span
        >
      </h2>
      <!-- contenedor mensajeria -->
      <div class="d-md-flex">
        <!-- formulario lateral -->
        <div
          class="card d-none position-fiex d-md-block border border-top-0 border-bottom-0 border-left-0 rounded-0"
          style="min-width: 300px;"
          v-if="$store.getters.loguedUser"
        >
          <div class="card-body">
            <h4 class="card-title">Deja tu comentario.</h4>
            <form @submit.prevent="postear">
              <!-- Tema input -->
              <div class="input-group mb-1">
                <i
                  class="fas fa-info input-group-text d-flex items-align-center p-3"
                  style="text-transform: uppercase;"
                ></i>
                <input
                  type="text"
                  id="inTema"
                  class="form-control"
                  placeholder="Tema / Asunto"
                  v-model="mensaje.tema"
                  style="text-transform:uppercase;"
                  required
                />
              </div>

              <!-- Name input -->
              <div class="input-group mb-1">
                <i
                  class="fas fa-user input-group-text d-flex items-align-center"
                ></i>
                <input
                  type="text"
                  id="inName"
                  class="form-control"
                  placeholder="Nombre"
                  v-model="mensaje.nombre"
                  required
                />
              </div>

              <!-- Email input -->
              <div class="input-group mb-1">
                <i
                  class="fas fa-at input-group-text d-flex items-align-center"
                ></i>
                <input
                  type="text"
                  id="inEmail"
                  class="form-control"
                  placeholder="E-mail"
                  style="text-transform: lowercase;"
                  v-model="mensaje.autor"
                  required
                />
              </div>

              <!-- Message input -->
              <div class="input-group mb-1">
                <i
                  class="far fa-comment-dots input-group-text d-flex items-align-center"
                ></i>
                <textarea
                  name="comment"
                  v-model="mensaje.comentario"
                  placeholder="Mensaje..."
                  class="form-control border-top-0 border-left-0 border-right-0"
                  id="inMsg"
                  rows="3"
                  required
                >
                </textarea>
                <!-- <input type="text" id="inMsg" :row="5" class="form-control"> -->
              </div>

              <!-- Submit button -->
              <button
                type="submit"
                class="btn btn-success w-100 mb-4 p-1"
                style="text-transform: uppercase"
              >
                Publicar
              </button>
            </form>
          </div>
        </div>
        <!-- Mensajes -->
        <div class="mx-auto p-3" :class="{ 'max-height overflow-auto' : $store.state.window.width > 767}">
          <div class="" v-for="mensaje in mensajes" :key="mensaje.id">
            <div class="px-1">
              <!-- Si el usuario esta logueado -->
              <div
                class="card border-success bg-light text-success col-11 col-sm-8 my-3"
                v-if="$store.getters.loguedUser"
                :class="{
                  'ml-auto border-warning text-warning': $store.getters.mailUserIn != mensaje.autor, 
                  'ms-auto' : $store.getters.mailUserIn == mensaje.autor
                }"
              >
                <div class="card-header bg-dark">
                  <div
                    class="d-flex flex-row justify-content-between items-align-center"
                  >
                    <div class="flex-column">
                      <h5 class="" style="font-size: 1.1em;">
                        {{ mensaje.nombre }}
                      </h5>
                    </div>
                    <div class="flex-column text-end">
                      <small
                        style="font-size: .8em; font-weight: lighter"
                        class="text-secondary"
                        >{{ mensaje.autor }}</small
                      >
                    </div>
                  </div>
                </div>

                <div class="container-fluid">
                  <div class="d-flex justify-content-end">
                    <h6
                      style="text-transform: uppercase; min-width: 100px; max-width: 100%"
                      class="badge bg-primary p-2 mt-2 text-light"
                    >
                      {{ mensaje.tema }}
                    </h6>
                  </div>
                  <div class="container my-2">
                    <p style="font-size: 1em;">{{ mensaje.comentario }}</p>
                  </div>
                </div>

                <hr class="my-0" />

                <div class="">
                  <div class=" text-center">
                    <small
                      class="text-muted"
                      style="font-weight: lighter; font-size: .7em;"
                      >{{ mensaje.fecha }}</small
                    >
                  </div>
                </div>
              </div>

              <!-- Si el usuario NO esta logueado -->
              <div
                class="card border-info bg-light text-info col-12 my-3"
                v-else
              >
                <div class="card-header bg-dark">
                  <div
                    class="d-flex flex-row justify-content-between items-align-center"
                  >
                    <div class="flex-column">
                      <h5 class="" style="font-size: 1.1em;">
                        {{ mensaje.nombre }}
                      </h5>
                    </div>
                    <div class="flex-column text-end">
                      <small
                        style="font-size: .8em; font-weight: lighter"
                        class="text-secondary"
                        >{{ mensaje.autor }}</small
                      >
                    </div>
                  </div>
                </div>

                <div class="container-fluid">
                  <div class="d-flex justify-content-end">
                    <h6
                      style="text-transform: uppercase; min-width: 100px; max-width: 100%"
                      class="badge bg-warning p-2 mt-2"
                    >
                      {{ mensaje.tema }}
                    </h6>
                  </div>
                  <div class="container my-2">
                    <p style="font-size: 1em;">{{ mensaje.comentario }}</p>
                  </div>
                </div>

                <hr class="my-0" />

                <div class="">
                  <div class=" text-center">
                    <small
                      class="text-muted"
                      style="font-weight: lighter; font-size: .7em;"
                      >{{ mensaje.fecha }}</small
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import "@/firebase/init";

let db = firebase.database();
export default {
  name: "Chat",
  /* 
    autor: mail usuario,
    titulo: tema del mensaje publicado,
    mensajera: mensajes enviados al foro,
    hora: hora del mensaje enviado [hh:mm] ,
    fecha: fecha del mensaje enviado [dd/mm/yy] ,
    fechaIn: [yyyymmddhhmmss] numero entero para ordenar mensajes,


*/
  data() {
    return {
      tema: "",
      nombre: "",
      comentario: "",
      mensaje: {
        autor: firebase.auth().currentUser
          ? firebase.auth().currentUser.email
          : "",
        uid: firebase.auth().currentUser ? firebase.auth().currentUser.uid : "",
        nombre: "",
        comentario: "",
        tema: "",
        fecha: this.formatDate(new Date(), "string"),
        fechaInt: this.formatDate(new Date(), "int")
      },

      mensajes: []
    };
  },
  methods: {
    // Formatear fecha y hora
    formatDate(date, tipo) {
      if (date && tipo == "int") {
        return (
          "" +
          date.getFullYear() +
          (date.getMonth() + 1 > 9 ? "" : "0") +
          (date.getMonth() + 1) +
          (date.getDate() > 9 ? "" : "0") +
          date.getDate() +
          (date.getHours() > 9 ? date.getHours() : "0" + date.getHours()) +
          (date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes())
        );
      } else {
        return (
          "" +
          (date.getDate() > 9 ? "" : "0") +
          date.getDate() +
          "-" +
          (date.getMonth() + 1 > 9 ? "" : "0") +
          (date.getMonth() + 1) +
          "-" +
          date.getFullYear() +
          " " +
          (date.getHours() > 9
            ? date.getHours()
            : "0" + date.getHours().toString()) +
          ":" +
          (date.getMinutes() > 9
            ? date.getMinutes()
            : "0" + date.getMinutes().toString())
        );
      }
    },
    // Orden de valores
    descendente(a, b) {
      return b.fechaInt - a.fechaInt;
    },
    // Accion publicar mensaje
    postear() {
      // console.log(this.mensaje);
      let db = firebase.database();
      // nombre de bd
      let mensajeRef = db.ref("mensajes");
      mensajeRef
        .push(this.mensaje)
        .then(() => {
          this.mensaje.comentario = "";
          this.mensaje.tema = "";
        })
        .catch(error => {
          console.log(error);
        });
    },
    // detectar ancho y largo de ventana del dispositivo
    resizeWindow() {
      this.$store.state.window.width = window.innerWidth;
      // console.log("Ancho: " + this.$store.state.window.width);
      this.$store.state.window.height = window.innerHeight;
      // console.log("Largo: " + this.$store.state.window.height);
    }
  },
  mounted() {
    // nombre de bd
    let mensajeRef = db.ref("mensajes");
    mensajeRef.on("value", msg => {
      const data = msg.val();
      let messages = [];
      // console.log(data);
      Object.keys(data).forEach(key => {
        // console.log(key);
        // console.log(data[key].autor);
        messages.push({
          id: key,
          autor: data[key].autor,
          tema: data[key].tema,
          comentario: data[key].comentario,
          uid: data[key].uid,
          nombre: data[key].nombre,
          fecha: data[key].fecha,
          fechaInt: data[key].fechaInt
        });
      });
      this.mensajes = messages.sort(this.descendente);
      // console.log(this.mensajes)
    });
    // ejecutar calculo de dimensiones ventana
    window.addEventListener("resize", this.resizeWindow);
    this.resizeWindow();
  },
  unmounted() {
    window.removeEventListener("resize", this.resizeWindow);
  }
};
</script>

<style lang="sass" scoped>
#inTema, #inNombre, #inMsg
    font-size: .75rem
    background-color: rgba(255, 255, 255, .6)

.max-height
  max-height: 75vh
</style>
