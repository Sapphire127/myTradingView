<script setup lang="ts">
</script>

<template>
    <div class="rightData">
        <div>
            <div class="close">
                <div class="name">收</div>
                <div class="number">1762.50</div>
            </div>
            <div class="open">
                <div class="name">开</div>
                <div class="number">1755.00</div>
            </div>
        </div>
        <div>
            <div class="low">
                <div class="name">低</div>
                <div class="number">1769.50</div>
            </div>
            <div class="high">
                <div class="name">高</div>
                <div class="number">1736.66</div>
            </div>
        </div>
        <div>
            <div class="money">
                <div class="name">额</div>
                <div class="number">32.66亿</div>
            </div>
            <div class="time">
                <div class="name">时</div>
                <div class="number">2023/11/20</div>
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

.name {
    margin-right: 10px;
    color: gray;
    float:left;
    display:inline;
}

.number {
    width: 150px;
    float:left;
    display:inline;
}
</style>