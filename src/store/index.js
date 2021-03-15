
import http from "../services/http";

import { createStore } from "vuex"
const state = {
  selectedCategory: {},
  recommendations: [],
  filteredRecommendations: []
};
const mutations = {
  getAllGames: (state) => {
    http.get("/v1/1958025f").then(result => {
      state.recommendations = result.data
    });
  },
  filterGamesByTagName(state) {
    if (!state.selectedCategory.name) {
      state.filteredRecommendations = [];
      return;
    }

    let filteredRecommendations = [];
    state.recommendations.map(game => {
      let gameTags = game.tag.split(",")
      gameTags.map(tag => {
        if (tag.trim().toLowerCase() == state.selectedCategory.name.toLowerCase()) {
          filteredRecommendations.push(game);
        }
      })
      state.filteredRecommendations = filteredRecommendations;
    })
  }
}

export default createStore({
  state,
  mutations
})
