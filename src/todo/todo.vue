<template text='text/javascript'>
    <div id = 'input-con'>
      <input
        type = 'text'
        id = 'name'
        minLength = '4'
        maxLength = '8'
        size = '10'
        placeHolder = '请输入内容'
        @change = 'onChange'
      />
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        props: {
        },
        methods: {
            onChange(e) {
               console.log(e.target.value)
               this.$emit('inputItem', e.target.value);
            }
        }
    }
</script>

<style scoped lang = 'stylus'>
#input-con {
 text-align center
}
#name {
 
}
</style>