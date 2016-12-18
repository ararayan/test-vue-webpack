
<style src="./textbox.scss" lang="scss"></style>
<template src="./textbox.html" lang="html" ></template>

<script>
    const textbox = {
        props: {
            label: String,
            placeholder: String,
            pristine: String,
            btns: Array,
            isShowBtn: Boolean,
            isShowMore: Boolean
        },
        data: function(){
            return {
                // label: this.label,
                // placeholder: this.placeholder,
                // pristine: '',
                // isShowBtn: this.isShowBtn
            };
        },
        mounted: ()=>{
            console.info('textbox menu component')
        }
    };
    export default textbox;
</script>
