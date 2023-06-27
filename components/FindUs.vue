<template>
    <div class="findUs">
        <img src="~/assets/images/damier.png" alt="">
        <div class="adress">
            <h1>{{ $t('findUs.title') }}</h1>
            <div class="bloc-content">
            <p>3 Esplanade Augustin Aussedat<br>Cran-Gevrier, 74960<br>France</p>
            <div class="flex-row buttons-container">
                <a href="#buySection" class="button buyButton">{{ $t('findUs.button.exhibition') }} &nbsp; <div class="arrowsvg backWhite"></div></a>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'FindUs'
}
</script>

<style scoped>

@media screen and (max-width: 1440px) {
  .findUs{
    flex-direction: column;
    align-items: center;
    width:100% !important;
    margin:0px !important;
  }

  .findUs img{
    width: 100%;
  }

  .adress{
    display: flex;
    flex-direction: column;
    width: 77.7%;
    margin: auto !important;
    justify-content: center;
  }

  .adress h1{
    font-size: 10.8vw !important;
    font-family: 'BasteleurBold';
    font-weight: 700;
    line-height: 100% !important;
    align-self: center;
  }

  .bloc-content{
    width: 100%;
    align-self: center;
  }

  .button{
    font-size: 110%;
    width: 60%;
    border-radius: 37px;
  }
}

.findUs {
  display: flex;
  justify-content: space-between;
  width: 92vw;
  margin-left: 5%;
}

.adress{
  margin-top: auto;
  margin-bottom: auto;
  margin: auto;
  margin-left: 5%;
}

.adress h1{
  font-family: 'BasteleurBold';
  font-style: normal;
  color: #02295F;
  font-weight: 400;
  font-size: 90px;
  line-height: 122px;
}
</style>