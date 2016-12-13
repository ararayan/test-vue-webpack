
<style src="./general.scss" lang="scss"></style>
<template src="./general.html" lang="html" ></template>

<script>
    const general = {
        data: function(){
            return {
                title: 'General Page'
            };
        },
        mounted: ()=>{
            console.log('mouted general component')
        }
    };

    export default general;
</script>
