<template>
    <div>
        <h1>Number</h1>
    {{ number}}
    </div>
</template>
<script setup>
const { data : number } = await useAsyncData('number', () => Math.round(Math.random() * 100))
</script>

<style lang="scss" scoped>
</style>
