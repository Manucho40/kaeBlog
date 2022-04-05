<template>
  <div>
      <h4>Mon Histoire</h4>
      <div class="moi">
          <img src="~/assets/img/manu.png" alt="">
          <div class="blockp">
            <p>Je suis KOUASSI Ange Emmanuel <br>(d'où le nom de domaine du site vous l'aurez deviné &#128513;)<br>développeur web et vous êtes dans mon petit coin du web. <br></p>
            <nuxt-link to="/apropos">Lire la suite ></nuxt-link>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "ApercuMoi"
}
</script>

<style>
.moi{
    box-sizing: border-box;
}
    .moi img{
    width: 284px;
    height: 200px;
    object-fit: cover;
    object-position: 50% 50%;
    border: 1px solid;
    }
    .blockp{
        display: block;
        text-align: justify;
        margin: 20px;
    }
    .blockp p{
        box-sizing: border-box;
         font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;   
        
    }
    


</style>