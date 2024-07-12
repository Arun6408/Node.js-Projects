const tasksDOM=document.querySelector('tasks');
const loadingDOM=document.querySelector('loading-text');
const formDOM=document.querySelector('task-form');
const taskInputDOM=document.querySelector('task-input');
const formAlertDOM=document.querySelector('form-alert');

const showTasks=async ()=>{
    loadingDOM.style.visibility='visible';
    try{
        const {data:{tasks}}=await axios.get('/api/v1/tasks')
        if(tasks.length<1){
            tasksDOM.innerHTML='<h5>No Tasks in your schedule try adding more tasks</h5>'
            loadingDOM.style.visibility='hidden';
        }
        const allTasks = tasks
        .map((task) => {
          const { completed, _id: taskID, name } = task
          return `<div class="single-task ${completed && 'task-completed'}">
  <h5><span><i class="far fa-check-circle"></i></span>${name}</h5>
  <div class="task-links">
  
  
  
  <!-- edit link -->
  <a href="task.html?id=${taskID}"  class="edit-link">
  <i class="fas fa-edit"></i>
  </a>
  <!-- delete btn -->
  <button type="button" class="delete-btn" data-id="${taskID}">
  <i class="fas fa-trash"></i>
  </button>
  </div>
  </div>`
        })
        .join('')
      tasksDOM.innerHTML = allTasks
    }
    catch(err){
        console.log(err);
        tasksDOM.innerHTML='<h5>There is an error try again later...</h5>';
        loadingDOM.style.visibility='hidden';
    }
}

showTasks();

const deleteTask=async()=>{
    try{
        const {data:{task}}=await axios.delete()
    }
    catch(err){

        console.log(error);
    }
}