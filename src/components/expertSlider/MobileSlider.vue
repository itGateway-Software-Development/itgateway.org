<template>
  <div class="mobile">
    <v-carousel hide-delimiters cycle show-arrows>
      <template v-slot:prev="{ props }">
        <v-btn variant="elevated" @click="props.onClick"
          ><span class="material-symbols-outlined"> chevron_left </span></v-btn
        >
      </template>
      <template v-slot:next="{ props }">
        <v-btn variant="elevated" @click="props.onClick"
          ><span class="material-symbols-outlined"> chevron_right </span></v-btn
        >
      </template>
      <v-carousel-item v-for="person in data_1" :key="person.id">
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
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
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
      {
        id: 5,
        name: "Win Maw Oo",
        position: "Cloud Engineer",
        domain: "Cloud Solutions",
        image: require("@/assets/images/team/WMO.png"),
      },
      {
        id: 6,
        name: "Htet Myat Htun",
        position: "Cloud Engineer",
        domain: "Cloud Solutions",
        image: require("@/assets/images/team/HMH.png"),
      },
      {
        id: 7,
        name: "Wai Linn Htet Aung",
        position: "Full-Stack Developer",
        domain: "Software Development",
        image: require("@/assets/images/team/WLHA.png"),
      },
      {
        id: 8,
        name: "Shan Linn Maung",
        position: "Cloud Support Engineer",
        domain: "Cloud Solutions",
        image: require("@/assets/images/team/SLM.png"),
      },
      {
        id: 9,
        name: "Htoo Eain Linn",
        position: "Cloud Support Engineer",
        domain: "Cloud Solutions",
        image: require("@/assets/images/team/HEL.png"),
      },
      {
        id: 10,
        name: "Saw San Tun",
        position: "Fontend Developer",
        domain: "Software Development",
        image: require("@/assets/images/team/SST_1.png"),
      },
      {
        id: 11,
        name: "Lin Ko Ko",
        position: "IT Supports",
        domain: "IT Solutions",
        image: require("@/assets/images/team/LKK.png"),
      },
      {
        id: 12,
        name: "Naing Lin Tun",
        position: "It Supports",
        domain: "IT Solutions",
        image: require("@/assets/images/team/NLT.png"),
      },
    ]);

    return {
      data_1,
    };
  },
};
</script>

<style scoped>
.mobile {
  display: none;
}

.card {
  background-color: var(--background-color);
  color: var(--font-color);
  border: 1px solid var(--card-border-color);
}

.card-text {
  margin-bottom: 5px;
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

.v-btn {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  color: #ec6316 !important;
}

.v-btn .material-symbols-outlined {
  font-size: 28px;
}

@media (max-width: 600px) {
  .mobile {
    display: block;
  }

  .card {
    width: 300px;
    margin: 0px auto;
    height: 500px;
  }

  .card img {
    width: 300px;
    padding: 5px;
  }
}
</style>
