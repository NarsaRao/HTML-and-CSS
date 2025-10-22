let countElement=document.getElementById("count") 
let c=0
let saveElement=document.getElementById("save-el")
function increment(){
    c=c+1
    countElement.innerText=c
    
    
}
function save(){
    let countstr= c + " - "
    saveElement.textContent=saveElement.textContent+countstr
    c=0
    countElement.textContent=c
    
    
}
