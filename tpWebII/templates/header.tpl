<!DOCTYPE html>
<html lang="en">
  <head>
    <base href="{BASE_URL}">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <link href="app/views/css/style.css" rel="stylesheet">
    <title>RUDA</title>
  </head>
  <body>
    <header>
    <img src="images/rudanav.jpeg" class="imgNav">   
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbarStyle">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarColor01">
      <img src="images/logo22.png" class="imgNavLogo">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="showBeers">Ventas</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="beerDesc">Cervezas</a>
          </li>
          <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
               <ul class="navbar-nav">
                 <li class="nav-item dropdown">
                   <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                     Categoria
                   </a>
                   <ul class="dropdown-menu dropdown-menu-dark">
                   {foreach from=$beerDesc item=$desc}
                    <li><a class="dropdown-item" href="filter/{$desc->id_name_fk}">{$desc->beer_name}</a></li>
                   {/foreach}
                   </ul>
                 </li>
               </ul>
             </div>
           </div>
        </ul>
          {if !isset($smarty.session.USER_ID)}
          <a href="login"><button class="btn btn-outline-light btnlogin" type="button">Login</button></a>
          {else} 
          <a href="logout"><button class="btn btn-outline-light btnlogin" type="button">Logout</button></a>
          <span><p class="user-select-none userSession">User: {$smarty.session.USER_EMAIL}</p></span>
         {/if}  
      </div>
    </div>
  </nav>
    </header>
    <!-- inicio main container -->
    <main class="container">
