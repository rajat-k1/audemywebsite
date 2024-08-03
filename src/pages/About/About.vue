<script setup>
// Components
import Header from "../../components/Header/Header.vue"
import Footer from "../../components/Footer/Footer.vue"

// Images
import PhotoS1 from "../../assets/images/photos size (1).png"
import PhotoS3 from "../../assets/images/photos size (3).png"
</script>
<template>
  <div id="page-wrapper" class="no-sidebar">
    	<!-- Header -->
    <Header/>

		<!-- Main -->
		<article id="main">

			<header class="special container">
				<span class="icon solid fa-info"></span>
				<h2><strong>About US</strong></h2>

			</header>

			<!-- One -->
			<section class="wrapper style4 container">

				<!-- Content -->
				<div class="content">
					<section>
						
						<header>
							<h3>About Audemy</h3>
						</header>
						<p>Over 70% of blind students are at least a grade level behind in school.

							Audemy aims to increase accessibility for educational resources to blind and visually
							impaired learners.

							Audemy is a collection of audio-based educational games aimed for Kindergarten to 8th grade students
							based on international learning curriculums.
            </p>
								
					</section>
				</div>

			</section>
			<section class="wrapper style3 container special">


			<div class="row">
					<div class="col-6 col-12-narrower">

							<section>
									<a href="#" class="image featured"><img :src=PhotoS1 alt="" /></a>
									<header>
											<h3>Student at Arizona State Schools for the Deaf and the Blind Using Audemy</h3>
									</header>

							</section>

					</div>
					<div class="col-6 col-12-narrower">

							<section>
									<a href="#" class="image featured"><img :src=PhotoS3 alt="" /></a>
									<header>
											<h3>Visually Impaired User on Audemy's Game Interface</h3>
									</header>

							</section>

					</div>
			</div>
				</section>
			<!-- Two -->
			<header class="special container">
				<span class="icon solid fa-book-open"></span>
				<h2>Our Story
				</h2>
				<p>Our founder, Crystal Yang, learned that blind and visually
					impaired people were unable to play her favorite word game, Wordle, as it relied heavily on
					visual interaction. 
				<h2>
					<br />
				</h2>

				After learning about the unequal access to educational resources that blind and visually
				impaired people face, Crystal founded Audemy, aiming to provide an educational resource for
				blind and visually impaired students all around the world.
				</p>
			</header>

		</article>

		<!-- Footer -->
		<Footer/>

</div>
</template>



<style lang="scss" scoped></style>
