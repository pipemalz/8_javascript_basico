let articulos = [
    {
        nombre: 'bici',
        costo: 2000000,
    },
    {
        nombre: 'television',
        costo: 1400000
    },
    {
        nombre: 'libro',
        costo: 120000
    },
    {
        nombre: 'celular',
        costo: 10000
    },
    {
        nombre: 'laptop',
        costo: 20000
    },
    {
        nombre: 'teclado',
        costo: 50000
    },
    {
        nombre: 'audifonos',
        costo: 300000
    }
];

let nombreArticulos = articulos.map(articulo => articulo.nombre);

let costoArticulos = articulos.map(articulo => articulo.costo);

for(let i = 0; i < articulos.length; i++){
    console.log(`Articulo: ${nombreArticulos[i]} Precio: ${costoArticulos[i]}`)
}

