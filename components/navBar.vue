<template>
  <div class="navbar" :style="windowFull? '' : 'display:none'">
    <img src="~/assets/images/logo.png" alt="logo" class="logo">
    <div class="navbar-items-container">
      <a href="/" class="navbar-item">{{ $t('navbar.book') }}</a>
      <a href="/" class="navbar-item">{{ $t('navbar.exhibition') }}</a>
      <a href="/" class="navbar-item">{{ $t('navbar.contact') }}</a>
    </div>
  </div>
  <div class="small" @click="openMenu">
    <img src="~/assets/images/menu.png" alt="logo">
  </div>
</template>

<script>
export default {
    name: 'NavbarCustom',
    data() {
        return {
            windowFull: true
        }
    },
    mounted() {
        this.onResize()
        window.addEventListener('resize', this.onResize)
    },
    methods: {
        openMenu() {
            const doc = document.getElementsByClassName('navbar')[0]
            doc.style.display = doc.style.display === 'none' ? 'flex' : 'none'
            const small = document.getElementsByClassName('small')[0]
            small.style['background-color'] = doc.style.display === 'none' ? '#C5E2A6' : 'transparent'
        },
        onResize() {
            this.windowFull = window.innerWidth > 1250
        }
    }
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

.small{
    background-color: #C5E2A6;
    width: 10vw;
    height: 10vw;
    position: absolute;
    right: 2vw;
    top: 2vh;
    border-radius: 20px;
    display: none;
    align-items: center;
    justify-content: center;
}

@media (max-width: 1250px){
  .navbar-items-container{
    flex-direction: column  ;
  }
  .navbar{
    flex-direction: column;
    height: auto;
    width: 100%;
    position: absolute;
    left: 0%;
    display: none;
  }

  .small {
    display: flex;
  }
}
</style>