<template text='text/javascript'>
   <div class="item-con">
    <div class="title">{{title}}</div>
    <Time :time = 'time' :type = 'type'></Time>
   </div>
</template>


<style scoped lang="stylus">
// 必须在这个位置，不然不生效，放在style下边不生效
.item-con {
    width 100%
    height 500px
    background-color black
    text-align center
    justify-content center
    display  flex
    flex-direction column
}
// text-shadow 水平位移 垂直位移 模糊程度 阴影颜色
.title {
    font-size 40px 
    font-family "Comic Sans MS"
    color white
    align-self center
    margin-bottom 10px
    text-shadow 0 0 20px #fdec84
    text-shadow 10px -10px 30px #ffae35            
}
</style>


<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import Time from './time.vue'

export default  {
    components: {
        Time
    },
    data() {
        return {
            time: '12',
            type: 'Day',
            title: '现在是北京时间'
        }
    }
}
</script>
