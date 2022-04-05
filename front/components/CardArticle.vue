<template>
  <div class="card">
    <img
      :src="`http://api.kae-dev.com/${this.article.image[0].url}`"
      class="card-img-top"
      alt="Card Image"
    />
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">{{ article.titre }}</h5>
      <p class="card-text align-justify mb-4">
        {{ article.contenu.substr(0, 100) }}...
      </p>
      <nuxt-link
        :to="`/blog/${article.slug}`"
        class="btn btn-primary mt-auto align-self-start"
        >Lire...</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "CardArticle",
  props: ["article"],
  mounted() {
    console.log("MOUNTED -" + this.article.image[0].url);
  },
};
</script>

<style scoped></style>
