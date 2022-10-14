{include file="header.tpl"}
{foreach from=$detail item=$item}
<div class="card">
  <div class="card-header">
    <img src="{$item->img}" alt="{$item->beer_name}" style="width:5rem;">
    {$item->beer_name}
    </div>
    <div class="card-body">
    <h5 class="card-title"></h5>
    <p class="card-text">{$item->description}. Abv: {$item->abv}%. ibu: {$item->ibu}</p>
    <a href="showBeers" class="btn btn-primary">Volver</a>
    </div>
    </div>
{/foreach}
{include file="footer.tpl"}