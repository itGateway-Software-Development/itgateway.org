<template>
  <div class="last-section-wrapper">
    <div class="content-wrapper">
      <div class="d-flex justify-content-between align-items-center">
        <div class="text-logo-group">
          <div class="row">
            <div class="col-12 col-xl-6 right-border">
              <div class="right-content">
                <img :src="logoImg" alt="" class="img-fluid me-5" />
                <div class="text-group">
                  <h4>itGateway</h4>
                  <p>Technology Group</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-xl-6">
              <div class="text-group-2">
                <h4>
                  The Solution The <br />
                  Answer
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div class="button-group">
          <router-link
            to="/contact"
            class="btn primary-btn d-flex gap-2 align-items-center mb-5 text-color"
            >Contact Sales
            <span class="material-symbols-outlined">east</span></router-link
          >
          <router-link
            to="/"
            class="btn primary-btn d-flex gap-2 align-items-center fill-btn"
            >Sign Up
            <span class="material-symbols-outlined">east</span></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const logoImg = require("@/assets/images/logo.png");

    return {
      logoImg,
    };
  },
};
</script>

<style scoped>
.last-section-wrapper {
  width: 100%;
  height: 200px;
  margin-top: 90px;
  margin-bottom: -90px;
  background: linear-gradient(to right, #2c70ad 25%, #7030a0 100%, #f2f2f200);
}

.right-content {
  display: flex;
  white-space: nowrap;
}

.text-group,
.text-group-2 {
  color: #ffffff;
  margin-top: 20px;
}

.text-group h4,
.text-group-2 h4 {
  font-family: "Chakra Petch", sans-serif;
  font-size: 2rem;
}

.right-border {
  border-right: 1px solid #ffffff;
  padding-right: 20px;
}

.text-logo-group {
  width: max-content;
  margin: 40px 0px;
}

.fill-btn {
  background: #ec6416d3 !important;
  color: #ffffff !important;
  justify-content: center;
}

.text-color {
  color: #ffffff !important;
}

@media (max-width: 860px) {
  .text-group h4,
  .text-group-2 h4 {
    font-family: "Chakra Petch", sans-serif;
    font-size: 1.5rem;
  }

  .right-border {
    border-right: 1px solid #ffffff;
    padding-right: 60px;
  }
}

@media (max-width: 600px) {
  .text-group h4,
  .text-group-2 h4 {
    font-family: "Chakra Petch", sans-serif;
    font-size: 1.5rem;
  }

  .text-group p {
    font-size: 1rem;
  }

  .right-border {
    border-right: 1px solid #ffffff;
    padding-right: 5px;
  }

  .last-section-wrapper {
    width: 100%;
    height: 280px;
    margin-top: 90px;
    margin-bottom: 0px;
    background: linear-gradient(to right, #2c70ad 25%, #7030a0 100%, #f2f2f200);
  }
  .right-content img {
    width: 80px;
  }

  .button-group .material-symbols-outlined {
    font-size: 12px;
  }

  .text-color .fill-btn {
    font-size: 5px !important;
  }

  .text-logo-group {
    width: 300px;
  }
}
</style>
