<template>
    <div>
        <NavbarCustom></NavbarCustom>
        <div class="content">
            <div v-for="item in pages[page-1]" :key="item.data">
                <FishGalleryImage :fish="item"></FishGalleryImage>
            </div>
        </div>
        <div class="pages">
            <div v-for="pageC in numberOfPage" :key="pageC">
                <div :class="page === pageC ? 'page selected' : 'page'" @click="pageChange(pageC)">
                    <p class="margin:auto">{{pageC}}</p>
                </div>
            </div>
        </div>
        <FindUs class="find"></FindUs>
        <Footer></Footer>
    </div>
</template>

<script>
import NavbarCustom from '@/components/navBar.vue'
import FishGalleryImage from '@/components/FishGalleryImage.vue'
import FindUs from '@/components/FindUs.vue'
import Footer from '@/components/Footer.vue'
import { collection, getDocs } from "firebase/firestore";
export default {
    components: {NavbarCustom, FishGalleryImage, FindUs, Footer},
    data() {
        return {
            fishies: [],
            page: 1,
            pages: [[]]
        }
    },
    computed: {
        numberOfPage() {
            console.log(this.fishies.length)
            return Math.ceil(Math.abs(this.fishies.length / 15))
        },
        getFishPage() {
            console.log(this.fishies)
            return this.fishies.splice(-15)
        }
    },
    created() {
        this.getAllFishies()
    },
    methods: {
        async getAllFishies() {
            const { firestore } = useFirebase()
            try {
                const querySnapshot = await getDocs(collection(firestore, "fish"));
                querySnapshot.forEach((doc) => {
                    this.fishies.push(doc.data())
                    let currentPage = this.pages.length - 1
                    if (this.pages[currentPage].length === 15) {
                        currentPage += 1
                        this.pages[currentPage] = []
                    }
                    this.pages[currentPage].push(doc.data())
                })
            } catch(err) {
                console.error("writeToDB failed. reason :", err)
            }
            
        },
        pageChange(page) {
            window.scrollTo({ top: 0 })
            this.page = page
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@700&display=swap');

.content {
    display: flex;
    justify-content: space-around;
    width: 91.7vw;
    flex-wrap: wrap;
    position: relative;
    margin: auto;
    margin-top: 5%;
}

.pages {
    margin: auto;
    width: 91.7vw;
    display: flex;
    justify-content: center;
    margin-bottom: 5%;
}

.page {
    height: 57px;
    width: 57px;
    border: #3AA098 1px solid;
    border-radius: 20px;
    text-align: center;
    margin-left: 2vw;
    font-family: 'Red Hat Display';
    font-weight: 600;
}

.selected {
    background-color: #3AA098;
}

.find {
    margin-bottom: 5vh;
}

.button{
  text-decoration: none;
  display: flex;
  width: auto;
  height: auto;
  border-radius: 3.4vw;
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
  color: white;
  margin-right: 27px;
}

@media (max-width: 900px){
    .buttons-container .buyButton{
        font-size: 1.25rem;
        margin-bottom: 5vh;
    }
}
</style>