<template>
  <div class="header-container">
    <div class="text-start">
      <img src="@/assets/images/Logo_4.svg" class="image-logo" />
    </div>
    <div class="menu">
      <Button class="p-button-text p-button-secondary"
        ><span class="pi pi-search" font></span
      ></Button>
      <Button class="p-button-text p-button-secondary"
        ><span class="pi pi-ellipsis-v"> </span
      ></Button>
    </div>
  </div>
</template>

<script>
import Button from "primevue/button";
export default {
  name: "Header",
  components: {
    Button,
  },
};
</script>


<style lang="scss" scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .menu {
    .p-button-secondary {
      color: #572589;
    }
  }
}
.image-logo {
  margin-left: -22px;
}
</style>
