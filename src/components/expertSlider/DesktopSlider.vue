<template>
  <swiper
    :loop="true"
    :navigation="true"
    :modules="modules"
    :autoplay="{
      delay: 5000,
      disableOnInteraction: true,
    }"
    class="mySwiper desktop"
  >
    <swiper-slide>
      <div class="d-flex card-collection">
        <div class="card-container" v-for="person in data_1" :key="person.id">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">{{ person.name }}</h4>
              <p class="card-text">
                <span class="color-text">{{ person.position }}</span>
              </p>
              <p class="card-text">
                <span>Domain:</span>
                <span class="domain">{{ person.domain }}</span>
              </p>
            </div>
            <img :src="person.image" class="img-fluid" alt="..." />
          </div>
        </div></div
    ></swiper-slide>
    <swiper-slide>
      <div class="d-flex card-collection">
        <div class="card-container" v-for="person in data_2" :key="person.id">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">{{ person.name }}</h4>
              <p class="card-text">
                <span class="color-text">{{ person.position }}</span>
              </p>
              <p class="card-text">
                <span>Domain:</span
                ><span class="domain">{{ person.domain }}</span>
              </p>
            </div>
            <img :src="person.image" class="img-fluid" alt="..." />
          </div>
        </div></div
    ></swiper-slide>
    <swiper-slide>
      <div class="d-flex card-collection">
        <div class="card-container" v-for="person in data_3" :key="person.id">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">{{ person.name }}</h4>
              <p class="card-text">
                <span class="color-text">{{ person.position }}</span>
              </p>
              <p class="card-text">
                <span>Domain: </span>
                <span class="domain">{{ person.domain }}</span>
              </p>
            </div>
            <img :src="person.image" class="img-fluid" alt="..." />
          </div>
        </div></div
    ></swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "@/assets/css/style.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { ref } from "vue";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const data_1 = ref([
      {
        id: 1,
        name: "Min Thit Naing",
        position: "Founder and Director",
        domain: "Cloud, Software, IT Solutions",
        image: require("@/assets/images/team/MTN.png"),
      },
      {
        id: 2,
        name: "Phyo Min Kyaw",
        position: "Senior Project Coordinator",
        domain: "Cloud, Software",
        image: require("@/assets/images/team/PMK.png"),
      },
      {
        id: 3,
        name: "Wai Linn Han",
        position: "Operation Management",
        domain: "IT Solutions",
        image: require("@/assets/images/team/WLH.png"),
      },
      {
        id: 4,
        name: "Su Mon Myint",
        position: "Business Development",
        domain: "Cloud, Software, IT Solutions",
        image: require("@/assets/images/team/SMM.png"),
      },
    ]);
    const data_2 = ref([
      {
        id: 1,
        name: "Win Maw Oo",
        position: "Cloud Engineer",
        domain: "Cloud Solutions",
        image: require("@/assets/images/team/WMO.png"),
      },
      {
        id: 2,
        name: "Htet Myat Htun",
        position: "Cloud Engineer",
        domain: "Cloud Solutions",
        image: require("@/assets/images/team/HMH.png"),
      },
      {
        id: 3,
        name: "Wai Linn Htet Aung",
        position: "Full-Stack Developer",
        domain: "Software Development",
        image: require("@/assets/images/team/WLHA.png"),
      },
      {
        id: 4,
        name: "Shan Linn Maung",
        position: "Cloud Support Engineer",
        domain: "Cloud Solutions",
        image: require("@/assets/images/team/SLM.png"),
      },
    ]);
    const data_3 = ref([
      {
        id: 1,
        name: "Htoo Eain Linn",
        position: "Cloud Support Engineer",
        domain: "Cloud Solutions",
        image: require("@/assets/images/team/HEL.png"),
      },
      {
        id: 2,
        name: "Saw San Tun",
        position: "Fontend Developer",
        domain: "Software Development",
        image: require("@/assets/images/team/SST_1.png"),
      },
      {
        id: 3,
        name: "Lin Ko Ko",
        position: "IT Supports",
        domain: "IT Solutions",
        image: require("@/assets/images/team/LKK.png"),
      },
      {
        id: 4,
        name: "Naing Lin Tun",
        position: "It Supports",
        domain: "IT Solutions",
        image: require("@/assets/images/team/NLT.png"),
      },
    ]);

    return {
      modules: [Pagination, Navigation, Autoplay],
      data_1,
      data_2,
      data_3,
    };
  },
};
</script>

<style scoped>
.card {
  background-color: var(--background-color);
  color: var(--font-color);
  border: 1px solid var(--card-border-color);
}

.card-text {
  margin-bottom: 0px;
  word-wrap: break-word;
}

.card-title {
  font-weight: bold;
}

.card-text .color-text {
  color: #ec6316;
}

.card-text span {
  font-weight: bold;
}

.card img {
  padding: 5px;
}

.card-container {
  padding: 0px 5px;
}

.card-collection {
  padding: 0px 100px;
}

@media (max-width: 1400px) {
  .card-text .domain {
    font-weight: bold;
  }
  .card {
    height: 500px;
  }
}

@media (max-width: 800px) {
  .card-text .color-text {
    font-size: 13px;
  }

  .card-text span {
    font-size: 12px;
  }

  .card-title {
    font-size: 18px;
  }

  .card {
    height: 360px;
  }
}

@media (max-width: 600px) {
  .desktop {
    display: none;
  }
}
</style>
