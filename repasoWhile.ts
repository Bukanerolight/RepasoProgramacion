/////////////// reto6

function existePar(array : number []): boolean {
    let I : number = 0;
    while ( I < array.length && array[I] % 2 !== 0){
        I++;
    };
    return ( I < array.length ? true : false);
};
console.log(existePar([1,2,3,4,5,6]));

