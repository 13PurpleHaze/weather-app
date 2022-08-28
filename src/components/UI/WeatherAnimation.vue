<template>
  <div class="anim__wrapper" v-if="getAnim">
    <img v-for="(item, index) in items" :key="index" :src="getProperty()" alt="" :class="className" :style="getClass()">
  </div>
</template>

<script>
import snow from "@/assets/snow.png";
import cloud from "@/assets/whitecloud.png";
import drop from "@/assets/drop.png";
export default {
  name: "WeatherAnimation",
  data() {
    return {
      cloud: cloud,
      drop: drop,
      snow: snow,
      items: 200,
      className: '',
    }
  },
  computed: {
    getAnim() {
      return this.$store.getters.getCurrWeather;
    }
  },
  methods: {
    getProperty() {
      if('rain' in this.$store.getters.getCurrWeather) {
        this.className = 'rain';
        return this.drop;
      }
      if('rain' in this.$store.getters.getCurrWeather) {
        this.className = 'snow';
        return this.snow;
      }
      if(this.$store.getters.getCurrWeather.clouds.all > 0) {
        this.className = 'cloud';
        return this.cloud;
      }
      return '';
    },
    getClass() {
      if(this.className == 'rain') {
        return this.rainStyle();
      }else if(this.className == 'snow') {
        return this.snowStyle();
      }else if(this.className == 'cloud') {
        return  this.cloudStyle()
      }
    },
    rainStyle() {
      let left = Math.random() * window.innerWidth + 'px';
      let animDur =  Math.random() * 3 + 2 + 's';
      let size = 10 + 'px';
      this.items = 300;
      return {
        'animationDuration': animDur,
        'width': size,
        'left': left,
        'height': '20px',
      }
    },
    snowStyle() {
      let left = Math.random() * window.innerWidth + 'px';
      let animDur =  Math.random() * 6 + 4 + 's';
      let opacity = Math.random();
      let size = Math.random() * 30 + 10 + 'px';
      return {
        'animationDuration': animDur,
        'opacity': opacity,
        'width': size,
        'left': left,
      }
    },
    cloudStyle() {
      let top = Math.random() * (window.innerHeight - 300) + 'px';
      this.items = 20;
      let animDur =  Math.random() * 20 + 15 + 's';
      let opacity = Math.random() * 1 + 0.4;
      let size = Math.random() * 200 + 100 + 'px';
      return {
        'top': top,
        'animationDuration': animDur,
        'opacity': opacity,
        'width': size,
      }
    }
  },
}
</script>

<style scoped>

.anim__wrapper {
  left: 0;
  top: 0;
  width: 100%;
  position: absolute;
  height: 100%;
  z-index: 0;
}

.rain, snow {
  width: 50px;
  animation-name: fall;
  animation-duration: 5s;
  animation-timing-function: linear;
  position: absolute;
  pointer-events: none;
  animation-iteration-count: infinite;
}

.cloud {
  width: 100px;
  animation-name: cloud;
  animation-duration: 5s;
  animation-timing-function: linear;
  position: absolute;
  pointer-events: none;
  top:0;
  animation-iteration-count: infinite;
}

@keyframes cloud {
  from {
    left: -100%;
  }
  to {
    left: 100vw;
  }
}

@keyframes fall {
  from {
    top:-100%;
  }
  to {
    top: 100%;
  }
}
</style>