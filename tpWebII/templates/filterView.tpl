{include file="header.tpl"}
<table class="table">
<thead class="table-dark">
  <h1 class="font-monospace fw-bold display-2 text-center powerTitle">{$name->beer_name}</h1>
  <tr>
   <th></th>
   <th>Tipo</th>
   <th>Contenedor</th>
   <th>Precio</th>
 </tr>
</thead>
<tbody>
{foreach from=$filters item=$filter}
   <tr>
   <td>
   {if isset($filter->img)}
    <img src="{$filter->img}" alt="{$filter->beer_name}" class="imgTable"/>
   {/if}
   </td>
   <td>{$filter->type}</td>
   <td>{$filter->container}</td>
   <td>${$filter->price}</td>
   </tr>
{/foreach}
</tbody>
</table>
{include file="footer.tpl"}