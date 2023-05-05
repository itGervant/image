<template>
    <div :class="headerClass">
        <div class="header-content">
            <router-link to="/">
                <img :class="logoClass" src="../assets/svg/logo.svg">
            </router-link>

            <div class="buttons">
                <div class="search-button" v-if="showSearchIcon">
                    <img class="favourite-image" src="../assets/svg/searchwhite.svg">
                    <span>Поиск</span>
                </div>
                <router-link class="favourite" to="/favourite">
                    <img class="favourite-image" src="../assets/svg/favourite.svg">
                    <span>Избранное</span>
                </router-link>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: {
        showModal: {
            type: Boolean,
            required: false
        },
    },
    computed: {
        headerClass() {
            if (this.$route.path === '/favourite' || this.showModal === true) {
                return 'header-small';
            } else {
                return 'header-large';
            }
        },
        logoClass() {
            if (this.$route.path === '/favourite' || this.showModal === true) {
                return 'logo-small';
            } else {
                return 'logo-large';
            }
        },
        showSearchIcon() {
            return this.$route.path === '/favourite' || this.showModal === true;
        }
    },
}
</script>

<style scoped>
.header-large {
    width: 1920px;
    height: 148px;
    background-color: black;
}

.header-small {
    width: 1920px;
    height: 81px;
    background-color: black;
}

.header-content {
    width: 1479px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
}

.logo-large {
    height: 73px;
    width: 186px;


}

.logo-small {
    height: 44px;
    width: 112px;


}

.favourite-image {
    height: 21px;
    width: 23px;

}

.buttons {
    display: flex;
    align-items: center;
}

.search-button {
    display: flex;
    align-items: center;
}

.favourite {
    display: flex;
    align-items: center;
    margin-left: 38px;
}

span {
    margin-left: 10px;
    color: white;
    text-decoration: none;
}

@media (max-width:376px) {
    .header-large {
        width: 375px;
        height: 78px;
    }

    .header-small {
        width: 375px;
        height: 78px;
    }

    span {
        display: none;
    }

    .logo-large {
        height: 33px;
        width: 84px;
    }

    .header-content {
        width: 100%;
        padding-left: 21px;
        padding-right: 21px;
    }

    .favourite {
        margin-left: 21px;
    }

}</style>