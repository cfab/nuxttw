<template>
    <div>
        <h1>Airtable</h1>
        <br>
       <div v-if="data"> {{ data }}</div>

    </div>
</template>
<script setup>

// const { data: quote } = await useFetch('https://api.quotable.io/random')

let { data } = await useFetch(`/api/rencontre`)
data =  data.value
</script>
