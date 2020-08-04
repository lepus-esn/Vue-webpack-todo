<template text="text/javascript">
  <div class="time-con">
     <div class="time-sub">
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
    margin 0px 10px -50px
    -webkit-box-reflect: below 2px  -webkit-gradient(linear, left top, left bottom, from(rgba(150, 10, 100, 0.1)), to(rgba(10, 10, 0, 0.3)))
}
.time-sub {
    flex 1
    max-height 100px
    height 76px
}
.time {
    color white
    font-size  50px
}
.day-con {
    width  100px
    height 24px
    line-height 24px
    margin-bottom -2px
    opacity .3
    z-index -1
    background-color #000000
    filter alpha
    box-shadow 0 -5px 5px #1E90FF
}
.day {
    font-size  18px
    color white
    font-family Cursive 
}
</style>

<script lang = 'ts'>
export default {
    props: {
        time: String,
        type: String
    },
    data() {
        return {
        }
    }
}
</script>
