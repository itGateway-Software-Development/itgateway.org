<template>
  <div class="solution-container">
    <div class="row mt-5">
      <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px">
        <h5 class="d-flex">
          <span class="material-symbols-outlined me-3"> chromecast_device </span
          >IoT
        </h5>
        <router-link to="#" class="hilight-font"
          >Empowers businesses with real-time data collection, intelligent
          automatuon, driving efficiency, innovation through connected devices
          and smart solutions​​​​</router-link
        >
      </div>
      <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px">
        <div class="menu-route">
          <a href="#" @click="redirectUrl('https://www.itgatewaycloud.com/')">
            <h5 class="d-flex">
              <span class="material-symbols-outlined me-3"> cloud </span>Cloud
              Computing
            </h5>
          </a>

          <a
            href="#"
            @click="redirectUrl('https://www.itgatewaycloud.com/')"
            class="hilight-font"
            ><span
              >Delivers scalable, real-time solutions for ERP, POS, inventory
              management, customer engagement, and stramlined operations across
              all locations.​</span
            >​</a
          >
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px">
        <h5 class="d-flex">
          <span class="material-symbols-outlined me-3"> vertical_split</span
          >Managed Services
        </h5>
        <router-link to="#" class="hilight-font"
          >With our Managed Services, offering procative monitoring, expert
          management, and seamless support to ensure your systems run smoothly
          and efficiently ​​</router-link
        >
      </div>
      <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px">
        <h5 class="d-flex">
          <span class="material-symbols-outlined me-3"> contact_phone </span
          >Collaboration Solutions​​​​​
        </h5>
        <router-link to="#" class="hilight-font"
          >Enhance teamwork and communication with our innovative collaboration
          solutions, designed to streamline workflows and boost
          productivity.​​​​​</router-link
        >
      </div>
      <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px">
        <h5 class="d-flex">
          <span class="material-symbols-outlined me-3"> analytics </span>Data
          Analytics​
        </h5>
        <router-link to="#" class="hilight-font"
          >Unlocks valuable insights from your data, empowering smarter
          decisions, enhanced peformance, optimize operations and strategic
          business growth.​​​</router-link
        >
      </div>
      <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px">
        <h5 class="d-flex">
          <span class="material-symbols-outlined me-3"> speed_camera </span
          >Video Surveilliance
        </h5>
        <router-link to="#" class="hilight-font"
          >Enhance security and monitor your premises with our advanced video
          surveillance systems, providing real-time monitoring and reliable
          protection.​</router-link
        >
      </div>
    </div>
    <div class="readmore">
      <router-link to="#" class="d-flex align-items-center gap-2">
        <span>Read More Solution</span>
        <span class="material-symbols-outlined mt-1 ms-1" style="color: #ec6316"
          >arrow_right_alt</span
        >
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const redirectUrl = (url) => {
      window.open(url);
    };

    return { redirectUrl };
  },
};
</script>
<style scoped>
.menu-route h5,
.menu-route span {
  transition: 0.3s ease;
}

.menu-route:hover h5,
.menu-route:hover span {
  color: #ec6316;
}
</style>
