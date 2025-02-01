<script setup lang="ts">
const enterstuff = ref();
const enterslug = ref();
const getres = ref("");
const formatres = ref();
const httpsorhttp = ref("http://");
const format = async () => {
    console.log(enterstuff.value);
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
const sendslug = async () => {
    try {
        const req = await fetch("/api/getshortlinkana", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                slug: enterslug.value,
            }),
        });
        console.log(enterslug.value);
        const res = await req.json();
        console.log(res);
    } catch (e) {
        console.log(e);
    }
};
</script>
<template>
    <div>
        <h1>Get Info</h1>
        <input v-model="enterslug" placeholder="cool" />
        <button @click="sendslug">Send</button>
        <h4>{{ getres }}</h4>
    </div>
</template>
