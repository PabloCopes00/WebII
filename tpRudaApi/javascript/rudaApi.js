"use strict";

const URL = "api/beers/";

let form = document.querySelector('#beer-form');
form.addEventListener('submit', insertBeer)
let beers = [];

/**
 * obtengo toda la lista de cervezas de la API REST.
 */
async function getAll() {
    try {
        let response = await fetch(URL);
        if (!response.ok) {
            throw new error('Recurso no existe');
        }
        beers = await response.json();
        showBeers();
    } catch (e) {
        console.log(e);
    }
}
/* <td><a href='showEdit/${beer.id}' type='button' class='btn btn-success ml-auto'>Editar</a></td>  */
/**
 * muestro toda la lista de cervezas de la API REST.
 */
function showBeers() {
    let tbody = document.querySelector("#beer-list");
    tbody.innerHTML = "";
    for (const beer of beers) {
        let html = `
        <tr>
        <td>${beer.type}</td>
        <td>${beer.container}</td>
        <td>${beer.stock}</td>
        <td>${beer.price}</td>
        <td><a href='#' data-beer="${beer.id}" type='button' class='btn btn-danger ml-auto btn-delete'>Borrar</a></td>
        </tr>`;
        tbody.innerHTML += html;
    }

    const btnsDelete = document.querySelectorAll('a.btn-delete');

    for (const btnDelete of btnsDelete) {
        btnDelete.addEventListener('click', deleteBeer);
    }
}
/**
 * insert de la cerveza que tengo en el formulario a la BBDD desde API REST.
 */
async function insertBeer(e) {
    e.preventDefault();
    let data = new FormData(form);
    let beer = {
        fk_id_name: data.get('beerOption'),
        type: data.get('type'),
        container: data.get('container'),
        stock: data.get('stock'),
        price: data.get('price')
    };

    try {
        let response = await fetch(URL, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(beer)
        });
        if (!response.ok) {
            throw new error('Recurso no existe');
        }
        form.reset();
        let newBeer = await response.json();
        beers.push(newBeer);
        showBeers();

    } catch (e) {
        console.log(e);
    }
}
/**
 * borro una cerveza de la API REST.
 */
async function deleteBeer(e) {
    e.preventDefault();
    try {
        let id = e.target.dataset.beer;
        let response = await fetch(URL + id, { method: 'DELETE' });
        if (!response.ok) {
            throw new error('Recurso no existe');
        }
        beers = beers.filter(beer => beer.id != id);
        showBeers();

    } catch (e) {
        console.log(e);
    }
}
getAll();