
<style src="./def.header.scss" lang="scss"></style>
<template src="./def.header.html" lang="html" ></template>

<script>
    const header = {
        data: function(){
            return {
                cpName: 'header component'
            };
        },
     
        mounted: ()=>{
            console.info('mouted header component')
        }
    };
    export default header;
</script>
