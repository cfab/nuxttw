<template>
    <div>
        <h1>Quote</h1>

        <br>
       <div v-if="quote"> {{quote}}</div>
        <br>
       <div v-if="apiQuote"> {{apiQuote}}</div>
    </div>
</template>
<script setup>
const { data: quote } = await useFetch('https://api.quotable.io/random')
let { $config } = useNuxtApp()

let test = await fetch(`${$config.baseURL}/api/quote`)
test = await test.json()
 const apiQuote = test.apiQuote


</script>

<style lang="scss" scoped>
</style>
