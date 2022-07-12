
let itemToDrag;
document.addEventListener('dragstart',(e)=>{
    itemToDrag=e.target;
    console.log(itemToDrag);    
})

document.addEventListener('dragover',(e)=>{
    e.preventDefault();
})

document.addEventListener('drop',(e)=>{
    
    if(e.target.nodeName =="UL"){   
        e.preventDefault();
        e.target.appendChild(itemToDrag);
    } 
})