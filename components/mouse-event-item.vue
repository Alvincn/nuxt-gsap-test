<template>
    <div
        class="card w-64 h-40 bg-blue-500 text-white flex items-center justify-center mx-auto mt-20 rounded-lg shadow-lg cursor-pointer"
        @mouseenter="mouseEnterEvent"
        @mouseleave="mouseLeaveEvent"
        >
        悬停我试试看
    </div>
</template>

<script lang="ts" setup>
const { $gsap } = useNuxtApp()
onMounted(() => {
})
const mouseEnterEvent = (e: MouseEvent) => {
    $gsap.to(e.currentTarget, { scale: 1.05, duration: 0.3 })
}
const mouseLeaveEvent = (e: MouseEvent) => {
    $gsap.to(e.currentTarget, { scale: 1, duration: 0.3 })
}
</script>

<style></style>