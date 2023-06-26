<template>
    <div class="findUs">
        <img src="~/assets/images/damier.png" alt="">
        <div class="description">
            <h1>{{ $t('findUs.title') }}</h1>
            <div class="bloc-content">
            <p>{{ $t('findUs.content') }}</p>
            <div class="flex-row buttons-container">
                <a href="#buySection" class="button buyButton">{{ $t('findUs.button.exhibition') }}</a>
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

<style>
.findUs {
    display: flex;
    justify-content: space-between;
    width: 92vw;
    margin-left: 5%;
}

.description{
  margin-top: auto;
  margin-bottom: auto;
  margin: auto;
  margin-left: 5%;
}

.description h1{
  font-family: 'Basteleur';
  font-style: normal;
  color: #02295F;
  font-weight: 400;
  font-size: 90px;
  line-height: 122px;
}
</style>