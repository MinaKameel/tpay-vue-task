<template>
  <Carousel
    :value="categories"
    :numVisible="13"
    :numScroll="1"
    :responsiveOptions="responsiveOptions"
    class="game-categories"
  >
    <template #item="category">
      <div
        class="category"
        v-bind:class="{ selected: category.data === selectedCategoryState }"
        v-on:click="onSelectCategory(category.data)"
      >
        {{ category.data.name }}
        <span
          v-if="category.data === selectedCategoryState"
          class="pi pi-check"
        >
        </span>
      </div>
    </template>
  </Carousel>
</template>
<script>
import Carousel from "primevue/carousel";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "CategorySlider",
  setup() {
    const store = useStore();
    const selectedCategoryState = computed(() => store.state.selectedCategory);
    return { store, selectedCategoryState };
  },
  components: { Carousel },
  props: {
    categories: Array,
  },
  data() {
    return {
      responsiveOptions: [
        {
          breakpoint: "1024px",
          numVisible: 10,
          numScroll: 1,
        },
        {
          breakpoint: "786px",
          numVisible: 5,
          numScroll: 1,
        },
        {
          breakpoint: "600px",
          numVisible: 3,
          numScroll: 1,
        },
        {
          breakpoint: "480px",
          numVisible: 2,
          numScroll: 1,
        },
        {
          breakpoint: "300px",
          numVisible: 1,
          numScroll: 1,
        },
      ],
    };
  },
  methods: {
    onSelectCategory: function (selectedCategory) {
      if (selectedCategory.name === this.store.state.selectedCategory.name)
        this.store.state.selectedCategory = {};
      else this.store.state.selectedCategory = selectedCategory;
      this.store.commit("filterGamesByTagName");
    },
  },
};
</script>
