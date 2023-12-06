<script setup lang="ts">
import LeftHeader from './LeftHeader.vue';
import RightHeader from './RightHeader.vue';

defineProps ({
    frequency: String,
    code: String,
})
</script>

<template>
    <div class="data">
        <LeftHeader :code="$props.code" />
        <RightHeader :frequency="$props.frequency" />
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