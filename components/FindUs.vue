<template>
    <div class="findUs">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2776.1803805425498!2d6.099434976688297!3d45.907703303737776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478b85413369fe53%3A0xc3fb5070cd13e12c!2sCampus%20digital%20de%20L&#39;%C3%89cole%20by%20CCI%2F%20Gobelins%20Paris%20Campus%20Annecy!5e0!3m2!1sen!2sfr!4v1687848804113!5m2!1sen!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

  .findUs iframe{
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

  .findUs .buyButton{
    width: auto;
    margin-right: 14% !important;
    border-radius: 7% / 30%;
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