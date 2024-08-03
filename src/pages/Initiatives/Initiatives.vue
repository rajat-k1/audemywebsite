<script setup>
// Components
import Header from "../../components/Header/Header.vue"
import Footer from "../../components/Footer/Footer.vue"

// Images
import Katyyh from "../../assets/images/katyyhlogo.png"
import AppleLoo from "../../assets/images/appleloo.png"
import Dr from "../../assets/images/Dr.png"
import China from "../../assets/images/china.png"
</script>

<template>
  <div id="page-wrapper">
    <!-- Header -->
    <Header/>

    <!-- Main -->
    <article id="main">
      <header class="special container">
        <span class="icon solid fa-heart"></span>
        <h2><strong>Initiatives</strong></h2>
      </header>

      <!-- One -->
      <section class="wrapper style3 container special">
        <p>
          In addition to our game, <b> Audemy</b> is commited to inspiring
          change and education for blind and visually impaired students through
          other events and projects.
        </p>

        <div class="row">
          <div class="col-6 col-12-narrower">
            <section>
              <a href="https://katyhacks.org" class="image featured">
                <img :src=Katyyh alt="">
              </a>
              <header>
                <h3>KatyYouthHacks</h3>
              </header>
              <p>
                A <b>hackathon</b> focused on <b>accessibility</b> and social
                inequality created to inspire
                <b>innovation in for people with disabilities.</b> Through the
                hackathon, <b>500+</b> participants learned about
                <b>project development, business pitching, and accessibility</b>
                for the chance to win <b>$70,000+</b> worth of prizes from
                corporate resources and sponosorships.
              </p>
            </section>
          </div>
          <div class="col-6 col-12-narrower">
            <section>
              <a
                href="https://www.youtube.com/@applelooeducationalvideosf1743/featured"
                class="image featured"
                >
                <img :src=AppleLoo alt=""/>
              </a>
              <header>
                <h3>AppleLoo Educational Videos for Kids</h3>
              </header>
              <p>
                Apple Loo Education is a <b>social media brand </b>created by
                Audemy to teach <b>young students</b> about
                <b>educational</b> topics. Apple Loo's videos series about
                animal fun facts has reached over <b>150,000+ students</b> on
                YouTube.
              </p>
            </section>
          </div>
        </div>

        <div class="row">
          <div class="col-6 col-12-narrower">
            <section>
              <a href="#" class="image featured">
                <img :src=Dr alt=""/>
              </a>
              <header>
                <h3>Coding Accessibility Workshops</h3>
              </header>
              <p>
                Audemy regularly hosts <b>workshops</b> focused on informing
                blind and visually impaired people about
                <b>accessible resources</b> to learn how to code.
              </p>
            </section>
          </div>

          <div class="col-6 col-12-narrower">
            <section>
              <a href="#" class="image featured">
                <img :src=China alt=""/>
            </a>
              <header>
                <h3>Intro to Audemy Events</h3>
              </header>
              <p>
                We host events to introduce our games to students through
                schools for the blind.
              </p>
            </section>
          </div>
        </div>
      </section>
    </article>

    <!-- Footer -->
   <Footer/>
  </div>
</template>

