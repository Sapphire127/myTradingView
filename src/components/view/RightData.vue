<script setup>
import { candlestickChartData } from './candlestickChartData';
import { ref } from 'vue';
import moment from "moment";

const props = defineProps ({
    frequency: String,
})

const data = ref(candlestickChartData(props.frequency));
const nowData = ref(data.value[data.value.length - 1]);
</script>

<template>
    <div class="rightData">
        <div>
            <div class="close">
                <div class="rightViewName">收</div>
                <div class="rightViewNumber">{{ nowData.close }}</div>
            </div>
            <div class="open">
                <div class="rightViewName">开</div>
                <div class="rightViewNumber">{{ nowData.open }}</div>
            </div>
        </div>
        <div>
            <div class="low">
                <div class="rightViewName">低</div>
                <div class="rightViewNumber">{{ nowData.low }}</div>
            </div>
            <div class="high">
                <div class="rightViewName">高</div>
                <div class="rightViewNumber">{{ nowData.high }}</div>
            </div>
        </div>
        <div>
            <div class="money">
                <div class="rightViewName">额</div>
                <div class="rightViewNumber">{{ nowData.money }}</div>
            </div>
            <div class="time">
                <div class="rightViewName">时</div>
                <div class="rightViewNumber">{{ moment(nowData.time * 1000).format('YYYY-MM-DD') }}</div>
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