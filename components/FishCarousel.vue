<template>
    <div class="carousel">
        <FishCarouselLine :reverse="false" :items="linesItems[1]" :carousel="1"/>
        <FishCarouselLine :reverse="true" :items="linesItems[2]" :carousel="2"/>
        <FishCarouselLine :reverse="false" :items="linesItems[3]" :carousel="3"/>
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
      }
    }
  },
  computed: {
    getLine1Fishies() {
      console.log(this.allFishies.splice(-6))
      return this.allFishies.splice(-6)
    }
  },
  watch: {
  },
  created() {
    this.getAllFishies()
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
        justify-content: space-between;
    }

    @media (max-width: 1200px){
      .no-mobile {
        display: none;
      }
    }
</style>
