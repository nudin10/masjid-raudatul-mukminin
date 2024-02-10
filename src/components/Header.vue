<template>
    <header :class="{ 'nav-show': !hideNav, 'nav-hidden': hideNav }" ref="targetObserve"
        class="fixed top-0 left-0 w-full h-20 px-12 backdrop-blur-sm shadow-sm">
        <Nav />
    </header>
</template>

<script setup>
import Nav from '@/components/Nav.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';

let lastScrollY = ref(window.scrollY);
let hideNav = ref(false);

const scrollHandler = () => {
    if (lastScrollY.value < window.scrollY) {
        setTimeout(() => {
            hideNav.value = true;
        }, 100); 
        hideNav.value = true

    } else {
        hideNav.value = false
    }
    lastScrollY.value = window.scrollY;
}

onMounted(() => {
    // let options = {};
    // const targetObserve = ref(null);

    // const observer = new IntersectionObserver((entries, observer) => {
    //     entries.forEach(entry => {
    //         console.log("Observed " + entry)
    //     })
    // }, options);

    // observer.observe(targetObserve.value);
    // window.addEventListener('scroll', scrollHandler);
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', scrollHandler);
});
</script>

<style scoped>
:root {
    --nav-h: 5rem;
}

header {
    transition: transform 0.2s;
}

.nav-hidden {
    transform: translateY(calc(-1*var(--nav-h)));
    box-shadow: none;
}

.nav-show {
    transform: translateY(calc(1*var(--nav-h)));
}

/* .nav-scrolled {

} */

</style>
