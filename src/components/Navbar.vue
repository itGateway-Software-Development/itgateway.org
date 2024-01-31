<template>
  <nav class="pb-1">
    <div class="d-flex justify-content-between align-items-center">
      <div class="logo">
        <img :src="require('@/assets/images/logo.png')" alt="">
      </div>

      <!-- mobile menu button  -->
      <div class="mobile-menu-btn" @click="drawer = !drawer">
        <span class="material-symbols-outlined fs-1">
          menu_open
        </span>
      </div>

      <div class="top-menu ">
        <span  class=" search-input-wrapper d-inline-flex" :class="{searching: isSearch}">
            <input type="text" class="search-input" placeholder="search ....." :class="{'searching' : isSearch}">
            <span class="material-symbols-outlined icon cursor-pointer search-bar-icon prevent-select" :class="{'searching' : isSearch}" ref="searchIcon"  @click="isSearch = !isSearch">
              search
            </span>
        </span>
        <router-link to="" class="menu">Contact</router-link>
        <router-link to="" class="menu">About</router-link>
        <router-link to="" class="menu d-flex align-items-center position-relative language-wrapper">
          <span class="span-menu">ENGLISH</span><i class="mdi mdi-menu-down"></i>
          <div class="language">
            <button>ENGLISH</button>
            <button>MYANMAR</button>
          </div>
        </router-link>
        <a href="#" class="menu btn btn-sm main-btn menu-btn">Customer Portal</a>
        
        <!-- dark icon  -->
        <span class="menu-icon material-symbols-outlined cursor-pointer prevent-select light-icon" :class="{'d-none': currentTheme == 'customDarkTheme'}" @click="setTheme('customDarkTheme')">
          light_mode
          <span class="light-icon-info menu-icon-info">change to dark</span>
        </span>
        <span class="menu-icon material-symbols-outlined cursor-pointer prevent-select dark-icon" :class="{'d-none': currentTheme == 'customLightTheme'}" @click="setTheme('customLightTheme')">
          dark_mode
          <span class="dark-icon-info menu-icon-info">change to light</span>
        </span>
      </div>
    </div>
  </nav>

  <!-- mobile menu  -->
  <v-navigation-drawer app v-model="drawer" id="drawer" temporary>
    <v-list>
      <v-list-item @click="navigate('/')" class="head-menu">
        <v-list-item-title style="font-size: 14px; color: #50c4ff">
          <span>itGateway</span>
        </v-list-item-title>
      </v-list-item>
      <v-list-item @click="navigate('/')">
        <v-list-item-title class="main-title">
          <v-icon icon="mdi-home"></v-icon> Home</v-list-item-title
        >
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <nav class=" main-nav pt-0 position-relative">
    <router-link to="#" class="menu service-group">
      Service Groups
      <div class="dropdown">
        <div class="content d-flex gap-5">
            <ul class="pt-5 pe-5">
              <li @mouseover="dropdownContent = 'cloud-service'" >
                Cloud Services
              </li>
              <li>
                Software Development
              </li>
              <li>
                Premium IT Solutions
              </li>
              <li>
                Engineering Solutions
              </li>
              <li>
                Managed Services
              </li>
              <li>
                IT Trainings
              </li>
              <li>
                Cyber Security
              </li>
              <li>
                Application Services
              </li>
            </ul>
            <div class="service-content pt-5">
              <div v-if="dropdownContent == 'cloud-service'">
                <h6>itGateway Cloud</h6>
                <p>
                  Running your cloud requirements on itGateway Cloud Infracture.
                </p>
              </div>
            </div>
        </div>
      </div>
    </router-link>
    <router-link to="#" class="menu">Solutions</router-link>
    <router-link to="#" class="menu">Products</router-link>
    <router-link to="#" class="menu">Blogs</router-link>
    <router-link to="#" class="menu">Partners</router-link>
    <router-link to="#" class="menu">Event</router-link>
    <router-link to="#" class="menu">Careers</router-link>
  </nav>
</template>

<script>
import "@/assets/css/nav.css";
import { ref } from "vue";
import { useTheme } from "vuetify";
import { useRouter } from "vue-router";

export default {
  setup() {
    const theme = useTheme();
    const currentTheme = ref(theme.global.name.value);
    const isSearch = ref(false);
    const drawer = ref(false);
    const router = useRouter();
    const dropdownContent = ref(null);

    const navigate = (route) => {
      router.push(route);
      drawer.value = false;
    }

    const setTheme = (theme_mode) => {
      //change text color
      if(theme_mode == 'customLightTheme') {
        document.documentElement.style.setProperty('--font-color', '#3F3F3F');
      } else {
        document.documentElement.style.setProperty('--font-color', '#ededed');
      }
      theme.global.name.value = theme_mode;
      currentTheme.value = theme_mode;
      };

      return {setTheme, currentTheme, isSearch, drawer, navigate, dropdownContent}
  }
};
</script>

<style >
</style>
