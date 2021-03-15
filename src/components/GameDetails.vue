<template>
  <div class="game-details">
    <div
      class="poster"
      v-bind:style="{
        backgroundImage: 'url(' + gameDetails.poster + ')',
      }"
    ></div>
    <div class="info">
      <!-- title -->
      <div>{{ gameDetails.title }}</div>
      <!--category -->
      <div>{{ gameDetails.category }}</div>
      <!-- downloads-number -->
      <div class="downloadNumber">{{ downloadNumber }}</div>

      <!-- description -->
      <div
        v-html="gameDetails.description"
        class="description"
        v-bind:class="{
          'show-content': showMoreToggle,
          'hide-content': !showMoreToggle,
        }"
      ></div>
      <Button
        class="p-button-text px-0"
        v-on:click="showMoreToggle = !showMoreToggle"
      >
        <span v-if="showMoreToggle">Show Less</span>
        <span v-if="!showMoreToggle">Show More</span>
      </Button>
    </div>
  </div>
</template>

<script>
import Button from "primevue/button";
export default {
  name: "Game",
  components: {
    Button,
  },
  props: {
    gameDetails: Object,
  },
  methods: {
    handleDownloadsNumber: (download) => {
      if (!download) return;
      if (download > 1000 && 1000000 < download)
        return `${download / 1000}K Downloads`;
    },
  },
  computed: {
    downloadNumber() {
      if (!this.gameDetails || !this.gameDetails.download) return;
      let downloadNumber = parseInt(this.gameDetails.download);
      if (downloadNumber > 1000 && downloadNumber < 1000000)
        return `${downloadNumber / 1000}K Downloads`;
      return `${downloadNumber}K Downloads`;
    },
  },
  data() {
    return {
      showMoreToggle: false,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
