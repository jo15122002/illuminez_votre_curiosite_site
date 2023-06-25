<template>
    <div class="carousel">
        <FishCarouselLine :reverse="false"/>
        <FishCarouselLine :reverse="false"/>
        <FishCarouselLine :reverse="false"/>
    </div>
</template>

<script>
import FishCarouselLine from '~/components/FishCarouselLine.vue';

export default {
  components: {
    FishCarouselLine
  },
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
</style>
