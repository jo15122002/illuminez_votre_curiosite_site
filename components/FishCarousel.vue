<template>
    <div class="carousel">
        <FishCarouselLine :reverse="true"/>
        <FishCarouselLine :reverse="false"/>
        <FishCarouselLine :reverse="true"/>
    </div>
</template>

<script>

</script>

<style scoped>
    .carousel {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
    }
</style>