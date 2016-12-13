<style src="./formItem.scss" lang="scss"></style>
<template src="./formItem.html" lang="html" ></template>

<script>
    const FormItem = {
        data: function(){
            return {
                cpName: 'FormItem component'
            };
        },
        mounted: ()=>{
            console.info('mouted FormItem component')
        }
    };
    export default FormItem;
</script>
