<template>
    <div class="card">
        <div class="logoPin">
            <img :src="logoPath" alt="">
        </div>
        <br>
        <h1>{{ $t(title) }}</h1>
        <p>{{ $t(description) }}</p>
        <a :href=buttonRef class="button">{{ $t("seeMore") }}<div class="arrowsvg backGreen"></div></a>
    </div>
</template>


<script>
export default {
    props: {
        logoPath: {
            type: String,
            default: "/images/labo.png",
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
        }
    },
}
</script>

<style scoped>
    .card{
        width: 21.4vw;
        color: #02295F;
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
        width: 40%;
        height: auto;
        color: #3aa098;
        border-radius: 10% / 20%;

        background-color: #fefcf8;
        border: 2px solid #3aa098;

        text-align: center;
        justify-content: space-around;
        align-items: center;

        font-family: 'Red Hat Display';
        font-weight: 600;
        font-size: 28px;
        line-height: 37px;
    }

    .button:hover{
        background-color: #3aa098;
        color: #fefcf8;
        transition : 0.2s ease;
    }

    .button:hover .arrowsvg{
        background-color: #fefcf8;
        transition : 0.2s ease;
    }

@media screen and (max-width: 900px) {
  .card {
    width: auto;
    margin-bottom: 10vh;
    display: flex;
    flex-direction: column;
  }

  .button{
    width: 20%;
  }
}

@media screen and (max-width: 900px) {
  .button{
    width: 50%;
    font-size: 1.5rem;
    border-radius: 40px;
  }
}
.arrowsvg{
        height: 24px;
        aspect-ratio: 1/1;
        -webkit-mask: url("./assets/images/arrow.svg") no-repeat center;
        mask: url("./assets/images/arrow.svg") no-repeat center;
}

.backWhite{
        background-color: white;
}

.backGreen{
        background-color: #3AA098;
}

.backBlue{
        background-color: #02295F;
}
</style>