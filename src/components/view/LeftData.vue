<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();
//更改位置，获取数据的code也从url读取
</script>

<template>
    <div class="leftData">
        <div class="number">
            {{ route.query.code }}
        </div>
    </div>
</template>

<style scoped>
.leftData {
    width: 50%;
    height: 100%;
    padding: 10px;
    color: white;
    float:left;
    display:inline;
    font-size: 20px;
}

.number {
    height: 30px;
}
</style>