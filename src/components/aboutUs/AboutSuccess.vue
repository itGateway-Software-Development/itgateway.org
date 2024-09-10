<template>
  <div class="content-wrapper about-success-wrapper">
    <h2 class="section-header text-center">Success Story</h2>
    <div class="row align-items-center">
      <div class="col-12 col-sm-12 col-xl-9">
        <h5>{{ successText }}</h5>
        <div class="row grid-wrapper mt-5">
          <div
            class="col-6 col-xl-4 grid-item mx-auto"
            v-for="(story, index) in stories"
            :key="index"
          >
            <div
              class="d-flex flex-column justify-content-center align-items-center align-items-md-start"
            >
              <span :style="{ color: story.color }">{{ story.data }}</span>
              <p>{{ story.title }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-12 col-xl-3">
        <div class="success-img">
          <img :src="successImg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const successText =
      "We currently serve around 60 customers and manage 100 active projects. Our company is built on the talent of young professionals focused on development and innovation. The highest demand in IT requirements comes from cloud services and solutions, which we are providing to over 30 organizations.";
    const successImg = ref(require("@/assets/images/about/success.gif"));
    const stories = [
      {
        data: "60+",
        title: "Active Customers",
        color: "#ff7000",
      },
      {
        data: "100+",
        title: "Active Projects",
        color: "#ff7000",
      },
      {
        data: "80%",
        title: "Building with Young Talent",
        color: "#ff7000",
      },
      {
        data: "30+",
        title: "Managed Cloud Servies",
        color: "#ff7000",
      },
      {
        data: "10+",
        title: "IT Managed Services",
        color: "#ff7000",
      },
      {
        data: "20+",
        title: "Web Development Projects",
        color: "#ff7000",
      },
    ];

    return {
      successText,
      successImg,
      stories,
    };
  },
};
</script>

<style scoped>
.about-success-wrapper {
  margin-top: 90px;
}

.about-success-wrapper h2 {
  font-family: "Chakra Petch", sans-serif;
  font-size: 2.5rem;
  margin-bottom: 35px;
}

.grid-item span {
  font-size: 4rem;
  font-weight: 800;
}

.grid-item p {
  font-size: 20px;
}

.success-img {
  background-image: url("@/assets/images/about/success.gif");
}

@media (max-width: 800px) {
  .success-img {
    display: none;
  }
}
</style>
