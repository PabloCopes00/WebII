{include file="header.tpl"}
<table class="table">
<thead class="table-dark">
 <tr>
   <th></th>
   <th>Cerveza</th>
   <th>Tipo</th>
   <th>Contenedor</th>
   <th>Stock</th>
   <th>Precio</th>
   <th></th>
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
   <td><a href="detail/{$beer->id_name_fk}" class="text-decoration-none">{$beer->beer_name}</a></td>
   <td>{$beer->type}</td>
   <td>{$beer->container}</td>
   <td>{$beer->stock}</td>
   <td>${$beer->price}</td>
   {if isset($smarty.session.USER_ID)}
   <td><a href='showEdit/{$beer->id}' type='button' class='btn btn-success ml-auto'>Editar</a></td>
   <td><a href='deleteBear/{$beer->id}' type='button' class='btn btn-danger ml-auto'>Borrar</a></td>
   {/if}
   </tr>
{/foreach}
</tbody>
</table>
{if isset($smarty.session.USER_ID)}
{include file="formBeer.tpl"}
{/if}
{include file="footer.tpl"}
  