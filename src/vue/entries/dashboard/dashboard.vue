
<style src="./dashboard.scss" lang="scss"></style>
<template src="./dashboard.html" lang="html" ></template>

<script>
    const dashboard = {
        data: function(){
            return {
                title: 'dashboard Page'
            };
        },
        mounted: ()=>{
            console.log('mouted dashboard component')
        }
    };

    export default dashboard;
</script>
