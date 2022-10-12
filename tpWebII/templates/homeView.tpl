{include file="header.tpl"}
<h1 class="font-monospace fw-bold display-2 text-center" style="margin: 3rem; text-shadow: 1px 1px 2px rgb(59, 59, 59), 0 0 1em rgb(95, 95, 95), 0 0 0.2em rgb(125, 125, 125);">Hacemos cerveza, con la mejor actitud y los mejores ingredientes</h1>
<div style="display:flex; justify-content:space-around flex-wrap: wrap;">
<div><img src="images/home1.jpg" style="width:100%; padding: 10px; border-radius: 20px;"></div>
<div><img src="images/home2.jpg" style="width:100%; padding: 10px; border-radius: 20px;"></div>
<div><img src="images/home3.jpg" style="width:100%; padding: 10px; border-radius: 20px;"></div>
<div><img src="images/home4.jpg" style="width:100%; padding: 10px; border-radius: 20px;"></div>
</div>

<table class="table">
<thead class="table-dark">
 <tr>
   <th></th>
   <th>Nombre</th>
   <th>Tipo</th>
   <th>Contenedor</th>
   <th>Precio</th>
 </tr>
</thead>
<tbody>
{foreach from=$beers item=$beer}
   <tr>
   <td>
   {if isset($beer->img)}
    <img src="{$beer->img}" alt="{$beer->beer_name}" style="width:3rem;"/>
   {/if}
   </td>
   <td>{$beer->beer_name}</td>
   <td>{$beer->type}</td>
   <td>{$beer->container}</td>
   <td>${$beer->price}</td>
   </tr>
{/foreach}
</tbody>
</table>
{include file="footer.tpl"}