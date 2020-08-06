<!DOCTYPE html>
<template text="text/javascript">
    <div id='con'>
        <div id='sub-con'>
            <div id='text'>{{message}}</div>
        </div>
    </div>
</template>

<style scoped lang="stylus">
#con {
    background-color white
    width 100%
    height 500px
}
#sub-con
    position absolute
    height 400px
    line-height 400px
    animation:run 3s linear 0s infinite
    @keyframes run 
        0%
            width:0px
            background-color #FFC0CB
            left: 0px
            right: 100%
        25% 
            width: 100%
            background-color #FFC0CB
            left: 0
        50%
            width:0px
            background-color #FFC0CB
            left: 100%
        100% 
            width:100%
            background-color #00BFFF
            left: 0px
#text {
    font-size 80px
    color white
    postion absolute
    margin 0 auto
}
</style>

<script lang="ts">
  export default {
      data(){
          return {
             message: 'Loading...' 
          }
      },
  }
</script>


