<script setup>
// Components
import Header from "../../components/Header/Header.vue"
import Footer from "../../components/Footer/Footer.vue"

// Images
import CY from "../../assets/images/pfps/crystal-yang-pfp.png"
import Aruesha from "../../assets/images/pfps/aruesha.png"
import NP from "../../assets/images/pfps/noPic.png"
import Jeslyn from "../../assets/images/pfps/jeslyn.png"
import Asmitha from "../../assets/images/pfps/asmitha.png"
import Soujahs from "../../assets/images/pfps/soujahs.png"
import Abby from "../../assets/images/pfps/abby.png"
import Chaste from "../../assets/images/pfps/chaste.png"
import Eashan from "../../assets/images/pfps/eashan.png"
</script>

<template>
  <div id="page-wrapper">
    <!-- Header -->
     <Header/>

    <!-- Main -->
    <article id="main">
      <header class="special container">
        <span class="icon solid fa-users"></span>
        <h2><strong>Team</strong></h2>
      </header>

      <section class="wrapper style1 container special">
        <div class="row">
          <div class="col-4 col-12-narrower">
            <section>
              <ul class="buttons">
                <li>
                  <a href="https://yangcrystal.com/"
                    ><img
                      :src=CY
                      alt="Crystal Yang Audemy"
                      class="button small"
                  /></a>
                </li>
              </ul>
              <h2>Crystal Yang</h2>
              <h3>Founder/CEO</h3>
            </section>
          </div>
          <div class="col-4 col-12-narrower">
            <section>
              <ul class="buttons">
                <li>
                  <a href="#"
                    ><img
                      :src=Aruesha
                      alt="aruesha srivastava.jpg"
                      class="button small"
                  /></a>
                </li>
              </ul>
              <h3>Aruesha Srivastava</h3>
              <p>Cheif Operating Officer</p>
            </section>
          </div>
          <div class="col-4 col-12-narrower">
            <section>
              <ul class="buttons">
                <li>
                  <a href="#"
                    ><img
                      :src=NP
                      alt="Anmol Bal"
                      class="button small"
                  /></a>
                </li>
              </ul>
              <h3>Anmol Bal</h3>
              <p>Financial Manager</p>
            </section>
          </div>
          <div class="col-4 col-12-narrower">
            <section>
              <ul class="buttons">
                <li>
                  <a href="#"
                    ><img
                      :src=Jeslyn
                      alt="Jeslyn Chang"
                      class="button small"
                  /></a>
                </li>
              </ul>
              <h3>Jeslyn Chang</h3>
              <p>Social Media</p>
            </section>
          </div>

          <div class="col-4 col-12-narrower">
            <section>
              <ul class="buttons">
                <li>
                  <a href="#"
                    ><img
                      :src=Asmitha
                      alt="Asmitha Balamurugan"
                      class="button small"
                  /></a>
                </li>
              </ul>
              <h3>Asmitha Balamurugan</h3>
              <p>Organization Outreach</p>
            </section>
          </div>
          <div class="col-4 col-12-narrower">
            <section>
              <ul class="buttons">
                <li>
                  <a href="#"
                    ><img
                      :src=Soujahs
                      alt="Soujash Wawdhane"
                      class="button small"
                  /></a>
                </li>
              </ul>
              <h3>Soujash Wawdhane</h3>
              <p>Outreach</p>
            </section>
          </div>

          <div class="col-4 col-12-narrower">
            <section>
              <ul class="buttons">
                <li>
                  <a href="#"
                    ><img
                      :src=Abby
                      alt="Abby He"
                      class="button small"
                  /></a>
                </li>
              </ul>
              <h3>Abby He</h3>
              <p>Education Outreach</p>
            </section>
          </div>
          <div class="col-4 col-12-narrower">
            <section>
              <ul class="buttons">
                <li>
                  <a href="#"
                    ><img
                      :src=Chaste
                      alt="Shyaka Chaste"
                      class="button small"
                  /></a>
                </li>
              </ul>
              <h3>Shyaka Chaste</h3>
              <p>Front-End Developer</p>
            </section>
          </div>
          <div class="col-4 col-12-narrower">
            <section>
              <ul class="buttons">
                <li>
                  <a href="#"
                    ><img
                      :src=NP
                      alt="Yusuf Balikis"
                      class="button small"
                  /></a>
                </li>
              </ul>
              <h3>Yusuf Balikis</h3>
              <p>Social Media</p>
            </section>
          </div>
          <div class="col-4 col-12-narrower">
            <section>
              <ul class="buttons">
                <li>
                  <a href="#"
                    ><img
                      :src=Eashan
                      alt="Eashan Sadasivuni"
                      class="button small"
                  /></a>
                </li>
              </ul>
              <h3>Eashan Sadasivuni</h3>
              <p>Software Engineer</p>
            </section>
          </div>
          <div class="col-4 col-12-narrower">
            <section>
              <ul class="buttons">
                <li>
                  <a href="#"
                    ><img
                      :src=NP
                      alt="Crystal Yang"
                      class="button small"
                  /></a>
                </li>
              </ul>
              <h3>Samantha Rodrigues</h3>
              <p>UI/UX Designer</p>
            </section>
          </div>
        </div>
      </section>

      <header class="special container">
        <h2>
          <strong
            >Interested in joining? Send an email to
            connect.audemy@gmail.com</strong
          >
        </h2>
      </header>
    </article>

    <!-- Footer -->
    <Footer/>
  </div>
</template>