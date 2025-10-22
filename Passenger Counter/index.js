let countElement=document.getElementById("count") 
let c=0
function increment(){
    c=c+1
    countElement.innerText=c
    
    
}
function save(){
    console.log(c)
    c=0
    countElement.innerText=c;
    
}
