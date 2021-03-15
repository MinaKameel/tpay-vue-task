<template>
  <div class="container">
    <Header></Header>
  </div>
  <main>
    <router-view />
  </main>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {
      categories: [
        { id: 1, name: "Arcade" },
        { id: 2, name: "Action" },
        { id: 3, name: "Advanture" },
        { id: 4, name: "Simulation" },
        { id: 5, name: "Sports" },
        { id: 6, name: "Strategy" },
        { id: 8, name: "Puzzle" },
        { id: 9, name: "Idle" },
        { id: 10, name: "Role-playing" },
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
        { id: 25, name: "Casual" },
      ],
    };
  },
};
</script>
<style lang="scss">
@import "./styles/global.scss";
//@import "./styles/icons/style.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
