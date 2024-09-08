<template>
  <div class="carousel-wrapper">
    <div class="carousel-bg-color"></div>
    <img :src="currentImage" alt="" />
    <div class="carousel-content" v-if="currentImageIndex == 0">
      <h2 class="mb-5" data-aos="fade-down">
        We are providing the valuable services for our customers with the best
        solutions.
      </h2>
      <p
        class="mb-3 text-white text-decoration-underline text-decoration-underline"
      >
        Cloud Solutions
      </p>
      <p class="mb-3 text-white text-decoration-underline">
        Premium IT Solutions
      </p>
      <p class="mb-3 text-white text-decoration-underline">
        Software Development
      </p>
      <p class="text-white text-decoration-underline">Engineering Solutions</p>
    </div>
    <div class="carousel-content" v-if="currentImageIndex == 1">
      <h2 class="mb-5" data-aos="flip-up">
        Most of the enterprise needs not only Cloud Services & Solutions but
        also Managed Cloud Services.
      </h2>
      <p class="mb-1 mt-80 text-white text-decoration-underline">
        Learn itGateway Cloud Platform
      </p>
      <!-- <p class="text-white">
        Explore additional offering in
        <span class="special-text">Managed Cloud Services</span>
      </p>
      <button class="btn primary-btn d-flex gap-2 align-items-center">
        Register Now <span class="material-symbols-outlined">east</span>
      </button> -->
    </div>
    <div class="carousel-content" v-if="currentImageIndex == 2">
      <h2 class="mb-5" data-aos="flip-down">
        Every business & organization will need applications and software
        development to driven for growing.
      </h2>
      <p class="mb-1 mt-80 text-white text-decoration-underline">
        Find Development Programs
      </p>
      <!-- <p class="text-white">
        <span class="special-text">Learn, Research and Develop</span> for Our
        Customers
      </p>
      <button class="btn primary-btn d-flex gap-2 align-items-center">
        Read More <span class="material-symbols-outlined">east</span>
      </button> -->
    </div>
    <div class="indicator d-flex align-items-center gap-4">
      <div class="d-flex flex-column">
        <span
          class="cursor-pointer text-white text-slide"
          @click="changeImageIndex(0)"
          >Our Core Services</span
        >
        <div class="progress-bar" v-if="currentImageIndex == 0">
          <div class="fill"></div>
        </div>
      </div>
      <div class="d-flex flex-column">
        <span
          class="cursor-pointer text-white text-slide"
          @click="changeImageIndex(1)"
          >Cloud Services</span
        >
        <div class="progress-bar" v-if="currentImageIndex == 1">
          <div class="fill"></div>
        </div>
      </div>
      <div class="d-flex flex-column">
        <span
          class="cursor-pointer text-white text-slide"
          @click="changeImageIndex(2)"
          >Software Development</span
        >
        <div class="progress-bar" v-if="currentImageIndex == 2">
          <div class="fill"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
  setup() {
    const images = [
      require("@/assets/images/about/1.png"),
      require("@/assets/images/about/2.jpg"),
      require("@/assets/images/about/3.png"),
    ];

    let intervalId;

    const currentImageIndex = ref(0);
    const currentImage = ref(images[currentImageIndex.value]);
    const duration = 6000;

    const slider = () => {
      if (currentImageIndex.value < images.length - 1) {
        currentImageIndex.value++;
      } else {
        currentImageIndex.value = 0;
      }

      currentImage.value = images[currentImageIndex.value];
    };

    const changeImageIndex = (index) => {
      currentImageIndex.value = index;
      currentImage.value = images[currentImageIndex.value];

      // Clear the existing interval and set a new one
      clearInterval(intervalId);
      intervalId = setInterval(slider, duration);
    };

    onMounted(() => {
      // Set the initial interval
      intervalId = setInterval(slider, duration);
    });

    return { currentImage, currentImageIndex, changeImageIndex };
  },
};
</script>

<style scoped>
.carousel-wrapper {
  width: 100%;
  height: 700px;
  position: relative;
  margin-top: 85px;
}

.carousel-wrapper .carousel-bg-color {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #a22e75 0%, #ec6416d3 60%, #f2f2f200);
  z-index: 0 !important;
}

.carousel-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-wrapper .indicator {
  position: absolute;
  bottom: 20px;
  left: 5%;
}

.carousel-wrapper .indicator .active {
  border-bottom: 2px solid #7c7c7c;
  padding: 5px 10px;
}

.carousel-wrapper .carousel-content {
  position: absolute;
  top: 25%;
  left: 5%;
  width: 50%;
}

.carousel-content h2 {
  font-family: "Chakra Petch", sans-serif;
  font-size: 48px;
  letter-spacing: 0.007rem;
  color: #fff;
}

.carousel-content .special-text {
  color: #ec6316;
  font-weight: bold;
  font-size: 24px;
}

.carousel-content p {
  font-size: 24px;
}

.carousel-content button {
  font-weight: bold !important;
  margin-top: 40px !important;
  transition: 0.3s ease;
  background: #ffffff09 !important;
  border: 2px solid #ededed !important;
  color: #ededed !important;
}

.progress-bar {
  position: relative;
  width: 100%;
  height: 3px;
  background-color: #a7a4a4;
}

.fill {
  height: 100%;
  background-color: #ffffff;
  animation: fillAnimation 6s infinite;
}

@keyframes fillAnimation {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}

@media (max-width: 1510px) {
  .carousel-content h2 {
    font-size: 40px;
  }
  .carousel-content p {
    font-size: 20px;
  }

  .carousel-content .special-text {
    font-size: 22px;
  }
}

@media (max-width: 1200px) {
  .carousel-wrapper {
    height: 500px;
  }
  .carousel-content h2 {
    font-size: 35px;
  }
  .carousel-content p {
    font-size: 18px;
  }

  .carousel-content .special-text {
    font-size: 20px;
  }

  .carousel-content button {
    padding: 3px 10px;
  }
}

@media (max-width: 1110px) {
  .carousel-wrapper .carousel-content {
    width: 60%;
  }
}

@media (max-width: 925px) {
  .carousel-wrapper .carousel-content {
    width: 70%;
  }
}

@media (max-width: 800px) {
  .carousel-wrapper {
    height: 450px;
  }
  .carousel-content h2 {
    font-size: 30px;
  }
  .carousel-content p {
    font-size: 16px;
  }

  .carousel-content .special-text {
    font-size: 17px;
  }
}

@media (max-width: 768px) {
  .carousel-wrapper {
    height: 400px;
    margin-top: 20px;
  }
  .carousel-content h2 {
    font-size: 25px;
  }
  .carousel-content p {
    font-size: 16px;
  }
  .indicator .text-slide {
    font-size: 12px;
  }

  .progress-bar {
    height: 2px;
  }
}

@media (max-width: 600px) {
  .carousel-wrapper .carousel-content {
    width: 60%;
  }
  .carousel-content h2 {
    font-size: 20px;
  }
  .carousel-content p {
    font-size: 15px;
  }

  .carousel-content .special-text {
    font-size: 15px;
  }
  .carousel-content button {
    font-size: 11px !important;
    border: 1px solid #ededed !important;
  }

  .carousel-content .material-symbols-outlined {
    font-size: 14px;
  }
}

@media (max-width: 450px) {
  .carousel-wrapper .carousel-content {
    width: 90%;
  }

  .carousel-content h2 {
    font-size: 18px;
  }
  .carousel-content p {
    font-size: 13px;
  }

  .carousel-content .special-text {
    font-size: 14px;
  }
  .carousel-content button {
    margin-top: 10px !important;
  }
}
</style>
