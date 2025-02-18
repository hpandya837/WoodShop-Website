const app = Vue.createApp({
    data() {
        return {
            isMobile: window.innerWidth <= 768
        };
    },
    methods: {
        checkScreenSize() {
            this.isMobile = window.innerWidth <= 768;
        }
    },
    mounted() {
        window.addEventListener("resize", this.checkScreenSize);
    },
    beforeUnmount() {
        window.removeEventListener("resize", this.checkScreenSize);
    }
});

app.mount("#app");
