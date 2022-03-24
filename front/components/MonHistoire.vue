<template>
  <div class="container">
    
      <div class="text-down-fig">
         <h3>Salut ! Ravi de te rencontrer.</h3>
         <article>
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio debitis fugiat illum provident, ipsa repudiandae omnis aspernatur iusto molestiae praesentium nihil, inventore mollitia veniam, qui tenetur quae facilis perferendis voluptate.
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo sequi aspernatur ab deleniti eum voluptates temporibus tempora molestiae natus aliquam consequatur quia facilis earum nesciunt, fuga sunt quaerat eius quam. <br> <br>
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta eveniet voluptatem ratione harum qui, architecto alias animi doloribus nostrum, ipsum dolore hic eum laboriosam odio nesciunt exercitationem. Quia, molestiae iure?
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
/* div{
    text-align: center;
} */
figure{
    border: 1px solid;
    /* display: inline-block; */
    margin-bottom: 0px;
    
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
    line-height: 1.6em;
    font-size: 17px;
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