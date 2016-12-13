
<style src="./login.scss" lang="scss"></style>
<template src="./login.html"></template>

<script>
  

    const login = {
        
        data: function(){
            return {
                title: 'login Page'
            };
        },
        mounted: ()=>{
            console.info('mouted login page')
        }
    };

   export default login;
</script>
