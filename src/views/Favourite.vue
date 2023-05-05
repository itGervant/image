<template>
  <div>
    <Header />
    <div class="headline"></div>
    <h1>Избранное</h1>
    <Gallery :photos="favourites" />
  </div>
</template>
<script>
import Gallery from '@/components/Gallery.vue';
import Header from '@/components/Header.vue';
export default {
  name: "Favourite",
  data() {
    return {
      favourites: []
    }
  },
  created() {
    const favourites = JSON.parse(localStorage.getItem('favourites')) || [];
    this.favourites = favourites;
  },
  components: { Gallery, Header }
}
</script>

<style scoped>
.headline {
  height: 16px;
  width: 100%;
  background: #C4C4C4;
}

h1 {
  margin-top: 94px;
  margin-bottom: 101px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 72px;
  line-height: 84px;
  text-align: center;
  color: #000000;
}

@media (max-width: 376px) {
  h1 {
    margin-top: 40px;
    margin-bottom: 56px;
    font-size: 36px;
    line-height: 42px;

  }
}
</style>