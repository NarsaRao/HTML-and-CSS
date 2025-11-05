import { fakeStock } from "./fakestock.js";
setInterval(function(){
  const data=fakeStock();
  renderItems(data);
},1500);
let prev=null

function renderItems(stock){
    // storing the dom
    const displayName=document.getElementById("name");
    const displaySym=document.getElementById("sym");
    const displayPrice=document.getElementById("price");
    const displayIcon=document.getElementById("pic");
    const displayTime=document.getElementById("time");
    

  // destructuring the object

    const {name,sym,price,time}=stock;
    const currentPriceicon=price>prev?'green.png':price<prev?'red.png':'grey.png';
    const ico=document.createElement('img');
    ico.src=`images/${currentPriceicon}`
displayIcon.innerHTML='';
    displayIcon.appendChild(ico);
     

//assigning the values to the DOM objects
    displayName.innerText=name;
    displaySym.innerText=sym;
    displayPrice.innerText=price;
    displayTime.innerText=time;
    prev=price;



}