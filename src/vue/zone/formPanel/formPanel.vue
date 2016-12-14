<style src="./formPanel.scss" lang="scss"></style>
<template src="./formPanel.html" lang="html" ></template>

<script>
    const formPanel = {
        data: function(){
            return {
                cpName: 'formPanel component'
            };
        },
     
        mounted: ()=>{
            console.info('mouted formPanel component')
        }
    };
    export default formPanel;
</script>