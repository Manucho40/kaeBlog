<template>
  <div>
      <h4>Mon Histoire</h4>
      <div class="moi">
          <img src="~/assets/img/manu.png" alt="">
          <div class="blockp">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br>Sunt temporibus aliquid explicabo rem, <br> tempora autem, tenetur distinctio  <br> enim expedita nobis. <br> Accusamus, ipsa dolor eum maiores deserunt ex explicabo ipsam!</p>
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