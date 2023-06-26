<template>
  <div class="footer">
      <div class="navbar-items-container">
        <a href="#buySection" class="navbar-item">{{ $t('footer.links.book') }}</a>
        <a href="#video" class="navbar-item">{{ $t('footer.links.exhibition') }}</a>
        <a href="#footer" class="navbar-item">{{ $t('footer.links.contact') }}</a>
      </div>
      <div class="copyright">&copy;Illuminez votre curiosité 2023</div>
    </div>
</template>

<script>
export default {
    name: 'Footer'

}
</script>

<style>
.footer{
  width: 100%;
  background-color: #3aa098;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding-top: 3%;
  padding-bottom: 2%;
}

.copyright{
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  margin-top: 6%;
}
</style>