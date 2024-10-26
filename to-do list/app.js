// storing the document id in respective variables
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");


// defining a function to carry out the program task
addTaskBtn.addEventListener("click", function() {
    const taskText = taskInput.value.trim();

    if(taskText != ''){
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(taskItem);
        });

        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);

        taskInput.value = '';
    }
});


taskInput.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        addTaskBtn.click();
    }
});