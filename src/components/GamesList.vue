<template>
  <div class="game-list px-0 _row mx-md-0 mx-2">
    <div class="header _col-12">
      <h5 class="m-4">{{ title }}</h5>
      <Button
        label="SEE ALL"
        icon="pi pi-angle-right"
        class="p-button-text"
        iconPos="right"
      />
    </div>
    <div
      class="d-flex justify-content-center row row-cols-5 row-cols-md-4 row-cols-sm-1"
    >
      <div v-for="game in games" :key="game.id" class="game col">
        <div class="card border-0">
          <div class="game-img-container">
            <div class="game-rate">
              <span class="pi pi-star"></span> {{ game.rate }}
            </div>
            <div
              v-bind:style="{
                backgroundImage: 'url(' + game.poster + ')',
              }"
              class="card-img-top poster"
            ></div>
          </div>
          <div class="card-body px-0">
            <p class="card-text">
              {{ game.title }}
            </p>
            <router-link :to="'/game/' + game.id">
              <a class="btn btn-sm btn-primary w-100 rounded">MORE INFO</a>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "primevue/button";
export default {
  name: "GamesList",
  components: {
    Button,
  },
  props: {
    link: String,
    title: String,
    games: Array,
  },
};
</script>

<style lang="scss" scoped>
.game-list {
  background: white;
  box-shadow: 0 18px 0px 0 white, 0 20px 9px 0px #cdcdcd;
  margin-bottom: 3rem;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .game-img-container {
    position: relative;
    .game-rate {
      position: absolute;
      top: 10px;
      left: 7px;
      border-radius: 10px;
      padding: 3px 10px;
      background: white;
      color: #572589;
    }
  }
}
.game {
  width: 134px + 2 * 7px;
  padding: 7px;
  .poster {
    width: 134px;
    height: 134px;
    border-radius: 12px;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 10px;
  }

  .card-text {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
</style>
