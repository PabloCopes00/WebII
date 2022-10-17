
{include file="header.tpl"}
    <table class="table text-center">
         <thead class="table-dark text-center">
          <tr>
            <th></th>
            <th>Nombre</th>
            <th>Abv</th>
            <th>Ibu</th>
            <th>Descripcion</th>
            <th></th>
            <th></th>
          </tr>
         </thead>
         <tbody>        
         {foreach from=$beerDesc item=$desc}
            <tr>
            <td>
               {if isset($desc->img)}
                   <img src="{$desc->img}" alt="{$desc->beer_name}" style="width:3rem;"/>
               {/if}
            </td>
            <td>{$desc->beer_name}</td>
            <td>{$desc->abv}%</td>
            <td>{$desc->ibu}</td>
            <td>{$desc->description}</td>
            {if isset($smarty.session.USER_ID)}
            <td><a href='showEditDesc/{$desc->id_name_fk}' type='button' class='btn btn-success ml-auto'>Editar</a></td>           
            <td><a href='deleteBeerDesc/{$desc->id_name_fk}' type='button' class='btn btn-danger ml-auto'>Borrar</a></td>
            {/if}
            </tr>
        {/foreach}
         </tbody>
    </table>
{if isset($smarty.session.USER_ID)}
{include file="formBeerDesc.tpl"}
{/if}
{include file="footer.tpl"}