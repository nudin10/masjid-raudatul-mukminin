<template>
<div class="relative h-screen py-24">
    <div class="flex flex-row h-full">
        <Description class="basis-3/5 pl-12 h-full" />
        <Location class="basis-2/5 h-8/12 ml-8 mr-8 h-8/12 md:h-full"/>
    </div>
    <!-- <Segment segmentName="Lokasi" class="absolute bottom-0 right-0"/> -->
</div>
</template>

<script setup>
import Location from '@/components/Location.vue';
import Description from '@/components/Description.vue';
</script>