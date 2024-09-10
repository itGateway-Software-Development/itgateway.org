<template>
  <div class="content-wrapper contact-us-wrapper">
    <div class="row align-items-center">
      <div class="col-12 col-xl-6">
        <div class="info justify-content-center">
          <form>
            <div
              class="d-flex justify-content-between align-items-center mb-5 name-group"
            >
              <input
                type="text"
                class="contact-input"
                placeholder="First Name"
              />
              <input
                type="text"
                class="contact-input"
                placeholder="Last Name"
              />
            </div>

            <input
              type="text"
              class="normal-input mb-5"
              placeholder="Business Email"
            />
            <input
              type="text"
              class="normal-input mb-5"
              placeholder="Phone/Mobile"
            />
            <input
              type="text"
              class="normal-input mb-5"
              placeholder="Company/Organization"
            />
            <input
              type="text"
              class="normal-input mb-5"
              placeholder="Current Position"
            />
            <input type="text" class="normal-input mb-5" placeholder="Title" />
            <textarea
              class="normal-textarea mb-5"
              placeholder="Description for your requirements"
            ></textarea>

            <button
              class="btn primary-btn d-flex gap-2 align-items-center text-color"
            >
              Sumbit <span class="material-symbols-outlined">east</span>
            </button>
          </form>
        </div>
      </div>
      <div class="col-12 col-xl-6">
        <div class="contact-detail">
          <div class="heading-section mb-5">
            <h4>Contact Us</h4>
            <p>{{ question }}</p>
          </div>
          <div class="body-section mb-5">
            <h4>Headquarters</h4>
            <p><span>itGateway Technology Group Ltd. </span></p>
            <p>
              No.73-A, Corner of Kauk Saw & Kauk Lin Street, Thuwana 29 Ward,
              Thingangyun Township, Yangon, Myanmar.
            </p>
          </div>
          <div class="mail-phone">
            <p class="d-flex align-item-center">
              <span class="material-symbols-outlined me-3"> mail </span>
              info@itgateway.org | info@itgatewaycloud.com
            </p>
            <p class="d-flex align-item-center">
              <span class="material-symbols-outlined me-3"> call </span>
              +959 899227010 | +959 446667634
            </p>
          </div>
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
  margin-top: 180px;
}

.info {
  width: 100%;
  height: 100%;
  background-image: url("@/assets/images/contact.png");
  padding: 30px 50px;
}

.name-group {
  width: 540px;
}

.contact-input {
  width: 250px;
  background: linear-gradient(
    to right,
    #a22e75 -40%,
    #ec6416d3 100%,
    #f2f2f200
  );
  border-radius: 5px;
  padding: 10px;
  color: #fff;
}

.contact-input::placeholder,
.normal-input::placeholder {
  color: #fff;
}

.contact-input:focus,
.normal-input:focus {
  border: 1px solid #fff;
}

.normal-input {
  width: 540px;
  background: linear-gradient(
    to right,
    #a22e75 -40%,
    #ec6416d3 100%,
    #f2f2f200
  );
  border-radius: 5px;
  padding: 10px;
  color: #fff;
}

.normal-textarea {
  width: 540px;
  height: 200px;
  background: linear-gradient(
    to right,
    #a22e75 -40%,
    #ec6416d3 100%,
    #f2f2f200
  );
  border-radius: 5px;
  padding: 10px;
  color: #fff;
}

.normal-textarea::placeholder {
  color: #fff;
}

.text-color {
  color: #fff !important;
  padding: 10px 20px;
}

.contact-detail {
  padding: 30px 50px;
}

.contact-detail h4 {
  font-family: "Chakra Petch", sans-serif;
  font-size: 2rem;
}

.body-section span {
  color: #ec6416d3;
  font-weight: 600;
}

.body-section {
  padding: 10px 200px 10px 15px;
  background: linear-gradient(to right, #2c70ad 0%, #7030a0 100%, #f2f2f200);
  color: #fff;
}

.mail-phone p {
  font-size: 20px;
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
    width: 350px;
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

  @media (max-width: 600px) {
    .contact-us-wrapper {
      margin-top: 90px;
    }
  }
}
</style>
