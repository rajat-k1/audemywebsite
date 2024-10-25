<script>

  
</script>
<template>
  
  <section class="carousel" aria-label="Gallery">
    <ol class="carousel__viewport">
      
      <li id="carousel__slide1" tabindex="0" class="carousel__slide">
        <div class="carousel__snapper">
          <a href="#carousel__slide6" class="carousel__prev"></a>
          <a href="#carousel__slide2" class="carousel__next"></a>
        </div>
      </li>
      
      <li id="carousel__slide2" tabindex="0" class="carousel__slide">
        <div class="carousel__snapper"></div>
        <a href="#carousel__slide1" class="carousel__prev"></a>
        <a href="#carousel__slide3" class="carousel__next"></a>
      </li>
      
      <li id="carousel__slide3" tabindex="0" class="carousel__slide">
        <div class="carousel__snapper"></div>
        <a href="#carousel__slide2" class="carousel__prev"></a>
        <a href="#carousel__slide4" class="carousel__next"></a>
      </li>
      
      <li id="carousel__slide4" tabindex="0" class="carousel__slide">
        <div class="carousel__snapper"></div>
        <a href="#carousel__slide3" class="carousel__prev"></a>
        <a href="#carousel__slide5" class="carousel__next"></a>
      </li>
      
      <li id="carousel__slide5" tabindex="0" class="carousel__slide">
        <div class="carousel__snapper"></div>
        <a href="#carousel__slide4" class="carousel__prev"></a>
        <a href="#carousel__slide6" class="carousel__next"></a>
      </li>
      
      <li id="carousel__slide6" tabindex="0" class="carousel__slide">
        <div class="carousel__snapper"></div>
        <a href="#carousel__slide5" class="carousel__prev"></a>
        <a href="#carousel__slide1" class="carousel__next"></a>
      </li>
      
    </ol>
    <!--
    <aside class="carousel__navigation">
      
      <ol class="carousel__navigation-list">
        <li class="carousel__navigation-item">
          <a href="#carousel__slide1"
             class="carousel__navigation-button">Go to slide 1</a>
        </li>
        <li class="carousel__navigation-item">
          <a href="#carousel__slide2"
             class="carousel__navigation-button">Go to slide 2</a>
        </li>
        <li class="carousel__navigation-item">
          <a href="#carousel__slide3"
             class="carousel__navigation-button">Go to slide 3</a>
        </li>
        <li class="carousel__navigation-item">
          <a href="#carousel__slide4"
             class="carousel__navigation-button">Go to slide 4</a>
        </li>
        <li class="carousel__navigation-item">
          <a href="#carousel__slide5"
             class="carousel__navigation-button">Go to slide 5</a>
        </li>
        <li class="carousel__navigation-item">
          <a href="#carousel__slide6"
             class="carousel__navigation-button">Go to slide 6</a>
        </li>
      </ol>
      
    </aside>
    -->
  </section>
</template>

