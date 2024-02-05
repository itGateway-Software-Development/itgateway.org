<template>
  <v-app>
    <Carousel></Carousel>
    <ServiceGroup></ServiceGroup>
    <SuccessStory></SuccessStory>
  </v-app>
</template>

<script>
import SuccessStory from '../components/SuccessStory'
import ServiceGroup from '../components/ServiceGroup'
import Carousel from '../components/Carousel'
// Components
export default {
  components: {
    SuccessStory,
    ServiceGroup,
    Carousel,},
};
</script>


