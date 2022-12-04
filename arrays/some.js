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

let validar = articulos.some(articulo => articulo.costo <= 500000);
console.log(validar);