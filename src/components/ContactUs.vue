<template>
  <div class="contact-us-wrapper">
    <div class="row desktop">
      <div class="col-12 col-xl-6">
        <div class="info justify-content-center">
          <form class="form-group">
            <div class="d-flex flex-wrap justify-content-between">
              <input
                type="text"
                class="normal-input mb-20"
                placeholder="First Name"
              />
              <input
                type="text"
                class="normal-input mb-20"
                placeholder="Last Name"
              />
              <input
                type="text"
                class="normal-input mb-20"
                placeholder="Business Email"
              />
              <input
                type="text"
                class="normal-input mb-20"
                placeholder="Phone/Mobile"
              />
              <input
                type="text"
                class="normal-input mb-20"
                placeholder="Company/Organization"
              />
              <input
                type="text"
                class="normal-input mb-20"
                placeholder="Current Position"
              />
              <input
                type="text"
                class="normal-input mb-20"
                placeholder="Title"
              />
            </div>

            <textarea
              class="normal-textarea mb-20"
              placeholder="Description for your requirements"
            ></textarea>

            <button
              class="btn primary-btn d-flex gap-2 align-items-center text-color mb-20"
            >
              Sumbit <span class="material-symbols-outlined">east</span>
            </button>
          </form>
        </div>
      </div>
      <div class="col-12 col-xl-6">
        <div class="contact-detail">
          <div class="heading-section mb-100">
            <h4>Contact Us</h4>
            <p>{{ question }}</p>
          </div>
          <div class="body-section mb-100">
            <h4>Headquarters</h4>
            <p><span>itGateway Technology Group Ltd. </span></p>
            <p>
              No.73-A, Corner of Kauk Saw & Kauk Lin Street, Thuwana 29 Ward,
              Thingangyun Township, Yangon, Myanmar.
            </p>
          </div>
          <div class="mail-phone">
            <p class="d-flex align-items-center">
              <span class="material-symbols-outlined me-3"> mail </span>
              info@itgateway.org | info@itgatewaycloud.com
            </p>
            <p class="d-flex align-items-center">
              <span class="material-symbols-outlined me-3"> call </span>
              +959 899227010 | +959 446667634
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="row mobile">
      <div class="col-12 col-xl-6">
        <div class="contact-detail">
          <div class="heading-section mb-100">
            <h4>Contact Us</h4>
            <p>{{ question }}</p>
          </div>
          <div class="body-section mb-100">
            <h4>Headquarters</h4>
            <p><span>itGateway Technology Group Ltd. </span></p>
            <p>
              No.73-A, Corner of Kauk Saw & Kauk Lin Street, Thuwana 29 Ward,
              Thingangyun Township, Yangon, Myanmar.
            </p>
          </div>
          <div class="mail-phone">
            <p class="d-flex align-items-center">
              <span class="material-symbols-outlined me-3"> mail </span>
              info@itgateway.org | info@itgatewaycloud.com
            </p>
            <p class="d-flex align-items-center">
              <span class="material-symbols-outlined me-3"> call </span>
              +959 899227010 | +959 446667634
            </p>
          </div>
        </div>
      </div>
      <div class="col-12 col-xl-6">
        <div class="info justify-content-center">
          <form class="form-group">
            <div class="d-flex flex-wrap justify-content-between">
              <input
                type="text"
                class="normal-input mb-20"
                placeholder="First Name"
              />
              <input
                type="text"
                class="normal-input mb-20"
                placeholder="Last Name"
              />
              <input
                type="text"
                class="normal-input mb-20"
                placeholder="Business Email"
              />
              <input
                type="text"
                class="normal-input mb-20"
                placeholder="Phone/Mobile"
              />
              <input
                type="text"
                class="normal-input mb-20"
                placeholder="Company/Organization"
              />
              <input
                type="text"
                class="normal-input mb-20"
                placeholder="Current Position"
              />
              <input
                type="text"
                class="normal-input mb-20"
                placeholder="Title"
              />
            </div>

            <textarea
              class="normal-textarea mb-20"
              placeholder="Description for your requirements"
            ></textarea>

            <button
              class="btn primary-btn d-flex gap-2 align-items-center text-color mb-20"
            >
              Sumbit <span class="material-symbols-outlined">east</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const question =
      "Have questions or need assistance? Contact us to discuss how our expert IT solutions can help drive your business forward. We're here to provide personalized support and innovative technology services tailored to your needs.";
    return {
      question,
    };
  },
};
</script>

