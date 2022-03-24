<template>
  <div class="container">
    
    <p class="titreDetail">{{getArticleDetail.titre}}</p>
    <div class="nomImgDate">
      <span class="spanImg"><img src="~/assets/img/manu.png" alt=""> |</span> 
      <span>Ange Emmanuel Kouassi |</span> 
      Posté le {{getArticleDetail.createdAt}}
    </div>
      <img class="artImg mt-3" :src="`http://localhost:1337${getArticleDetail.image[0].url}`" alt="">
    <ShareNetwork
      v-for="network in networks"
      :network="network.network"
      :key="network.network"
      :style="{backgroundColor: network.color}"
      :url="sharing.url"
      :title="sharing.title"
      :description="sharing.description"
      :quote="sharing.quote"
      :hashtags="sharing.hashtags"
      :twitterUser="sharing.twitterUser">
      <font-awesome-icon :icon="network.icon" class="text-white fa-fw fa-lg w-25" />
    </ShareNetwork>
    <article class="article m-2">
        {{getArticleDetail.contenu}}
    </article>
  </div>
</template>

<script>
import { ShareNetwork } from '@/node_modules/vue-social-sharing/dist/vue-social-sharing'
export default {
  components: {ShareNetwork},
  layout: "header",
  data(){
    return {
      article: {},
      tags: [],
      prev: null,
      next: null,
      sharing: {
        url: process.env.baseUrl + this.$route.fullPath,
        title: '',
        description: '',
        quote: '',
        hashtags: '',
        twitterUser: 'zemna'
      },
    networks: [
        { network: 'facebook', icon: ['fab', 'facebook-f'], color: '#1877f2' },
        { network: 'twitter', icon: ['fab', 'twitter'], color: '#1da1f2' },
        // { network: 'messenger', icon: ['fab', 'facebook-messenger'], color: '#0084ff' },
        { network: 'telegram', icon: ['fab', 'telegram-plane'], color: '#0088cc' },
        { network: 'whatsapp', icon: ['fab', 'whatsapp'], color: '#25d366' },
      ]
    }
  },
  async asyncData({ params }) {
      const id = params.id // En appelant /abc, le slug sera "abc".
      
      return { id }
    },
  computed: {
  
    articles() {
      return this.$store.getters.getArticle;
    },
  
    getArticleDetail() {
            return this.articles.filter(article => article.slug == this.id)[0]
    },
  },

  mounted() {
    console.log(process.env.baseUrl);
  },

  async fetch () { // Change asyncData() to fetch() to access 'this' inside function
    this.article = await this.$content('articles', this.$route.params.slug).fetch()
    this.tags = []
    if (this.article.tags) {
      const tagsList = await this.$content('tags')
        .only(['name', 'slug'])
        .where({ slug: { $containsAny: this.article.tags } })
        .fetch()
      this.tags = Object.assign({}, ...tagsList.map((s) => ({ [s.name]: s })))
    }
    [this.prev, this.next] = await this.$content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(this.$route.params.slug)
      .fetch()
  },
  watch: {
    article: function (val) {
      this.sharing.title = this.article.title
      this.sharing.description = this.article.description
      this.sharing.hashtags = this.article.tags.toString()
    }
  },

};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Neonderthaw&family=Permanent+Marker&family=Teko:wght@300&display=swap');  
.titreDetail{
    font-size: 2.625rem;
    line-height: 1.1;
    margin-bottom: 0.7142857143em;
    font-weight: 600;
    text-align: justify;
  }
  .nomImgDate{
    display: flex;
  }
  .artImg{
    width: 100%;
    height: auto;
    max-height: 450px;
    -o-object-fit: cover;
    object-fit: cover;
    border-radius: 5px;
  
  }



  .spanImg img{
    width: 30px;
    border-radius: 100%;
  }

  .article{
    text-align: justify;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;    
    font-size: 1.6rem;
  }

  @media (max-width: 1024px){
    .titreDetail{
      font-size: 1.5rem;
      line-height: 1.1;
      text-align: justify;
    }
  }
</style>
