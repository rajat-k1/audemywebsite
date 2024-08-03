<template>
  <section id="banner">
			<div class="inner">
				<div class="content left-content">
					<header>
						<h2>Audemy</h2>
					</header>
					<p>An Educational Platform <br />for <strong>Blind and Visually <br />Impaired</strong> students.</p>
					<RouterLink to="/play" class="button-19" id="button-19">Play</RouterLink>

				</div>
				<div class="content right-content">
					<!--	<a href="play.html" class="image-button" id="image-button"></a>-->
					<div class="image-container">
						<img :src="Imageman" alt="">
					</div>
          
				</div>
			</div>
		</section>
</template>

<script setup>
import Imageman from "../../assets/character/imageman.png"
</script>

<style scoped>

</style>
