<template>
  <div>
      <!-- <p class="ban">Dernier Article</p> -->
      <figure>
          <img class="imgAcc" :src="`http://api.kae-dev.com/${dernierArti.image[0].url}`" alt="">
          <div>
          <p>Dernière modification {{dernierArti.updatedAt}}</p>
          <nuxt-link :to="`/blog/${dernierArti.slug}`">
                <h3 class="retour">{{dernierArti.titre}}</h3>
          </nuxt-link>

          </div>
      </figure>
  </div>
</template>

<script>
export default {
    name: "DernierArticle",
    props: ['dernierArti']
}
</script>

<style>
div{
    text-align: center;
}
figure{
    border: 1px solid;
    display: inline-block;
    margin: 10px;
    
}
 figure .imgAcc{
    width: 940px;
    height: 528.75px;
 }
 figure div{
     text-align: justify;
 }

 figure div p{
     margin: 20px;
 } 
 figure div h3{
     margin: 20px;
 }

 @media (max-width: 728px){
    figure .imgAcc{
    width: 100%;
    height: 50vh;
 }

 .retour{
     font-size: 20px;
 }
 }

 /* .ban{
     display: inline-block;
     font-size: 1.5rem;
     border: 1px solid;
     position: relative;
     bottom: 610px;
     background-color: white;
     left: 168px;
     padding: 5px;
 } */


 


</style>