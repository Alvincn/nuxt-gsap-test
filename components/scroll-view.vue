<template>
    <template>
        <div class="parallax-section relative h-[150vh] overflow-hidden">
            <img src="/assets/imgs/img.jpeg" class="parallax-bg absolute top-0 left-0 w-full h-full object-cover" />
            <div class="relative z-10 text-white text-4xl text-center pt-[60vh]">视差文字</div>
        </div>
    </template>
</template>

<script lang="ts" setup>
const { $gsap } = useNuxtApp()
onMounted(() => {
    $gsap.to('.parallax-bg', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
            trigger: '.parallax-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
        }
    })
})
</script>

<style></style>