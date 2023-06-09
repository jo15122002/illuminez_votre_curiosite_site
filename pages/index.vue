<template>
  <NavbarCustom></NavbarCustom>

  <div class="flex-row content-div" data-aos="fade-up" data-aos-duration="800">
    <div class="flex-column description-container">
      <div class="description">
        <h4 class="date">&nbsp;{{ $t('description.date') }}</h4>
        <h1>Illuminez<br>votre<br>curiosité</h1>
        <div class="bloc-content">
          <p>{{ $t('description.content') }}</p>
          <div class="flex-row buttons-container">
            <a href="#buySection" class="button buyButton">{{ $t('description.button.book') }}</a>
            <a href="#video" class="button videoButton flex-row">{{ $t('description.button.video') }} &nbsp; <div class="arrowsvg backBlue"></div></a>
          </div>
        </div>
        <div class="carouselContainer">
          <FishCarousel class="fishCarousel"></FishCarousel>
        </div>
      </div>
    </div>
  </div>

  <div class="fullScreen video-container" id="video">
    <img class="sound-indicator" :src="soundIndicatorSrc" alt=""/>
    <video src="~/assets/video/bioluminescence.mp4" loop muted preload="metadata" autoplay ref="videoRef" @click="toggleMute"></video>
  </div>

  <div id="discover" class="flex-row content-div" data-aos="fade-up" data-aos-duration="800">
    <div class="flex-column description-container">
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
      <DiscoverCard :title="title1" :description="description1" data-aos="fade-up" data-aos-duration="800"/>
      <DiscoverCard :title="title2" :description="description2" data-aos="fade-up" data-aos-duration="1000"/>
      <DiscoverCard :title="title3" :description="description3" data-aos="fade-up" data-aos-duration="1200"/>
    </div>

    <section data-aos="fade-up" data-aos-duration="800">
      <BookingSection id="buySection"></BookingSection>
    </section>

    <div class="findUsContainer flex-row" data-aos="fade-up" data-aos-duration="800">
      <FindUs></FindUs>
    </div>

    <Footer id="footer"></Footer>
</template>

<script setup>
import { ref } from 'vue'
import { useElementVisibility } from '@vueuse/core'

import AOS from 'aos';
import 'aos/dist/aos.css';

const title1 = "La réaction chimique"
const description1 = "Connais-tu les poissons lanternes ? Ce sont des poissons bioluminescents, ça veut dire qu'ils produisent leur propre lumière grâce à une série de réactions chimiques."

const title2 = "Les usages"
const description2 = "À quoi sert cette bioluminescence ? Sous l'océan, chaque être vivant l’utilise pour une raison bien précise : se reproduire, chasser, se camoufler ou se protéger par exemple."

const title3 = "L’écosystème"
const description3 = "Tous ces êtres vivants cohabitent ensemble dans l’océan, ils se chassent, se reproduisent et nagent ensemble. C’est ce qu’on appelle un écosystème."


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

onMounted(() => {
  AOS.init({
    once: true, // Animation exécutée une seule fois
    offset: 200, // Décalage avant l'apparition de l'élément (en pixels)
    duration: 800, // Durée de l'animation (en millisecondes)
    easing: 'ease-in-out', // Type d'interpolation de l'animation
  });
});

</script>

<script>
import Footer from '@/components/Footer.vue'
import FindUs from '@/components/FindUs.vue'
import NavbarCustom from '@/components/navBar.vue'
import { gsap } from 'gsap'
export default {
  data() {
    return {
      soundIndicatorSrc: '/images/sound-off.png',
    };
  },
  computed: { NavbarCustom, FindUs, Footer },
  methods: {
    toggleMute() {
      const video = this.$refs.videoRef;
      video.muted = !video.muted;

      gsap.set(".sound-indicator", {opacity: 0});

      this.soundIndicatorSrc = video.muted ? '/images/sound-off.png' : '/images/sound-on.png'
      setTimeout(() => {
        this.soundIndicatorAnimation = gsap.to(".sound-indicator", {duration: 0.66, opacity: 1, yoyo: true, repeat: 1})
      }, 100)
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

html{
  scroll-behavior: smooth;
}

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
  height: 100%;
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
  display: flex;
  flex-wrap: wrap;
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
  height: 100.5vh;
  position: absolute;
  top: 20vh;
  right: 3vw;
}

.description{
  margin-top: auto;
  margin-bottom: auto;
}

.description h1{
  font-family: 'BasteleurBold';
  font-style: normal;
  color: #02295F;
  font-weight: 400;
  font-size: 90px;
  line-height: 122px;
}

.description-container{
  display: flex;
  height: 100vh;
  width: 40vw;
}

#discover .description-container{
  width: 100%;
  background: url("~/assets/images/meduse.png") no-repeat center center;
  background-position: 80% 130%;
}

#discover .description-container h1{
  width: 50%;
}

