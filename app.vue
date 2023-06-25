<template>
  <div class="navbar">
    <img src="~/assets/images/logo.png" alt="logo" class="logo">
    <div class="navbar-items-container">
      <a href="" class="navbar-item">{{ $t('navbar.book') }}</a>
      <a href="" class="navbar-item">{{ $t('navbar.exhibition') }}</a>
      <a href="" class="navbar-item">{{ $t('navbar.contact') }}</a>
    </div>
  </div>

  <div class="flex-row content-div">
    <div class="flex-column half-width description-container">
      <div class="description">
        <h4 class="date">&nbsp;{{ $t('description.date') }}</h4>
        <h1>{{ $t('description.title') }}</h1>
        <div class="bloc-content">
          <p>{{ $t('description.content') }}</p>
          <div class="flex-row buttons-container">
            <a href="#buySection" class="button buyButton">{{ $t('description.button.book') }}</a>
            <a href="#video" class="button videoButton">{{ $t('description.button.video') }}</a>
          </div>
        </div>
      </div>
    </div>
    <div class="carouselContainer">
      <FishCarousel class="fishCarousel"/>
    </div>
  </div>

  <div class="fullScreen video-container" id="video">
    <video src="~/assets/video/bioluminescence.mp4" loop muted preload="metadata" autoplay ref="videoRef" @click="toggleMute"></video>
  </div>

  <div id="discover" class="flex-row content-div">
    <div class="flex-column half-width description-container">
      <div class="description">
        <h1>{{ $t('discover.title') }}</h1>
        <div class="bloc-content">
          <p>{{ $t('discover.content') }}</p>
          <div class="flex-row buttons-container">
            <a href="#buySection" class="button buyButton">{{ $t('discover.button.book') }}</a>
          </div>
        </div>
      </div>
    </div>
    <div id="jellyfish">
    </div>
    </div>
    <div class="discoverCardContainer flex-row">
      <DiscoverCard/>
      <DiscoverCard/>
      <DiscoverCard/>
    </div>

    <section>
      <BookingSection ></BookingSection>
    </section>

    <div class="findUs flex-row">
      <img src="./assets/images/damier.png" alt="">
      <div class="description">
        <h1>{{ $t('findUs.title') }}</h1>
        <div class="bloc-content">
          <p>{{ $t('findUs.content') }}</p>
          <div class="flex-row buttons-container">
            <a href="#buySection" class="button buyButton">{{ $t('findUs.button.exhibition') }}</a>
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="navbar-items-container">
        <a href="" class="navbar-item">{{ $t('footer.links.book') }}</a>
        <a href="" class="navbar-item">{{ $t('footer.links.exhibition') }}</a>
        <a href="" class="navbar-item">{{ $t('footer.links.contact') }}</a>
      </div>
      <div class="copyright">&copy;Illuminez votre curiosité 2023</div>
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

<script>
export default {
  methods: {
    toggleMute() {
      const video = this.$refs.videoRef;
      video.muted = !video.muted;
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');


.full-screen-section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 1em;
    box-sizing: border-box;
  
}

#jellyfish {
  background: url("~/assets/images/meduse.png") no-repeat center center;
  background-position: 80% 130%;
  width:100%;
}

body{
  margin: 0px;
  background-color: #fefcf8;
}

*{
  -ms-overflow-style: none;
  scrollbar-width: none;
}

*::-webkit-scrollbar{
  display: none;
}

.navbar{
  margin: auto;
  margin-top: 3%;
  width: 91.7vw;
  height: 11.8vh;
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

.bloc-content p{
  width: 93%;
  font-size: 24px;
  line-height: 32px;
}

.buttons-container{
  width: 93%;
}

.carouselContainer{
  width: 54.5%;
  height: 100vh;
}

.description{
  margin-top: auto;
  margin-bottom: auto;
}

.description h1{
  font-family: 'Basteleur';
  font-style: normal;
  color: #02295F;
  font-weight: 400;
  font-size: 90px;
  line-height: 122px;
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
  font-family: 'Red Hat Display';
  font-weight: 600;
  font-size: 28px;
  line-height: 37px;
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
  justify-content: center;
  align-items: center;
  padding-right: 1.5vw;
  padding-left: 1.5vw;

  padding-bottom: 1.8vh;
  padding-top: 1.8vh;

  font-family: 'Red Hat Display';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 37px;
}

.buyButton{
  background-color: #3AA098;
  color: white;
  margin-right: 27px;
}

.videoButton{
  background-color: #C5E2A6;
  color: #02295F;
}

.half-width{
  width: 50%;
}

.content-div .date{
  font-family: "Red Hat Display";
  font-style: normal;
  font-size: 24px;
  line-height: 32px;
}

.content-div h1{
  font-family: "Basteleur";
  font-style: normal;
  font-size: 90px;
  line-height: 112px;
  margin-top: 1%;
  margin-bottom: 0px;
}

.content-div p{
  font-family: "Red Hat Display";
  font-style: normal;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 84px;
}

.fullscreen{
  width: 100vw;
  height: 100vh;
}

.video-container{
  overflow: hidden;
  margin: 0px;
  margin-top: 10vh;
  aspect-ratio: 16/9;
}

.video-container video{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

#discover{
  padding-top: 0px;
}

.discoverCardContainer{
  justify-content: space-between;
  width: 84.9%;
  margin: auto;
}

.findUs{
  justify-content: space-around;
  margin-bottom: 5%;
}

.footer{
  width: 100%;
  background-color: #3aa098;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding-top: 3%;
  padding-bottom: 2%;
}

.copyright{
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  margin-top: 6%;
}
</style>