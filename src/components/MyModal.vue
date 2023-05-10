<template>
  <div class="modal" v-if="show">
    <Header :showModal="show" />
    <div class="modal-background"  :style="{ backgroundImage: `url(${photo.urls.regular})`, filter: 'grayscale(100%)', backgroundSize: '100% 80%', backgroundRepeat: 'no-repeat' }"></div>
    <div class="modal-content">
      <div class="modal-title">
        <div class="autor">
          <img class="autor-avatar" :src="photo.user.profile_image.large">
          <div class="autor-name">
            <p>{{ photo.user.name }}</p>
            <p style='font-size: 18px;'>@{{ photo.user.instagram_username }}</p>
          </div>
        </div>
        <div class="modal-buttons">
          <a>
            <div class="rectangle-favourite" @click="addToFavourite(photo)">
              <img src="../assets/svg/favor.svg">
            </div>
          </a>
          <a>
            <div class="rectangle-download">
              <img src="../assets/svg/download.svg">
              <span>Download</span>
            </div>
          </a>
        </div>
      </div>

      <div class="modal-close" @click="closeModal">
            <span>&times</span>
      </div>
      <img class="photo" :src="photo.urls.regular" :alt="photo.alt_description">
      <img class="scale" src="../assets/svg/scale.svg">

    </div>
  </div>
</template>
<script>

import Header from './Header.vue';
export default {
  name: "MyModal",
  data() {
    return {
      show: false,
      isSmallScreen: false,
    }
  },
  props: {
    photo: {
      type: Object || null,
      required: true
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeModal() {
      this.show = false;
      this.$emit("close");
    },
    addToFavourite(photo) {
      const favourites = JSON.parse(localStorage.getItem('favourites')) || [];
      favourites.push(photo);
      localStorage.setItem('favourites', JSON.stringify(favourites));
    }
  },
  components: { Header },

};
</script>
  
<style scoped>
.scale {
  position: absolute;
  left: 1630px;
  top: 901px;
}

.modal-background {
  width: 1920px;
  height: 100%;
  position: absolute;
  z-index: -1;
  backdrop-filter: blur(4px);
}

.modal-close {
  position: relative;
  top: 10px;
  left: 98%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  
  font-size: 24px;
  font-weight: bold;
}

.modal-close:hover {
  background-color: #000;
  color: #fff;
}
.modal {
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow-x: auto;
  background-color: #F2F2F2;
}

.modal-content {
  width: 1482px;
  margin: 0 auto;
  margin-top: 46px;
}

.photo {
  width: 1482px;
  height: 744px;
  border-radius: 8px;
  margin-top: 40px;
}

.autor-avatar {
  width: 55px;
  height: 55px;
  border: 1px solid white;
  border-radius: 8px;
}

.modal-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.autor {
  display: flex;
  align-items: center;
}

p {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 21px;
  text-align: left;
  color: #F2F2F2;

}

.autor-name {
  margin-left: 10px;
}

.rectangle-favourite {
  width: 49px;
  height: 49px;
  background-color: #fff;
  border-radius: 8px;

}

.rectangle-favourite:hover {
  cursor: pointer;
}

.rectangle-favourite img {
  width: 24px;
  height: 22px;
  margin-top: 13px;
}

.rectangle-download {
  width: 206px;
  height: 49px;
  background: #FFF200;
  margin-left: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 12px 23px;

}

.rectangle-download:hover {
  cursor: pointer;
}

.rectangle-download img {
  width: 24px;
  height: 22px;


}

.rectangle-download span {
  margin-left: 16px;
  font-size: 20px;
}

.modal-buttons {
  display: flex;
}

@media (max-width: 376px) {
  .modal-content {

    width: 335px;
  }
  .modal-background {
    display: none;
  }
  .photo {
    width: 333px;
    height: 227px;
    border-radius: 8px;
    margin-top: 32px;
  }

  .autor-avatar {
    width: 48px;
    height: 48px;
  }

  p {

    font-size: 18px;
    line-height: 16px;
    color: #000;
  }

  .rectangle-favourite {
    width: 41px;
    height: 41px;


  }

  .rectangle-favourite img {
    width: 20px;
    height: 18px;
    margin-top: 11px;
  }

  .rectangle-download {
    width: 41px;
    height: 41px;
    background: #FFF200;
    margin-left: 17px;
    padding: 11px;

  }

  .rectangle-download img {
    width: 21px;
    height: 18px;


  }

  .rectangle-download span {
    display: none;
  }

  .modal {
    background: white;
    width: 375px;
    overflow: hidden;
  }

}</style>
  