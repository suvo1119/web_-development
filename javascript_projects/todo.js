document.addEventListener('DOMContentLoaded', () => {
  const input_text = document.getElementById("input-text");
const button = document.getElementById("button");
const todo_container = document.getElementById("todo-cont");

let container = JSON.parse(localStorage.getItem('container'))|| [];
container.forEach((task) => rendertask(task));
button.addEventListener("click", () => {
  const inputtext = input_text.value;
  if (inputtext === "") 
    return;
  
  const newtask = {
    id: Date.now(),
    text: inputtext,
    completed: false,
  };
  container.push(newtask);
  savetask();
  rendertask(newtask);
  input_text.value = "";
  console.log(container);
});

function rendertask(task){
  const li =document.createElement("li");
  li.setAttribute("data-id",task.id);
  li.innerHTML=`
  <span>${task.text}</span>
  <button class="delete-button">delete</button>
  
  `;

  li.addEventListener('click',(e)=>{
    if(e.target.tagName ==='BUTTON')return;
    task.completed =! task.completed
    li.classList.toggle
    ('completed')
    savetask();
  })
  li.querySelector('button').addEventListener('click',(e)=>{
    e.stopPropagation()
    container=container.filter(t=>t.id !==task.id)
    li.remove();
    savetask();
  })
  todo_container.appendChild(li);
};


function savetask(){
  localStorage.setItem("container",JSON.stringify(container));
};

});
