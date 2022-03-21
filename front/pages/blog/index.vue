<template>
  <div>
    <section class="bg-light pt-5 pb-5 shadow-sm container">
    <div class="container">
    <div class="row pt-5 border-bottom mb-4">
    
    </div>
    <div class="row">
      <!--ADD CLASSES HERE d-flex align-items-stretch-->
      <div class="col-lg-4 mb-3 d-flex align-items-stretch" v-for="(article, index) in articles" :key="index">
               <CardArticle :article="article"/>       
      </div>
      <!--ADD CLASSES HERE d-flex align-items-stretch-->
      <!--ADD CLASSES HERE d-flex align-items-stretch-->
      
    </div>
  </div>
</section>

    <ContactEnd />
  </div>
</template>

<script>
export default {
    layout: "header",
    computed:{
      articles(){
        return this.$store.getters.getArticle
      }
    }
}
</script>
    
<style>

</style>