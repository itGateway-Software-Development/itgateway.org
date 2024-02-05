<template>
    <div class="content-wrapper service-group ">
        <div class="row">
            <div class="col-12 col-sm-6 col-lg-4 col-xl-3 mb-5"  v-for="(service,index) in serviceGroups" :key="index" >
                <div class="service-container cursor-pointer">
                    <h4 class="text-center">{{service.title}}</h4>
                    <p>{{service.content}}</p>
                    <router-link :to="`${service.url}`" class="d-flex align-items-center gap-2">
                        <span>Read More</span> <span class="material-symbols-outlined mt-1 ms-1">arrow_right_alt</span>
                    </router-link>
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
                },
                {
                    title: "Premium IT Solutions",
                    content: "Providing the latest IT solutions and services for the best customer experience.",
                    url: '#',
                },
                {
                    title: "Software Development​",
                    content: "Offers not only business and enterprise application but also web development. ​",
                    url: '#',
                },
                {
                    title: "Engineering Solutions​",
                    content: "Providing the latest IT solutions and services for the best customer experience.​",
                    url: '#',
                },
                {
                    title: "Cloud Application​",
                    content: "Build & deploy faster and easy to use cloud based application with SaaS.​​",
                    url: '#',
                },
                {
                    title: "Managed Services​",
                    content: "You can ignore anything about IT, because we can build, deploy and managed for you.​​",
                    url: '#',
                },
                {
                    title: "Cyber Security​",
                    content: "Protect your business and critical data with our strong Cyber Security Operation team.​​",
                    url: '#',
                },
                {
                    title: "IT Trainings​",
                    content: "Maximize your IT skills rapidly with our training team for DevOps, Cloud, Development & more. ​​",
                    url: '#',
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
        border: 1px solid var(--font-color);
        padding: 15px;
        height: 220px;
        border-radius: 10px;
        position: relative;
        overflow:hidden;
    }

    .service-container:hover {
        background: linear-gradient(to right, #a22e75c5, #ec6416ab);
    }

    .service-container h4 {
        color: var(--main-color);
        font-weight: bold;
    }

    .service-container a {
        position: absolute;
        bottom: 15px;
        transform: translateX(-98px);
        transition: .5s ease;
    }

    .service-container:hover a {
        transform: translateX(0);
    }
</style>
