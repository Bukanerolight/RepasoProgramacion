/////reto1

function signoZodiaco(mes : number , dia : number){
    let signo = "";
    switch(mes){
        case 1:
            if(dia >= 21){
                signo="Acuario";
            }else{
                signo="Capricornio";
            };
            break;
        case 2:
            if(dia >= 20){
                signo="Piscis";
            }else{
                signo="Acuario";
            };
            break;
        case 3:
            if(dia >= 21){
                signo="Aries";
            }else{
                signo="Piscis";
            };
            break;
        case 4:
            if(dia >= 21){
                signo="Tauro";
            }else{
                signo="Aries";
            };
            break;
        case  5:
            if(dia >= 22){
                signo="Geminis";
            }else{
                signo="Tauro";
            };
            break;
        case  6:
            if(dia >= 22){
                signo="Cancer";
            }else{
                signo="Geminis";
            };
            break;
        case  7:
            if(dia >= 23){
                signo="Leo";
            }else{
                signo="Cancer";
            };
            break;
        case 8:
            if(dia >= 23){
                signo="Virgo";
            }else{
                signo="Leo";
            };
            break;
        case 9:
            if(dia >= 22){
                signo="Libra";
            }else{
                signo="Virgo";
            };
            break;
        case 10:
            if(dia >= 22){
                signo="Escorpio";
            }else{
                signo="Libra";
            };
            break;
        case 11:
            if(dia >= 23){
                signo="Sagitario";
            }else{
                signo="Escorpio";
            };
            break;
        case 12:
            if(dia >= 23){
                signo="Capricornio";
            }else{
                signo="Sagitario";
            };
            break;
        default : "No hay signo";
    };
};
console.log(signoZodiaco(1,29));

////reto2

let pais = "España";
let continente = "";

switch(pais)
{
  case "España":
    continente = "Europa";
    break;
  case "Francia":
    continente = "Europa";
    break;
  case "Italia":
    continente = "Europa";
    break;
  case "Ghana":
    continente = "Africa";
    break;
  case "Sudafrica":
    continente = "Africa";
    break;
  case "Nigeria":
    continente = "Africa";
    break;
  case "India":
    continente = "Asia";
    break;
  case "China":
    continente = "Asia";
    break;
  case "Japon":
    continente = "Asia";
    break;
  case "Australia":
    continente = "Oceania";
    break;
  case "Nueva Zelanda":
    continente = "Oceania";
    break;
  case "Nueva Guinea":
    continente = "Oceania";
    break;
  case "USA":
    continente = "America";
    break;
  case "Brasil":
    continente = "America";
    break;
  case "Argentina":
    continente = "America";
    break;
  default:
    continente = "Indefinido"
  
}
console.log(continente);

/////////////////////// reto9

function numeroParImpar(number:number){
    let parOimpar = "";
    if (number % 2== 0){
        parOimpar = "El numero es par";
    }else if (!(number % 2 == 0)){
        parOimpar = "El numero es impar";
    };
    return parOimpar;
};

console.log(numeroParImpar(5));