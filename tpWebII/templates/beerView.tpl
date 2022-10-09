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
   <td><a href='deleteBear/{$beer->id}' type='button' class='btn btn-danger ml-auto'>Borrar</a></td>
   </tr>
{/foreach}
</tbody>
</table>
<form action="addBeer" method="POST" class="my-4">
<div class="mb-3">
<label class="form-label">Seleccione una opcion:</label>
<select name="beerOption" class="form-control">
{foreach from=$beerDesc item=$beer }
  <option value="{$beer->id_name_fk}">{$beer->beer_name}</option> 
{/foreach}
</select> 
</div>
{include file="formBeer.tpl"}
{include file="footer.tpl"}
  