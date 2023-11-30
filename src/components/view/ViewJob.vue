<script lang="ts">
    import { ref } from 'vue'

    export default {
        setup() {
            const count = ref(0)
            return { count }
        }
    }
</script>

<template>
    <div class=".view ">111</div>
</template>

<style>
.view {
    color: red;
}
</style>