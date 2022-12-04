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

let costoArticulos = articulos.map(articulo => articulo.costo);

let total = costoArticulos.reduce((acc, value) => acc + value, 0);

console.log(total);