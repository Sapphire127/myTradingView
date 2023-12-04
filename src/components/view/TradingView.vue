<script setup lang="ts">
import TradingData from './TradingData.vue';
import CandlestickChart from './CandlestickChart.vue';
import { ref } from 'vue';

const frequency = ref("10m");

function switchTo10m() {
    frequency.value = "10m";
    console.log(frequency.value);
}
function switchTo1h() {
    frequency.value = "1h";
    console.log(frequency.value )
}
function switchTo1d() {
    frequency.value = "1d";
    console.log(frequency.value )
}
function switchTo1w() {
    frequency.value = "1w";
    console.log(frequency.value )
}
</script>

<template>
    <div class="tradingView ">
        <TradingData :frequency="frequency" />
        <CandlestickChart :frequency="frequency" />
        <div class="switchButton">
            <button @click="switchTo10m">10m</button>
            <button @click="switchTo1h">1h</button>
            <button @click="switchTo1d">1d</button>
            <button @click="switchTo1w">1w</button>
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