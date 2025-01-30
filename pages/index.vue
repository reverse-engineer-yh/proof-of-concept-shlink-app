<script setup lang="ts">
const enterstuff = ref();
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
                url: enterstuff.value,
                token: "5432",
            }),
        });
        const res = await req.json();
    } catch (e) {
        console.log(e);
    }
};
const obtaindata = async () => {
    try {
        const req = await fetch("/api/getshortlinkana", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                token: "5432",
            }),
        });
        const res = await req.json();
        return res;
    } catch (e) {
        console.log(e);
        return;
    }
};
</script>
<template>
    <div>
        <h1>POC</h1>
        <input v-model="enterstuff" placeholder="whatever" />
        <br />
        <button @click="format">button</button>
        <
    </div>
</template>
