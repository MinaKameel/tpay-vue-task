<template>
  <div class="card px-0 mt-5 mx-md-0 mx-2">
    <div class="row gx-0">
      <div class="col-12 col-sm-9">
        <img v-bind:src="game.poster" />
      </div>
      <div class="col-12 col-sm-3">
        <div class="info">
          <h6 class="title">{{ game.title }}</h6>
          <div class="company mb-2">{{ game.company }}</div>
          <div class="description mb-2">{{ game.description }}</div>
          <div class="downloads">{{ game.downloads }} Downloads</div>
          <a class="more btn btn-primary w-100" v-bind:href="game.link"
            >MORE INFO</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeaturedGame",
  props: { game: Object },
};
</script>

<style lang="scss" scoped>
.card {
  overflow: hidden;
  .info {
    padding: 28px;
    .title {
    }
    .company {
    }
    .description {
    }
    .downloads {
    }
    .more {
    }
  }
  img {
    width: 100%;
    position: center;
  }
}
</style>
