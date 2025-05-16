<template>
    <h1 class="hero-title text-4xl text-center mt-10">欢迎来到 Gsap 测试</h1>
    <div class="mt-10">
        <type-text></type-text>
    </div>
    <div class="mt-10">
        <scroll-trigger></scroll-trigger>
    </div>
    <div class="mt-10">
        <fade-in-item></fade-in-item>
    </div>
    <div class="mt-10">
        <mouse-event-item></mouse-event-item>
    </div>
    <div class="mt-10">
        <number-increase></number-increase>
    </div>
    <div class="mt-10">
        <scroll-view></scroll-view>
    </div>
    
</template>

<script lang="ts" setup>
const { $gsap } = useNuxtApp()
onMounted(() => {
    $gsap.from('.hero-title', {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    })
})
</script>

<style></style>