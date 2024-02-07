<template>
  <v-app>
    <Carousel></Carousel>
    <ServiceGroup></ServiceGroup>
    <SuccessStory></SuccessStory>
    <WhyitGateway></WhyitGateway>
    <Customers></Customers>
    <Partners></Partners>
    <VisionMission></VisionMission>
  </v-app>
</template>

<script>
import VisionMission from '../components/VisionMission'
import Partners from '../components/Partners'
import Customers from '../components/Customers'
import WhyitGateway from '../components/WhyitGateway'
import SuccessStory from '../components/SuccessStory'
import ServiceGroup from '../components/ServiceGroup'
import Carousel from '../components/Carousel'
// Components
export default {
  components: {
    VisionMission,
    Partners,
    Customers,
    WhyitGateway,
    SuccessStory,
    ServiceGroup,
    Carousel,},
};
</script>


