let myLeads=[]
const inputEl=document.getElementById("input-el");
const inputBtn=document.getElementById("input-btn");
const ulEl=document.getElementById("ul-el");
inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value);
    renderLeads();
    inputEl.value="";
})
function renderLeads(){
        let listItems=`<li>
        <a href='${inputEl.value}'>${inputEl.value}</a>
        </li>`;
        ulEl.innerHTML+=listItems;

}


