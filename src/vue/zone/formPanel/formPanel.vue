<style src="./formPanel.scss" lang="scss"></style>
<template src="./formPanel.html" lang="html" ></template>

<script>
    const formPanel = {
        data: function(){
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
        // lifecycle hooks
        beforeCreate(){
         
        }, 
        created(){
          
        },
        beforeMount(){

        },
        mounted(){
            
            console.info('mouted formPanel component')
        },
        beforeDestroy(){
          
        },
        destroyed(){
          
        },
        // component update hooks
        beforeUpdate(){
          
        },
        updated(){
           
        },
        activated(){
       
        },
        deactivated(){
        
        }
    };
   
    export default formPanel;
</script>