<template>
    <header :class="{ 'nav-show': !hideNav, 'nav-hidden': hideNav }" ref="targetObserve"
        class="fixed top-0 left-0 w-full h-20 px-12 backdrop-blur-sm shadow-sm z-50">
        <Nav />
    </header>
</template>

<script setup>
import Nav from '@/components/Nav.vue';
import { ref, onMounted, onBeforeUnmount, inject } from 'vue';

let lastScrollY = ref(window.scrollY);
let hideNav = ref(false);
const sectionThree = ref();

// defineExpose({ targetObserve })

// const scrollHandler = () => {
//     if (lastScrollY.value < window.scrollY) {
//         setTimeout(() => {
//             hideNav.value = true;
//         }, 100);
//         hideNav.value = true

//     } else {
//         hideNav.value = false
//     }
//     lastScrollY.value = window.scrollY;
// }

onMounted(() => {
    // const options = {
    //     root: null,
    //     threshold: 1
    // };
    // const observer = new IntersectionObserver((entries, observer) => {
    //     entries.forEach(entry => {
    //         console.log("Observed " + entry)
    //         // entry.isIntersecting
    //     })
    // }, options);

    // if (sectionThree.value instanceof Element) {
    //     observer.observe(sectionThree.value);
    // } else {
    //     console.dir("Observing: " + sectionThree)
    //     console.error('failed to observe element');
    // }
    // window.addEventListener('scroll', scrollHandler);
})

onBeforeUnmount(() => {
    // window.removeEventListener('scroll', scrollHandler);
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
