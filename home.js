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
"use strict";

var navbar = document.querySelector('.navbar');
navbar.querySelector('.toggle').addEventListener('click', function () {
  navbar.classList.toggle('collapsed');
});
window.addEventListener('scroll', function (e) {
  var windowY = window.pageYOffset;
  var navbarHeight = document.querySelector('.navbar').offsetHeight;
  if (windowY > navbarHeight) navbar.classList.add('sticky');else navbar.classList.remove('sticky');
});