<script setup>
// Components
import Header from "../../components/Header/Header.vue";
import Footer from "../../components/Footer/Footer.vue";

// Images
import Google from "../../assets/images/google.jpg"
import Desmos from "../../assets/images/desmosLogo.png"
import WolframAlpha from "../../assets/images/wolframAlphaLogo.png"
import Aops from "../../assets/images/aopsLogo.png"
</script>

<template>
  <div id="page-wrapper">
    <!-- Header -->
    <Header />

    <!-- Main -->
    <article id="main">
      <header class="special container">
        <span class="icon solid fa-handshake"></span>
        <h2><strong>Sponsors</strong></h2>
      </header>

      <!-- One -->
      <section class="wrapper style4 container">
        <!-- Content -->

            <!-- Two -->
            <section class="wrapper style1 container special">
              <div class="row">
                <div class="col-4 col-12-narrower">
                  <section>
                    <footer>
                      <ul class="buttons">
                        <li>
                          <a href="https://www.google.org/"
                            ><img
                              :src=Google
                              alt="Desmos"
                              class="button small"
                          /></a>
                        </li>
                      </ul>
                    </footer>
                    <header>
                      <h3>Google</h3>
                    </header>
                  </section>
                </div>
                <div class="col-4 col-12-narrower">
                  <section>
                    <footer>
                      <ul class="buttons">
                        <li>
                          <a href="https://www.desmos.com/"
                            ><img
                              :src=Desmos
                              alt="Desmos"
                              class="button small"
                          /></a>
                        </li>
                      </ul>
                    </footer>
                    <header>
                      <h3>Desmos</h3>
                    </header>
                  </section>
                </div>
                <div class="col-4 col-12-narrower">
                  <section>
                    <footer>
                      <ul class="buttons">
                        <li>
                          <a href="https://www.wolframalpha.com/"
                            ><img
                              :src=WolframAlpha
                              alt="Desmos"
                              class="button small"
                          /></a>
                        </li>
                      </ul>
                    </footer>
                    <header>
                      <h3>Wolfram Alpha</h3>
                    </header>
                  </section>
                </div>
                <div class="col-4 col-12-narrower">
                  <section>
                    <footer>
                      <ul class="buttons">
                        <li>
                          <a href="https://artofproblemsolving.com/"
                            ><img
                              :src=Aops
                              alt="Desmos"
                              class="button small"
                          /></a>
                        </li>
                      </ul>
                    </footer>
                    <header>
                      <h3>Art of Problem Solving</h3>
                    </header>
                  </section>
                </div>
              </div>
            </section>


      </section>
    </article>

    <!-- Footer -->
    <Footer />
  </div>

</template>
