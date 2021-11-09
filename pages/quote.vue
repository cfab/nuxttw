<template>
    <div>
        <h1>Quote</h1>
        <br>
       <div v-if="quote"> {{ quote }}</div>
        <br>
       <div v-if="apiQuote"> {{ apiQuote }}</div>
    </div>
</template>
<script setup>
// https://www.youtube.com/watch?v=lLr_GZo5xZw
// https://www.youtube.com/watch?v=ClF9BvKCVwY

// direct call
const { data: quote } = await useFetch('https://api.quotable.io/random')
// call through server/api
let { myURL} = useRuntimeConfig()
let test = await fetch(`${myURL}/api/quote`)
const { apiQuote } = await test.json()

</script>
