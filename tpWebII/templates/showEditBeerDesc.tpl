{include file="header.tpl"}
<table class="table">
<thead class="table-dark">
 <tr>
   <th>Id_Fk</th>
   <th>Nombre</th>
   <th>Abv</th>
   <th>Ibu</th>
   <th>Description</th>
   <th></th>
   <th></th>
 </tr>
</thead>
<tbody>
{foreach from=$beerDesc item=$beer}
   <tr>
   <td>{$beer->id_name_fk}</td>
   <td>{$beer->beer_name}</td>
   <td>{$beer->abv}</td>
   <td>{$beer->ibu}</td>
   <td>${$beer->description}</td>
   </tr>
{/foreach}
</tbody>
</table>
<h1>Edit Form</h1>
<form action="editBeerDesc/{$beer->id_name_fk}" method="POST" class="my-4">
{foreach from=$beerDesc item=$beer }
<div class="mb-3">
  <label for="beer_name" class="form-label">Nombre</label>
  <input type="text" class="form-control"  name="beer_name" value="{$beer->beer_name}">
</div>
<div class="mb-3">
  <label for="abv" class="form-label">Abv</label>
  <input type="text" class="form-control"  name="abv" value="{$beer->abv}">
</div>
<div class="mb-3">
  <label for="ibu" class="form-label">Ibu</label>
  <input type="text" class="form-control"  name="ibu" value="{$beer->ibu}">
</div>
<div class="mb-3">
  <textarea name="description" id="" cols="80" rows="10">{$beer->description}</textarea>
</div>
{/foreach}
  <button type="submit" class="btn btn-primary mt-2">Editar</button> 
</form>
{include file="footer.tpl"}