.navbar-items-container{
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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
  border-radius: 7% / 25%;
  text-align: center;
  justify-content: space-around;
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
  border: #3AA098 1px solid;
  color: white;
  margin-right: 27px;
}

.buyButton:hover{
  background-color: white;
  color: #3AA098;
  margin-right: 27px;
  transition: 0.2s ease;
}

.buyButton:hover .arrowsvg{
  background-color: #3AA098;
}

.videoButton{
  background-color: #C5E2A6;
  border : #C5E2A6 1px solid;
  color: #02295F;
}

.videoButton:hover{
  background-color: #02295F;
  color: #C5E2A6;
  transition: 0.2s ease;
}

.videoButton:hover .arrowsvg{
  background-color: #C5E2A6;
  transition: 0.2s ease;
}

.seeMoreButton{
  background-color: #3AA098;
  color: white;
  position: relative;
  width: 10vw;
  top: -29%;
  right: -72%;
  border: 1px solid #3AA098;
}

.seeMoreButton:hover{
  background-color: white;
  color: #3AA098;
  transition: 0.2s ease;
}

.seeMoreButton:hover .arrowsvg{
  background-color: #3AA098;
  transition: 0.2s ease;
}

.seeMoreDescription{
  position: relative;
  width: 44%;
  bottom: 20%;
  margin-right: 19%;
  margin-left: auto;
  font-family: 'Red Hat Display';
  font-weight: 600;
  font-size: 28px;
  line-height: 37px;
  text-decoration: none;
  background-color: #F0F0F0;
  border-radius: 20px;
  padding: 2vh;
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
  font-family: "BasteleurBold";
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
  margin-top: 20vh;
  aspect-ratio: 16/9;
  position: relative;
}

.video-container video{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.sound-indicator{
  filter: invert(100%);
  width: 10%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.5);
  padding: 1%;
  border-radius: 50%;
  opacity: 0%;
}

#discover{
  padding-top: 0px;
}

.discoverCardContainer{
  justify-content: space-between;
  width: 90%;
  margin: auto;
}

.findUsContainer{
  justify-content: space-around;
  margin-bottom: 5%;
  margin-top: 5%;
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

.footer .navbar-item{
  color: white !important;
}

.copyright{
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  margin-top: 6%;
}

.adress{
  font-family: "Red Hat Display";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  margin-top: 2%;
  color: #02295F;
}

.arrowsvg{
  height: 24px;
  aspect-ratio: 1/1;
  -webkit-mask: url("./assets/images/arrow.svg") no-repeat center;
  mask: url("./assets/images/arrow.svg") no-repeat center;
}

.backWhite{
  background-color: white;
}

.backGreen{
  background-color: #3AA098;
}

.backBlue{
  background-color: #02295F;
}

@media screen and (max-width: 900px) {
  .description-container{
    width: 90vw;
    height: max-content;
  }
  .description {
    width: 90vw;
  }

  .bloc-content {
    width: 90vw;
  }

  .carouselContainer {
    width: 100vw;
    height: 410px;
    position: relative;
    top: 5vh;
    left:-10vw
  }

  #discover .description-container{
    background-position: 200% 120%;
  }

  #discover .description-container h1{
    width: 75%;
  }

  .content-div{
    width: 80vw;
  }
}

@media screen and (max-width: 900px) {
  .content-div .date{
    font-size: 18px;
    margin-bottom: 2vh;
  }
}

</style>

<style>

@media (max-width: 900px){
  .no-mobile {
    display: none;
  }

  .bloc-content{
    flex-direction: column;
  }
  
  .content-div{
    flex-direction: column;
    height: max-content;
    margin-top: 10vh;
  }

  .discoverCardContainer{
    flex-direction: column;
  }

  .navbar{
    flex-direction: column;
    height: auto;
    width: 100%;
    position: absolute;
    left: 0%;
    display: none;
    height: 15vh;
    justify-content: center;
  }

  .content-div h1 {
    font-size: 3rem;
    line-height: 100%;
  }

  #discover {
    margin-bottom: 10vh;
  }

  .buttons-container{
    flex-direction: column;
    width: 100%;
    margin-top: 5vh;
  }

  .buttons-container .button{
    font-size: 5vw;
    border-radius: 7% / 30%;
    padding-top: 1vh;
    padding-bottom: 1vh;
  }

  .buttons-container .videoButton {
    margin-top: 5%;
    margin-right: 25%;
  }

  .buttons-container .buyButton{
    margin-right: 40%;
    font-size: 1.25rem;
  }

  .button {
    font-size: 1.25rem;
  }
}
</style>