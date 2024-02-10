<template>
    <div
        id="pengenalan"
        class="bg-default-img bg-cover bg-center min-h-screen min-w-full max-h-screen-xl max-w-screen-xl font-default text-black pt-20 px-14">
        <div class="mt-10 w-1/3 h-[40em] flex flex-row align-middle">
            <div class="h-full w-full bg-white-translucent rounded-xl">
                <div class="h-[20em] p-12">
                    <div class="h-3/6 m-auto flex flex-col items-center pb-6">
                        <img src="../assets/images/bismillah.svg" class="h-full" alt="">
                    </div>
                    <div
                        class="flex flex-col items-center py-6 text-center text-3xl text-black font-arabic border-y-2  border-slate-700">
                        <p>"</p>
                        <p>{{ ayatData.text.arabic }}</p>
                        <p>"</p>
                        <p class="text-sm italic font-default">{{ ayatData.text.english }}</p>
                    </div>
                    <p class="flex flex-col items-center pt-4 font-default">
                        {{ ayatData.metadata.surahNameEng }} - {{ ayatData.metadata.number }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { arabic, english } from "../api/alquran.js"
import { fetchRetry } from "../api/tools"

let ayatData = ref({
    "text": {
        "arabic": "",
        "english": ""
    },
    "metadata": {
        "surahName": "",
        "surahNameEng": "",
        "number": 0,
    }
})

onMounted(
    async () => {
        fetchRetry(arabic, 500, 5).then(res => res.json()).then(data => {
            ayatData.value.text.arabic = data.data.text
            ayatData.value.metadata.surahName = data.data.surah.name
            ayatData.value.metadata.surahNameEng = data.data.surah.englishName
            ayatData.value.metadata.number = data.data.numberInSurah
        })
        fetchRetry(english, 500, 5).then(res => res.json()).then(data => ayatData.value.text.english = data.data.text)
    }
);


</script>