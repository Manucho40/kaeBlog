<template>
  <div class="container">
    
    <p class="titreDetail">{{getArticleDetail.titre}}</p>
    <div class="nomImgDate">
      <span class="spanImg"><img src="~/assets/img/manu.png" alt=""> |</span> 
      <span>Ange Emmanuel Kouassi |</span> 
      Posté le {{getArticleDetail.createdAt}}
    </div>
      <img class="artImg mt-3" :src="`http://api.kae-dev.com/${getArticleDetail.image[0].url}`" alt="">
      <div class="partage">
      <ShareNetwork
      v-for="network in networks"
      :network="network.network"
      :key="network.network"
      :style="{backgroundColor: network.color} "
      :url="sharing.url"
      :title="sharing.title"
      :description="sharing.description"
      :quote="sharing.quote"
      :hashtags="sharing.hashtags"
      :twitterUser="sharing.twitterUser">
      <svg style="width: 20%;" viewBox="0 0 50 24">
            <path fill="white" :d="network.d" />
      </svg>
      <!-- <font-awesome-icon :icon="network.icon" class="text-white fa-fw fa-lg w-25" /> -->
    </ShareNetwork>

      </div>
    <article class="article m-2">
        <marquee behavior="" direction="">{{getArticleDetail.contenu}}</marquee>
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
        { network: 'facebook', d: 'M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z', color: '#1877f2' },
        { network: 'twitter', d: 'M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z', color: '#1da1f2' },
        { network: 'telegram', d: 'M12,0c-6.627,0 -12,5.373 -12,12c0,6.627 5.373,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12Zm0,2c5.514,0 10,4.486 10,10c0,5.514 -4.486,10 -10,10c-5.514,0 -10,-4.486 -10,-10c0,-5.514 4.486,-10 10,-10Zm2.692,14.889c0.161,0.115 0.368,0.143 0.553,0.073c0.185,-0.07 0.322,-0.228 0.362,-0.42c0.435,-2.042 1.489,-7.211 1.884,-9.068c0.03,-0.14 -0.019,-0.285 -0.129,-0.379c-0.11,-0.093 -0.263,-0.12 -0.399,-0.07c-2.096,0.776 -8.553,3.198 -11.192,4.175c-0.168,0.062 -0.277,0.223 -0.271,0.4c0.006,0.177 0.125,0.33 0.296,0.381c1.184,0.354 2.738,0.847 2.738,0.847c0,0 0.725,2.193 1.104,3.308c0.047,0.139 0.157,0.25 0.301,0.287c0.145,0.038 0.298,-0.001 0.406,-0.103c0.608,-0.574 1.548,-1.461 1.548,-1.461c0,0 1.786,1.309 2.799,2.03Zm-5.505,-4.338l0.84,2.769l0.186,-1.754c0,0 3.243,-2.925 5.092,-4.593c0.055,-0.048 0.062,-0.13 0.017,-0.188c-0.045,-0.057 -0.126,-0.071 -0.188,-0.032c-2.143,1.368 -5.947,3.798 -5.947,3.798Z', color: '#0088cc' },
        { network: 'whatsapp', d: 'M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z', color: '#25d366' },
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

  .partage{
    display: flex;
    justify-content: space-around;
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
