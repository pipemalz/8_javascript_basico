function sum(...args){ //... args = spread operator
    let total = 0;
    args.forEach(element => {
        total += element;
    });
    return total;
}

console.log(sum(10,10,10,10,10,10,10,10,10,10));



const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];
console.log(arr2);