<style scoped>
.contact-us-wrapper {
  margin-top: 100px;
  margin-bottom: -90px;
}

.mobile {
  display: none;
}

.form-group {
  padding: 50px 80px;
  line-height: 30px;
}

.mb-20 {
  margin-bottom: 30px;
}

.mb-100 {
  margin-bottom: 70px;
}

.info {
  width: 100%;
  height: 100%;
  /* background-image: linear-gradient(
    to right,
    #2c70ad 25%,
    #7030a0 100%,
    #f2f2f200
  ); */
  background-image: url("@/assets/images/contact.png");
}

.name-group {
  width: 540px;
}

/* .contact-input {
  width: 250px;
  background: linear-gradient(
    to right,
    #a22e7500 -40%,
    #ec641600 100%,
    #f2f2f200
  );
  border-radius: 5px;
  padding: 10px;
  color: #fff;
} */

.contact-input::placeholder,
.normal-input::placeholder {
  color: #fff;
}

.contact-input:focus,
.normal-input:focus {
  border: 1px solid #fff;
  color: #fff;
  box-shadow: 0px 0px;
}

.normal-input {
  width: 300px;
  border: 2px solid #fff;
  border-radius: 5px;
  padding: 7px;
}

.normal-textarea {
  width: 670px;
  height: 200px;
  border: 2px solid #fff;
  border-radius: 5px;
  padding: 10px;
}

.normal-textarea::placeholder {
  color: #fff;
}

.text-color {
  color: #fff !important;
  padding: 10px 20px;
  border-color: #fff !important;
}

.contact-detail {
  padding: 20px 200px 20px 30px;
}

.contact-detail h4 {
  font-family: "Chakra Petch", sans-serif;
  font-size: 2.6rem;
}

.contact-detail p {
  font-size: 1.3rem;
  line-height: 40px;
}
.body-section span {
  color: #ec6416d3;
  font-weight: 600;
  font-size: 1.2rem;
}

.body-section {
  padding: 10px 200px 10px 15px;
  background: linear-gradient(to right, #2c70ad 0%, #7030a0 100%, #f2f2f200);
  border: 1px solid transparent;
  border-radius: 6px;
  color: #fff;
}

.mail-phone p {
  font-size: 1.3rem;
  font-family: "Chakra Petch", sans-serif;
}

.mail-phone .material-symbols-outlined {
  font-size: 28px;
  color: #ec6416d3;
}

@media (max-width: 1400px) {
  .body-section {
    padding: 10px 100px 10px 15px;
  }

  .normal-input {
    width: 250px;
  }

  .name-group {
    width: 350px;
  }

  .contact-input {
    width: 150px;
  }

  .normal-textarea {
    width: 350px;
  }
  .contact-detail {
    padding: 20px 20px 20px 20px;
  }
}

@media (max-width: 1200px) {
  .normal-input {
    width: 200px;
  }
}

@media (max-width: 800px) {
  .normal-input {
    width: 300px;
  }

  .desktop {
    display: none;
  }

  .mobile {
    display: block;
  }
}

@media (max-width: 600px) {
  .contact-us-wrapper {
    margin-top: 90px;
  }

  .normal-input {
    width: 180px;
  }

  .form-group {
    padding: 80px 20px 180px;
  }

  .normal-textarea {
    width: 380px;
  }
}
</style>
