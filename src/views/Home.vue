<template>
  <div class="container-fluid">
    <CategorySlider :categories="categories" />
  </div>
  <div class="container">
    <div class="d-flex flex-column">
      <!--(Featured Game)-->
      <FeaturedGame :game="game"></FeaturedGame>

      <!--(Most Recommendation)-->
      <GamesList
        class="mt-4"
        :games="recommendations"
        :title="'Most Recommendations'"
        :link="recommendationsLink"
      ></GamesList>

      <!--(Most Popular)-->
      <GamesList
        class="mt-4"
        :games="mostPopularGames"
        :title="'Most Popular'"
        :link="popularLink"
      ></GamesList>
    </div>
  </div>
</template>

<script>
import FeaturedGame from "../components/FeaturedGame.vue";
import GamesList from "../components/GamesList.vue";
import CategorySlider from "../components/CategorySlider";
import { useStore } from "vuex";

export default {
  name: "Home",
  setup() {
    const store = useStore();
    store.commit("getAllGames");
    return { store };
  },
  computed: {
    recommendations() {
      return this.store.state.filteredRecommendations.length
        ? this.store.state.filteredRecommendations
        : this.store.state.recommendations;
    },
    mostPopularGames() {
      return this.store.state.recommendations;
    },
  },
  components: {
    FeaturedGame,
    GamesList,
    CategorySlider,
  },
  data() {
    return {
      game: {
        description: "SURF the urban wave! DODGE the oncoming trains!",
        title: "Subway Surfers",
        company: "SYBO Games",
        poster:
          "https://cdn2.unrealengine.com/kena-carousel-1248x702-1248x702-a78d12ec40a9.jpg?h=480&resize=1&w=854",
      },
      categories: [
        { id: 1, name: "Arcade" },
        { id: 2, name: "Action" },
        { id: 3, name: "Advanture" },
        { id: 4, name: "Simulation" },
        { id: 5, name: "Sports" },
        { id: 6, name: "Strategy" },
        { id: 8, name: "Puzzle" },
        { id: 9, name: "Idle" },
        { id: 11, name: "Shooter" },
        { id: 12, name: "Fighting" },
        { id: 13, name: "Stealth" },
        { id: 14, name: "Survival" },
        { id: 15, name: "Metroidvania" },
        { id: 16, name: "Graphic" },
        { id: 17, name: "Rouguelikes" },
        { id: 18, name: "4X" },
        { id: 19, name: "Artillery" },
        { id: 20, name: "Wargame" },
        { id: 21, name: "Racing" },
        { id: 22, name: "Competitive" },
        { id: 23, name: "Logic" },
        { id: 24, name: "Trivia" },
        { id: 10, name: "2D games" },
        { id: 25, name: "Casual" },
      ],
    };
  },
};
</script>
