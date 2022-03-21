export default {
  getArticle(state) {
    return state.articles;
  },

  getArticleDetails(state, id) {
    return state.articles.find((item) => item.slug === id);
  },
};