<style scoped>
  @keyframes tonext {
    75% {
      left: 0;
    }
    95% {
      left: 100%;
    }
    98% {
      left: 100%;
    }
    99% {
      left: 0;
    }
  }

  @keyframes tostart {
    75% {
      left: 0;
    }
    95% {
      left: -300%;
    }
    98% {
      left: -300%;
    }
    99% {
      left: 0;
    }
  }

  @keyframes snap {
    96% {
      scroll-snap-align: center;
    }
    97% {
      scroll-snap-align: none;
    }
    99% {
      scroll-snap-align: none;
    }
    100% {
      scroll-snap-align: center;
    }
  }

  body {
    width: 34.5rem;
    margin: 0 auto;
    padding: 0 1.25rem;
  }

  * {
    box-sizing: border-box;
    scrollbar-color: transparent transparent; /* thumb and track color */
    scrollbar-width: 0px;
  }

  *::-webkit-scrollbar {
    width: 0;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background: transparent;
    border: none;
  }

  * {
    -ms-overflow-style: none;
  }

  ol, li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .carousel {
    position: absolute;
    top: 7rem;
    left: 6rem;
    padding-top: 43.6%;
    filter: drop-shadow(0 0 10px #0003);
    perspective: 100px;
    width: 610px;
    border-radius: 2px;
  }

  .carousel__viewport {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    overflow-x: scroll;
    counter-reset: item;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    border-radius: 6px;
  }

  .carousel__slide {
    position: relative;
    flex: 0 0 100%;
    width: 100%;
    background-color: #f99;
    counter-increment: item;
    background-repeat: no-repeat;
    background-size: contain;
    border-radius: 6px;
  }

  .carousel__slide:nth-child(even) {
    background-color: #99f;
  }

  /* Reserved for Content */
  .carousel__slide:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%,-40%,70px);
    color: #fff;
    font-size: 2em;
  }

  .carousel__snapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    scroll-snap-align: center;
  }

  @media (hover: hover) {
    .carousel__snapper {
      animation-name: tonext, snap;
      animation-timing-function: ease;
      animation-duration: 8s;
      animation-iteration-count: infinite;
    }

    .carousel__slide:last-child .carousel__snapper {
      animation-name: tostart, snap;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .carousel__snapper {
      animation-name: none;
    }
  }

  .carousel:hover .carousel__snapper,
  .carousel:focus-within .carousel__snapper {
    animation-name: none;
  }

  .carousel__navigation {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    text-align: center;
  }

  .carousel__navigation-list,
  .carousel__navigation-item {
    display: inline-block;
  }

  /* .carousel__navigation-button {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    background-color: #333;
    background-clip: content-box;
    border: 0.25rem solid transparent;
    border-radius: 50%;
    font-size: 0;
    transition: transform 0.1s;
  } */

  .carousel::before,
  .carousel::after,
  .carousel__prev,
  .carousel__next {
    position: absolute;
    top: 0;
    margin-top: 37.5%;
    width: 4rem;
    height: 4rem;
    transform: translateY(-50%);
    border-radius: 50%;
    font-size: 0;
    outline: 0;
  }

  .carousel::before,
  .carousel__prev {
    /* background-image: url("/src/assets/images/impact/carousel/leftChevron.svg"); */
    left: -1rem;
  }

  .carousel::after,
  .carousel__next {
    /* background-image: url("/src/assets/images/impact/carousel/rightChevron.svg"); */
    right: -1rem;
    
  }

  .carousel::before,
  .carousel::after {
    content: '';
    z-index: 1;
    /* background-color: #333; */
    background-size: 1.5rem 1.5rem;
    background-repeat: no-repeat;
    background-position: center center;
    color: #fff;
    font-size: 2.5rem;
    line-height: 4rem;
    text-align: center;
    pointer-events: none;
  }

 .carousel::before {
    background-image: url("/src/assets/images/impact/carousel/leftChevron.svg");
  }

  .carousel::after {
    background-image: url("/src/assets/images/impact/carousel/rightChevron.svg");
  }

  #carousel__slide1 {
    background-image: url("/src/assets/images/impact/carousel/carousel1.jpg");
    background-position: center;
    
  }
  #carousel__slide2 {
    background-image: url("/src/assets/images/impact/carousel/carousel2.png");
    background-position: center;
    background-size: cover;
  }
  #carousel__slide3 {
    background-image: url("/src/assets/images/impact/carousel/carousel3.png");
    background-position: center;
    background-size: cover;
  }
  #carousel__slide4 {
    background-image: url("/src/assets/images/impact/carousel/carousel4.png");
    background-position: center;
    background-size: cover;
  }
  #carousel__slide5 {
    background-image: url("/src/assets/images/impact/carousel/carousel5.png");
    background-position: center;
    background-size: cover;
  }
  #carousel__slide6 {
    background-image: url("/src/assets/images/impact/carousel/carousel6.jpeg");
    background-position: center;
    background-size: cover;
  }

</style>