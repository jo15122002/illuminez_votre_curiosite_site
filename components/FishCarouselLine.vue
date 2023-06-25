<template>
  <div class="wrapper" ref="root">
    <FishCarouselLineElement
      class="element"
      v-for="i in 6"
      :key="i"
      :reverse="reverse"
    />
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { onMounted, ref, watch } from 'vue';
import FishCarouselLineElement from '~/components/FishCarouselLineElement.vue';

export default {
  props: {
    reverse: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    FishCarouselLineElement,
  },
  setup(props) {
    const root = ref(null);
    let animation = null;

    const animateCarousel = () => {
      const elements = root.value.children;
      const elementsVisible = 3;
      const speed = 2;

      animation = gsap.to(elements, {
        x: () => props.reverse ? `+=${elements[0].offsetWidth}` : `-=${elements[0].offsetWidth}`,
        modifiers: {
          x: (x, target) => {
            const newX = gsap.utils.wrap(
              0,
              elements[0].offsetWidth * (elements.length - elementsVisible),
              Math.abs(parseInt(x))
            );
            return props.reverse ? `${newX}px` : `-${newX}px`;
          },
        },
        repeat: -1,
        ease: "none",
        duration: speed,
      });
    };

    onMounted(animateCarousel);

    watch(
      () => props.reverse,
      () => {
        animation.kill();
        animateCarousel();
      }
    );

    return { root };
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 30%;
}
</style>
