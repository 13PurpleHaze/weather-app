<template>
  <div class="modal" @click.self="$store.commit('setModalData', null); $store.commit('setError', '')" tabindex="-1" @keydown.tab="$store.commit('setModalData', null); $store.commit('setError', '')">
    <div class="modal__inner" :style="{'height': height}">
      <div class="modal__header">
        <slot name="header"></slot>
        <div class="modal-close" @click="$store.commit('setModalData', null);$store.commit('setError', '')"><span></span></div>
      </div>
      <div class="modal__body">
        <slot name="body"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeatherModal",
  data() {
    return {
      height: this.$store.getters.getError ? 'auto' : '65%',
    }
  },
  mounted() {
    this.$el.focus();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
</script>



<style scoped>

.modal {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  color: #fff;
  z-index: 1000;
  outline: none;
}

.modal__inner {
  border-radius: 2.4rem;
  background: #1b333b;
  width: 65%;
  height: 65%;
  max-width: 200rem;
}

.modal__header {
  border-top-right-radius: 2.4rem;
  border-top-left-radius: 2.4rem;
  display: flex;
  justify-content: space-evenly;
  background: rgba(0, 0, 0, .9);
  font-size: 6rem;
  padding: 2rem 1rem;
  position: relative;
}

.modal-close {
  position: absolute;
  height: 100%;
  width: 10rem;
  bottom: 0;
  right: 0;
  z-index: 101;
}

.modal-close::before,
.modal-close::after{
  position: absolute;
  content: '';
  width: 100%;
  height: .5rem;
  background: #fff;
  bottom: 45%;
  left: 0;
  border-radius: 3.5rem;
}

.modal-close::before {
  transform:rotate(135deg);
}

.modal-close::after {
  transform:rotate(-135deg);
}

.modal__body {
  height: 90%;
  position: relative;
}

.error__body {
  height: 30%;
}

@media screen and (max-width: 700px) {
  .modal__header {
    font-size: 5rem;
  }
}
@media screen and (max-width: 620px){
  .modal__inner {
    width: 90%;
    height: 75%;
  }
}

@media screen and (max-width: 340px) {
  .modal__header {
    font-size: 4rem;
  }
}

</style>