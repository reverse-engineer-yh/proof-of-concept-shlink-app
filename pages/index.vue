<script setup lang="ts">
const router = useRouter();
function push(url: string) {
    router.push(url);
}
</script>
<template>
    <div>
        <h1>Proof of Concept</h1>
        <button @click='push("/createlink")'>Create Link</button>
        <button @click='push("/getinfo")'>Get Info</button>
        <button @click='push("/old-index")'>Old Index</button>
    </div>
</template>
<style scoped>
div {
    display:flex;
    flex-direction: column;
    gap:10px;
    button {
        background-color: black;
        color:white;
        transition: all 250ms ease-in-out;
        &:hover {
            background-color: rgb(39, 39, 39);
        }
    }
}
</style>