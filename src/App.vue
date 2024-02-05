<template>
  <v-app>
    <Navbar />
    <v-main>
      <Loading v-if="loading" />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Loading from "./components/Loading.vue";
import { onMounted, ref } from 'vue';
export default {
  components: { Navbar, Loading },
  setup() {
    const loading = ref(true);
    
    onMounted(() => {
      loading.value = false;
    })

    return {loading}
  },

};
</script>

<style>

</style>





