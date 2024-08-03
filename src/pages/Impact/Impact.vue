<script setup>
// Components
import Header from "../../components/Header/Header.vue"
import Footer from "../../components/Footer/Footer.vue"
import TomTom from "./TomTomMap/TomTomMap.vue"
</script>


<template>
  <div id="page-wrapper">
    <!-- Header -->
    <Header/>


    <!-- Main -->
    <article id="main">
      <header class="special container">
        <span class="icon solid fa-hands"></span>
        <h2><strong>Impact</strong></h2>
      </header>

      <section class="wrapper style4 container" id="mapContainer">
        <h2>Collaborating Schools</h2>
        <!-- Content -->
        <div id="map" class="map"></div>

        <div class="content">
         <TomTom/>
        </div>
      </section>
      <section class="wrapper style1 container special">
        <div class="row">
          <div class="col-4 col-12-narrower">
            <section>
              <header><h3 class="bigger title">500+</h3></header>
              <header>
                <h3>Students Impacted</h3>
              </header>
              <p>
                Through our educational game collection and other initiatives,
                we have increased access to education for blind and visually
                impaired students all around the world.
              </p>
            </section>
          </div>
          <div class="col-4 col-12-narrower">
            <section>
              <header><h3 class="bigger title">2,000+</h3></header>
              <header>
                <h3>Problems Solved</h3>
              </header>
              <p>
                Users have solved and engaged in learning by answering questions
                through our educational games.
              </p>
            </section>
          </div>
          <div class="col-4 col-12-narrower">
            <section>
              <header><h3 class="bigger title">5+</h3></header>
              <header>
                <h3>Collaborating Schools</h3>
              </header>
              <p>
                Audemy has been used by students and tested by teachers at
                schools on a nationwide level.
              </p>
            </section>
          </div>
        </div>
      </section>
      <section class="wrapper style4 container">
        <!-- Content -->
        <div class="content">
          <section>
            <header>
              <h3>Affiliated Schools and Teachers</h3>
            </header>
            <h1>Schools</h1>
            <ul>
              <li>
                <a href="https://www.csb-cde.ca.gov/"
                  >California School for the Blind</a
                >
              </li>
              <li>
                <a href="https://www.tsbvi.edu/"
                  >Texas School for the Blind and Visually Impaired</a
                >
              </li>
              <li>
                <a href="https://kssb.net/">Kansas School for the Blind</a>
              </li>
              <li>
                <a href="https://www.dhs.state.il.us/page.aspx?item=84503"
                  >Illinois School for the Visually Impaired</a
                >
              </li>
              <li>
                <a href="https://asdb.az.gov/"
                  >Arizona State School for the Deaf and the Blind</a
                >
              </li>
              <li>
                <a href="https://www.katyisd.org/tompkins"
                  >Obra D. Tompkins High School</a
                >
              </li>
              <li>
                <a href="http://www.hzstjzx.cn/"
                  >HeZe Special Education Center (菏泽市特殊教育中心)</a
                >
              </li>
            </ul>
            <h1>Teachers</h1>

            <ul>
              <li>
                <a href="mailto:laura.prelsnik@asdb.az.gov">Laura Prelsnik</a>
              </li>
              <li><a href="mailto:castilloj@tsbvi.edu">John Castillo</a></li>
              <li>
                <a href="mailto:vherndon@csb-cde.ca.gov">Vanessa Herndon</a>
              </li>
              <li><a href="mailto:krhea@kssdb.org">Kimberly Rhea</a></li>
            </ul>
          </section>
        </div>
      </section>
    </article>

    <!-- Footer -->
     <Footer/>

  </div>
</template>