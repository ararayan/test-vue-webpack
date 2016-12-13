<style src="./dyform.scss" lang="scss"></style>
<template src="./dyform.html" lang="html" ></template>

<script>
    const dyform = {
        data: function(){
            return {
                cpName: 'dyform component'
            };
        },
     
        mounted: ()=>{
            console.info('mouted dyform component')
        }
    };
    export default dyform;
</script>