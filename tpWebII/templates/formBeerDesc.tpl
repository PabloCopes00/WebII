<form action="addBeerDesc" method="POST" class="my-4" enctype="multipart/form-data">
<div class="mb-3">
  <label for="beer_name" class="form-label">Nombre</label>
  <input type="text" class="form-control" name="beer_name">
</div>
<div class="mb-3">
  <label for="abv" class="form-label">Abv</label>
  <input type="text" class="form-control"  name="abv">
</div>
<div class="mb-3">
  <label for="ibu" class="form-label">Ibu</label>
  <input type="text" class="form-control" name="ibu">
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Descripción</label>
  <textarea name="description" class="form-control" id="exampleFormControlInput1" cols="30" rows="10"></textarea>
  </div>
  <div class="mb-3">
  <label for="img" class="form-label">Imagen</label>
  <input type="file" class="form-control" name="input_name" id="imageToUpload">
</div>
  <button type="submit" class="btn btn-primary mt-2">Guardar</button>
  </form>


  