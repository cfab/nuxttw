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

let test = await fetch('http://localhost:3000/api/quote')
test = await test.json()
const apiQuote = test.apiQuote

</script>

<style lang="scss" scoped>
</style>
