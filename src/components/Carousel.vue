<template>
    <div class="carousel-wrapper mt-3">
        <img :src="currentImage" alt="">
        <div class="indicator d-flex align-items-center gap-4">
            <span class="cursor-pointer" :class="{active: currentImageIndex == 0}" @click="changeImageIndex(0)">Fastest Growing Company</span>
            <span class="cursor-pointer" :class="{active: currentImageIndex == 1}" @click="changeImageIndex(1)">Global Cloud Infracture</span>
            <span class="cursor-pointer" :class="{active: currentImageIndex == 2}" @click="changeImageIndex(2)">Research & Development</span>
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue'
    
    export default {
    setup() {
            const images = [
                require('@/assets/images/carousel/1.jpg'),
                require('@/assets/images/carousel/2.jpg'),
                require('@/assets/images/carousel/3.jpg'),
            ]
    
            const currentImageIndex = ref(0);
            const currentImage = ref(images[currentImageIndex.value])

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
                currentImage.value = images[currentImageIndex.value]
            }

            onMounted(() => {
                setInterval(slider, 5000);
            })

            return {currentImage, currentImageIndex, changeImageIndex}
        }
    }
</script>

<style scoped>
    .carousel-wrapper {
        width: 100%;
        height: 500px;
        position: relative;
    }

    .carousel-wrapper img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .carousel-wrapper .indicator {
        position: absolute;
        bottom: 20px;
        left: 50px;
        
    }

    .carousel-wrapper .indicator .active {
        border: 2px dotted #f2f2f2;
        padding: 5px 10px;
    }
</style>
