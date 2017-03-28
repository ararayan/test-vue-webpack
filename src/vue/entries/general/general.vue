
<style src="./general.scss" lang="scss"></style>
<template src="./general.html" lang="html" ></template>

<script>
const form = {
        info:{
            type: 0,
            isSub: false,
            title: 'a',
            isShowHeader: true,
            actions: [{
                text: 'fold',
                activated: true
            }],
            cols: 3,
        },
        childs: [
            {
                isMixed: false,
                isFormItem: true,
                isSection: false,
                info: {
                    offset: 0,
                    fill: 1,
                    height: 1
                }  
            },
            {
                isMixed: false,
                isFormItem: true,
                isSection: false,
                info: {
                    offset: 0,
                    fill: 1,
                    height: 1
                } 
            },
            {
                isMixed: false,
                isFormItem: true,
                isSection: false,
                info: {
                    offset: 0,
                    fill: 1,
                    height: 1
                } 
            },
            {
                isMixed: false,
                isFormItem: true,
                isSection: false,
                info: {
                    offset: 0,
                    fill: 1,
                    height: 1
                } 
            },
            {
                isMixed: false,
                isFormItem: true,
                isSection: false,
                info: {
                    offset: 0,
                    fill: 2,
                    height: 1
                } 
            },
            {
                isMixed: true,
                isFormItem: false,
                isSection: false,
                info: {
                    offset: 0,
                    fill: 3,
                    cols: 3,
                },
                childs:  [
                    {
                        isMixed: false,
                        isFormItem: true,
                        isSection: false,
                        info: {
                            offset: 0,
                            fill: 1,
                            height: 3
                        }
                    },
                    {
                        isMixed: true,
                        isFormItem: false,
                        isSection: false,
                        info: {
                            offset: 0,
                            fill: 2,
                            cols: 2,
                        },
                        childs: [
                            
                            {
                                isMixed: false,
                                isFormItem: true,
                                isSection: false,
                                info: {
                                    offset: 0,
                                    fill: 2,
                                    height: 1
                                }
                                
                            }, {
                                isMixed: false,
                                isFormItem: true,
                                isSection: false,
                                info: {
                                    offset: 0,
                                    fill: 1,
                                    height: 1
                                }
                            },
                            {
                                isMixed: false,
                                isFormItem: true,
                                isSection: false,
                                info: {
                                    offset: 0,
                                    fill: 1,
                                    height: 1
                                }
                            }
                        ]
                    }
                ]
            },
            {
                
                isMixed: false,
                isFormItem: false,
                isSection: true,
                info: {
                    type: 0,
                    title: 'a',
                    isShowHeader: true,
                    actions: [{
                        text: 'fold',
                        activated: true
                    }],
                    offset: 0,
                    fill: 3,
                    cols: 3
                },
                childs: [
                    {
                        isMixed: false,
                        isFormItem: true,
                        isSection: false,
                        info: {
                            offset: 0,
                            fill: 1,
                            height: 1
                        }
                    },
                    {
                        isMixed: false,
                        isFormItem: true,
                        isSection: false,
                        info: {
                            offset: 0,
                            fill: 1,
                            height: 1
                        }
                    },
                    {
                        isMixed: false,
                        isFormItem: true,
                        isSection: false,
                        info: {
                            offset: 0,
                            fill: 1,
                            height: 1
                        }
                    }
                ]
            }
        ]
};
const general = {
    data: function(){
        debugger;
        return {
            title: 'General Page',
            form: form
        };
    },
    mounted: ()=>{
        console.log('mouted general component')
    }
};

export default general;
</script>
