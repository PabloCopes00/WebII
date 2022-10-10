{include file="header.tpl"}
<table class="table">
<thead class="table-dark">
 <tr>
   <th>Id</th>
   <th>Id_Fk</th>
   <th>Tipo</th>
   <th>Contenedor</th>
   <th>Stock</th>
   <th>Precio</th>
   <th></th>
   <th></th>
 </tr>
</thead>
<tbody>
{foreach from=$beers item=$beer}
   <tr>
   <td>{$beer->id}</td>
   <td>{$beer->fk_id_name}</td>
   <td>{$beer->type}</td>
   <td>{$beer->container}</td>
   <td>{$beer->stock}</td>
   <td>${$beer->price}</td>
   </tr>
{/foreach}
</tbody>
</table>
<h1>Edit Form</h1>
<form action="editBeer/{$beer->id}" method="POST" class="my-4">
<div class="mb-3">
<label class="form-label">Seleccione una opcion:</label>
<select name="beerOption" class="form-control">
{foreach from=$beerDesc item=$beer }
  <option value="{$beer->id_name_fk}">{$beer->beer_name}</option> 
{/foreach}
</select> 
</div>
{foreach from=$beers item=$beer }
<div class="mb-3">
  <label for="type" class="form-label">Tipo</label>
  <input type="text" class="form-control"  name="type" value="{$beer->type}">
</div>
<div class="mb-3">
  <label for="container" class="form-label">Contenedor</label>
  <input type="text" class="form-control"  name="container" value="{$beer->container}">
</div>
<div class="mb-3">
  <label for="stock" class="form-label">Stock</label>
  <input type="text" class="form-control"  name="stock" value="{$beer->stock}">
</div>
<div class="mb-3">
  <label for="price" class="form-label">Precio</label>
  <input type="text" class="form-control"  name="price" value="{$beer->price}">  
{/foreach}
  <button type="submit" class="btn btn-primary mt-2">Editar</button> 
</form>
{include file="footer.tpl"}