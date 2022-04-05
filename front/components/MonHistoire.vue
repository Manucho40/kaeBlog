<template>
  <div class="container">
    
      <div class="text-down-fig">
         <h3>Salut ! Ravi de te rencontrer.</h3>
         <article class="presentation">
             Je suis KOUASSI Ange Emmanuel (d'où le nom de domaine du site vous l'aurez deviné &#128513;) développeur web et vous êtes dans mon petit coin du web. <br>
             Le but de ce forum c'est de partager les "quelques" connaissances que j'ai acquises sur le monde passionnant qu'est le web à travers mes lectures, les formations et les discussions que j'ai pu avoir avec d'autres développeurs.
             En effet, le partage des connaissances est l'une des choses qui m'a fait aimé le code. J'ai eu la chance de rencontrer des developpeurs (hey Kael 	&#129321;) qui m'ont beaucoup apportés dans mon évolution
              et comme un juste retour des choses, je me dois de partager. <br>
              Qu'est ce que vous verrez concretement?
            Des articles sur des technos que je découvre, des conseils pour progresser dans le dev, mes projets personnels sont les choses que je partagerais avec vous sur ce blog. <br>
            ALORS ALLONS Y. &#128073;a <br>
            Une dédicace spéciale à celui qui m'a donné goût au WEB Mr Edmond &#128591;.
         </article>
      </div>
  </div>
</template>

<script>
export default {
    name: "DernierArticle",
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Neonderthaw&family=Permanent+Marker&family=Teko:wght@300&display=swap');  

/* div{
    text-align: center;
} */
figure{
    border: 1px solid;
    /* display: inline-block; */
    margin-bottom: 0px;
    
}
.presentation{

}
 
.text-down-fig{
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;    
    text-align: justify;
    width: 940px;
    padding: 50px;
    margin-left: 85px;
  
}
.text-down-fig h3{
    font-size: 38px;
    font-weight: bolder;
}

.text-down-fig article{
    text-align: justify;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;    
    font-size: 1.6rem;
}

 

 @media (max-width: 1024px){
     figure img{
    width: 100%;
    height: 50vh;
    }
    .text-down-fig{
    text-align: justify;
    width: 100%;
    padding: 20px;
    margin-left: 0px;
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