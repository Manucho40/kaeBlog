<template>
  <div> <br><br>
    <DernierArticle :dernierArti="dernierArti" />
    <Separateur />
    <div class="apercu">
        <div>
          <h4>Quelques Articles</h4>
            <div v-for="(apArti, index) in apArticles" :key="index">
              <AprecuArticles :apArticles="apArti"/>
            </div>
        </div>
        <div>
            <ApercuMoi />

        </div>
    </div>
    <ContactEnd />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'header',
  computed:{
    dernierArti(){
      let tab = this.$store.state.articles;
      return tab[tab.length - 1]
    },

    apArticles(){
      return this.$store.getters.getArticle
    }
  },
  mounted(){
    console.log(this.apArticles)
  }
  
}
</script>

<style scoped>
  .apercu{
    display: flex;
    justify-content: space-around;
  }
 
  h4{
    font-family: 'Courier New', Courier, monospace;
    letter-spacing: 0.4em;
  }


  @media (max-width: 728px){
    .apercu{
      display: flex;
      flex-direction: column;
    }
  }


</style>
