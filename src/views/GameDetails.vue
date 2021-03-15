<template>
  <div class="container">
    <div class="game-details-container row">
      <Game :gameDetails="gameDetails" />
      <!--(Most Recommendation)-->
      <GamesList
        class="mt-4"
        :games="recommendations"
        :title="'Most Recommendations'"
        :link="popularLink"
      ></GamesList>
    </div>
  </div>
</template>
<script>
import Game from "../components/GameDetails.vue";
import http from "../services/http";
import GamesList from "../components/GamesList.vue";

export default {
  name: "GameDetails",
  components: { Game, GamesList },
  data() {
    return {
      gameDetails: {},
      recommendations: null,
    };
  },
  created() {
    http
      .get(`/v1/dcd6cc0a`)
      .then((response) => {
        this.gameDetails = response.data;
      })
      .catch();
    http
      .get(`/v1/19c86231`)
      .then((response) => {
        this.recommendations = response.data;
      })
      .catch();
  },
};
</script>

