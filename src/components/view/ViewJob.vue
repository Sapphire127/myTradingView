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
    <div class="view ">11qwerqwfasf内容asf1</div>
</template>

<style scoped>
.view {
    margin: 50px;
    background-color: red;
    color: white;
}
</style>