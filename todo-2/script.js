var Input = document.getElementById('addTaskText');
var addBtn = document.getElementById('addBtn');
var tasks = document.getElementById('tasks');
addBtn.addEventListener('click',add)
function add(){
  var Task = document.createElement('div');
  var taskText = document.createElement('p');
  var trashBtn = document.createElement('Button');
  var trashIcon = document.createElement('i')
  trashBtn.className = 'trash';
  trashIcon.className="fa-solid fa-trash";
  taskText.innerText = Input.value;
  Task.className='task';
  tasks.appendChild(Task)
  Task.appendChild(taskText)
  Task.appendChild(trashBtn)
  trashBtn.appendChild(trashIcon)
  saveLocalTodo(Input.value)

}
tasks.addEventListener('click', remove)
function remove(e){
  var item = e.path[2];
  console.log(e)
  // var itemparent = item.path[2];
  if(item.className == "task"){
    item.remove()

  }
    
  }
  function saveLocalTodo(todo){
    let todos;
    localStorage.setItem("todos",localStorage.getItem("todos")+"," + todo)

  }


  





