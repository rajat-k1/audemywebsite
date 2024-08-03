<script setup>
// Component
import Header from "../../components/Header/Header.vue";
import Footer from "../../components/Footer/Footer.vue";

// Images
import Katytimespaper from "../../assets/images/katytimespaper.png";
import DevpostFeature from "../../assets/images/devpostFeature.png";
import TechNovationTexas from "../../assets/images/technovationTexas.png";
import ImpactAward from "../../assets/images/impactAward.png";
import Impact from "../../assets/images/Impact.png";
import SIH from "../../assets/images/Social Impact Heroes.png";
import DPL from "../../assets/images/Daily Point of Light.png";
</script>

<template>
  <div id="page-wrapper">
    <!-- Header -->4
    <Header />

    <!-- Main -->
    <article id="main">
      <header class="special container">
        <span class="icon solid fa-newspaper"></span>
        <h2><strong>Press and Recognition</strong></h2>
      </header>

      <!-- One -->
      <section class="wrapper style3 container special">
        <header class="major">
          <h2><strong>Press</strong></h2>
        </header>

        <div class="row">
          <div class="col-6 col-12-narrower">
            <section>
              <a
                href="https://katytimes.com/stories/katy-times-august-31-2023,50346"
                class="image featured"
                ><img :src=Katytimespaper alt=""
              /></a>
              <h1>
                <h1>Katy Times</h1>
              </h1>
            </section>
          </div>
          <div class="col-6 col-12-narrower">
            <section>
              <a
                href="https://info.devpost.com/blog/user-story-crystal"
                class="image featured"
                ><img :src=DevpostFeature alt=""
              /></a>
              <h1>
                <h1>Devpost</h1>
              </h1>
            </section>
          </div>
        </div>
        <p></p>

        <div class="row">
          <div class="col-6 col-12-narrower">
            <section>
              <a
                href="https://medium.com/authority-magazine/social-impact-heroes-why-how-crystal-yang-of-audemy-is-helping-to-change-our-world-59d47f21ac81"
                class="image featured"
                ><img :src=SIH alt=""
              /></a>
              <header>
                <h3>Social Impact Heroes</h3>
              </header>
            </section>
          </div>
          <div class="col-6 col-12-narrower">
            <section>
              <a
                href="https://communityimpact.com/houston/katy-north/nonprofit/2024/06/27/katy-isd-student-creates-audio-based-education-games-for-visually-impaired-children/"
                class="image featured"
                ><img :src=Impact alt=""
              /></a>
              <header>
                <h3>Community Impact</h3>
              </header>
            </section>
          </div>
        </div>
        <p></p>

        <div class="row">
          <div class="col-6 col-12-narrower">
            <section>
              <a
                href="https://www.pointsoflight.org/awards/championing-accessibility-in-education-for-blind-and-visually-impaired-students/"
                class="image featured"
                ><img :src=DPL alt=""
              /></a>
              <header>
                <h3>Point of Light</h3>
              </header>
            </section>
          </div>
        </div>
      </section>

      <section class="wrapper style3 container special">
        <header class="major">
          <h2><strong>Recognition</strong></h2>
        </header>

        <div class="row">
          <div class="col-6 col-12-narrower">
            <section>
              <a
                href="https://technovationchallenge.org/"
                class="image featured"
                ><img :src=TechNovationTexas alt=""
              /></a>
              <h1>
                <h1>Technovation Girls Texas</h1>
              </h1>
              <p>Audemy - First Place</p>
            </section>
          </div>
          <div class="col-6 col-12-narrower">
            <section>
              <a
                href="https://www.aspirations.org/award-programs/2023-aic-impact-awards"
                class="image featured"
                ><img :src=ImpactAward alt=""
              /></a>
              <h1>
                <h1>National Center For Women in Technology (NCWIT)</h1>
              </h1>
              <p>Impact Award Recipient</p>
            </section>
          </div>
        </div>
      </section>
    </article>

    <!-- Footer -->
    <Footer />
  </div>
</template>
