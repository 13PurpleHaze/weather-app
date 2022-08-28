<template>
  <div class="measurements__item" v-if="item.prop.length">
    <div class="measurements__img"><img :src="item.img" alt=""></div>
    <div class="measurements__text">{{ item.prop }}</div>
  </div>
</template>

<script>

export default {
  name: "MeasureItem",
  props:['item'],
}
</script>

<style scoped>
.measurements__item {
  width: 15rem;
  height: 15rem;
  text-align: center;
}

.measurements__text {
  font-size: 4rem;
  color: #fff;
}

.measurements__img {
  height: 8rem;
  margin-bottom: 2rem;
}

.measurements__img img {
  height: 100%;
}

@media screen and (max-width: 340px) {
  .measurements__img {
    height: 6rem;
  }
  .measurements__text {
    font-size: 3rem;
  }
}
</style>