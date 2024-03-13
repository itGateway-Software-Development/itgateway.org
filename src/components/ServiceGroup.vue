<template>
    <div class="content-wrapper service-group ">
        <div class="row">
            <div class="col-12 col-sm-6 col-lg-4 col-xl-3 mb-5"  v-for="(service,index) in serviceGroups" :key="index" >
                <div class="service-container cursor-pointer" data-aos="fade-up">
                    <div class="d-flex header align-items-center gap-2">
                        <img class="service-icon" :src="service.icon" alt="">
                        <h4>{{service.title}}</h4>
                    </div>
                    <p>{{service.content}}</p>
                    <div class="readmore">
                        <router-link :to="`${service.url}`" class="d-flex align-items-center gap-2">
                            <span>Read More</span> <span class="material-symbols-outlined mt-1 ms-1">arrow_right_alt</span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</template>

<script>
    export default {
    setup() {
            const serviceGroups = [
                {
                    title: "itGateway Cloud",
                    content: "Running your resources and keep the data on our cloud infrastructure securely.",
                    url: '#',
                    icon: require('@/assets/images/service_group/cloud.png'),
                },
                {
                    title: "Premium IT Solutions",
                    content: "Providing the latest IT solutions and services for the best customer experience.",
                    url: '#',
                    icon: require('@/assets/images/service_group/premium.png'),
                },
                {
                    title: "Software Development​",
                    content: "Offers not only business and enterprise application but also web development. ​",
                    url: '#',
                    icon: require('@/assets/images/service_group/software_development.png'),
                },
                {
                    title: "Engineering Solutions​",
                    content: "Providing the latest IT solutions and services for the best customer experience.​",
                    url: '#',
                    icon: require('@/assets/images/service_group/engineering.png'),
                },
                {
                    title: "Cloud Application​",
                    content: "Build & deploy faster and easy to use cloud based application with SaaS.​​",
                    url: '#',
                    icon: require('@/assets/images/service_group/cloud_app.png'),
                },
                {
                    title: "Managed Services​",
                    content: "You can ignore anything about IT, because we can build, deploy and managed for you.​​",
                    url: '#',
                    icon: require('@/assets/images/service_group/manage_service.png'),
                },
                {
                    title: "Cyber Security​",
                    content: "Protect your business and critical data with our strong Cyber Security Operation team.​​",
                    url: '#',
                    icon: require('@/assets/images/service_group/cyber_security.png'),
                },
                {
                    title: "IT Trainings​",
                    content: "Maximize your IT skills rapidly with our training team for DevOps, Cloud, Development & more. ​​",
                    url: '#',
                    icon: require('@/assets/images/service_group/training.png'),
                }
            ];

            return {serviceGroups}
        }
    }
</script>

<style scoped>

    .service-group {
        margin-top: 60px;
    }
    .service-container {
        padding: 30px;
        height: 220px;
        border-radius: 10px;
        position: relative;
        overflow:hidden;
        background-color: var(--sec-background-color) !important;
        transition: .5s ease ;
    }

    .service-container:hover {
        transform: translateY(-10px);
        box-shadow: 4px 4px 8px var(--sec-background-light-color);
    }

    .service-container .header {
        height: 40px;
        margin-bottom: 10px;
    }

    .service-container img.service-icon {
        width: 30px;
        margin-bottom: 10px;
    }

    .service-container h4 {
        color: var(--main-color);
        font-weight: bold;
        font-size: 22px;
    }

    .service-container .readmore {
        position: absolute;
        bottom: 15px;
        overflow: hidden;
    }

    .service-container a {
        transform: translateX(-80px);
        transition: .5s ease;
    }

    .service-container:hover a {
        transform: translateX(0);
    }
</style>
