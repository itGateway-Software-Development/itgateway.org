<template>
  <div class="content-wrapper journal-wrapper">
    <h2 class="section-header text-center">Digital Transformation Journey</h2>
    <div class="row">
      <div class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-5">
        <div class="journal-container cursor-pointer" data-aos="fade-up">
          <div class="card">
            <img :src="journal1.img" class="card-img-top" alt="..." />
            <div class="card-body">
              <h4 class="card-title">{{ journal1.title }}</h4>
              <p class="card-text">
                {{ journal1.content }}
              </p>
              <div class="readmore">
                <router-link
                  :to="`${journal1.url}`"
                  class="d-flex align-items-center gap-2 hover-1"
                >
                  <span>{{ journal1.button_text }}</span>
                  <span class="material-symbols-outlined mt-1 ms-1"
                    >arrow_right_alt</span
                  >
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-5">
        <div class="journal-container cursor-pointer" data-aos="fade-up">
          <div class="card">
            <img :src="journal2.img" class="card-img-top" alt="..." />
            <div class="card-body">
              <h4 class="card-title">{{ journal2.title }}</h4>
              <p class="card-text">
                {{ journal2.content }}
              </p>
              <div class="readmore">
                <router-link
                  :to="`${journal2.url}`"
                  class="d-flex align-items-center gap-2 hover-2"
                >
                  <span>{{ journal2.button_text }}</span>
                  <span class="material-symbols-outlined mt-1 ms-1"
                    >arrow_right_alt</span
                  >
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-5">
        <div class="journal-container cursor-pointer" data-aos="fade-up">
          <div class="card">
            <img :src="journal3.img" class="card-img-top" alt="..." />
            <div class="card-body">
              <h4 class="card-title">{{ journal3.title }}</h4>
              <p class="card-text">
                {{ journal3.content }}
              </p>
              <div class="readmore">
                <router-link
                  :to="`${journal3.url}`"
                  class="d-flex align-items-center gap-2 hover-3"
                >
                  <span>{{ journal3.button_text }}</span>
                  <span class="material-symbols-outlined mt-1 ms-1"
                    >arrow_right_alt</span
                  >
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-5">
        <div class="journal-container cursor-pointer" data-aos="fade-up">
          <div class="card">
            <img :src="journal4.img" class="card-img-top" alt="..." />
            <div class="card-body">
              <h4 class="card-title">{{ journal4.title }}</h4>
              <p class="card-text">
                {{ journal4.content }}
              </p>
              <div class="readmore">
                <router-link
                  :to="`${journal4.url}`"
                  class="d-flex align-items-center gap-2 hover-4"
                >
                  <span>{{ journal4.button_text }}</span>
                  <span class="material-symbols-outlined mt-1 ms-1"
                    >arrow_right_alt</span
                  >
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-5">
        <div class="journal-container cursor-pointer" data-aos="fade-up">
          <div class="card">
            <img :src="journal5.img" class="card-img-top" alt="..." />
            <div class="card-body">
              <h4 class="card-title">{{ journal5.title }}</h4>
              <p class="card-text">
                {{ journal5.content }}
              </p>
              <div class="readmore">
                <router-link
                  :to="`${journal5.url}`"
                  class="d-flex align-items-center gap-2 hover-5"
                >
                  <span>{{ journal5.button_text }}</span>
                  <span class="material-symbols-outlined mt-1 ms-1"
                    >arrow_right_alt</span
                  >
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-5">
        <div class="journal-container cursor-pointer" data-aos="fade-up">
          <div class="card">
            <img :src="journal6.img" class="card-img-top" alt="..." />
            <div class="card-body">
              <h4 class="card-title">{{ journal6.title }}</h4>
              <p class="card-text">
                {{ journal6.content }}
              </p>
              <div class="readmore">
                <router-link
                  :to="`${journal6.url}`"
                  class="d-flex align-items-center gap-2 hover-6"
                >
                  <span>{{ journal6.button_text }}</span>
                  <span class="material-symbols-outlined mt-1 ms-1"
                    >arrow_right_alt</span
                  >
                </router-link>
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
  setup() {
    const journal1 = {
      title: "Workload Migration to Cloud",
      img: require("@/assets/images/about/journal/dtj1.jpg"),
      button_text: "View Our Cloud Platform",
      content:
        "As more customers migrate their servers and applications to our cloud infrastructure, we are committed to providing a seamless, secure, and efficient workload migration process that meets their evolving business needs.",
    };

    const journal2 = {
      title: "Transitioning to E-Commerce",
      img: require("@/assets/images/about/journal/dtj2.jpeg"),
      button_text: "See E-Commerce Projects",
      content:
        "As many customers shift their sales processes to e-commerce platform. We are dedicated to providing the tools and support they need to make this transition smooth, efficient, and profitable.",
    };

    const journal3 = {
      title: "Protecting Customer Data",
      img: require("@/assets/images/about/journal/dtj3.jpg"),
      button_text: "Find Data Protection Solutions",
      content:
        "To safeguard against data loss, we ensure that all customer data is backed up and replicated, providing robust protection and peace of mind in an increasingly digital world.",
    };

    const journal4 = {
      title: "Professional Talent Team",
      img: require("@/assets/images/about/journal/dtj4.jpg"),
      button_text: "Explore Services",
      content:
        "Our company is built on a foundation of young, talented professionals, dedicated to delivering cloud, software development and premium IT solutions to a growing number of satisfied customers.",
    };

    const journal5 = {
      title: "Cloud Services Evolution",
      img: require("@/assets/images/about/journal/dtj5.jpg"),
      button_text: "View Success Story of Cloud",
      content:
        "Our cloud platform and infrastructure are fully equipped to deliver cutting-edge cloud solutions, having successfully completed numerous projects for a wide range of organizations.",
    };

    const journal6 = {
      title: "Research & Development",
      img: require("@/assets/images/about/journal/dtj6.jpg"),
      button_text: "Explore IT Solutions",
      content:
        "Our team is dedicated to research and development, continually seeking innovative IT solutions to drive customer growth and stay ahead in a rapidly evolving industry.",
    };
    return { journal1, journal2, journal3, journal4, journal5, journal6 };
  },
};
</script>

