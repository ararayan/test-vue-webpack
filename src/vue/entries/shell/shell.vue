
<style src="./shell.scss" lang="scss"></style>
<template src="./shell.html"></template>

<script>
  

    const shell = {
        
        data: function(){
            return {
                title: 'shell Page'
            };
        },
        mounted: ()=>{
            console.info('mouted shell page')
        }
    };

   export default shell;
</script>

