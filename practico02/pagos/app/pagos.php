<?php
require_once 'db.php';

function showPayment() {
    include './templates/header.php';

    $payment = getAllPayment();

    // include './templates/form_alta.php';
    
    echo '<table>';
    foreach ($payment as $pay) {
       echo "<tr class='list-group-item d-flex justify-content-between align-items-center'>
                <span> <td>$pay->id</td> <td>$pay->deudor </td> <td> $pay->cuota </td> <td> $pay->cuota_capital </td> <td>$pay->fecha_pago</td> </span>
                <td><a href='delete/$pay->id' type='button' class='btn btn-danger ml-auto'>Borrar</a></td>
                </tr>";
    }
    echo '</table>';

    include './templates/footer.php';
}

function addTask() {
    // TODO: validar entrada de datos

    $title = $_POST['title'];
    $description = $_POST['description'];
    $priority = $_POST['priority'];

    $id = insertTask($title, $description, $priority);

    header("Location: " . BASE_URL); 
}

function deleteTask($id) {
    deleteTaskById($id);
    header("Location: " . BASE_URL); 
}
