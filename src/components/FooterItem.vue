<template>
  <div class="item">
    <div class="item__date">{{weekDay}}</div>
    <div class="item__img"><img :src="imgNoon" alt="">/<img :src="imgNight" alt=""></div>
    <div class="item__temp">{{tempNoon}} / {{tempNight}}</div>
  </div>
</template>

<script>
export default {
  name: "FooterItem",
  data() {
    return {
      thisDay: new Date(this.day[0].dt_txt),
    }
  },
  props: {
    day: {
      type: Array,
    },
  },
  computed: {
    tempNoon() {
      return Math.round(this.day[5].main.temp - 273.15) + '°C';
    },
    tempNight() {
      return Math.round(this.day[0].main.temp - 273.15) + '°C';
    },
    weekDay() {
      return this.$store.getters.getWeek[this.thisDay.getDay()];
    },
    imgNoon() {
      return `http://openweathermap.org/img/wn/${this.day[5].weather[0].icon}@2x.png`
    },
    imgNight() {
      return `http://openweathermap.org/img/wn/${this.day[0].weather[0].icon}@2x.png`;
    }
  }
}
</script>

<style scoped>


.item__img {
  height: 15rem;
}

.item__img img {
  height: 100%;
}

.item__date {
  margin: 2rem 0;
  background: rgba(0, 0, 0, .5);
  border-radius: 2rem;
  font-size: 4rem;
  color: #fff;
  padding: .5rem 5rem;
}

.item__temp {
  margin: 2rem 0;
  font-size: 4rem;
  color: #fff;
}

.item {
  padding: 0 6rem;
}

.item {
  transition: all .3s ease-in-out;
}

@media screen and (max-width: 620px){

  .item {
    background: rgba(0, 0, 0, .5);
    border-radius: 2rem;
    margin: 2rem;
    display: flex;
    align-items: center;
    padding: 1rem 0;
  }

  .item__img {
    order: -1;
    height: 10rem;
    width: 70%;
    padding-left: 3rem;
    text-align: left;
  }

  .item__date {
    background: none;
  }
  .item__temp {
    padding-right: 3rem;
    text-align: right;
  }

}

@media screen and (max-width: 340px){
  .item__img {
    height: 8rem;
  }
  .item__temp {
    font-size: 3rem;
  }
}

</style>