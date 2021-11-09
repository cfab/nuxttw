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
console.log($config.myURL)
let test = await fetch(`${$config.myURL}/api/quote`)
test = await test.json()
const apiQuote = test.apiQuote
</script>
