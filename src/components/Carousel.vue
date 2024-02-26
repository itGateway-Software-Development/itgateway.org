<template>
    <div class="carousel-wrapper">
        <div class="carousel-bg-color"></div>
        <img :src="currentImage" alt="">
        <div class="carousel-content" v-if="currentImageIndex == 0">
            <h2 class="mb-5">itGateway is the Fastest Growing Company in South East Asia</h2>
            <p class="mb-1 text-white">Up to <span class="special-text">8 Services Category Groups</span></p>
            <p class="text-white">Focus on Innovation Led by Young Research Engineers</p>
            <button class="btn primary-btn d-flex gap-2 align-items-center">Find Out More <span class="material-symbols-outlined">east</span></button>
        </div>
        <div class="carousel-content" v-if="currentImageIndex == 1">
            <h2 class="mb-5">itGateway Cloud Infrastructure is to launch  in 2024</h2>
            <p class="mb-1 text-white">We are planning to offer the cloud services across the world</p>
            <p class="text-white">Explore additional offering in <span class="special-text">Managed Cloud Services</span></p>
            <button class="btn primary-btn d-flex gap-2 align-items-center">Register Now <span class="material-symbols-outlined">east</span></button>
        </div>
         <div class="carousel-content" v-if="currentImageIndex == 2">
            <h2 class="mb-5">Research is The Key to build the Innovation & Development.</h2>
            <p class="mb-1 text-white">We are trying a first innovation center of our group.</p>
            <p class="text-white"><span class="special-text">Learn, Research and Develop</span> for Our Customers</p>
            <button class="btn primary-btn d-flex gap-2 align-items-center">Read More <span class="material-symbols-outlined">east</span></button>
        </div>
        <div class="indicator d-flex align-items-center gap-4">
            <div class="d-flex flex-column">
                <span class="cursor-pointer text-white text-slide" @click="changeImageIndex(0)">Fastest Growing Company</span>
                <div class="progress-bar" v-if="currentImageIndex == 0">
                    <div class="fill"></div>
                </div>
            </div>
            <div class="d-flex flex-column">
                <span class="cursor-pointer text-white text-slide" @click="changeImageIndex(1)">Global Cloud Infracture</span>
                <div class="progress-bar" v-if="currentImageIndex == 1">
                    <div class="fill"></div>
                </div>
            </div>
            <div class="d-flex flex-column">
                <span class="cursor-pointer text-white text-slide" @click="changeImageIndex(2)">Research & Development</span>
                <div class="progress-bar" v-if="currentImageIndex == 2">
                    <div class="fill"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue'
    
    export default {
    setup() {
            const images = [
                require('@/assets/images/carousel/1.png'),
                require('@/assets/images/carousel/2.png'),
                require('@/assets/images/carousel/3.png'),
            ];

            let intervalId;
    
            const currentImageIndex = ref(0);
            const currentImage = ref(images[currentImageIndex.value])
            const duration = 6000;

            const slider = () => {
                if(currentImageIndex.value < images.length -1) {
                    currentImageIndex.value++;
                } else {
                    currentImageIndex.value = 0;
                }

                currentImage.value = images[currentImageIndex.value]
            }


            const changeImageIndex = (index) => {
                currentImageIndex.value = index;
                currentImage.value = images[currentImageIndex.value];

                 // Clear the existing interval and set a new one
                clearInterval(intervalId);
                intervalId = setInterval(slider, duration);
            }

            onMounted(() => {
                // Set the initial interval
                intervalId = setInterval(slider, duration);
            })

            return {currentImage, currentImageIndex, changeImageIndex}
        }
    }
</script>

<style scoped>
    .carousel-wrapper {
        width: 100%;
        height: 700px;
        position: relative;
        margin-top: 112px;
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
        font-family: 'Chakra Petch', sans-serif;
        font-size: 48px;
        letter-spacing: 0.007rem;
        color: #fff;
    }

    .carousel-content .special-text {
        color: #EC6316;
        font-weight: bold;
        font-size: 24px;
    }

    .carousel-content p {
        font-size: 24px;
    }

    .carousel-content button {
        font-weight: bold !important;
        margin-top: 40px !important;
        transition: .3s ease;
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

    @media(max-width: 1510px) {
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

    @media(max-width: 1200px) {
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
            font-size:11px !important;
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
