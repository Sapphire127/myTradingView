<script setup lang="ts">
import TradingData from './TradingData.vue'
import CandlestickChart from './CandlestickChart.vue'
</script>

<template>
    <div class="tradingView ">
        <TradingData />
        <CandlestickChart />
    </div>
</template>

<style scoped>
.tradingView {
    width: 100vw;
    height: 100vh;
    background-color: black;
    color: white;
}
</style>