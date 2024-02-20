<template>
    <div class="h-screen py-10 bg-slate-800 flex flex-row justify-center content-center">
        <div class="flex flex-row h-full content-center py-8">
            <!-- <ImageSlider class="basis-3/5 pl-12 h-full" /> -->
            <div class="basis-3/5 h-full ml-12 flex flex-col justify-center">
                <ImageSlider2/>
            </div>
            <div class="basis-2/5 border-l-2 border-b-white ml-12 py-24 text-slate-200 flex flex-col items-center justify-center">
                <div class="flex flex-col items-center content-center">
                    <img src="../assets/images/logo-panjang.png" class="invert h-32" alt="">
                </div>
                <div class="w-full px-16 mt-16 pb-12 text-center">
                    <p class="font-arabic text-3xl pb-4">
                        ترلتق د باليق هينيڠ كامڤوڠ سڠت، مسجد راوداتول مؤمنين تله دبينا اونتوق منجادي ڤرسيڠڬهن عباده دان
                        ميديوم اكتيۏيتي كروهانيان باڬي ڤندودوق ستيمڤت كامڤوڠ سڠت
                    </p>
                    <p class="italic text-xs text-teal-500 px-8">
                        Terletak di balik hening Kampung Sengat, Masjid Raudatul Mukminin telah dibina untuk menjadi
                        persinggahan ibadah dan medium aktiviti kerohanian bagi penduduk setempat Kampung Sengat.
                    </p>
                </div>
            </div>
            <!-- <Location class="basis-2/5 h-8/12 ml-8 mr-8 h-8/12 md:h-full"/> -->
        </div>
        <!-- <Segment segmentName="Lokasi" class="absolute bottom-0 right-0"/> -->
    </div>
</template>

<script setup>
import ImageSlider from '@/components/ImageSlider.vue';
import ImageSlider2 from './ImageSlider2.vue';
import calligraphy from '@/assets/images/kaligrafi-white.png'
</script>