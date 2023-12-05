<script setup lang="ts">
import { ref } from 'vue';
import TradingData from './TradingData.vue';
import CandlestickChart from './CandlestickChart.vue';

const frequency = ref("1d");

function switchTo1d() {
    frequency.value = "1d";
}
function switchTo1w() {
    frequency.value = "1w";
}
function switchTo1m() {
    frequency.value = "1m";
}
</script>

<template>
    <div class="tradingView ">
        <TradingData :frequency="frequency" :key="frequency" />
        <CandlestickChart :frequency="frequency" :key="frequency" />
        <div class="switchButton">
            <button @click="switchTo1d">1d</button>
            <button @click="switchTo1w">1w</button>
            <button @click="switchTo1m">1m</button>
        </div>
    </div>
</template>

<style scoped>
.tradingView {
    width: 100vw;
    height: 100vh;
    background-color: black;
    color: white;
}

.switchButton {
    width: calc(100vw - 100px);
    margin: 0 50px;
}
</style>