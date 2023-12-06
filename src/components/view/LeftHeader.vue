<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const code = computed(() => String(route.query.code));
</script>

<template>
    <div class="leftData">
        <div class="number">
            {{ code }}
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