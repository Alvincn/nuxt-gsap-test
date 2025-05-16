<template>
    <div class="space-y-32 p-20">
        <div class="fade-in text-2xl">第一段</div>
        <div class="fade-in text-2xl">第二段</div>
        <div class="fade-in text-2xl">第三段</div>
    </div>
</template>

<script lang="ts" setup>
const { $gsap } = useNuxtApp()
onMounted(() => {
    $gsap.utils.toArray<HTMLElement>('.fade-in').forEach(el => {
        $gsap.from(el, {
            y: 50,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: el,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        })
    })
})
</script>

<style></style>