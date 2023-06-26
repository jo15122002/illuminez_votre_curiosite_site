<template>
  <div class="navbar">
    <img src="~/assets/images/logo.png" alt="logo" class="logo">
    <div class="navbar-items-container">
      <a href="/" class="navbar-item">{{ $t('navbar.book') }}</a>
      <a href="/" class="navbar-item">{{ $t('navbar.exhibition') }}</a>
      <a href="/" class="navbar-item">{{ $t('navbar.contact') }}</a>
    </div>
  </div>
</template>

<script>
export default {
    name: 'NavbarCustom'
}
</script>

<style>
.navbar{
  margin: auto;
  margin-top: 3%;
  width: 91.7vw;
  height: 11.8vh;
  border-radius: 20px;
  background-color: #C5E2A6;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo{
  margin-left: 2.5vw;
}

.navbar-items-container{
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.navbar-item{
  padding-left: 3.3vw;
  padding-right: 3.3vw;
  color: white;
  text-decoration: none;
  font-family: 'Red Hat Display';
  font-weight: 600;
  font-size: 28px;
  line-height: 37px;
}
</style>