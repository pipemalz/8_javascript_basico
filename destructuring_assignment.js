const cosas = {
    arbol:'verde',
    piso:'madera',
    tasa:'blanca',
    dias:['lunes', 'martes', 'miercoles', 'jueves', 'viernes']
};

const {arbol, piso, tasa, dias} = cosas;

console.log('Al lado de mi casa hay un arbol ' + arbol + ' me levando los dias ' + dias + ' agarro mi tasa ' + tasa + ' y me tomo un chocolate viendo el piso de ' + piso);

const {arbol: colorArbol, piso: materialPiso, tasa: colorTasa, dias: diasLaborales} = cosas;

console.log('Al lado de mi casa hay un arbol ' + colorArbol + ' me levando los dias ' + diasLaborales + ' agarro mi tasa ' + colorTasa + ' y me tomo un chocolate viendo el piso de ' + materialPiso);

//------------------------------------------------------------

const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);

//------------------------------------------------------------

function removeFirstTwo(list) {
    // Only change code below this line
    const [,,...shorterList] = list;
    // Only change code above this line
    return shorterList;
  }
  
  const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sourceWithoutFirstTwo = removeFirstTwo(source);


  console.log(sourceWithoutFirstTwo);

//-----------------------------------------------------------

const profileData = {
    name:'Felipe',
    age:26,
    nationality:'Colombian',
    location:'El Carmen de Viboral'
};

// const profileUpdate = (profileData) => {
//     const { name, age, nationality, location } = profileData;
//     return name + ' ' + age + ' ' + nationality + ' ' + location;
// }

const profileUpdate = ({ name, age, nationality, location }) => {
    name = 'Felipe Moreno';
    return name + ' ' + age + ' ' + nationality + ' ' + location;
}

console.log(profileUpdate(profileData));


//----------------------------------------------------------

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  // Only change code below this line
  const half = ({max, min}) =>  (max + min) / 2.0; 
  console.log(half(stats));
  // Only change code above this line
