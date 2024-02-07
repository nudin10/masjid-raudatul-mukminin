<template>
  <nav class="flex justify-between items-center font-semibold w-full h-full">
    <div class="relative flex max-h-full max-w-full">
      <img src="../assets/images/nav-logo.png"
        class="h-10 invert object-cover md:border-r-2 border-double border-black py-1 pl-1.5 pr-2" alt="">
      <img src="../assets/images/nav-text.png" class="hidden md:inline ml-2 h-10">
    </div>
    <!-- <img src="../assets/images/nav-text.png" class="max-h-full inline"> -->
    <div class="hidden md:flex justify-between items-center">
      <ul class="text-white default-font">
        <!-- <router-link v-for="(route, index) in routes" to="{{ route.path }}"
          class="cursor-pointer px-3 hover:animate-text-glow">{{
            route.name }}</router-link> -->
        <a v-for="(route, index) in routes" :key="index" href="{{ key }}"
          class="cursor-pointer px-3 hover:animate-text-glow">{{ route.name }}</a>
      </ul>
    </div>
    <div class="md:hidden">
      <img src="../assets/images/nav-text.png" class="max-h-10">
    </div>
    <div class="md:hidden">
      <button class="menu h-12 w-12 items-center align-middle"
        onclick="this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))"
        aria-label="Main Menu">
        <svg viewBox="0 0 100 100" class="h-full w-full">
          <path class="line line1"
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
          <path class="line line2" d="M 20,50 H 80" />
          <path class="line line3"
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
        </svg>
      </button>
    </div>
  </nav>
</template>

<script setup>
let routes = [
  { path: "#pengenalan", name: "Pengenalan" },
  { path: "/", name: "Acara" },
  { path: "/", name: "Kepimpinan" },
  { path: "/", name: "Sumbangan" }
];
</script>

<style scoped>
body {
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
  margin: 0;
}

.menu {
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  padding: 0;
}

.line {
  fill: none;
  stroke: white;
  stroke-width: 6;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
}

.line1 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}

.line2 {
  stroke-dasharray: 60 60;
  stroke-width: 6;
}

.line3 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}

.opened .line1 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
}

.opened .line2 {
  stroke-dasharray: 1 60;
  stroke-dashoffset: -30;
  stroke-width: 6;
}

.opened .line3 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
}
</style>
