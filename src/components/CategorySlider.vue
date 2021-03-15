<template>
  <Carousel
    :value="categories"
    :numVisible="13"
    :numScroll="1"
    class="game-categories"
  >
    <template #item="category">
      <div
        class="category"
        v-bind:class="{ selected: category.data === currentSelectedCategory }"
        v-on:click="onSelectCategory(category.data)"
      >
        {{ category.data.name }}
        <span
          v-if="category.data === currentSelectedCategory"
          class="pi pi-check"
        >
        </span>
      </div>
    </template>
  </Carousel>
</template>
<script>
import Carousel from "primevue/carousel";
export default {
  name: "CategorySlider",

  components: { Carousel },
  props: {
    categories: Array,
  },
  data() {
    return {
      currentSelectedCategory: {},
    };
  },
  methods: {
    onSelectCategory: function (selectedCategory) {
      // this.currentSelectedCategory.isSelected = !this.currentSelectedCategory.isSelected;
      // selectedCategory.isSelected = true;
      this.currentSelectedCategory = selectedCategory;
    },
  },
};
</script>
