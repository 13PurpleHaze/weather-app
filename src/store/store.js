import {createStore} from "vuex";
import axios from "axios";


export  default createStore({
    state: {
        apiKey: "YOUR_API_KEY",
        week: ['sun', 'mon', 'tue', 'wed', 'thurs', 'fri', 'sat'],
        modalData: '',
        city: {name: 'Moscow', lat: 55.751244 , lon: 37.618423},
        cities: [],
        currentWeather: '',
        fourDaysWeather: '',
        loader: false,
        error: '',
    },
    getters: {
        getApiKey(state) {
            return state.apiKey;
        },
        getCityInfo(state) {
            return { lon: state.city.lon, lat: state.city.lat, name: state.city.name};
        },
        getCurrWeather(state) {
            return state.currentWeather;
        },
        getModalData(state) {
            return state.modalData;
        },
        getWeek(state) {
            return state.week;
        },
        getLoader(state) {
            return state.loader;
        },
        getFourDaysWeather(state) {
            return state.fourDaysWeather;
        },
        getCities(state) {
            return state.cities;
        },
        getAnimation(state) {
            return state.animation;
        },
        getError(state) {
            return state.error;
        },
    },
    mutations: {
        setCity(state, city) {
            state.city = city;
        },
        setCurrWeather(state, data) {
            state.currentWeather = data;
        },
        setFourDaysWeather(state, data) {
            state.fourDaysWeather = data;
        },
        setModalData(state, data) {
            state.modalData = data;
        },
        setLoader(state, data) {
            state.loader = data;
        },
        setCities(state, data) {
            state.cities = data;
        },
        setAnimation(state, data) {
            state.animation = data;
        },
        setError(state, data) {
            state.error = data;
        },
    },
    actions: {
        async fetchCities({getters, commit}, city) {
            if(city.length > 0)
                try {
                    let url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=8&appid=${getters.getApiKey}`;
                    const response = await axios.get(url);
                    const data = response.data;
                    commit('setCities', []);
                    let citiesArr = [];
                    for (let item of data) {
                        citiesArr.push(item)
                    }
                    commit('setCities', citiesArr);
                }
                catch (e) {
                    commit('setError', e.toString());
                }
            else commit('setCities', []);
        },
        async fetchWeather({getters, commit}) {
            try {
                commit('setLoader', true);
                let url = `https://api.openweathermap.org/data/2.5/weather?lat=${getters.getCityInfo.lat}&lon=${getters.getCityInfo.lon}&appid=${getters.getApiKey}`;
                let response = await axios.get(url);
                let data = response.data;
                commit('setCurrWeather', data);
                url = `https://api.openweathermap.org/data/2.5/forecast?lat=${getters.getCityInfo.lat}&lon=${getters.getCityInfo.lon}&appid=${getters.getApiKey}`;
                response = await axios.get(url);
                data = response.data;
                commit('setFourDaysWeather', data.list);
                commit('setLoader', false);
            }
            catch (e) {
                commit('setError', e.toString());
            }
        },
    }
});