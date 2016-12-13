
<style src="./menu.scss" lang="scss"></style>
<template src="./menu.html" lang="html" ></template>

<script>
    const menu = {
        data: function(){
            return {
                cpName: 'header component'
            };
        },
        mounted: ()=>{
            console.info('mouted menu component')
        }
    };
    export default menu;
</script>
