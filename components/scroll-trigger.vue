<template>
    <div class="w-full h-full">
        <div class="h-[100vh] bg-gray-200 flex items-center justify-center">
            <h1 class="text-4xl">向下滚动，内容将被固定，且随着用户滚动播放动画</h1>
        </div>

        <div ref="section" class="trigger-section h-[100vh] bg-white flex flex-col items-center justify-center">
            <div class="content text-center">
                <h2 class="text-3xl mb-4 scale-text">我是动画内容</h2>
                <p class="opacity-text text-lg text-gray-600">随着你滚动我慢慢出现</p>
            </div>
        </div>

        <div class="h-[100vh] bg-gray-300 flex items-center justify-center">
            <h1 class="text-4xl">后续内容</h1>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
const { $gsap, $ScrollTrigger } = useNuxtApp()

const section = ref<HTMLElement | null>(null)

onMounted(() => {

    // 钉住 section，并在滚动过程中播放动画
    $ScrollTrigger.create({
        trigger: section.value,
        start: 'top top',
        end: '+=1000', // 滚动多远才解锁
        scrub: true,
        pin: true,
        markers: true, // 开启可视化调试
    })

    // 文本渐现 & 缩放动画
    $gsap.to('.opacity-text', {
        opacity: 1,
        scrollTrigger: {
            trigger: section.value,
            start: 'top top',
            end: '+=1000',
            scrub: true,
        },
    })

    $gsap.to('.scale-text', {
        scale: 1.5,
        scrollTrigger: {
            trigger: section.value,
            start: 'top top',
            end: '+=1000',
            scrub: true,
        },
    })

    $gsap.to('.trigger-section', {
        backgroundColor: "blue",
        scrollTrigger: {
            trigger: section.value,
            start: 'top top',
            end: '+=1000',
            scrub: true,
        },
    })
})
</script>

<style scoped>
.opacity-text {
    opacity: 0;
}
</style>