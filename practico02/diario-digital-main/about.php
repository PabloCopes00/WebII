<?php 
require_once 'db_fake.php';

function showAbout($dev = null) {
  $developers = getDevelopers();
  $selectedDev = getDeveloperById($dev);
  
  include 'templates/header.php'; ?>

  <main class="container mt-5">
    <div class="row">
      <div class="col">
        <div class="list-group">
          <?php foreach ($developers as $key => $developer) { ?>
            <a class="list-group-item list-group-item-action" href="about/<?php echo $developer->id?>">
              <?php echo $developer->name?>
            </a>
          <?php }?>
        </div>
      </div>

      <div class="col">
        <?php if (isset($selectedDev)) { ?>
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="images/avatar.png">
            <div class="card-body">
              <h4 class="card-title"><?php echo $selectedDev->name ?></h5>
              <h5 class="card-subtitle"><?php echo $selectedDev->role ?></h5>
              <p><?php echo $selectedDev->email ?></p>
            </div>
          </div>
        <?php } ?>
  </div>
        
      </div>
    </div>
  </main>

  <?php require 'templates/footer.html'; 
}