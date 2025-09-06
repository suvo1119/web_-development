document.addEventListener('DOMContentLoaded',()=>{
const expenseform=document.getElementById('expense-form');
const expensenameinput=document.getElementById('expense-name');
const expenseamountinput=document.getElementById('expense-amount');
const expenselist=document.getElementById('expense-list');
const totalamountdisplay=document.getElementById('total-amount');

let expenses= JSON.parse (localStorage.getItem("expenses")) ||[]
let totalamount=calculatetotal();
renderExpenses();

expenseform.addEventListener('submit',(e)=>{
    e.preventDefault()
    const name=expensenameinput.value.trim();
   const amount =parseFloat(expenseamountinput.value) ;
   if(name!=="" && !isNaN(amount) && amount>0){
    const Newexpense={
        id:Date.now(),
        name,
        amount,

    }
    expenses.push(Newexpense)
    saveexpensesToLocal();
    renderExpenses();
    updatetotal();
    expenseamountinput.value="";
    expensenameinput.value="";
   }
});

function renderExpenses(){
    expenselist.innerHTML="";
    expenses.forEach(expense=>{
        const li= document.createElement('li');
        li.innerHTML=`${expense.name} - $${expense.amount}
        <button data-id="${expense.id}">delete</button>`;
        expenselist.appendChild(li)
    });
}


function calculatetotal(){
    return expenses.reduce((sum,expense)=> sum+expense.amount,0);

};
function  saveexpensesToLocal(){
    localStorage.setItem('expenses',JSON.stringify(expenses));
}

function updatetotal(){
    totalamount=calculatetotal();
    totalamountdisplay.textContent =totalamount;

}






})