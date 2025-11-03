let myLeads=[]
const inputEl=document.getElementById("input-el");
const inputBtn=document.getElementById("input-btn");
const ulEl=document.getElementById("ul-el");
const delBtn=document.getElementById("del-btn");

let leadsFromLocalStorage=JSON.parse(localStorage.getItem("Lead Tracking"));
if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage;
    renderLeads()
}
delBtn.addEventListener("dblclick",function(){
    localStorage.clear();
    myLeads=[];
    renderLeads();

})


inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value);
    inputEl.value="";
    localStorage.setItem("Lead Tracking",JSON.stringify(myLeads));
    renderLeads();

})
function renderLeads(){
        let listItems = "";
        for (let i = 0; i < myLeads.length; i++) {
            listItems += `
                <li>
                    <a href="${myLeads[i]}" target="_blank">
                        ${myLeads[i]}
                    </a>
                </li>
            `;
        }
        ulEl.innerHTML = listItems;

}


