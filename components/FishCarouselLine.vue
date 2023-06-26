<template>
  <div class="wraper">
    <div :class="i === 1 ? 'image-div one image-div'+carousel : 'image-div image-div'+carousel" v-for="i in 6" :key="i">
          <img :data-index="i" :src="items[i] ? items[i].data : ``" style='width: 300px' alt="">
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
    const imgArrConst = gsap.utils.toArray(".image-div"+this.carousel+" img")

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
          let rightPositioning = (300 * 5) + maxLeftTravel
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

img {
  padding: 0vw;
  position: absolute
}

.image-div {
  width: 300px;
  position: absolute;
  left: 0;
}
</style>
