<script setup>
// Components
import Header from "../../components/Header/Header.vue";
import Banner from "../../components/Banner/Banner.vue";
import Footer from "../../components/Footer/Footer.vue";
// Images
import Image1 from "../../assets/character/Blue Bordered Geometric Shapes Blank Page A4 Document (1).png"
import Image2 from "../../assets/character/Blue Bordered Geometric Shapes Blank Page A4 Document (2).png"
import Image3 from "../../assets/character/Blue Bordered Geometric Shapes Blank Page A4 Document (3).png"
import Image4 from "../../assets/character/Blue Bordered Geometric Shapes Blank Page A4 Document.png"
</script>

<template>
  <div id="page-wrapper" class="">
    <Header />
    <Banner />
    <article id="main">
      <section class="wrapper style1 container special">
        <div class="row">
          <div class="col-4 col-12-narrower purple">
            <section>
              <header>
                <h3 class="bigger title">1000+</h3>
              </header>
              <header>
                <h3>Students Impacted</h3>
                <p>
                  Audemy and its initiatives use technology to bridge the gap
                  between education and accessibility.
                </p>
              </header>
            </section>
          </div>
          <div class="col-4 col-12-narrower red">
            <section>
              <header>
                <h3 class="bigger title">15+</h3>
              </header>
              <header>
                <h3>Availible Games</h3>
                <p>
                  Audemy's AI-based games are designed to be accessible for
                  Pre-K to 5th grade blind and visually impaired students.
                </p>
              </header>
            </section>
          </div>
          <div class="col-4 col-12-narrower green">
            <section>
              <h3 class="bigger title">7</h3>

              <h3>Collaborating State Schools for the Blind</h3>

              <p>
                Audemy has been used by students at schools for the blind on an
                international level.
              </p>
            </section>
          </div>
        </div>
      </section>

      <section class="wrapper style3 container special">
        <h1 class="bigger title">Join the Community!</h1>
        <p></p>
        <div class="custom-image-container">
          <img
            :src=Image1
            alt="Image 1"
          />
          <img
            :src=Image2
            alt="Image 2"
          />
          <img
            :src=Image3
            alt="Image 3"
          />
          <img
            :src=Image4
            alt="Image 4"
          />
        </div>
      </section>
      <Footer />
    </article>
  </div>
</template>