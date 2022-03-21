export default {
    async nuxtServerInit({commit}) {
        //on stock les données dans une variable et on va a l'essentiel via ().data.data
        let article = (await this.$axios.get('http://localhost:1337/api/articles')).data
        // console.log(article)
        //on commit les données pour que la mutation les enregistres dans le state
        commit('GET_ARTICLES', article)
    },
}