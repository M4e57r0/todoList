// function add_task() 
// {
//     let task_input = document.getElementById("task_input").value;

//     if (task_input === "") 
//     {
//         alert("Введите задачу");
//         return;
//     }

//     let task_element = document.createElement("li");

//     task_element.textContent = task_input;

//     let task_list = document.getElementById("task_list");

//     task_list.appendChild(task_element);


//     // Добавление checkbox к каждой задаче
//     let checkbox = document.createElement("input");
//     checkbox.type = "checkbox";
//     task_element.appendChild(checkbox);


//     // Очистка input
//     document.getElementById("task_input").value = "";
// }

// function SelectTask(action) 
// {

//     let selectedTask = document.querySelector("input[type='checkbox']:checked");
//     if (selectedTask === null) 
//     {
//         alert("Выберите задачу");
//         return;
//     }

//     switch(action) 
//     {
//         case 'delete':
//             selectedTask.parentElement.remove();
//             break;
            
//         case 'complete':
//             selectedTask.parentElement.style.textDecoration = 'line-through';
//             break;
//     }
// }

// function deleteTask() { SelectTask('delete'); }

// function completeTask() { SelectTask('complete'); }









function add_task() {
    let task_input = document.getElementById("task_input").value;
    if (task_input === "") {
        alert("Введите задачу");
        return;
    }
    
    let task_element = document.createElement("li");

    // Создаем checkbox и добавляем его перед текстом
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    task_element.appendChild(checkbox);
    
    // Добавляем текст задачи после чекбокса
    let task_text = document.createTextNode(task_input);
    task_element.appendChild(task_text);

    // кнопка редактирования
    
    let editButton = document.createElement("button");
    editButton.textContent = "Редактировать";
    editButton.onclick = function() { editTask(task_element); };
    task_element.appendChild(editButton);
    
    let task_list = document.getElementById("task_list");
    task_list.appendChild(task_element);

    // Очистка input
    document.getElementById("task_input").value = "";


}

// Добавление задачи по enter 

document.getElementById("task_input").addEventListener("keydown", function(event) 
{
    if (event.key === "Enter")  
        {
            add_task();
        }
})


function SelectTask(action) {
    let selectedTask = document.querySelector("input[type='checkbox']:checked");
    if (selectedTask === null) {
        alert("Выберите задачу");
        return;
    }
    switch(action) {
        case 'delete':
            selectedTask.parentElement.remove();
            break;
        case 'complete':
            selectedTask.parentElement.style.textDecoration = 'line-through';
            selectedTask.checked = false;
            break;
        case 'clear':
            let task_list = document.getElementById("task_list");
            task_list.innerHTML = '';
            break;
    }
}
function deleteTask() {    SelectTask('delete');    }
function completeTask() {    SelectTask('complete');    }
function clearList() {    SelectTask('clear');    }



function editTask(task_element)
{
    let newText = prompt("Введите новый текст задачи", task_element.childNodes[1].nodeValue);
    if (newText !== null && newText.trim() !== "") 
    {
        task_element.childNodes[1].nodeValue = newText;
    }
}

