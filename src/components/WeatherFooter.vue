<template>
  <div class="weather__footer">
    <swiper
        class="swipe-container"
        :modules="modules"
        :slides-per-view="slidersPerView"
        :space-between="space"
        :scrollbar="{ draggable: true }"
        mousewheel=""
        :direction="direction"
    >
      <swiper-slide v-for="(day, index) in getWeather" :key="index" :day="day" class="slide" @click="$store.commit('setModalData', day)">
        <footer-item :day="day"></footer-item>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { SwiperSlide } from 'swiper/vue';
import footerItem from "@/components/FooterItem";
import { Swiper} from 'swiper/vue';
import 'swiper/css/bundle';
import {Scrollbar, A11y, Mousewheel } from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';
export default {
  name: "WeatherFooter",
  components: {
    footerItem, Swiper, SwiperSlide
  },
  setup() {
    return {
      modules: [Scrollbar, A11y, Mousewheel],
    };
  },
  data() {
    return {
      space: 0,
      width: 0,
      direction: 'horizontal',
      slidersPerView: 4,
    }
  },
  mounted() {
    this.updateWidth();
    window.addEventListener('resize', this.updateWidth);
  },
  unmounted() {
    window.removeEventListener('resize', this.updateWidth);
  },
  methods: {
    updateWidth() {
      this.width = window.innerWidth;
      if(this.width > 620) this.direction = 'horizontal';
      if(this.width <= 620) {
        this.slidersPerView = 3;
        this.direction = 'vertical';
        this.space = 10;
      }else if(this.width <= 800) {
        this.slidersPerView = 2;
      }else if(this.width <= 1180) {
        this.slidersPerView = 3;
      }
    }
  },
  computed: {
    getWeather() {
      let days = '';
      const data = this.$store.getters.getFourDaysWeather;
      let thisDay = new Date(data[0].dt_txt);
      let mas = [];
      let prev = 0;
      for(let item of data) {
          let date = new Date(item.dt_txt);
          if(date.getDay() != thisDay.getDay()) {
              if((new Date(prev.dt_txt)).getDay() === date.getDay()) {
                  mas.push(item);
              }else {
                  if(mas.length > 0)
                      days += (JSON.stringify(mas)) + ',';
                  mas.length = 0;
                  mas.push(item);
              }
          }
          prev = item;
      }
      return (JSON.parse('[' + days.substring(0, days.length - 1) + ']'));
    }
  }
}
</script>

<style scoped>

.weather__footer {
  margin-top: 2rem;
  background: rgba(0, 0, 0, .5);
  border-radius: 2rem;
}

.swipe-container {
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  transition: all .2s ease-in-out;
}

@media screen and (min-width: 620px) {
  .weather__footer {
    padding: 0 2rem;
  }
  .slide:hover {
    transition: all .3s ease-in-out;
    background: rgba(0, 0, 0, .5);
  }
}

@media screen and (max-width: 620px){
  .swipe-container {
    flex-direction: column;
    height: 60rem;
  }
}

</style>