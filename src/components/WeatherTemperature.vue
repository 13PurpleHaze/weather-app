<template>
  <div>
    <div class="weather__temperature">
      <div class="temperature__img"><img :src="getTempCurrDay.imgUrl" alt=""></div>
      <div class="temperature__text"><div class="text-small">{{getTempCurrDay.description}}</div>{{ getTempCurrDay.temp }}<div class="text-small">feels like {{getTempCurrDay.feelsLike}}</div></div>
    </div>
    <div class="city text-italic">{{$store.getters.getCityInfo.name}}</div>
  </div>
</template>

<script>
export default {
  name: "WeatherTemperature",
  computed: {
    getTempCurrDay() {
      return {
        temp: Math.round(this.$store.getters.getCurrWeather.main.temp - 273.15) + '°C',
        imgUrl: `http://openweathermap.org/img/wn/${this.$store.getters.getCurrWeather.weather[0].icon}@2x.png`,
        feelsLike: Math.round(this.$store.getters.getCurrWeather.main.feels_like - 273.15) + '°C',
        description: this.$store.getters.getCurrWeather.weather[0].description,
      }
    }
  },
}
</script>

<style scoped>
.text-small {
  font-size: 5rem;
}

.weather__temperature {
  position: relative;
  margin: 40rem 0 2rem 0;
}

.temperature__text {
  text-align: center;
  font-size: 20rem;
  color: #fff;
}

.temperature__img {
  width: 28rem;
  position: absolute;
  top: -22rem;
  right: 65rem;
}

.temperature__img img {
  width: 100%;
}
.text-italic {
  font-style: italic;
}

.city {
  font-size: 4rem;
  color: #fff;
  text-align: center;
  margin: 0 0 4rem 0;
}

@media screen and (max-width: 1180px){
  .temperature__img {
    right: 45rem;
  }
}

@media screen and (max-width: 940px){
  .temperature__img {
    right: 30rem;
  }
  .temperature__text {
    font-size: 15rem;
  }
  .item-container a:last-child {
    display: none;
  }
}

@media screen and (max-width: 800px){
  .temperature__img {
    right: 25rem;
  }
}

@media screen and (max-width: 700px){

  .weather__temperature {
    margin-top: 40rem;
  }

  .temperature__img {
    top: -30rem;
    right: 50%;
    transform: translateX(50%);
  }
}

@media screen and (max-width: 620px){
  .weather__temperature {
    margin-top: 45rem;
  }

  .temperature__img {
    top: -30rem;
  }
}
@media screen and (max-width: 340px){
  .temperature__text {
    font-size: 10rem;
  }
}



</style>