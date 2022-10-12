{include file="header.tpl"}
<table class="table">
<thead class="table-dark">
 <tr>
   <th></th>
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
   <td>
      {if isset($beer->img)}
        <img src="{$beer->img}" style="width:3rem;"/>
       {/if}
   </td>
   <td>{$beer->id}</td>
   <td>{$beer->fk_id_name}</td>
   <td>{$beer->type}</td>
   <td>{$beer->container}</td>
   <td>{$beer->stock}</td>
   <td>${$beer->price}</td>
   <td><a href='deleteBear/{$beer->id}' type='button' class='btn btn-danger ml-auto'>Borrar</a></td>
   <td><a href='showEdit/{$beer->id}' type='button' class='btn btn-danger ml-auto'>Editar</a></td>
   </tr>
{/foreach}
</tbody>
</table>
<h1>Add Form</h1>
{include file="formBeer.tpl"}
{include file="footer.tpl"}
  