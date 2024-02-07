<template>
    <header @scroll="scrollHandler()" id="nav" :class="{ 'nav-show': hideNav, 'nav-hidden': !hideNav }"
        class="fixed top-0 left-0 w-full h-20 px-12 backdrop-blur-sm shadow-sm">
        <Nav />
    </header>
</template>

<script setup>
import Nav from '@/components/nav.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';

let lastScrollY = ref(window.scrollY);
let hideNav = true;

const scrollHandler = () => {
    if (lastScrollY.value < window.scrollY) {
        hideNav = false
        console.log(hideNav)

    } else {
        hideNav = true
        console.log(hideNav)
    }
    lastScrollY.value = window.scrollY;
}

onMounted(() => {
    window.addEventListener('scroll', scrollHandler);
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', scrollHandler);
});
</script>

<style scoped>
:root {
    --nav-h: 5rem;
}

.nav-hidden {
    transform: translateY(calc(-1*var(--nav-h)));
    box-shadow: none;
}

.nav-show {
    transform: translateY(calc(1*var(--nav-h)));
}
</style>
