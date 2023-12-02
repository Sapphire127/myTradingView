<script setup lang="ts">
import LeftData from './LeftData.vue';
import RightData from './RightData.vue';
</script>

<template>
    <div class="data">
        <LeftData />
        <RightData />
    </div>
</template>

<style scoped>
.data {
    width: calc(100vw - 100px);
    height: 100px;
    margin: 0 50px;
    color: white;
}
</style>