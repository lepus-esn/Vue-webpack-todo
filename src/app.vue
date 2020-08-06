<template>
  <div id="app">
      <div id="cover"></div>
      <Header></Header>
      <Todo @inputItem = 'inputItem'></Todo>
      <Item :dataSource = 'dataSource'></Item>
      <Tabs :itemData = 'itemData'  @deleteItem = 'deleteItem'></Tabs>
      <Footer></Footer>
      <clock/>
      <BoxLoad/>
  </div>
</template>

<script type="text/jsx">
  import Header from './todo/header.vue'
  import Footer from './todo/forter.jsx'
  import Item from './todo/item.vue'
  import Todo from './todo/todo.vue'
  import Tabs from './todo/tabs.vue'
  import Clock from './clock/index.vue'
  import BoxLoad from './box_load/index.vue'
   export default {
       components: {
           Header,
           Footer,
           Item,
           Todo,
           Tabs,
           Clock,
           BoxLoad
       },
       data() {
            return {
               dataSource: ['沙河'],
               itemData: ['删除']
            }
       },
       methods: {
            inputItem(item) {
                this.dataSource.push(item);
            },
            deleteItem() {
                this.dataSource.pop();
            }
       }
   }
</script>


<style lang = "stylus" scoped>
#app {
    position absolute
    left 0
    right 0
    top 0
    bottom 0
}
#cover {
    position absolute
    left 0
    right 0
    top 0
    bottom 0
    background-color #999
    opacity .3
    z-index -1
}
</style>