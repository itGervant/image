<template>
    <div>
      <div v-if="!photos.length">
        <h1>No photos to display</h1>
      </div>
      <div v-else>
        <div class="gallery">
          <div v-for="photo in photos" :key="photo.id">
            <img :src="photo.urls.regular" :alt="photo.alt_description" @click="showInfo(photo)">
          </div>
        </div>
        <MyModal :photo="selectedPhoto" :show="showModal" @close="showModal = false" />
      </div>
    </div>
  </template>
  
  <script>
  import MyModal from '@/components/MyModal.vue'
  
  export default {
    name: "Gallery",
    props: {
      photos: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        selectedPhoto: {},
        showModal: false
      }
    },
    methods: {
      showInfo(photo) {
        this.selectedPhoto = photo
        this.showModal = true
      }
    },
    components: { MyModal }
  }
  </script>
  
  <style scoped>
  .gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;   
    width: 1479px;
    margin: 0 auto;
  }
  
  .gallery img {
    width: 473px;
    height: 453px;
    border-radius: 8px;
    cursor: pointer;
    margin-bottom: 30px;
  }

  @media (max-width: 376px) {
    .gallery img {
    width: 335px;
    height: 321px;
    margin-bottom: 30px;
  }

  .gallery {
    flex-direction: column;
    width: 370px;
    margin-top: 50px;
  }
  }
  </style>
  