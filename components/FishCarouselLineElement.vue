<template>
    <div class="element">
        <img :src="dataImg" alt="">
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            default: {}
        }
    },
    computed: {
        dataImg() {
            return this.item ? this.item.data : "https://cataas.com/cat/says/i'm a fish"
        }
    }
}
</script>

<style scoped>
    .element {
        height: 100%;
        aspect-ratio: 1/1;
        border-radius: 20px;
        margin: 0px;
        padding: 0px;
        padding-right: 2%;
    }

    .element img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 20px;
    }
</style>