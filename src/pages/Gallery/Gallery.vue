<script setup>
// Components
import Header from "../../components/Header/Header.vue";
import Footer from "../../components/Footer/Footer.vue";

// Images
import PhotoS1 from "../../assets/images/photos size (1).png"
import PhotoS3 from "../../assets/images/photos size (3).png"
import Chinaa from "../../assets/images/chinaa.png"
import ChinaStudents from "../../assets/images/chinaStudents.png"
import PhotoS2 from "../../assets/images/photos size (2).png"
import PhotoS from "../../assets/images/photos size.png"
import Kyhwinner from "../../assets/images/kyhwinner.png"
import Kyhstats from "../../assets/images/kyhstats.png"
import AudemyUser from "../../assets/images/audemyUser.png"

</script>

<template>
  <div id="page-wrapper">
    <!-- Header -->
    <Header />

    <!-- Main -->
    <article id="main">
      <header class="special container">
        <span class="icon solid fa-camera"></span>
        <h2><strong>Photo Gallery</strong></h2>
      </header>


      <!-- One -->
      <section class="wrapper style3 container special">
        <div class="row">
          <div class="col-6 col-12-narrower">
            <section>
              <a href="#" class="image featured"
                ><img :src=PhotoS1 alt=""
              /></a>
              <header>
                <p>
                  Student at Arizona State Schools for the Deaf and the Blind
                  Using Audemy
                </p>
              </header>
            </section>
          </div>
          <div class="col-6 col-12-narrower">
            <section>
              <a href="#" class="image featured"
                ><img :src=PhotoS3 alt=""
              /></a>
              <header>
                <p>Visually Impaired User on Audemy's Game Interface</p>
              </header>
            </section>
          </div>
        </div>
        <div class="row">
          <div class="col-6 col-12-narrower">
            <section>
              <a href="#" class="image featured"
                ><img :src=Chinaa alt=""
              /></a>
              <header>
                <p>
                  Blind Students at International School for the Blind learning
                  about Audemy
                </p>
              </header>
            </section>
          </div>
          <div class="col-6 col-12-narrower">
            <section>
              <a href="#" class="image featured"
                ><img :src=ChinaStudents alt=""
              /></a>
              <header>
                <p>
                  Blind Students at International School for the Blind learning
                  about Audemy
                </p>
              </header>
            </section>
          </div>
        </div>
        <div class="row">
          <div class="col-6 col-12-narrower">
            <section>
              <a href="#" class="image featured"
                ><img :src=AudemyUser alt=""
              /></a>
              <header>
                <p>Blind Student at Tompkins High School Testing Audemy</p>
              </header>
            </section>
          </div>
          <div class="col-6 col-12-narrower">
            <section>
              <a href="#" class="image featured"
                ><img :src=PhotoS2 alt=""
              /></a>
              <header>
                <p>
                  Student at Arizona State Schools for the Deaf and the Blind
                  Using Audemy
                </p>
              </header>
            </section>
          </div>
        </div>

        <div class="row">
          <div class="col-6 col-12-narrower">
            <section>
              <div class="col-6 col-12-narrower">
                <section>
                  <a href="#" class="image featured"
                    ><img :src=PhotoS alt=""
                  /></a>
                  <header>
                    <p>
                      Visually Impaired Student Playing the Math Game Fruit
                      Frenzy
                    </p>
                  </header>
                </section>
              </div>

              <a href="https://katyhacks.org" class="image featured"
                ><img :src=Kyhwinner alt=""
              /></a>
              <h1>
                <p>Katy Youth Hacks Statistics</p>
              </h1>
            </section>
          </div>
          <div class="col-6 col-12-narrower">
            <section>
              <a href="https://katyhacks.org" class="image featured"
                ><img :src=Kyhstats alt=""
              /></a>
              <h1>
                <p>Katy Youth Hacks Winner</p>
              </h1>
            </section>
          </div>
        </div>
      </section>
    </article>

    <!-- Footer -->
    <Footer />
  </div>
</template>
