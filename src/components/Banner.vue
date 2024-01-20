<template>
    <div class="hidden md:flex justify-center w-full">
        <img src="../assets/images/nav-text.png" class="h-20 m-3">
    </div>
    <div class="hidden md:block mt-5 text-sm md:text-lg md:mt-0 text-center text-slate-500">
        <p>Masjid Raudatul Mukminin</p>
        <p>Lot 301403, Jalan Sengat 5, RPT Sengat 2, 31300, Kampung Kepayang, Perak </p>
        
    </div>
    <div class="visible md:hidden mt-3 text-xs md:text-lg md:mt-0 text-center text-slate-500">
        Masjid Raudatul Mukminin
    </div>
    <div class="flex justify-center mt-3">
        <Fb class="h-6 w-6 mx-1 md:h-8 md:w-8 md:mx-1.5"/>
        <Whatsapp class="h-6 w-6 mx-1 md:h-8 md:w-8 md:mx-1.5"/>
    </div>
</template>

<script setup>
import Fb from '@/components/svg/Fb.vue';
import Whatsapp from '@/components/svg/Whatsapp.vue';
</script>