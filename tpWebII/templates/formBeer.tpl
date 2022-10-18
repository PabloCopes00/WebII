<h1>Add Form</h1>
<form  action="addBeer" method="POST" class="my-4" enctype="multipart/form-data">
<div class="mb-3">
<label class="form-label">Seleccione una opcion:</label>
<select name="beerOption" class="form-control">
{foreach from=$beerDesc item=$beer }
  <option value="{$beer->id_name_fk}">{$beer->beer_name}</option> 
{/foreach}
</select> 
</div>
<div class="mb-3">
  <label for="type" class="form-label">Tipo</label>
  <input type="text" class="form-control"  name="type">
</div>
<div class="mb-3">
  <label for="container" class="form-label">Contenedor</label>
  <input type="text" class="form-control"  name="container">
</div>
<div class="mb-3">
  <label for="stock" class="form-label">Stock</label>
  <input type="text" class="form-control"  name="stock">
</div>
<div class="mb-3">
  <label for="price" class="form-label">Precio</label>
  <input type="text" class="form-control"  name="price">  
  </div>
  {* <div class="mb-3">
    <input type="file" class="form-control" name="input_name" id="imageToUpload">
  </div> *}
  <button type="submit" class="btn btn-primary mt-2">Guardar</button> 
</form>




