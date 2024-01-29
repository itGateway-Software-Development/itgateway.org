<template>
  <v-app>
    <Carousel></Carousel>
    <ServiceGroup></ServiceGroup>
  </v-app>
</template>

<script>
import ServiceGroup from '../components/ServiceGroup'
import Carousel from '../components/Carousel'
// Components
export default {
  components: {
    ServiceGroup,
    Carousel,},
};
</script>


