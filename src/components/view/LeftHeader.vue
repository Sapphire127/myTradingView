<script setup lang="ts">
const props = defineProps ({
    code: String,
})
</script>

<template>
    <div class="leftData">
        <div class="number">
            {{ props.code }}
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