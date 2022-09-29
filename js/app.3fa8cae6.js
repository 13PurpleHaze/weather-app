(function(){"use strict";var A={4285:function(A,t,e){var r=e(9242),a=e(3396),i=e(7139);const g={key:0,class:"weather"},s={class:"container"},n={class:"weather__inner"},o={class:"date-short"},B={class:"week"},w={class:"weather__data"},d={class:"img"},c=["src"],D={class:"time"},l={class:"temp"},Q=(0,a.Uk)("Error"),I=(0,a._)("div",{class:"error__header"},"Description of the error:",-1),h={class:"error txt-danger"};function m(A,t,e,m,M,u){const C=(0,a.up)("weather-animation"),E=(0,a.up)("weather-body"),p=(0,a.up)("weather-footer"),y=(0,a.up)("weather-loader"),k=(0,a.up)("swiper-slide"),Y=(0,a.up)("swiper"),G=(0,a.up)("weather-modal");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(C),(0,a.Wm)(r.uT,{name:"fade"},{default:(0,a.w5)((()=>[M.showApp?((0,a.wg)(),(0,a.iD)("div",g,[(0,a._)("div",s,[(0,a._)("div",n,[(0,a.Wm)(E,{class:(0,i.C_)(u.blur)},null,8,["class"]),A.$store.getters.getFourDaysWeather?((0,a.wg)(),(0,a.j4)(p,{key:0,class:(0,i.C_)(u.blur)},null,8,["class"])):(0,a.kq)("",!0),(0,a.Wm)(y),(0,a.Wm)(r.uT,{name:"fade"},{default:(0,a.w5)((()=>[A.$store.getters.getModalData?((0,a.wg)(),(0,a.j4)(G,{key:0},{header:(0,a.w5)((()=>[(0,a._)("div",o,(0,i.zw)(u.dateShortFormat),1),(0,a._)("div",B,(0,i.zw)(u.getWeekDay),1)])),body:(0,a.w5)((()=>[(0,a.Wm)(Y,{class:"swipe-container",modules:m.modules,"slides-per-view":M.slidersPerView,"space-between":M.spaceBetween,scrollbar:{draggable:!0},mousewheel:"",direction:"vertical"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(A.$store.getters.getModalData,((A,t)=>((0,a.wg)(),(0,a.j4)(k,{key:t},{default:(0,a.w5)((()=>[(0,a._)("div",w,[(0,a._)("div",d,[(0,a._)("img",{src:u.getIcon(A),alt:""},null,8,c)]),(0,a._)("div",D,(0,i.zw)(u.getTime(A)),1),(0,a._)("div",l,(0,i.zw)(u.getTemp(A))+"°C",1)])])),_:2},1024)))),128))])),_:1},8,["modules","slides-per-view","space-between"])])),_:1})):(0,a.kq)("",!0)])),_:1}),(0,a.Wm)(r.uT,{name:"fade"},{default:(0,a.w5)((()=>[A.$store.getters.getError?((0,a.wg)(),(0,a.j4)(G,{key:0},{header:(0,a.w5)((()=>[Q])),body:(0,a.w5)((()=>[I,(0,a._)("div",h,(0,i.zw)(u.getErrorText),1)])),_:1})):(0,a.kq)("",!0)])),_:1})])])])):(0,a.kq)("",!0)])),_:1})],64)}const M={class:"weather__body"};function u(A,t,e,r,i,g){const s=(0,a.up)("weather-search"),n=(0,a.up)("weather-temperature"),o=(0,a.up)("weather-measurements");return(0,a.wg)(),(0,a.iD)("div",M,[(0,a.Wm)(s),(0,a.Wm)(n),(0,a.Wm)(o)])}const C={class:"weather__measurements"};function E(A,t,e,r,i,g){const s=(0,a.up)("MeasureItem");return(0,a.wg)(),(0,a.iD)("div",C,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(g.getMeasurement,((A,t,e)=>((0,a.wg)(),(0,a.j4)(s,{item:A,key:e},null,8,["item"])))),128))])}var p=e.p+"img/wind.329a6b0b.png",y=e.p+"img/rain.5e8b98d8.png",k=e.p+"img/snow.4606a6bb.png",Y=e.p+"img/humidity.d8ae02ec.png";const G={key:0,class:"measurements__item"},b={class:"measurements__img"},O=["src"],v={class:"measurements__text"};function W(A,t,e,r,g,s){return e.item.prop.length?((0,a.wg)(),(0,a.iD)("div",G,[(0,a._)("div",b,[(0,a._)("img",{src:e.item.img,alt:""},null,8,O)]),(0,a._)("div",v,(0,i.zw)(e.item.prop),1)])):(0,a.kq)("",!0)}var f={name:"MeasureItem",props:["item"]},H=e(89);const Z=(0,H.Z)(f,[["render",W],["__scopeId","data-v-cb96bf26"]]);var N=Z,S={name:"WeatherMeasurements",components:{MeasureItem:N},computed:{getMeasurement(){const A={wind:{prop:"",img:p},humidity:{prop:"",img:Y},rain:{prop:"",img:y},snow:{prop:"",img:k}};return A.wind.prop=Math.round(this.$store.getters.getCurrWeather.wind.speed,2)+"m/s",A.humidity.prop=Math.round(this.$store.getters.getCurrWeather.main.humidity)+"%","rain"in this.$store.getters.getCurrWeather&&(A.rain.prop=this.$store.getters.getCurrWeather.rain["1h"]+"mm"),"snow"in this.$store.getters.getCurrWeather&&(A.snow.prop=this.$store.getters.getCurrWeather.snow["1h"]+"mm"),A}}};const j=(0,H.Z)(S,[["render",E],["__scopeId","data-v-17b2e54c"]]);var J=j;const L={class:"weather__search"},T={key:0,id:"ul",class:"cities-list"},R={class:"search__img"},z=["src"],x={key:0,class:"flag"},P=["src"];function F(A,t,e,g,s,n){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",L,[(0,a.wy)((0,a._)("input",{name:"city",id:"search__input",class:"search__input",type:"search","onUpdate:modelValue":t[0]||(t[0]=A=>s.city=A),onKeyup:t[1]||(t[1]=(0,r.D2)(((...A)=>n.showWeather&&n.showWeather(...A)),["enter"])),placeholder:"Enter your city"},null,544),[[r.nr,s.city,void 0,{trim:!0}]]),(0,a.Wm)(r.uT,{name:"list-slide"},{default:(0,a.w5)((()=>[s.cities.length?((0,a.wg)(),(0,a.iD)("ul",T,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.cities,(A=>((0,a.wg)(),(0,a.iD)("li",{key:A.id,onClick:t[2]||(t[2]=(...A)=>n.showWeather&&n.showWeather(...A))},(0,i.zw)(n.cityFullInfo(A)),1)))),128))])):(0,a.kq)("",!0)])),_:1}),(0,a._)("div",R,[(0,a._)("img",{src:s.search,alt:"",onClick:t[3]||(t[3]=(...A)=>n.showWeather&&n.showWeather(...A))},null,8,z)])]),(0,a.Wm)(r.uT,{name:"flag-slide"},{default:(0,a.w5)((()=>[s.flagUrl.length?((0,a.wg)(),(0,a.iD)("div",x,[(0,a._)("img",{src:s.flagUrl,alt:""},null,8,P)])):(0,a.kq)("",!0)])),_:1})],64)}var U=e.p+"img/search.971e12c5.png",X={name:"WeatherSearch",data(){return{flagUrl:"https://countryflagsapi.com/png/RU",search:U,city:"",cities:[]}},methods:{cityFullInfo(A){return A.name+" | "+A.country+("state"in A?" "+A.state:"")},showWeather(A){this.$store.commit("setLoader",!0),this.city=""!=A.target.innerHTML?A.target.innerHTML:this.city;let t=null;if(""!=A.target.innerHTML){let A=this.city.split("|"),e=A[0].trim(),r=A[1].trimStart().trimEnd().split(" "),a=r[0].trimEnd().trimStart(),i="";for(let t=1;t<r.length;t++)i+="undefined"===typeof r[t]?"":r[t].trim()+" ";i=i.trim();for(let g of this.cities)if(""!=i){if(e===g.name&&a===g.country&&i==g.state){t=g;break}}else if(e===g.name&&a===g.country){t=g;break}this.flagUrl=`https://countryflagsapi.com/png/${t.country}`,this.$store.commit("setCity",t),this.$store.dispatch("fetchWeather"),this.cities.length=0}else this.$store.dispatch("fetchCities",this.city).then((()=>{t=this.$store.getters.getCities[0],this.flagUrl=`https://countryflagsapi.com/png/${t.country}`,this.$store.commit("setCity",t),this.$store.dispatch("fetchWeather"),this.cities.length=0})).catch((()=>{this.$store.commit("setError","Sorry, I can't find your city. Please, try again or refresh the page"),this.$store.commit("setLoader",!1)}))}},watch:{city(){this.$store.dispatch("fetchCities",this.city).then((()=>{this.cities=this.$store.getters.getCities}))}}};const _=(0,H.Z)(X,[["render",F],["__scopeId","data-v-3ce27978"]]);var K=_;const V={class:"weather__temperature"},$={class:"temperature__img"},q=["src"],AA={class:"temperature__text"},tA={class:"text-small"},eA={class:"text-small"},rA={class:"city text-italic"};function aA(A,t,e,r,g,s){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("div",V,[(0,a._)("div",$,[(0,a._)("img",{src:s.getTempCurrDay.imgUrl,alt:""},null,8,q)]),(0,a._)("div",AA,[(0,a._)("div",tA,(0,i.zw)(s.getTempCurrDay.description),1),(0,a.Uk)((0,i.zw)(s.getTempCurrDay.temp),1),(0,a._)("div",eA,"feels like "+(0,i.zw)(s.getTempCurrDay.feelsLike),1)])]),(0,a._)("div",rA,(0,i.zw)(A.$store.getters.getCityInfo.name),1)])}var iA={name:"WeatherTemperature",computed:{getTempCurrDay(){return{temp:Math.round(this.$store.getters.getCurrWeather.main.temp-273.15)+"°C",imgUrl:`http://openweathermap.org/img/wn/${this.$store.getters.getCurrWeather.weather[0].icon}@2x.png`,feelsLike:Math.round(this.$store.getters.getCurrWeather.main.feels_like-273.15)+"°C",description:this.$store.getters.getCurrWeather.weather[0].description}}}};const gA=(0,H.Z)(iA,[["render",aA],["__scopeId","data-v-534ffbb0"]]);var sA=gA,nA={name:"WeatherBody",components:{weatherMeasurements:J,weatherSearch:K,weatherTemperature:sA}};const oA=(0,H.Z)(nA,[["render",u],["__scopeId","data-v-22f52b60"]]);var BA=oA;const wA={class:"weather__footer"};function dA(A,t,e,r,i,g){const s=(0,a.up)("footer-item"),n=(0,a.up)("swiper-slide"),o=(0,a.up)("swiper");return(0,a.wg)(),(0,a.iD)("div",wA,[(0,a.Wm)(o,{class:"swipe-container",modules:r.modules,"slides-per-view":i.slidersPerView,"space-between":i.space,scrollbar:{draggable:!0},mousewheel:"",direction:i.direction},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(g.getWeather,((t,e)=>((0,a.wg)(),(0,a.j4)(n,{key:e,day:t,class:"slide",onClick:e=>A.$store.commit("setModalData",t)},{default:(0,a.w5)((()=>[(0,a.Wm)(s,{day:t},null,8,["day"])])),_:2},1032,["day","onClick"])))),128))])),_:1},8,["modules","slides-per-view","space-between","direction"])])}var cA=e(3461);const DA={class:"item"},lA={class:"item__date"},QA={class:"item__img"},IA=["src"],hA=(0,a.Uk)("/"),mA=["src"],MA={class:"item__temp"};function uA(A,t,e,r,g,s){return(0,a.wg)(),(0,a.iD)("div",DA,[(0,a._)("div",lA,(0,i.zw)(s.weekDay),1),(0,a._)("div",QA,[(0,a._)("img",{src:s.imgNoon,alt:""},null,8,IA),hA,(0,a._)("img",{src:s.imgNight,alt:""},null,8,mA)]),(0,a._)("div",MA,(0,i.zw)(s.tempNoon)+" / "+(0,i.zw)(s.tempNight),1)])}var CA={name:"FooterItem",data(){return{thisDay:new Date(this.day[0].dt_txt)}},props:{day:{type:Array}},computed:{tempNoon(){return Math.round(this.day[5].main.temp-273.15)+"°C"},tempNight(){return Math.round(this.day[0].main.temp-273.15)+"°C"},weekDay(){return this.$store.getters.getWeek[this.thisDay.getDay()]},imgNoon(){return`http://openweathermap.org/img/wn/${this.day[5].weather[0].icon}@2x.png`},imgNight(){return`http://openweathermap.org/img/wn/${this.day[0].weather[0].icon}@2x.png`}}};const EA=(0,H.Z)(CA,[["render",uA],["__scopeId","data-v-3a949aa1"]]);var pA=EA,yA=e(9231),kA={name:"WeatherFooter",components:{footerItem:pA,Swiper:cA.tq,SwiperSlide:cA.o5},setup(){return{modules:[yA.LW,yA.s5,yA.Gk]}},data(){return{space:0,width:0,direction:"horizontal",slidersPerView:4}},mounted(){this.updateWidth(),window.addEventListener("resize",this.updateWidth)},unmounted(){window.removeEventListener("resize",this.updateWidth)},methods:{updateWidth(){this.width=window.innerWidth,this.width>620&&(this.direction="horizontal"),this.width<=620?(this.slidersPerView=3,this.direction="vertical",this.space=10):this.width<=800?this.slidersPerView=2:this.width<=1180&&(this.slidersPerView=3)}},computed:{getWeather(){let A="";const t=this.$store.getters.getFourDaysWeather;let e=new Date(t[0].dt_txt),r=[],a=0;for(let i of t){let t=new Date(i.dt_txt);t.getDay()!=e.getDay()&&(new Date(a.dt_txt).getDay()===t.getDay()||(r.length>0&&(A+=JSON.stringify(r)+","),r.length=0),r.push(i)),a=i}return JSON.parse("["+A.substring(0,A.length-1)+"]")}}};const YA=(0,H.Z)(kA,[["render",dA],["__scopeId","data-v-b4ce132c"]]);var GA=YA;const bA={key:0,class:"loader"},OA=["src"];function vA(A,t,e,r,i,g){return A.$store.getters.getLoader?((0,a.wg)(),(0,a.iD)("div",bA,[(0,a._)("img",{src:i.loader,alt:"",class:"img-load"},null,8,OA)])):(0,a.kq)("",!0)}var WA=e.p+"img/loader.d5f233cb.gif",fA={name:"WeatherLoader",data(){return{loader:WA}}};const HA=(0,H.Z)(fA,[["render",vA],["__scopeId","data-v-5e3ebeb7"]]);var ZA=HA;const NA=A=>((0,a.dD)("data-v-22f0b8ef"),A=A(),(0,a.Cn)(),A),SA={class:"modal__header"},jA=NA((()=>(0,a._)("span",null,null,-1))),JA=[jA],LA={class:"modal__body"};function TA(A,t,e,g,s,n){return(0,a.wg)(),(0,a.iD)("div",{class:"modal",onClick:t[1]||(t[1]=(0,r.iM)((t=>{A.$store.commit("setModalData",null),A.$store.commit("setError","")}),["self"])),tabindex:"-1",onKeydown:t[2]||(t[2]=(0,r.D2)((t=>{A.$store.commit("setModalData",null),A.$store.commit("setError","")}),["tab"]))},[(0,a._)("div",{class:"modal__inner",style:(0,i.j5)({height:s.height})},[(0,a._)("div",SA,[(0,a.WI)(A.$slots,"header",{},void 0,!0),(0,a._)("div",{class:"modal-close",onClick:t[0]||(t[0]=t=>{A.$store.commit("setModalData",null),A.$store.commit("setError","")})},JA)]),(0,a._)("div",LA,[(0,a.WI)(A.$slots,"body",{},void 0,!0)])],4)],32)}var RA={name:"WeatherModal",data(){return{height:this.$store.getters.getError?"auto":"65%"}},mounted(){this.$el.focus(),window.scrollTo({top:0,behavior:"smooth"})}};const zA=(0,H.Z)(RA,[["render",TA],["__scopeId","data-v-22f0b8ef"]]);var xA=zA;const PA={key:0,class:"anim__wrapper"},FA=["src"];function UA(A,t,e,r,g,s){return s.getAnim?((0,a.wg)(),(0,a.iD)("div",PA,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(g.items,((A,t)=>((0,a.wg)(),(0,a.iD)("img",{key:t,src:s.getProperty(),alt:"",class:(0,i.C_)(g.className),style:(0,i.j5)(s.getClass())},null,14,FA)))),128))])):(0,a.kq)("",!0)}var XA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAADE4AAAxOAX93jCMAAAXRaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMDctMjJUMTM6MTM6NTIrMDU6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTA3LTIyVDEzOjE1OjM4KzA1OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTA3LTIyVDEzOjE1OjM4KzA1OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpiZGFkNTkwYy04NDQ3LWU3NDktYmE3OS0zNmMyMGFlYjMzNjMiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpmYTMxY2QxMi00ZGI0LTQ4NGMtYjYyNS0xMmZkM2RiYjljODgiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3NDNiYWRlOC05NjA5LTYwNDEtOWZiZi05ZjNiZGI4NTE1YTAiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjc0M2JhZGU4LTk2MDktNjA0MS05ZmJmLTlmM2JkYjg1MTVhMCIgc3RFdnQ6d2hlbj0iMjAyMi0wNy0yMlQxMzoxMzo1MiswNTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpiZGFkNTkwYy04NDQ3LWU3NDktYmE3OS0zNmMyMGFlYjMzNjMiIHN0RXZ0OndoZW49IjIwMjItMDctMjJUMTM6MTU6MzgrMDU6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1w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",_A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAbJaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMDgtMjNUMTc6MTI6MzYrMDU6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTA4LTIzVDIyOjQ1OjIxKzA1OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTA4LTIzVDIyOjQ1OjIxKzA1OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9IkFkb2JlIFJHQiAoMTk5OCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ZWJjYzcyYzItZjJlYi1kYjQxLThmZTEtMmViN2ViYmEyZTk5IiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZjQ5OWJmNzUtNGVmNS0xNzQyLTg0NGMtMTg5OTk1Mzc4MWY5IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ODM4OGU5OTEtOWIzNy03YTQxLWEyMWEtYzBmMTFjNzcwODA2Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo4Mzg4ZTk5MS05YjM3LTdhNDEtYTIxYS1jMGYxMWM3NzA4MDYiIHN0RXZ0OndoZW49IjIwMjItMDgtMjNUMTc6MTI6MzYrMDU6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NGI2OTJlZDEtY2EzNC1jYjQ2LTgwYzMtYjRiODM2NThmYTlmIiBzdEV2dDp3aGVuPSIyMDIyLTA4LTIzVDE3OjE0OjIzKzA1OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93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",KA={name:"WeatherAnimation",data(){return{cloud:XA,drop:_A,snow:k,items:200,className:""}},computed:{getAnim(){return this.$store.getters.getCurrWeather}},methods:{getProperty(){return"rain"in this.$store.getters.getCurrWeather?(this.className="rain",this.drop):"rain"in this.$store.getters.getCurrWeather?(this.className="snow",this.snow):this.$store.getters.getCurrWeather.clouds.all>0?(this.className="cloud",this.cloud):""},getClass(){return"rain"==this.className?this.rainStyle():"snow"==this.className?this.snowStyle():"cloud"==this.className?this.cloudStyle():void 0},rainStyle(){let A=Math.random()*window.innerWidth+"px",t=3*Math.random()+2+"s",e="10px";return this.items=300,{animationDuration:t,width:e,left:A,height:"20px"}},snowStyle(){let A=Math.random()*window.innerWidth+"px",t=6*Math.random()+4+"s",e=Math.random(),r=30*Math.random()+10+"px";return{animationDuration:t,opacity:e,width:r,left:A}},cloudStyle(){let A=Math.random()*(window.innerHeight-300)+"px";this.items=20;let t=20*Math.random()+15+"s",e=1*Math.random()+.4,r=200*Math.random()+100+"px";return{top:A,animationDuration:t,opacity:e,width:r}}}};const VA=(0,H.Z)(KA,[["render",UA],["__scopeId","data-v-5048afeb"]]);var $A=VA,qA={name:"App",components:{WeatherFooter:GA,WeatherBody:BA,WeatherLoader:ZA,WeatherModal:xA,WeatherAnimation:$A,Swiper:cA.tq,SwiperSlide:cA.o5},data(){return{showApp:!1,direction:"vertical",slidersPerView:4,spaceBetween:0}},mounted(){this.$store.dispatch("fetchWeather").then((()=>{this.showApp=!0}))},computed:{blur:function(){return this.$store.getters.getLoader?{blur:!0}:{blur:!1}},dateShortFormat(){let A=new Date(this.$store.getters.getModalData[0].dt_txt);return`${A.getFullYear()}.${A.getMonth()}.${A.getDate()}`},getWeekDay(){return this.$store.getters.getWeek[new Date(this.$store.getters.getModalData[0].dt_txt).getDay()]},getErrorText(){return this.$store.getters.getError}},setup(){return{modules:[yA.LW,yA.s5,yA.Gk]}},methods:{getTime(A){return new Date(A.dt_txt).toString().substring(16,21)},getTemp(A){return Math.round(A.main.temp-273.15)},getIcon(A){return`http://openweathermap.org/img/wn/${A.weather[0].icon}@2x.png`}}};const At=(0,H.Z)(qA,[["render",m]]);var tt=At,et=e(65),rt=e(6265),at=e.n(rt),it=(0,et.MT)({state:{apiKey:"4ac06ed218af8c9e671ffe310ae723bc",week:["sun","mon","tue","wed","thurs","fri","sat"],modalData:"",city:{name:"Moscow",lat:55.751244,lon:37.618423},cities:[],currentWeather:"",fourDaysWeather:"",loader:!1,error:""},getters:{getApiKey(A){return A.apiKey},getCityInfo(A){return{lon:A.city.lon,lat:A.city.lat,name:A.city.name}},getCurrWeather(A){return A.currentWeather},getModalData(A){return A.modalData},getWeek(A){return A.week},getLoader(A){return A.loader},getFourDaysWeather(A){return A.fourDaysWeather},getCities(A){return A.cities},getAnimation(A){return A.animation},getError(A){return A.error}},mutations:{setCity(A,t){A.city=t},setCurrWeather(A,t){A.currentWeather=t},setFourDaysWeather(A,t){A.fourDaysWeather=t},setModalData(A,t){A.modalData=t},setLoader(A,t){A.loader=t},setCities(A,t){A.cities=t},setAnimation(A,t){A.animation=t},setError(A,t){A.error=t}},actions:{async fetchCities({getters:A,commit:t},e){if(e.length>0)try{let r=`https://api.openweathermap.org/geo/1.0/direct?q=${e}&limit=8&appid=${A.getApiKey}`;const a=await at().get(r),i=a.data;t("setCities",[]);let g=[];for(let A of i)g.push(A);t("setCities",g)}catch(r){t("setError",r.toString())}else t("setCities",[])},async fetchWeather({getters:A,commit:t}){try{t("setLoader",!0);let e=`https://api.openweathermap.org/data/2.5/weather?lat=${A.getCityInfo.lat}&lon=${A.getCityInfo.lon}&appid=${A.getApiKey}`,r=await at().get(e),a=r.data;t("setCurrWeather",a),e=`https://api.openweathermap.org/data/2.5/forecast?lat=${A.getCityInfo.lat}&lon=${A.getCityInfo.lon}&appid=${A.getApiKey}`,r=await at().get(e),a=r.data,t("setFourDaysWeather",a.list),t("setLoader",!1)}catch(e){t("setError",e.toString())}}}});(0,r.ri)(tt).use(it).mount("#app")}},t={};function e(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return A[r](i,i.exports,e),i.exports}e.m=A,function(){var A=[];e.O=function(t,r,a,i){if(!r){var g=1/0;for(B=0;B<A.length;B++){r=A[B][0],a=A[B][1],i=A[B][2];for(var s=!0,n=0;n<r.length;n++)(!1&i||g>=i)&&Object.keys(e.O).every((function(A){return e.O[A](r[n])}))?r.splice(n--,1):(s=!1,i<g&&(g=i));if(s){A.splice(B--,1);var o=a();void 0!==o&&(t=o)}}return t}i=i||0;for(var B=A.length;B>0&&A[B-1][2]>i;B--)A[B]=A[B-1];A[B]=[r,a,i]}}(),function(){e.n=function(A){var t=A&&A.__esModule?function(){return A["default"]}:function(){return A};return e.d(t,{a:t}),t}}(),function(){e.d=function(A,t){for(var r in t)e.o(t,r)&&!e.o(A,r)&&Object.defineProperty(A,r,{enumerable:!0,get:t[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(A){if("object"===typeof window)return window}}()}(),function(){e.o=function(A,t){return Object.prototype.hasOwnProperty.call(A,t)}}(),function(){e.p="/REPO_NAME/"}(),function(){var A={143:0};e.O.j=function(t){return 0===A[t]};var t=function(t,r){var a,i,g=r[0],s=r[1],n=r[2],o=0;if(g.some((function(t){return 0!==A[t]}))){for(a in s)e.o(s,a)&&(e.m[a]=s[a]);if(n)var B=n(e)}for(t&&t(r);o<g.length;o++)i=g[o],e.o(A,i)&&A[i]&&A[i][0](),A[i]=0;return e.O(B)},r=self["webpackChunkweather_app"]=self["webpackChunkweather_app"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(4285)}));r=e.O(r)})();
//# sourceMappingURL=app.3fa8cae6.js.map