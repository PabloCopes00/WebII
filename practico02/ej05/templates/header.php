<!DOCTYPE html>
<html lang="en">
  <head>
    <base href="<?php echo BASE_URL ?>">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <link rel="stylesheet" href="ej05.css">
    <title>TUDAI - Diario Digital</title>
  </head>
  <body>
    <header>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="tabla">Tabla de Multiplicar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="tabla/5">Mostrar Tabla de 5</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="tabla/10">Mostrar Tabla de 10</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="tabla/20">Mostrar Tabla de 20</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <form method="POST" action="form">
        <label>Tamaño: <input type="text" name="tamanio" /></label>
        <input type="submit" /><br>
      </form>
    </header>