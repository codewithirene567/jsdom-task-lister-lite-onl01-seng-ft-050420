//a for loop that takes each task after they press submit
//probably through an event listener and makes each show up as a string in a list
function createTask(event){
const li = document.createElement('li');
const inputBox = document.getElementById('new-task-description');
const list = document.getElementById('tasks');
li.innerHTML = inputBox.value;
list.appendChild(li);
event.target.reset()
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form')
  
  form.addEventListener("submit", function(event){
    event.preventDefault();
    createTask(event);
}, false);
});


//somewhere in here we need a prevent default to prevent the user from getting
//form submitted
//the task you typed in shoud appear in the dom after clicking the submit button