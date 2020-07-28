<template>
   <div class = 'item-con'>
   <article class ='list'>
      <ol v-for='item in dataSource' :key='item'>
        <li>{{item}}</li>
      </ol>
   </article>
   </div>
</template>

<script type="text/javascript">
   export default {
       data() {
          return {

          }
       },
       props: {
          dataSource: Array
       }
   }
</script>

<style scoped lang="stylus">
.item-con {
    flex 1
    display flex
    align-item center
    
}
.list {
   border: 0.5px solid blue
   text-align center
   width 200px
}
ol {
   text-align center
   width: 200px
   li {
   }
}
</style>