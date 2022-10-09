<?php
require_once 'db_fake.php'; 

/**
 * Muestra el home de la aplicacion
 */
function showHome() {
    require 'templates/header.php'; ?> 

    <main class="container mt-5">

      <?php
      // incluyo el archivo que tiene las noticias
      $noticias = getNoticias();
      ?>

      <section class="noticias">
        <?php foreach ($noticias as $key => $noticia) { ?>
          <div class="card">
              <img src="<?php echo $noticia->img ?>" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title"><?php echo $noticia->title?></h5>
                <p class="card-text"><?php echo $noticia->text ?></p>
                <a href="noticia/<?php echo $key ?>" class="btn btn-outline-primary">Leer más</a>
              </div>
            </div>
          <?php }?>
      </section>
        
    </main>

    <?php require 'templates/footer.html';
}


/**
 * Muestra una noticia determinada por un id
 */
function showNoticia($id) {
    $noticias = getNoticias();
    $noticia = $noticias[$id];
    ?>
    
    <?php include 'templates/header.php'; ?>
    
    <main class="container mt-5">
      <section class="noticia">
        <h1><?php echo $noticia->title ?></h1>
        <img src="<?php echo $noticia->img ?>"/>
        <p><?php echo $noticia->text ?></p>
      </section>
    </main>
    
    <?php require 'templates/footer.html';
}