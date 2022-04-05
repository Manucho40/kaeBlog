<template>
        <div class="card mb-3 carte" style="max-width: 540px;">
            <div class="row no-gutters">
                <div class="col-md-4">
                    <img class="figure-img img-fluid" style="height:max-content !important" :src="`http://api.kae-dev.com/${apArticles.image[0].url}`" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <nuxt-link :to="`/blog/${apArticles.slug}`"><h5 class="card-title">{{apArticles.titre}}</h5></nuxt-link>
                        <p class="card-text">{{apArticles.contenu.substr(0, 100)}}...</p>
                        <p class="card-text"><small class="text-muted font-weight-bold">Dernière modification {{apArticles.updatedAt}}</small></p>
                    </div>
                </div>
            </div>
        </div>
      

</template>

<script>
export default {    
 name: 'AprecuArticles',
 props: ['apArticles']
}
</script>


<style>
    .carte{
        margin: 10px;
    }


</style>