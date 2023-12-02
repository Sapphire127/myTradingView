<script setup lang="ts">
</script>

<template>
    <div class="rightData">
        <div>
            <div class="close">
                <div class="rightViewName">收</div>
                <div class="rightViewNumber">1762.50</div>
            </div>
            <div class="open">
                <div class="rightViewName">开</div>
                <div class="rightViewNumber">1755.00</div>
            </div>
        </div>
        <div>
            <div class="low">
                <div class="rightViewName">低</div>
                <div class="rightViewNumber">1769.50</div>
            </div>
            <div class="high">
                <div class="rightViewName">高</div>
                <div class="rightViewNumber">1736.66</div>
            </div>
        </div>
        <div>
            <div class="money">
                <div class="rightViewName">额</div>
                <div class="rightViewNumber">32.66亿</div>
            </div>
            <div class="time">
                <div class="rightViewName">时</div>
                <div class="rightViewNumber">2023/11/20</div>
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