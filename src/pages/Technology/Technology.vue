<script setup>
// Components
import Header from "../../components/Header/Header.vue";
import Footer from "../../components/Footer/Footer.vue";

// Images
import Researchpic from "../../assets/images/researchpic.png"
import GoogleCloud from "../../assets/images/googlecloud.png"
import ScreenReader from "../../assets/images/screenReaders.png"
</script>

<template>
  <div id="page-wrapper">
    <!-- Header -->
    <Header />

    <!-- Main -->
    <article id="main">
      <header class="special container">
        <span class="icon solid fa-laptop"></span>
        <h2><strong>Technology</strong></h2>
      </header>

      <!-- One -->
      <section class="wrapper style3 container special">
        <div class="row">
          <div class="col-6 col-12-narrower">
            <section>
              <a
                href="https://dl.acm.org/doi/10.1145/3610661.3617150"
                class="image featured"
                ><img :src=Researchpic alt=""
              /></a>
              <header>
                <h3>Conversational Interface Game Research</h3>
              </header>
              <p>
                Audemy's games were optimized through a
                <b>novel and rigourous</b> testing methodology. We have
                <b>researched and published studies</b> about conversational
                interfaces at
                <b>prestigous international research venues </b>such as the
                <b
                  >Association for Computing Machinery's International
                  Conference on Multimodal Interaction '23</b
                >, where we presented our research to scholars in the field in
                <b>Paris, France</b>.
              </p>
            </section>
          </div>
          <div class="col-6 col-12-narrower">
            <section>
              <a
                href="https://cloud.google.com/learn/what-is-natural-language-processing"
                class="image featured"
                ><img :src=GoogleCloud alt=""
              /></a>
              <header>
                <h3>Google Cloud Natural Language Processing</h3>
              </header>
              <p>
                Google Cloud's Natural language processing (NLP) uses machine
                learning to convert speech into text. With natural language
                processing applications, Audemy can communicate with users
                through a puerly audio-based interface.
              </p>
            </section>
          </div>
        </div>
        <div class="row">
          <div class="col-6 col-12-narrower">
            <section>
              <a href="#" class="image featured"
                ><img :src=ScreenReader alt=""
              /></a>
              <header>
                <h3>Screen Reader Compatability</h3>
              </header>
              <p>
                Audemy's game interface is created with a
                <b>simplistic design</b> so that
                <b>blind and visually impaired students</b>
                can easily navigate the different availible games with
                <b>only a keyboard</b>. Users use <b>arrow keys</b> to listen to
                game options and select games, and can answer questions through
                other keystrokes.
              </p>
            </section>
          </div>
        </div>
      </section>
    </article>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<style lang="scss" scoped></style>
