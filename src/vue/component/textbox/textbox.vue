
<style src="./textbox.scss" lang="scss"></style>
<template src="./textbox.html" lang="html" ></template>

<script>
    const textbox = {
        data: function(){
            return {
                placeholder: 'textbox component',
                pristine: ''
            };
        },
        mounted: ()=>{
            console.info('textbox menu component')
        }
    };
    export default textbox;
</script>
