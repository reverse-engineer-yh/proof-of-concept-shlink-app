<script setup lang="ts">
const enterstuff = ref();
const enterslug = ref();
const getres = ref("");
const formatres = ref();
const httpsorhttp = ref("http://");
const format = async () => {
    try {
        const req = await fetch("/api/createshorturl", {
            method: "POST",
            // Set the headers. Please.
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                url: httpsorhttp.value + enterstuff.value,
                token: "5432",
            }),
        });
        const res = await req.json();
        formatres.value = "https://go.yuanhau.com/" + res.code;
    } catch (e) {
        console.log(e);
    }
};
</script>
<template>
    <div>
        <h1>Create a new Short URL</h1>
        <select v-model="httpsorhttp">
            <option value="http://">http://</option>
            <option value="https://">https://</option>
        </select>
        <input v-model="enterstuff" placeholder="whatever" />
        <br />
        <button @click="format">button</button>
        <p>{{ formatres }}</p>
    </div>
</template>
