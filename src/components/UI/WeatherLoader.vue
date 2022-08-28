<template>
  <div class="loader" v-if="$store.getters.getLoader">
    <img :src="loader" alt="" class="img-load">
  </div>
</template>

<script>
import loader from "@/assets/loader.gif";
export default {
  name: "WeatherLoader",
  data() {
    return {
      loader:loader,
    }
  },
}
</script>

<style scoped>

.loader {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  box-shadow: 0 0 5rem #000;
  border-radius: 3rem;
  background: rgba(0, 0, 0, .5);
}


.loader img {
  max-width: 90%;
  height: 20%;
}


</style>