<template>
  <div class="content-wrapper ecosystem-wrapper">
    <div class="row align-items-center">
      <div class="col-12 col-xl-3 col-lg-12">
        <h2 class="text-center section-header mb-5">Our Ecosystem</h2>
      </div>
      <div class="col-12 col-xl-9 col-lg-12">
        <div class="d-flex align-items-center eco-items-list">
          <div class="mx-auto" v-for="(item, index) in ecoItems" :key="index">
            <div class="eco-item" :style="{ background: item.background }">
              <img :src="item.img" alt="" class="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const ecoItems = [
      {
        img: require("@/assets/images/about/vendor/1.png"),
        background: "linear-gradient(to bottom, #fff 0%, #ef8944 60%, #ff7000)",
      },
      {
        img: require("@/assets/images/about/vendor/2.png"),
      },
      {
        img: require("@/assets/images/about/vendor/3.png"),
        background: "linear-gradient(to bottom, #fff 0%, #ef8944 60%, #ff7000)",
      },
      {
        img: require("@/assets/images/about/vendor/4.png"),
      },
      {
        img: require("@/assets/images/about/vendor/5.png"),
        background: "linear-gradient(to bottom, #fff 0%, #ef8944 60%, #ff7000)",
      },
      {
        img: require("@/assets/images/about/vendor/6.png"),
      },
      {
        img: require("@/assets/images/about/vendor/7.png"),
        background: "linear-gradient(to bottom, #fff 0%, #ef8944 60%, #ff7000)",
      },
      {
        img: require("@/assets/images/about/vendor/8.png"),
      },
      {
        img: require("@/assets/images/about/vendor/9.png"),
        background: "linear-gradient(to bottom, #fff 0%, #ef8944 60%, #ff7000)",
      },
      {
        img: require("@/assets/images/about/vendor/10.png"),
      },
      {
        img: require("@/assets/images/about/vendor/11.png"),
        background: "linear-gradient(to bottom, #fff 0%, #ef8944 60%, #ff7000)",
      },
      {
        img: require("@/assets/images/about/vendor/12.png"),
      },
      {
        img: require("@/assets/images/about/vendor/13.png"),
        background: "linear-gradient(to bottom, #fff 0%, #ef8944 60%, #ff7000)",
      },
      {
        img: require("@/assets/images/about/vendor/14.png"),
      },
      {
        img: require("@/assets/images/about/vendor/15.png"),
        background: "linear-gradient(to bottom, #fff 0%, #ef8944 60%, #ff7000)",
      },
    ];

    return {
      ecoItems,
    };
  },
};
</script>

<style scoped>
.ecosystem-wrapper {
  margin-top: 110px;
}

.ecosystem-wrapper h2 {
  font-family: "Chakra Petch", sans-serif;
  font-size: 2.5rem;
}

.eco-items-list {
  flex-wrap: wrap;
}

.eco-item {
  width: 180px;
  height: 150px;
  /* background: linear-gradient(to bottom, #fff 0%, #ef8944 60%, #ff7000); */
}

.eco-item img {
  width: 150px;
  display: block;
  margin: 0px auto;
}

@media (max-width: 1600px) {
  .eco-item {
    width: 150px;
  }

  .ecosystem-wrapper h2 {
    font-family: "Chakra Petch", sans-serif;
    font-size: 2rem;
  }
}

@media (max-width: 1200px) {
  .eco-item img {
    width: 130px;
  }
  .eco-item {
    width: 140px;
  }
}
</style>
