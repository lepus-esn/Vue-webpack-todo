<template text='text/javascript'>
    <div id='tab-con'>
        <div v-for='item in itemData' :key='item'>
            <button  name='item' @click='clickItem'>{{item}}</button>
        </div>
   </div>
</template>

<script>
   export default {
        data(){
            return{
               
            }
        },
        props: {
          itemData: Array
        },
        methods: {
            clickItem() {
            console.log('删除');
               this.$emit('deleteItem');
            }
        }
   }
</script>

<style scoped lang='stylus'>
#tab-con {
  flex 1
  padding 50px 100px
  flex-direction row
  text-align center
}
</style>