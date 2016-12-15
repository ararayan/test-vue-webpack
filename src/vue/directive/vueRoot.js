

const vueRoot = {
    bind(elm, binding, vnode, oldVnode){
        debugger;
       
       
    },
    inserted(elm, binding, vnode, oldVnode){
         debugger;
        document.body.append(elm);
    },
    update(newValue, oldValue){
        
    },
    componentUpdated(){
        debugger;
    },
    unbind(el, a, b, c){
        debugger;
    }
}

export default vueRoot;