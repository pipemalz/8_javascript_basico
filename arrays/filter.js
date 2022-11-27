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
]

function buscarArticulo(busqueda, array, propiedad){
    let resultado = array.filter(buscar => buscar[propiedad] == busqueda);
    if(resultado.length > 0){
        console.log(`Resultados: `)
        resultado.forEach(element => {
            console.log(`descripcion: ${element[propiedad]}
costo: ${element.costo}`);
        });
    }else{
        console.log('No se encontraron resultados');    }
}

let busqueda = prompt('ingrese un articulo a buscar');
buscarArticulo(busqueda, articulos, 'nombre');


let articulosFiltrados = articulos.filter(articulo => articulo.costo > 500000);
