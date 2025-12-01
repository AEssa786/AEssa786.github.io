document.addEventListener("DOMContentLoaded", function() {
    var tasks = ["Let's", "See", "If", "This", "Works"];

    const container = document.getElementById("list");

    function populateTasks() {
        container.innerHTML = "";
        for (const i of tasks){
            const item = document.createElement("a");
            item.textContent = i;
            item.className = "list-group-item list-group-item-action";

            item.addEventListener("click", function() {
                const allItems = container.querySelectorAll(".list-group-item");
                allItems.forEach(el => el.classList.remove("active"));
                item.classList.add("active");
            });

            container.appendChild(item);
        }
    }

    populateTasks();

    function addTask() {
        const taskInput = document.getElementById("task-input");
        const task = taskInput.value.trim();
        if (task !== "") {
            tasks.push(task);
            populateTasks();
            taskInput.value = "";
        }
        else{
            alert("Please enter a task.");
        }
    }

    const addTaskBtn = document.getElementById("add-task-btn");
    addTaskBtn.addEventListener("click", addTask);
    document.getElementById("task-input").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            console.log("Enter key pressed");
            addTask();
        }
    });

    function deleteTask() {
        const activeItem = container.getElementsByClassName("list-group-item list-group-item-action active");
        console.log("Active item:", activeItem);
        if (activeItem) {
            const taskToDelete = tasks.indexOf(activeItem.item(0).textContent);
            if (taskToDelete > -1) {
                console.log("Task deleted:", activeItem.item(0));
                tasks.splice(taskToDelete, 1);
                populateTasks();
                for (const tas of tasks){
                    console.log("Remaining task:", tas);
                }
            }
        }
    }
    const deleteTaskBtn = document.getElementById("delete-task-btn");
    deleteTaskBtn.addEventListener("click", deleteTask);

    function completeTask() {
        const activeItem = container.getElementsByClassName("list-group-item list-group-item-action active");
        if (activeItem) {
            activeItem.item(0).classList.toggle("done");
            const allItems = container.querySelectorAll(".list-group-item");
            allItems.forEach(el => el.classList.remove("active"));
        }
    }
    const completeTaskBtn = document.getElementById("complete-task-btn");
    completeTaskBtn.addEventListener("click", completeTask);

});