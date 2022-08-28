<template>
  <weather-animation></weather-animation>
  <transition name="fade">
  <div class="weather" v-if="showApp">
    <div class="container">
      <div class="weather__inner">
        <weather-body :class="blur"></weather-body>
        <weather-footer v-if="$store.getters.getFourDaysWeather" :class="blur"></weather-footer>
        <weather-loader></weather-loader>
        <transition name="fade">
          <weather-modal v-if="$store.getters.getModalData">
            <template v-slot:header>
              <div class="date-short">{{dateShortFormat}}</div>
              <div class="week">{{getWeekDay}}</div>
            </template>
            <template v-slot:body>
              <swiper
                  class="swipe-container"
                  :modules="modules"
                  :slides-per-view="slidersPerView"
                  :space-between="spaceBetween"
                  :scrollbar="{ draggable: true }"
                  mousewheel=""
                  direction="vertical"
              >
                <swiper-slide v-for="(interval, index) in $store.getters.getModalData" :key="index">
                  <div class="weather__data">
                    <div class="img"><img :src="getIcon(interval)" alt=""></div>
                    <div class="time">{{getTime(interval)}}</div>
                    <div class="temp">{{getTemp(interval)}}°C</div>
                  </div>
                </swiper-slide>
              </swiper>
            </template>
          </weather-modal>
        </transition>
        <transition name="fade">
          <weather-modal v-if="$store.getters.getError">
            <template v-slot:header>Error</template>
            <template v-slot:body>
              <div class="error__header ">Description of the error:</div>
              <div class="error txt-danger">{{ getErrorText }}</div>
            </template>
          </weather-modal>
        </transition>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
import WeatherBody from "@/components/WeatherBody";
import WeatherFooter from "@/components/WeatherFooter";
import WeatherLoader from "@/components/UI/WeatherLoader";
import WeatherModal from "@/components/UI/WeatherModal";
import WeatherAnimation from "@/components/UI/WeatherAnimation";

import {A11y, Mousewheel, Scrollbar} from "swiper";
import 'swiper/css';
import 'swiper/css/scrollbar';
import { SwiperSlide } from 'swiper/vue';
import { Swiper} from 'swiper/vue';
import 'swiper/css/bundle';
export default {
  name: 'App',
  components: {
    WeatherFooter,
    WeatherBody,
    WeatherLoader,
    WeatherModal,
    WeatherAnimation,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      showApp: false,
      direction: 'vertical',
      slidersPerView: 4,
      spaceBetween: 0,
    }
  },
  mounted() {
    this.$store.dispatch('fetchWeather').then(() => {this.showApp = true});
  },
  computed: {
    blur: function () {
      if(this.$store.getters.getLoader) {
        return {blur: true};
      }else return {blur: false};
    },
    dateShortFormat() {
      let date = new Date(this.$store.getters.getModalData[0].dt_txt);
      return `${date.getFullYear()}.${date.getMonth()}.${date.getDate()}`;
    },
    getWeekDay() {
      return this.$store.getters.getWeek[(new Date(this.$store.getters.getModalData[0].dt_txt)).getDay()];
    },
    getErrorText() {
      return this.$store.getters.getError;
    }
  },
  setup() {
    return {
      modules: [Scrollbar, A11y, Mousewheel],
    };
  },
  methods: {
    getTime(day) {
      return (new Date(day.dt_txt)).toString().substring(16,21);
    },
    getTemp(day) {
      return Math.round(day.main.temp - 273.15);
    },
    getIcon(day) {
      return `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;
    },
  },
}
</script>

<style>

#app {
  overflow: hidden;
  position: relative;
}

*,
::before,
::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Noto Sans", sans-serif;
}

body,html {
  font-size: 5px;
}

a {
  text-decoration: none;
}

.wrapper {
  background: skyblue;
  min-height: 100vh;
}

.container {
  width: 100%;
  max-width: 220rem;
  margin: 0 auto;
  padding: 0 1rem;
}

.blur {
  filter: blur(2rem);
}

.fade-enter-active {
  animation: bounce-in 0.5s;
}
.fade-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

.weather {
  padding: 15rem 0;
  position: relative;
  z-index: 2;
}

.swipe-container {
  height: 100%;
}

.weather__data {
  display: flex;
  justify-content: space-evenly;
  font-size: 5rem;
  padding: 2rem;
  align-items: center;
  border-radius: 3.5rem;
  margin: 0 4rem;
  background: rgba(0, 0, 0, .5);
}

.weather__data:first-child {
  margin-top: 2rem;
}

.img {
  height: 20rem;
}

.img img {
  height: 100%;
}

.error__header {
  font-size: 6rem;
  margin: 2rem 3rem 4rem 3rem;
}

.error {
  font-size: 5rem;
  margin: 3rem 3rem 6rem 3rem;
}

.txt-danger {
  color: #dc3545;
}

@media screen and (max-width: 1180px){
  .container {
    max-width: 900px;
  }
}

@media screen and (max-width: 940px){
  .container {
    max-width: 750px;
  }
}

@media screen and (max-width: 800px){
  .container {
    max-width: 660px;
  }
}

@media screen and (max-width: 700px){
  .container {
    max-width: 600px;
  }
}

@media screen and (max-width: 620px){
  .weather {
    padding:3rem 0;
  }
  .container {
    max-width: 450px;
  }
  .weather__data {
    margin: 3rem 4rem 0 4rem;
  }
}

@media screen and (max-width: 460px) {
  .weather__data {
    font-size: 4rem;
    padding: 3rem;
  }
  .img {
    height: 17rem;
  }
}

@media screen and (max-height: 800px) {
  .weather {
    padding: 5rem;
  }

}

@media screen and (max-height: 715px) {
  .weather {
    padding: 3rem;
  }
}

</style>
