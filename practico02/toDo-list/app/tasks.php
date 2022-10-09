<?php
require_once './app/db.php';

function showTasks() {
    include './templates/header.php';

    $tasks = getAllTasks();

    include './templates/form_alta.php';
    
    echo '<ul class="list-group">';
    foreach ($tasks as $task) {
       echo "<li class='list-group-item d-flex justify-content-between align-items-center'>
                <span> <b>$task->titulo</b> - $task->descripcion (prioridad $task->prioridad) </span>
                <a href='delete/$task->id' type='button' class='btn btn-danger ml-auto'>Borrar</a>
            </li>";
    }
    echo "</ul>";

    include './templates/footer.php';
}

function addTask() {
    // TODO: validar entrada de datos

    $title = $_POST['title'];
    $description = $_POST['description'];
    $priority = $_POST['priority'];

    $id = insertTask($title, $description, $priority);
    header("Location: " . "http://192.168.64.2/WEBII/practico02/toDo-list/"); 
}

function deleteTask($id) {
    deleteTaskById($id);
    header("Location: " . "http://192.168.64.2/WEBII/practico02/toDo-list/"); 
}