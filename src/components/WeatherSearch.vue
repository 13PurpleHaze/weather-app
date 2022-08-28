<template>
  <div class="weather__search">
    <input
        name="city"
        id="search__input"
        class="search__input"
        type="search"
        v-model.trim="city"
        @keyup.enter="showWeather"
        placeholder="Enter your city"
    >
    <transition name="list-slide">
      <ul id="ul" class="cities-list" v-if="cities.length">
        <li v-for="item in cities" :key="item.id" @click="showWeather">{{cityFullInfo(item)}}</li>
      </ul>
    </transition>
    <div class="search__img"><img :src="search" alt="" @click="showWeather"></div>
  </div>
  <transition name="flag-slide">
    <div class="flag" v-if="flagUrl.length"><img :src="flagUrl" alt=""></div>
  </transition>
</template>

<script>
import search from "@/assets/search.png";
export default {
  name: "WeatherSearch",
  data() {
    return {
      flagUrl: 'https://countryflagsapi.com/png/RU',
      search:search,
      city: '',
      cities: [],
    }
  },
  methods: {
    cityFullInfo(item) {
      return item.name + ' | ' + item.country + ('state' in item ? ' ' + item.state : '');
    },
    showWeather(event) {
      this.$store.commit('setLoader', true);
      this.city = event.target.innerHTML != '' ? event.target.innerHTML : this.city;
      let searchCity = null;
      if(event.target.innerHTML != '') {
        let mas1 = this.city.split('|');
        let name = mas1[0].trim();
        let mas2 = mas1[1].trimStart().trimEnd().split(' ');
        let country = mas2[0].trimEnd().trimStart();
        let state = '';
        for (let i = 1; i < mas2.length; i++) {
          state += typeof mas2[i] === 'undefined' ? '' : (mas2[i].trim() + ' ');
        }
        state = state.trim();
        for (let item of this.cities) {
          if(state != '') {
            if ((name === item.name && country === item.country && state == item.state)) {
              searchCity = item;
              break;
            }
          } else if ((name === item.name && country === item.country)) {
              searchCity = item;
              break;
            }
        }
        this.flagUrl = `https://countryflagsapi.com/png/${searchCity.country}`;
        this.$store.commit('setCity', searchCity);
        this.$store.dispatch('fetchWeather');
        this.cities.length = 0;
      }else {
        this.$store.dispatch('fetchCities', this.city).then(() => {
          searchCity = this.$store.getters.getCities[0];
          this.flagUrl = `https://countryflagsapi.com/png/${searchCity.country}`;
          this.$store.commit('setCity', searchCity);
          this.$store.dispatch('fetchWeather');
          this.cities.length = 0;
        }).catch(() => {
          this.$store.commit('setError', "Sorry, I can't find your city. Please, try again or refresh the page");
          this.$store.commit('setLoader', false);
        });
      }
    },
  },
  watch: {
    city() {
      this.$store.dispatch('fetchCities', this.city).then(() => {this.cities = this.$store.getters.getCities});
    },
  },
}


</script>

<style scoped>

.cities-list {
  color: #fff;
  list-style: none;
  background: rgba(0, 0, 0, .5);
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 3;
  border-top-left-radius: 3.5rem;
  border-top-right-radius: 3.5rem;
  transition: all .3s ease-in-out;
  margin: 0;
  padding: 0;
}

.flag {
  margin-top: 20px;
  width: 80px;
  height: 60px;
  border-radius: 3.5rem;
  overflow: hidden;
  border: 1rem solid rgba(0, 0, 0, .5);
}

.flag img {
  width: 100%;
  height: 100%;
}

.cities-list li{
  font-size: 3.2rem;
  margin: 1rem 0;
  padding: 1rem 2rem;
  cursor: pointer;
}

.cities-list li:first-child {
  padding-top: 8rem;
}

.list-slide-enter-active,
.list-slide-leave-active {
  transition: all .3s ease;
}

.list-slide-enter-from,
.list-slide-leave-to {
  opacity: 0;
  transform: translateY(-25%) rotateX(-90deg);
}

.flag-slide-enter-active,
.flag-slide-leave-active {
  transition: all .3s ease;
}

.flag-slide-enter-from,
.flag-slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.weather__search {
  position: relative;
  display: inline-block;
}

.search__input {
  padding: 2rem 3rem;
  font-size: 3.2rem;
  border-radius: 3.5rem;
  border: none;
  background: rgba(0, 0, 0, .5);
  color: #fff;
  position: relative;
  z-index: 4;
  width: 400px;
}

input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance:none;
}

.search__input:focus {
  outline: .2rem solid #fff;
}

.search__img {
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  width: 5rem;
  height: 5rem;
  z-index: 4;
}

.search__img img {
  width: 100%;
  transition: transform .2s ease-in;
}
.search__img img:hover {
  transform: scale(1.2);
}
@media screen and (max-width: 620px){
  .weather__search {
    width: 100%;
  }

  .search__input {
    width: 100%;
  }
}

@media screen and (min-width: 620px) and (max-height: 595px){
  .weather__search {
    display: block;
  }

  .search__input {
    width: 100%;
  }
}

</style>