<template>
  <div class="weather__body">
    <weather-search></weather-search>
    <weather-temperature></weather-temperature>
    <weather-measurements></weather-measurements>
  </div>
</template>

<script>
import weatherMeasurements from "@/components/WeatherMeasurements";
import weatherSearch from "@/components/WeatherSearch";
import weatherTemperature from "@/components/WeatherTemperature";
export default {
  name: "WeatherBody",
  components: {
    weatherMeasurements, weatherSearch, weatherTemperature
  },
}
</script>

<style scoped>
.weather__body {
  border-radius: 3rem;
  padding: 2.2rem 5rem;
  background: rgba(0, 0, 0, .5);
}

</style>