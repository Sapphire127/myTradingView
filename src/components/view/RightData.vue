<script setup lang="ts">
import { candlestickChartData } from './candlestickChartData';
import { ref } from 'vue';

interface Quotes {
    time: string,
    open: number,
    high: number,
    low: number,
    close: number,
    money: number,
    volume: number
}

const props = defineProps ({
    frequency: String,
})

const data = candlestickChartData(props.frequency) as Quotes[];
const close = ref(data[data.length - 1].low);
const open = ref(data[data.length - 1].open);
const low = ref(data[data.length - 1].low);
const high = ref(data[data.length - 1].high);
const money = ref(data[data.length - 1].money);
const time = ref(data[data.length - 1].time);

console.log(close.value);
</script>

<template>
    <div class="rightData">
        <div>
            <div class="close">
                <div class="rightViewName">收</div>
                <div class="rightViewNumber">{{ close }}</div>
            </div>
            <div class="open">
                <div class="rightViewName">开</div>
                <div class="rightViewNumber">{{ open }}</div>
            </div>
        </div>
        <div>
            <div class="low">
                <div class="rightViewName">低</div>
                <div class="rightViewNumber">{{ low }}</div>
            </div>
            <div class="high">
                <div class="rightViewName">高</div>
                <div class="rightViewNumber">{{ high }}</div>
            </div>
        </div>
        <div>
            <div class="money">
                <div class="rightViewName">额</div>
                <div class="rightViewNumber">{{ money }}</div>
            </div>
            <div class="time">
                <div class="rightViewName">时</div>
                <div class="rightViewNumber">{{ time }}</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.rightData {
    width: 50%;
    height: 100%;
    padding: 10px;
    color: white;
    float:left;
    display:inline;
    font-size: 20px;
}

.rightData > div:nth-of-type(1),
.rightData > div:nth-of-type(2),
.rightData > div:nth-of-type(3) {
    height: 30px;
    float:left;
    display:inline;
}

.rightViewName {
    margin-right: 10px;
    color: gray;
    float:left;
    display:inline;
}

.rightViewNumber {
    width: 150px;
    float:left;
    display:inline;
}
</style>