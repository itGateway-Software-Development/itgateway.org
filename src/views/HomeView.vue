<template>
  <v-app>
    <Carousel></Carousel>
    <ServiceGroup></ServiceGroup>
    <SuccessStory></SuccessStory>
    <WhyitGateway></WhyitGateway>
  </v-app>
</template>

<script>
import WhyitGateway from '../components/WhyitGateway'
import SuccessStory from '../components/SuccessStory'
import ServiceGroup from '../components/ServiceGroup'
import Carousel from '../components/Carousel'
// Components
export default {
  components: {
    WhyitGateway,
    SuccessStory,
    ServiceGroup,
    Carousel,},
};
</script>


