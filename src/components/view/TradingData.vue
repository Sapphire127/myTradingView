<script setup lang="ts">
import LeftData from './LeftData.vue';
import RightData from './RightData.vue';

defineProps ({
    frequency: String,
    code: String,
})
</script>

<template>
    <div class="data">
        <LeftData :code="$props.code" />
        <RightData :frequency="$props.frequency" />
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