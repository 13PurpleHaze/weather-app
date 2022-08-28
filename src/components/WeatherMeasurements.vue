<template>
  <div class="weather__measurements">
    <MeasureItem v-for="(item, k, index) in getMeasurement" :item="item" :key="index"></MeasureItem>
  </div>
</template>

<script>
import wind from "@/assets/wind.png";
import rain from "@/assets/rain.png";
import snow from "@/assets/snow.png";
import humidity from "@/assets/humidity.png";
import MeasureItem from "@/components/MeasureItem";
export default {
  name: "WeatherMeasurements",
  components: {
    MeasureItem
  },
  computed: {
    getMeasurement() {
      const measurement = {
        wind: {prop:'',img:wind},
        humidity: {prop:'',img:humidity},
        rain: {prop:'',img:rain},
        snow: {prop:'',img:snow},
      }
      measurement.wind.prop = Math.round(this.$store.getters.getCurrWeather.wind.speed, 2) + 'm/s';
      measurement.humidity.prop = Math.round(this.$store.getters.getCurrWeather.main.humidity) + '%';
      if('rain' in this.$store.getters.getCurrWeather) {
        measurement.rain.prop = this.$store.getters.getCurrWeather.rain['1h'] + 'mm';
      }
      if('snow' in this.$store.getters.getCurrWeather) {
        measurement.snow.prop = this.$store.getters.getCurrWeather.snow['1h'] + 'mm';
      }
      return measurement;
    }
  },
}
</script>

<style scoped>
.weather__measurements {
  display: flex;
  justify-content: center;
  gap: 10rem;
  align-items: center;
  margin-bottom: 2rem;
}
</style>