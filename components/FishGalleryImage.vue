<template>
  <div class="fish">
    <img :src="dataImg" class="imgFish">
    <p class="fishName">{{ nameImg }}</p>
    <a class="save" :download="nameImg+'.png'" :href="dataImg">
        <img src="~/assets/images/download.svg">
    </a>
  </div>
</template>

<script>
export default {
    name: 'FishGalleryImage',
    props: {
        fish: {
            type:Object,
            default: null
        }
    },
    computed: {
        dataImg() {
            return this.fish.data
        },
        nameImg() {
            return this.fish.name
        }
    }
}
</script>

<style>
.imgFish {
    height: 300px;
    border-radius: 20px;
    border: #F0F0F0 2px solid;
}

.fishName {
    position: relative;
    top: -45px;
    left: 1rem;
    font-family: 'Red Hat Display';
    font-weight: 600;
    margin: 0;
    color: #02295F;
}

.save {
    background-color: #3AA098;
    height: 57px;
    width: 57px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: -100px;
    left: 230px;
}

</style>