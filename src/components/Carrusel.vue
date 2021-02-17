<template>
  <div id="carrusel">
    <!-- Carousel -->
    <div
      id="carruselHome"
      class="carousel slide carousel-fade"
      data-mdb-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-mdb-target="#carruselHome"
          data-mdb-slide-to="0"
          class="active"
        ></li>
        <li data-mdb-target="#carruselHome" data-mdb-slide-to="1"></li>
        <li data-mdb-target="#carruselHome" data-mdb-slide-to="2"></li>
        <li data-mdb-target="#carruselHome" data-mdb-slide-to="3"></li>
      </ol>

      <div class="carousel-inner">
        <!-- primer item -->
        <div class="carousel-item active">
          <img
            src="../assets/img/soccer-kid2-large.jpg"
            class="d-block w-100"
            alt="..."
            style="max-height: 565px"
          />
          <div
            class="carousel-caption d-none d-sm-block rounded text-start me-auto ms-0 p-2"
            style="max-width: 200px; background-color: rgba(0,0,0,.25)"
          >
            <h5 class="">Seleccion Infantil</h5>
            <p class="" style="font-size: .8em">
              Inscribe a tus hijos en nuestra seleccion infantil, para niños y
              niñas entre 10 y 16 años.
            </p>
          </div>
        </div>

        <!-- segundo item -->
        <div class="carousel-item">
          <img
            src="../assets/img/soccer-girls1-large.jpg"
            class="d-block w-100"
            alt="..."
          />
          <div
            class="carousel-caption d-none d-sm-block text-start ms-auto p-2"
            style="background-color: rgba(0,0,0,.25)"
          >
            <h5>Seleccion Femenina</h5>
            <p class="" style="font-size: .8em">
              Revisa las ultimas noticias relacionadas a nuestra selección
              femenina, en su mejor momento.
            </p>
          </div>
        </div>

        <!-- tercer item -->
        <div class="carousel-item">
          <img
            src="../assets/img/soccer-stadium2-large.jpg"
            class="d-block w-100"
            alt="..."
          />
          <div
            class="carousel-caption d-none d-sm-block rounded text-start ms-auto me-0 mt-0 p-2"
            style="max-width: 200px; background-color: rgba(0,0,0,.25)"
          >
            <h5>Participa de nuestros encuentros</h5>
            <p class="" style="font-size: .8em">
              Ven a ver los encuentros que realizamos en nuestras dependecias,
              con nuestros equipos debutantes.
            </p>
          </div>
        </div>

        <!-- cuarto item -->
        <div class="carousel-item">
          <img
            src="../assets/img/soccer-taka-large.jpg"
            class="d-block w-100"
            alt="..."
          />
          <div
            class="carousel-caption d-none d-sm-block text-start ms-auto p-2"
            style="background-color: rgba(0,0,0,.25)"
          >
            <h5>Estrategias y posiciones</h5>
            <p class="" style="font-size: .8em">
              Revisa y enterate de las estrategias utilizadas por los equipos y
              de las posiciones de nuestros jugadores.
            </p>
          </div>
        </div>
      </div>

      <!-- Controles -->
      <a
        class="carousel-control-prev rounded-circle my-auto mx-2 pb-2"
        href="#carruselHome"
        role="button"
        data-mdb-slide="prev"
        style="background-color: rgba(0,0,0,.3); width: 50px; height: 50px"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </a>
      <a
        class="carousel-control-next rounded-circle my-auto mx-2 pb-2"
        href="#carruselHome"
        role="button"
        data-mdb-slide="next"
        style="background-color: rgba(0,0,0,.3); width: 50px; height: 50px"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </a>
    </div>
    <!-- Carousel wrapper -->
  </div>
</template>

<script>
export default {
  name: "Carrusel"
};
</script>

<style></style>
