<template text='text/javascript'>
   <div class="item-con">
    <div class="title">{{title}}</div>
    <div class="item-sub">
    <div  v-for="item in timeData" :key="item.type">
        <Time v-if= "item.type==='SECONDS'":time = 'item.time' :type = 'item.type' style='background-color: #FF1493'></Time>
        <Time v-if= "item.type !=='SECONDS'" :time = 'item.time' :type = 'item.type' ></Time>
    </div>
    </div>
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
.item-sub {
   display  flex
   flex-direction row
   justify-content center
}
</style>


<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import Time from './time.vue'

export default  {
    components: {
        Time
    },
    created(){
        let min = 20;
        this.timer = setInterval(() => {
            this.timeData[2].time = (min-1).toString();
            min = min-1;
            if(min === 0) {
                min = 20;
            }
        }, 1000)
    },
    destoryed() {
        this.timer = null;
    },
    data() {
        return {
            redStyle: {
                'background-color': this.classObject
            },
            timeData: [
                {
                    time: '18',
                    type: 'HOURS',  
                },
                {
                    time: '09',
                    type: 'MINUTES',  
                },
                {
                    time: '06',
                    type: 'SECONDS',  
                }
            ],
            time: '12',
            type: 'HOURS',
            title: '现在是北京时间',
            timer: null,
            color: '#1E90FF',
            redColor: '#FF1493',
        }
    },
    computed: {
        classObject: function (key) {
            consolo.log('---------------------',key);
            return key === 'SECONDS' ? 'red': '#1E90FF'
        }
    },
    methods: {

    }
}
</script>
