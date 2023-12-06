<script setup>
import { quotesOf } from './quoteSource';
import { ref } from 'vue';

const props = defineProps ({
    frequency: String,
})

const instantQuote = ref({});
quotesOf(props.frequency).then(quotes => {
    instantQuote.value = quotes[quotes.length - 1]
});
</script>

<template>
    <div class="rightData">
        <div>
            <div class="close">
                <div class="rightViewName">收</div>
                <div class="rightViewNumber">{{ instantQuote.close }}</div>
            </div>
            <div class="open">
                <div class="rightViewName">开</div>
                <div class="rightViewNumber">{{ instantQuote.open }}</div>
            </div>
        </div>
        <div>
            <div class="low">
                <div class="rightViewName">低</div>
                <div class="rightViewNumber">{{ instantQuote.low }}</div>
            </div>
            <div class="high">
                <div class="rightViewName">高</div>
                <div class="rightViewNumber">{{ instantQuote.high }}</div>
            </div>
        </div>
        <div>
            <div class="money">
                <div class="rightViewName">额</div>
                <div class="rightViewNumber">{{ instantQuote.money }}</div>
            </div>
            <div class="time">
                <div class="rightViewName">时</div>
                <div class="rightViewNumber">{{ instantQuote.time}}</div>
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
</style>./quoteSource