<template>
  <div class="main">
    <Header :showModal="showModal" />
    <div class="search-container">
      <input type="text" v-model="query" placeholder="Поиск...">
      <img src='../assets/svg/search.svg' class="search-icon" @click="searchPhotos">
    </div>
    <div class="headline"></div>
    <Gallery :photos="photos" @showInfo="showInfo" />
    <img class="loader" src="../assets/svg/loader.svg">
    <div class="bottom-top">
      <img class="bottom-top-icon" src="../assets/svg/arrow.svg">
    </div>
  </div>
</template>
<script>

import axios from 'axios'
import Header from '@/components/Header.vue';
import Gallery from '@/components/Gallery.vue'

export default {
  name: "Home",
  data() {
    return {
      photos: [],
      selectedPhoto: {},
      showModal: false,
      query: '',
      searched: false
    };
  },
  methods: {
    async searchPhotos() {
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
          query: this.query,
          client_id: '-NnV1Pt7-5hXeusstEQ6GAKKaNGGMxgqE4A9CCcXnzQ'
        }
      })
      this.photos = response.data.results
      this.searched = true
    },

  },
  async created() {
    const response = await axios.get("https://api.unsplash.com/photos/random", {
      params: {
        count: 9,
        client_id: "-NnV1Pt7-5hXeusstEQ6GAKKaNGGMxgqE4A9CCcXnzQ"
      }
    });
    this.photos = response.data;
    console.log(this.photos);
  },
  components: { Header, Gallery }
}
</script>

<style>

.search-container {
  position: relative;
  width: 1920px;
  height: 253px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/svg/back.svg') center top no-repeat;
}

.search-container input[type="text"] {
  padding-right: 34px;
  padding-left: 39px;
  width: 866px;
  height: 70px;
  margin-top: 92px;
}

.search-icon {
  position: relative;
  top: 8px;
  right: 50px;
  width: 23px;
  height: 23px;
}

.headline {
  height: 16px;
  width: 100%;
  background: #C4C4C4;
  margin-bottom: 107px;
}

.main {
  width: 100%;
  height: 1920px;
}

.loader {
  margin-top: 100px;
}

.bottom-top {
  width: 49px;
  height: 49px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  left: 95%;
  bottom: 2%;
}

.bottom-top-icon {
  margin-top: 16px;
}

@media (max-width: 376px) {
  .search-container {
    width: 375px;
    height: 230px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/svg/back.svg') center top no-repeat;
  }

  .search-container input[type="text"] {
    padding-right: 5px;
    padding-left: 5px;
    width: 335px;
    margin-top: 80px;
  }

  .search-icon {
    position: relative;
    top: 8px;
    right: 50px;
    width: 23px;
    height: 23px;
  }

  .headline {
    margin-bottom: 50px;
  }
}
</style>