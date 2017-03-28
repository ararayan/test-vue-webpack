<style src="./formPanel.flex.scss" lang="scss"></style>
<template src="./formPanel.flex.html" lang="html" ></template>

<script>
import Vue from 'vue';
import fpItem from '../../component/fpItem/fpItem.vue';


const formPanel = {
    props:{
        model: Object
    },
    data: function(){
        debugger;
        return {
            cpName: 'formPanel component',
            isModalShow: false,
            isContractNoShow: true,
            isContractNameShow: true,
            isContractorShow: true,
            isDepartmentShow: false
        };
    },
    methods: {
        popup(e) {
            this.isModalShow = true;
        },
        close(e){
            this.isModalShow = false;
        }
    },
    components:{'fp-item': fpItem}
    
   
};


       
    export default formPanel;
</script>