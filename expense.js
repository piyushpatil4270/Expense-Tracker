

const submit = document.getElementById("button1");
const getValue = (value) => {
  return value;
};

let cnt=0


function createExpense(idx,name,expense){
    const exname = document.createTextNode(name.value);
    const space = document.createTextNode("  ");
    const amount = document.createTextNode(expense.value);
   
  
    const ul = document.getElementById("listitems");
  
    const newlist = document.createElement("li");
    const delbtn = document.createElement("button");
    const editbtn = document.createElement("button");
    delbtn.className = "delete";
    editbtn.className = "edit";
    editbtn.appendChild(document.createTextNode("Edit"));
    delbtn.appendChild(document.createTextNode("Delete"));
    delbtn.style.border = "none";
    editbtn.style.border = "none";
    delbtn.style.backgroundColor = "#E70D0D";
    delbtn.style.color = "white";
    delbtn.style.borderRadius = "7px";
    editbtn.style.backgroundColor = "#E7830D";
    editbtn.style.color = "white";
    editbtn.style.borderRadius = "7px";
    newlist.style.color = "black";
    newlist.style.display = "flex";
    newlist.style.justifyContent = "center";
    newlist.style.padding = "10px";
    newlist.style.gap = "20px";
  
    newlist.appendChild(exname);
    newlist.appendChild(space);
    newlist.appendChild(space);
    newlist.appendChild(amount);
  
  
    newlist.appendChild(delbtn);
    newlist.appendChild(editbtn);
  
    ul.appendChild(newlist);
    localStorage.setItem(idx,JSON.stringify({name:name.value,amount:expense.value}))
    console.log(idx)

   
    name.value = "";
    expense.value = "";
    delbtn.addEventListener("click",function(){
        ul.removeChild(delbtn.parentElement)
        localStorage.removeItem(idx)
    })
    editbtn.addEventListener("click",function(){
        const obj=JSON.parse(localStorage.getItem(idx))
        ul.removeChild(editbtn.parentElement)
        name.value=obj.name
        expense.value=obj.amount
        localStorage.removeItem(idx)
    })
    
}
submit.addEventListener("click", function () {
    const name = document.getElementById("name");
    const expense = document.getElementById("expense");
    createExpense(cnt,name,expense)
    cnt++


});


