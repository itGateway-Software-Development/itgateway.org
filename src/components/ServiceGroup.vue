<template>
  <div class="content-wrapper service-group">
    <div class="row">
      <div
        class="col-6 col-sm-6 col-lg-3 col-xl-3 mb-5"
        v-for="(service, index) in serviceGroups"
        :key="index"
      >
        <div class="service-container cursor-pointer" data-aos="fade-up">
          <!-- <div class="header align-items-center gap-2">
          
            <img :src="service.image" alt="" class="card-img-top" />
            <h4>{{ service.title }}</h4>
          </div>
          <p>{{ service.content }}</p>
          <div class="readmore">
            <router-link
              :to="`${service.url}`"
              class="d-flex align-items-center gap-2"
            >
              <span>Read More</span>
              <span class="material-symbols-outlined mt-1 ms-1"
                >arrow_right_alt</span
              >
            </router-link>
          </div> -->
          <div class="card">
            <img :src="service.image" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{{ service.title }}</h5>
              <p class="card-text">
                {{ service.content }}
              </p>
              <div class="readmore">
                <a
                  target="_blank"
                  :href="`${service.url}`"
                  class="d-flex align-items-center gap-2"
                >
                  <span>Read More</span>
                  <span class="material-symbols-outlined mt-1 ms-1"
                    >arrow_right_alt</span
                  >
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["theme"],
  setup() {
    const serviceGroups = [
      {
        title: "itGateway Cloud",
        content:
          "Running your resources and keep the data on our cloud infrastructure securely.",
        url: "https://www.itgatewaycloud.com/",
        icon: require("@/assets/images/service_group/cloud.png"),
        icon_light: require("@/assets/images/service_group/cloud_light.png"),
        image: require("@/assets/images/service_group/picture_1.png"),
      },
      {
        title: "Premium IT Solutions",
        content:
          "Providing the latest IT solutions and services for the best customer experience.",
        url: "#",
        icon: require("@/assets/images/service_group/premium.png"),
        icon_light: require("@/assets/images/service_group/premium_light.png"),
        image: require("@/assets/images/service_group/picture_2.png"),
      },
      {
        title: "Software Development​",
        content:
          "Offers not only business and enterprise application but also web development. ​​",
        url: "#",
        icon: require("@/assets/images/service_group/software_development.png"),
        icon_light: require("@/assets/images/service_group/software_development_light.png"),
        image: require("@/assets/images/service_group/picture_3.png"),
      },
      {
        title: "Engineering Solutions​",
        content:
          "Enhance security and streamline communication with our Engineering Solutions​",
        url: "#",
        icon: require("@/assets/images/service_group/engineering.png"),
        icon_light: require("@/assets/images/service_group/engineering_light.png"),
        image: require("@/assets/images/service_group/picture_4.png"),
      },
    ];

    return { serviceGroups };
  },
};
</script>

<style scoped>
.service-group {
  margin-top: 90px;
}

.card {
  position: relative;
  height: 500px;
  background-color: var(--card-background-color);
  color: var(--font-color);
}
.service-container {
  height: 100%;
  border-radius: 10px;
  position: relative;
  background-color: var(--sec-background-color) !important;
  transition: 0.5s ease;
}

.card-img-top {
  border-radius: 1px;
}

.card-title {
  font-weight: bold;
  margin-bottom: 20px;
}

.card-text {
  opacity: 0.7;
  font-size: 18px;
}

.service-container:hover {
  transform: translateY(-10px);
  box-shadow: 4px 4px 8px #6864a0;
}

.service-container .header {
  height: 40px;
  margin-bottom: 10px;
}

.service-container img.service-icon {
  width: 30px;
  margin-bottom: 10px;
}

.service-container h4 {
  color: var(--main-color);
  font-weight: bold;
  font-size: 22px;
}

.service-container .readmore {
  position: absolute;
  bottom: 20px;
  overflow: hidden;
}

.service-container .readmore .material-symbols-outlined {
  color: #ec6316;
}

.service-container a {
  transform: translateX(-80px);
  transition: 0.5s ease;
}

.service-container:hover a {
  transform: translateX(0);
}

@media (max-width: 860px) {
  .card {
    height: 500px;
  }
}

@media (max-width: 600px) {
  .card {
    height: 480px;
  }
}
</style>
