<template>
  <div class="wraper">
    <div :class="i === 1 ? 'image-div one image-div'+carousel : 'image-div image-div'+carousel" v-for="i in 6" :key="i">
      <div :data-index="i" class="imgC">
        <img :src="items[i] ? items[i].data : ``" style="width:300px">
      </div>
    </div>
    <div class="seeMore" v-if="carousel === 3">
        <a href="/book" class="button seeMoreButton">{{ $t('seeMore') }}</a>
        <p class="seeMoreDescription">Retrouvez votre poisson personnalisé lors de l’exposition</p>
      </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import FishCarouselLineElement from '~/components/FishCarouselLineElement.vue';

export default {
  props: {
    reverse: {
      type: Boolean,
      default: false,
    },
    items: {
      type:Array,
      default: []
    },
    carousel: {
      type: Number,
      default:1
    }
  },
  components: {
    FishCarouselLineElement,
  },
  mounted() {
    const imgArrConst = gsap.utils.toArray(".image-div"+this.carousel+" .imgC")

    gsap.set(imgArrConst, {left: 0})

    let imagesPosition = 0

    let totalW = 0
    
    let imgWidths = {}
      
    imgArrConst.map((img,i) => {
      let imgWidth = img.getBoundingClientRect().width
      //initial left position depending on previous photos
      let leftPosition = imagesPosition
      //positioning the images before moving them
      gsap.set(img, {left: (leftPosition)  } )
      imagesPosition += imgWidth
      //calculating total imgs width
      totalW += imgWidth
      //create hash of width per index
      imgWidths[i] = totalW
    })


    let additionalX = { val: 0 };
    let offset = 0;

    gsap.to(imgArrConst, {
      x: this.reverse ? `+=${totalW}` : `-=${totalW}`,
      duration: 80,
      repeat: -1,
      ease: 'none',
      modifiers: {
        x: (x,arr) => {
          const imgIndex = arr.getAttribute('data-index')

          let maxLeftTravel = -imgWidths[imgIndex]

          //figuring out what is it's maxrightposition so i can wrap it         
          let rightPositioning = (330 * 5) + maxLeftTravel
          //wrapping 
          var mod = gsap.utils.wrap(maxLeftTravel, rightPositioning)
          offset += additionalX.val       
          return `${mod(parseFloat(x) + offset) }px`
        } 
      }
    })
  }
}
</script>

<style scoped>
.wraper {
  display: inline-flex;
  position: relative;
  height: 30%;
}

.image-div {
  width: 300px;
  position: absolute;
  left: 0;
}

.imgC {
  width: 330px;
  height: 300px;
  position: absolute;
  
}

img {
  border: #F0F0F0 2px solid;
  border-radius: 20px;
}

.seeMore {
  height: 302px;
  width: 450px;
  background-color: #F0F0F0;
  position: absolute;
  right: 0;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  align-items: flex-end;
}

.button {
  position: relative;
  right: 1vw;
  top: 2vh;
}

.seeMoreDescription {
  background-color: transparent;
  margin: 0;
  bottom: -7vw;
  width: 90%;
}

@media (max-width: 1250px){
  .seeMore {
    width: 50vw;
  }
}
</style>
