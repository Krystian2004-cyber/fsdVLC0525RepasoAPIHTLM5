let todosCounter = document.getElementById('todosCounter');
let todo=document.getElementById('todo');
let value=0;

function removetodo(id)
{
    console.log(id);
    document.getElementById(id).remove();
    value--;
    todosCounter.innerText = "todos count: " + value;
}

function addTodo()
{
    let data = document.getElementById('todo').value;
    let div = document.createElement("div");
    const id= Date.now();
    div.setAttribute("id", id);
    div.addEventListener("click",() => removetodo(id));
    
    div.innerText = data;
    let list = document.getElementById('todos');
    list.appendChild(div);

    todo.value="";
    value++;
    todosCounter.innerText = "todos count: " + value;W
}



todo.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("btn").click();
    }
  });


