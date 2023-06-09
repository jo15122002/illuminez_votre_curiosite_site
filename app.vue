<template>
  <div class="navbar">
    <img src="~/assets/images/logo.png" alt="logo" class="logo">
    <div class="navbar-items-container">
      <a href="" class="navbar-item">Réserver</a>
      <a href="" class="navbar-item">Exposition</a>
      <a href="" class="navbar-item">Contact</a>
    </div>
  </div>

  <div class="flex-row content-div">
    <div class="flex-column half-width description-container">
      <div class="description">
        <h4 class="date">Exposition de juin à décembre 2023</h4>
        <h1>Illuminez <br> votre <br> curiosité</h1>
        <div class="bloc-content">
          <p>La bioluminescence est une réaction chimique que produisent les êtres vivants pour différents usage.
          Proposez à vos enfants une nouvelle façon de découvrir et s’instruire autour des espèces bioluminescentes, 
          en les laissant en autonomie lors d’une exposition interactif.</p>
          <div class="flex-row buttons-container">
            <a href="#buySection" class="button buyButton">Acheter un ticket</a>
            <a href="#video" class="button videoButton">Vidéo de l'exposition &#x2198;</a>
          </div>
        </div>
      </div>
    </div>
    <div class="carouselContainer">
      <FishCarousel class="fishCarousel"/>
    </div>
  </div>

  <div class="fullScreen video-container" id="video">
    <video src="~/assets/video/video_lorem_ipsum.mp4" loop muted preload="metadata" autoplay ref="videoRef"></video>
  </div>

  <div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useElementVisibility } from '@vueuse/core'

const videoRef = ref(null)

const isVisible = useElementVisibility(videoRef, {
  once: false,
})

watch(isVisible, (newVisibility) => {
  if (newVisibility) {
    videoRef.value.play();
  } else {
    videoRef.value.currentTime = 0;
    videoRef.value.pause();
  }
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@600&display=swap');

body{
  margin: 0px;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.body::-webkit-scrollbar{
  display: none;
}

.navbar{
  margin: auto;
  margin-top: 3%;
  width: 90vw;
  height: 10.1vh;
  border-radius: 20px;
  background-color: #C5E2A6;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo{
  margin-left: 2.5vw;
}

.content-div{
  margin: auto;
  padding-top: 2.5%;
  width: 90vw;
  color: #02295F;
}

.bloc-content{
  width: 35vw;
}

.buttons-container{
  justify-content: space-between;
}

.carouselContainer{
  width: 54.5%;
  height: 100vh;
}

.description{
  margin-top: auto;
  margin-bottom: auto;
}

.description-container{
  display: flex;
  height: 100vh;
}

.navbar-items-container{
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.navbar-item{
  padding-left: 3.3vw;
  padding-right: 3.3vw;
  color: white;
  text-decoration: none;
  font-size: 1.4vw;
  font-family: 'Red Hat Display', sans-serif;
}

.flex-column{
  display: flex;
  flex-direction: column;
}

.flex-row{
  display: flex;
  flex-direction: row;
}

.button{
  text-decoration: none;
  display: flex;
  width: auto;
  height: auto;
  border-radius: 3.4vw;
  text-align: center;
  font-family: "Red Hat Display SemiBold", sans-serif;
  justify-content: center;
  align-items: center;
  padding-right: 1.5vw;
  padding-left: 1.5vw;

  padding-bottom: 1.8vh;
  padding-top: 1.8vh;

  font-size: 1.5vw;
}

.buyButton{
  background-color: #3AA098;
  color: white;
}

.videoButton{
  background-color: #C5E2A6;
  color: #02295F;
}

.half-width{
  width: 50%;
}

.content-div .date{
  font-family: "Red Hat Display Bold", sans-serif;
  font-size: 1.5vw;
}

.content-div h1{
  font-family: "BasteleurBold";
  font-size: 6vw;
  margin-top: 1%;
}

.content-div p{
  font-family: "Red Hat Display", sans-serif;
  font-size: 1.5vw;
  line-height: 1.5;
}

.fullscreen{
  width: 100vw;
  height: 100vh;
}

.video-container{
  overflow: hidden;
  margin: 0px;
  margin-top: 10vh;
}

.video-container video{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>