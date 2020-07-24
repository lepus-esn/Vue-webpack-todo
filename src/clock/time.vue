<template text="text/javascript">
  <div id="time-con">
     <div>
        <div>{{time}}</div>
     </div>
     <div>
        <div>{{type}}</div>
     </div>
  </div>
</template>

<style scoped lang = 'stylus'>
.time-con {
    height 100px
    width 100px
    background-color #1E90FF
}
</style>

<script lang = 'ts'>
export default {
    props: {

    },
    data() {
        return {
            time: '12',
            type: 'Day',
        }
    }
}
</script>
