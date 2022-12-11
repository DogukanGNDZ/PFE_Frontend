<template>
  <v-app id="app">
    <v-container>
      <!-- SECTION 1-->
      <section class="section1 mt-3">
        <v-row class="text-left mx-3" align="center" justify="center">
          <v-col cols="12" xs="12" sm="6" md="6">
            <h1 class="titleSection1">The power of sport to move the world</h1>
            <div class="mt-5">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur facere inventore iusto, sed omnis officia aut
                praesentium eaque exercitationem quos, non placeat. Sed harum ut
                perspiciatis officia ipsa enim explicabo!
              </p>
            </div>
          </v-col>
          <v-col cols="12" xs="12" sm="6" md="6">
            <v-img src="../assets/undraw1.2.svg" class="w-70 mx-auto"></v-img>
          </v-col>
        </v-row>
      </section>
    </v-container>

    <!-- SECTION 2 -->
    <section class="section2">
      <v-container>
        <v-row class="mx-3">
          <v-col cols="12" class="text-left">
            <h1 class="titleSection2">
              Any sport <br />
              anywhere.
            </h1>
          </v-col>
        </v-row>
        <v-row
          class="text-left mx-3"
          align="center"
          justify="center"
          style="margin-top: 30px"
        >
          <v-col cols="12" xs="12" sm="4" md="4">
            <div class="card card-1">
              <h2 class="card__title">Football</h2>
              <p class="card__apply">
                <a class="card__link" href="#"
                  >Apply Now <i class="fas fa-arrow-right"></i
                ></a>
              </p></div
          ></v-col>
          <v-col cols="12" xs="12" sm="4" md="4">
            <div class="card card-2">
              <h2 class="card__title">Basketball</h2>
              <p class="card__apply">
                <a class="card__link" href="#"
                  >Apply Now <i class="fas fa-arrow-right"></i
                ></a>
              </p></div
          ></v-col>
          <v-col cols="12" xs="12" sm="4" md="4">
            <div class="card card-3">
              <h2 class="card__title">Tennis</h2>
              <p class="card__apply">
                <a class="card__link" href="#"
                  >Apply Now <i class="fas fa-arrow-right"></i
                ></a>
              </p></div
          ></v-col>
          <v-col cols="12" xs="12" sm="4" md="4">
            <div class="card card-4">
              <h2 class="card__title">Swimming</h2>
              <p class="card__apply">
                <a class="card__link" href="#"
                  >Apply Now <i class="fas fa-arrow-right"></i
                ></a>
              </p></div
          ></v-col>
          <v-col cols="12" xs="12" sm="4" md="4">
            <div class="card card-5">
              <h2 class="card__title">Athletism</h2>
              <p class="card__apply">
                <a class="card__link" href="#"
                  >Apply Now <i class="fas fa-arrow-right"></i
                ></a>
              </p></div
          ></v-col>
          <v-col cols="12" xs="12" sm="4" md="4">
            <div class="card card-6">
              <h2 class="card__title">Baseball</h2>
              <p class="card__apply">
                <a class="card__link" href="#"
                  >Apply Now <i class="fas fa-arrow-right"></i
                ></a>
              </p></div
          ></v-col>
        </v-row>
      </v-container>
    </section>

    <!-- SECTION 3-->
    <section class="section3">
      <v-container>
        <v-row class="text-left mx-3" align="center" justify="center">
          <v-col cols="12" xs="12" sm="4" md="4"> 1 </v-col>
          <v-col cols="12" xs="12" sm="4" md="4"> 1 </v-col>
          <v-col cols="12" xs="12" sm="4" md="4"> 1 </v-col>
        </v-row>
      </v-container>
    </section>
  </v-app>
</template>

<script>
//import Undraw1 from "../assets/logo.svg";

export default {
  name: "Home",
};
</script>

<style>
.titleSection1 {
  font-size: 60px;
  line-height: 60px;
}

.section2 {
  background-image: url("../assets/banner-bg1.png");
  width: 100%;
  display: table;
  margin: 0;
  max-width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  margin-top: 50px;
}

.titleSection2 {
  margin-top: 150px;
  font-size: 60px;
  line-height: 60px;
  color: white;
}

/* TEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEST */

/* CARDS */

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card {
  padding: 20px;
  display: grid;
  border-radius: 10px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.2s;
}

.card:hover {
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
  transform: scale(1.01);
}

.card__link,
.card__exit {
  position: relative;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.9);
}

.card__link::after {
  position: absolute;
  top: 25px;
  left: 0;
  content: "";
  width: 0%;
  height: 3px;
  background-color: rgba(255, 255, 255, 0.6);
  transition: all 0.5s;
}

.card__link:hover::after {
  width: 100%;
}

.card__exit {
  grid-row: 1/2;
  justify-self: end;
}
.card__title {
  grid-row: 3/4;
  font-weight: 400;
  color: #ffffff;
}

.card__apply {
  grid-row: 4/5;
  align-self: center;
}

/* CARD BACKGROUNDS */

.card-1 {
  background-image: url("../assets/pexels-mike-1171084.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.card-2 {
  background-image: url("../assets/pexels-sergio-souza-2291004.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.card-3 {
  background-image: url("../assets/pexels-aidil-bahaman-1784798.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.card-4 {
  background-image: url("../assets/pexels-kindel-media-7294660.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.card-5 {
  background-image: url("../assets/pexels-lukas-hartmann-1127120.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.card-6 {
  background-image: url("../assets/pexels-pixabay-163248.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

/* RESPONSIVE */

@media (max-width: 1600px) {
  .cards {
    justify-content: center;
  }
}
</style>
