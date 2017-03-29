
<style src="./general.scss" lang="scss"></style>
<template src="./general.html" lang="html" ></template>

<script>
const form = {
        info:{
            type: 0,
            isSubForm: false,
            isShowHeader: true,
            isShowActionBar: false,
            header:{
                title: 'A Form',
                isShowBadge: false, 
                isShowbuttons: false,
                buttons: []
            },
            actionBar: [{
                text: 'search',
                activated: true
            },
            {
                text: 'reset',
                activated: true
            }]
        },
        cols: 3,
        childs: [
            {
                isMixedRow: false,
                isFormItem: true,
                isSubForm: false,
                offset: 0,
                fill: 1,
                formItem:{
                    height: 1
                }
            },
            {
                isMixedRow: false,
                isFormItem: true,
                isSubForm: false,
                offset: 0,
                fill: 1,
                formItem:{
                    height: 1
                }
            },
            {
                isMixedRow: false,
                isFormItem: true,
                isSubForm: false,
                offset: 0,
                fill: 1,
                formItem:{
                    height: 1
                }
            },
            {
                isMixedRow: false,
                isFormItem: true,
                isSubForm: false,
                offset: 0,
                fill: 1,
                formItem:{
                    height: 1
                }
            },
            {
                isMixedRow: false,
                isFormItem: true,
                isSubForm: false,
                offset: 0,
                fill: 2,
                formItem:{
                    height: 1
                }
            },
            {
                isMixedRow: true,
                isFormItem: false,
                isSubForm: false,
                offset: 0,
                fill: 3,
                mixedRow:{
                    cols: 3,
                    childs:  [
                        {
                            isMixedRow: false,
                            isFormItem: true,
                            isSubForm: false,
                            offset: 0,
                            fill: 1,
                            formItem:{
                                height: 3
                            }
                        },
                        {
                            isMixedRow: true,
                            isFormItem: false,
                            isSubForm: false,
                            offset: 0,
                            fill: 2,
                            mixedRow: {
                                cols: 2,
                                childs: [
                                    {
                                        isMixedRow: false,
                                        isFormItem: true,
                                        isSubForm: false,
                                        offset: 0,
                                        fill: 2,
                                        formItem:{
                                            height: 1
                                        }
                                        
                                    }, {
                                        isMixedRow: false,
                                        isFormItem: true,
                                        isSubForm: false,
                                        offset: 0,
                                        fill: 1,
                                        formItem:{
                                            height: 1
                                        }
                                    },
                                    {
                                        isMixedRow: false,
                                        isFormItem: true,
                                        isSubForm: false,
                                        offset: 0,
                                        fill: 1,
                                        formItem:{
                                            height: 1
                                        }
                                    }
                                ]
                            } 
                        }
                    ]
                } 
            },
            {
                isMixedRow: false,
                isFormItem: false,
                isSubForm: true, 
                offset: 0,
                fill: 3,
                form: {
                    info:{
                        type: 0,
                        isSubForm: true,
                        isShowHeader: true,
                        isShowActionBar: false,
                        header:{
                            title: 'B Form',
                            isShowBadge: false, 
                            isShowbuttons: false,
                            buttons: []
                        },
                        actionBar: [{
                            text: 'search',
                            activated: true
                        },
                        {
                            text: 'reset',
                            activated: true
                        }]
                    },
                    cols: 3,
                    childs: [
                        {
                            isMixedRow: false,
                            isFormItem: true,
                            isSubForm: false,
                            offset: 0,
                            fill: 1,
                            formItem:{
                                height: 1
                            }
                        },
                        {
                            isMixedRow: false,
                            isFormItem: true,
                            isSubForm: false,
                            offset: 0,
                            fill: 1,
                            formItem:{
                                height: 1
                            }
                        },
                        {
                            isMixedRow: false,
                            isFormItem: true,
                            isSubForm: false,
                            offset: 0,
                            fill: 1,
                            formItem:{
                                height: 1
                            }
                        }
                    ]
                }
                
                
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
