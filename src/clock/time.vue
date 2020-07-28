<template text="text/javascript">
  <div class="time-con">
     <div>
        <div class="time">{{time}}</div>
     </div>
     <div class="day-con">
        <div class="day">{{type}}</div>
     </div>
  </div>
</template>

<style scoped lang = 'stylus'>
.time-con {
    height 100px
    width 100px
    background-color #1E90FF
}
.time {
    color red
    font-size  50px
}
.day-con {
    background-color #0000CD
    position absolute
    width  100px
    bottom 0.1

    .day {
        font-size  18px
    }
}
</style>

<script lang = 'ts'>
export default {
    props: {
        time: String,
        style: String
    },
    data() {
        return {
            time: '12',
            type: 'Day',
        }
    }
}
</script>