<style scoped>
.journal-wrapper {
  margin-top: 90px;
}
.journal-wrapper h2 {
  font-family: "Chakra Petch", sans-serif;
  font-size: 2.5rem;
  margin-bottom: 35px;
}

.card {
  position: relative;
  height: 550px;
  background-color: var(--card-background-color);
  color: var(--font-color);
}
.journal-container {
  height: 100%;
  border-radius: 10px;
  position: relative;
  background-color: var(--sec-background-color) !important;
  transition: 0.5s ease;
}

.card-img-top {
  border-radius: 1px;
  object-fit: cover;
  height: 250px;
}

.card-title {
  font-weight: bold;
  font-family: "Chakra Petch", sans-serif;
  margin-bottom: 20px;
}

.card-text {
  opacity: 0.7;
  font-size: 17px;
}

.journal-container:hover {
  transform: translateY(-10px);
  box-shadow: 4px 4px 8px #6864a0;
}

.journal-container .header {
  height: 40px;
  margin-bottom: 10px;
}

.journal-container img.journal-icon {
  width: 30px;
  margin-bottom: 10px;
}

.journal-container h4 {
  color: var(--font-color);
  font-weight: bold;
  font-size: 22px;
}

.journal-container .readmore {
  position: absolute;
  bottom: 20px;
  overflow: hidden;
}

.journal-container .readmore .material-symbols-outlined {
  color: #ec6316;
  font-size: 20px;
}

/* .journal-container a {
  transform: translateX(-200px);
  transition: 0.5s ease;
}

.journal-container:hover a {
  transform: translateX(0);
} */

.journal-container .hover-1 {
  transform: translateX(-190px);
  transition: 0.5s ease;
}

.journal-container:hover .hover-1 {
  transform: translateX(0);
}

.journal-container .hover-2 {
  transform: translateX(-200px);
  transition: 0.5s ease;
}

.journal-container:hover .hover-2 {
  transform: translateX(0);
}

.journal-container .hover-3 {
  transform: translateX(-230px);
  transition: 0.5s ease;
}

.journal-container:hover .hover-3 {
  transform: translateX(0);
}

.journal-container .hover-4 {
  transform: translateX(-120px);
  transition: 0.5s ease;
}

.journal-container:hover .hover-4 {
  transform: translateX(0);
}

.journal-container .hover-5 {
  transform: translateX(-220px);
  transition: 0.5s ease;
}

.journal-container:hover .hover-5 {
  transform: translateX(0);
}

.journal-container .hover-6 {
  transform: translateX(-155px);
  transition: 0.5s ease;
}

.journal-container:hover .hover-6 {
  transform: translateX(0);
}

.readmore span {
  font-size: 18px;
  font-weight: 600;
}

@media (max-width: 1400px) {
  .card {
    height: 560px;
  }
  .journal-container h4 {
    color: var(--font-color);
    font-weight: bold;
    font-size: 20px;
  }
}

@media (max-width: 1200px) {
  .journal-container h4 {
    color: var(--font-color);
    font-weight: bold;
    font-size: 18px;
  }

  .readmore span {
    font-size: 18px;
    font-weight: 600;
  }

  .card {
    height: 520px;
  }
}

@media (max-width: 860px) {
  .card {
    height: 500px;
  }
}

@media (max-width: 600px) {
  .card {
    height: 560px;
  }

  .journal-container .readmore .material-symbols-outlined {
    color: #ec6316;
    font-size: 15px;
  }

  .journal-container h4 {
    color: var(--font-color);
    font-weight: bold;
    font-size: 18px;
  }

  .readmore span {
    font-size: 12px;
    font-weight: 600;
  }

  .journal-container .hover-1 {
    transform: translateX(-130px);
    transition: 0.5s ease;
  }

  .journal-container:hover .hover-1 {
    transform: translateX(0);
  }

  .journal-container .hover-2 {
    transform: translateX(-140px);
    transition: 0.5s ease;
  }

  .journal-container:hover .hover-2 {
    transform: translateX(0);
  }

  .journal-container .hover-3 {
    transform: translateX(-160px);
    transition: 0.5s ease;
  }

  .journal-container:hover .hover-3 {
    transform: translateX(0);
  }

  .journal-container .hover-4 {
    transform: translateX(-90px);
    transition: 0.5s ease;
  }

  .journal-container:hover .hover-4 {
    transform: translateX(0);
  }

  .journal-container .hover-5 {
    transform: translateX(-150px);
    transition: 0.5s ease;
  }

  .journal-container:hover .hover-5 {
    transform: translateX(0);
  }

  .journal-container .hover-6 {
    transform: translateX(-110px);
    transition: 0.5s ease;
  }

  .journal-container:hover .hover-6 {
    transform: translateX(0);
  }
}
</style>
