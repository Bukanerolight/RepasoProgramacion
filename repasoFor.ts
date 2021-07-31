///////////reto3

function numeroImpares(numeros:number){
    let numImpares = [];
    for (let i = 0; i < numeros; i++){
        if(i % 2!=0){
            numImpares.push(i);
        };
    };
    return numImpares;
};
////////////// reto4

function theArray(arrayOriginal:number[]){
    let arrayInvertida=[];
    for(let i=arrayOriginal.length-1; i>=0; i--)
    {
        
        arrayInvertida.push(arrayOriginal[i])
    }
    return arrayInvertida
}
console.log(theArray([9,2,5,8,7]));

/////////////// reto5

function coloresDeArcoiris(colores = []){
    let arcoiris = [];
    for (let i=0; i < colores.length; i++){
        if (colores[i] == "rojo" || colores[i] == "naranja"||colores[i] == "amarillo"
            || colores[i] == "verde" || colores[i] == "azul" ||colores[i] == "morado"
            ||colores[i] == "rosa"){
                arcoiris.push(colores[i] + "esta en el arcoiris");
            } else {
                arcoiris.push(colores[i] + "no esta en el arcoiris");
            };
    };
    return arcoiris;
};
console.log(coloresDeArcoiris(["amarillo", "negro"]));

//////////////////reto7

function existeM(array = []) {
    for (let i = 0; i < array.length; i++){
        if(array[i].includes("M")){
            console.log(array[i]);
        };
    };

};
console.log(existeM(["Papa", "Mama"]));

////////////reto8

function sumaCaracteres ( array: string[]){
    let numberCarater: number = 0;
    for (let i=0; i<array.length; i++){
        numberCarater += array[i].length;
    };
    return numberCarater;
};

console.log(sumaCaracteres["tengo sueño"]);