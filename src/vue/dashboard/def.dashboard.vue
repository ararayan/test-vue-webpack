
<style src="./def.dashboard.scss" lang="scss"></style>
<template src="./def.dashboard.html" lang="html" ></template>

<script>
    const dashboard = {
        data: function(){
            return {
                title: 'Home Page'
            };
        },
        mounted: ()=>{
            console.log('mouted dashboard component')
        }
    };

    export default dashboard;
</script>
