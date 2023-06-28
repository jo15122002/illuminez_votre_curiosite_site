<template>
    <div class="carousel">
        <FishCarouselLine :reverse="false" :items="linesItems[1]" :carousel="1" v-if="windowFull"/>
        <FishCarouselLine :reverse="true" :items="linesItems[2]" :carousel="2" v-if="windowFull" />
        <FishCarouselLine :reverse="false" :items="linesItems[3]" :carousel="3"/>
        <div v-if="!windowFull" class="buttonMobile">
          <a href="/book" class="button seeMoreButton">{{ $t('findYourFishCTAMobile') }}</a>
        </div>
    </div>
</template>

<script>
import FishCarouselLine from '~/components/FishCarouselLine.vue';
import { collection, getDocs } from "firebase/firestore";

export default {
  components: {
    FishCarouselLine
  },
  data() {
    return {
      allFishies: [],
      linesItems: {
        1: [],
        2: [],
        3: []
      },
      windowFull: true
    }
  },
  computed: {
    getLine1Fishies() {
      console.log(this.allFishies.splice(-6))
      return this.allFishies.splice(-6)
    }
  },
  created() {
    this.getAllFishies()
  },
  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  },
  methods: {
    async getAllFishies() {
      const { firestore } = useFirebase()
      const querySnapshot = await getDocs(collection(firestore, "fish"));
      querySnapshot.forEach((doc) => {
        this.allFishies.push(doc.data())
        if (this.linesItems[1].length < 6) {
          this.linesItems[1].push(doc.data())
        }else if (this.linesItems[2].length < 6) {
          this.linesItems[2].push(doc.data())
        }else if (this.linesItems[3].length < 6) {
          this.linesItems[3].push(doc.data())
        }
      })
    },
    onResize() {
      this.windowFull = window.innerWidth > 900
    }
  }
}
</script>

<style scoped>
.carousel {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.seeMoreButton {
  width: 50vw;
  top: 0;
  right: 0;
  border-radius: 7px;
}

.buttonMobile {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 900px){
  .carousel {
    justify-content: space-between;
  }
}
</style>
