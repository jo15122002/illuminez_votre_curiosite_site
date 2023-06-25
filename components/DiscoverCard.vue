<template>
    <div class="card">
        <div class="logoPin">
            <img :src=props.logoPath alt="">
        </div>
        <br>
        <h1>{{ $t(props.title) }}</h1>
        <p>{{ $t(props.description) }}</p>
        <a :href=props.buttonRef class="button">{{ $t("seeMore") }}</a>
    </div>
</template>

<script setup>
const props = defineProps({
  logoPath: {
    type: String,
    default: "_nuxt/assets/images/labo.png",
  },
  title: {
    type: String,
    default: "La réaction chimique",
  },
  description: {
      type: String,
      default: "La bioluminescence est une réaction chimique que produisent les êtres vivants pour différents usage.",
  },
  buttonRef: {
      type: String,
      default: "#video",
  },
});
</script>

<style scoped>
    .card{
        width: 21.4vw;
    }

    .logoPin{
        width: 160px;
        border-radius: 50%;
        background-color: #3aa098;
        display: flex;
        justify-content: center;
        align-items: center;
        aspect-ratio: 1/1;
    }
    h1{
        font-family: 'Red Hat Display';
        font-weight: 700;
        font-size: 30px;
        margin-top: 1rem;
    }

    p{
        font-family: 'Red Hat Display';
        font-size: 24px;
        margin-top: 1rem;
        height: 34%;
    }

    .button{
        text-decoration: none;
        display: flex;
        width: 48%;
        height: auto;
        color: #3aa098;
        border-radius: 3.4vw;

        background-color: #fefcf8;
        border: 2px solid #3aa098;

        text-align: center;
        justify-content: center;
        align-items: center;

        font-family: 'Red Hat Display';
        font-weight: 600;
        font-size: 28px;
        line-height: 37px;
    }
</style>