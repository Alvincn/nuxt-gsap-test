<template>
    <div class="text-center text-4xl font-bold mt-20">
        <span class="count-num">0</span>+
    </div>
</template>

<script lang="ts" setup>
const { $gsap } = useNuxtApp()
onMounted(() => {
    const counter = { val: 0 }
    const el = document.querySelector('.count-num')

    $gsap.to(counter, {
        val: 100,
        duration: 2,
        ease: 'power1.out',
        onUpdate: () => {
            if (el) el.textContent = Math.floor(counter.val).toString()
        }
    })
})
</script>

<style></style>