<template>
  <div class="navbar">
    <div class="navbar-items-container">
      <a href="" class="navbar-item">Réserver</a>
      <a href="" class="navbar-item">Exposition</a>
      <a href="" class="navbar-item">Contact</a>
    </div>
  </div>

  <div class="flex-row content-div">
    <div class="flex-column half-width">
      <h4 class="date">Exposition de mai à décembre 2023</h4>
      <h1>Illuminez votre curiosité</h1>
      <p>La bioluminescence est une réaction chimique que produisent les êtres vivants pour différents usage.
        Proposez à vos enfants une nouvelle façon de découvrir et s’instruire autour des espèces bioluminescentes, 
        en les laissant en autonomie lors d’une exposition interactif.</p>
      <div class="flex-row">
        <div class="button">Acheter un ticket</div>
        <div class="button">Vidéo de l'exposition</div>
      </div>
    </div>
    <div class="carouselContainer">
      <FishCarousel class="fishCarousel"/>
    </div>
  </div>
</template>

<script>

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@600&display=swap');
.navbar{
  margin: auto;
  width: 90vw;
  height: 14vh;
  border-radius: 20px;
  background-color: #C5E2A6;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.content-div{
  margin: auto;
  width: 90vw;
}
.carouselContainer{
  width: 50%;
  height: 877px;
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
  font-size: 1.1vw;
  font-family: 'Red Hat Display', sans-serif;
}

.page {
  width: 100vw;
  height: 100vh;
  background-color: #FEFCF8;
}

.flex-column{
  display: flex;
  flex-direction: column;
}

.flex-row{
  display: flex;
  flex-direction: row;
}

.button{
  width: 33%;
  height: 30px;
  border-radius: 36px;
  background-color: #3AA098;
  text-align: center;
}

.half-width{
  width: 50%;
}

.content-div .date{
  font-family: "Red Hat Display Bold", sans-serif;
}

.content-div h1{
  font-family: "BasteleurBold";
  font-size: 3.5vw;
}

.content-div p{
  font-family: "Red Hat Display", sans-serif;
  font-size: 1.5vw;
  line-height: 1.5;
}
</style>