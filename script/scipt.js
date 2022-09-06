/*let numAl = Math.floor(Math.random()*10 )
switch (numAl) {
    case 1:
        alert("PIKACHU");
        break;
    case 2:
        alert("CHARMANDER");
        break; 
    case 3:
        alert("BULBASAUR");
        break;
    case 4:
        alert("SQUIRTLE");
        break;
    case 5:
        alert("EEVEE");
        break;
    case 6:
        alert("CHIKORITA");
        break;
    case 7:
        alert("CYNDAQUIL");
        break;
    case 8:
        alert("TOTODILE");
        break;
    case 9:
        alert("TOGEPI");
        break;
    default:
        alert("No naciste para ser entrenador Pokemon")
        break;
}

let numero = Number(prompt("Bienvenido a la ruleta pokemon, ingrese un numero del 0 al 10 para ver con que Pokemon se queda."))

let pokemon = ["PIKACHU", "CHARMANDER", "MEWTWO", "LUGIA", "TOTODILE", "CYNDAQUIL", "CHIKORITA", "EEVEE", "SQUIRTLE", "MEW", "ENTEI" ];

for (let i = 0; i < pokemon.length; i++) {
    if (i === numero) {
        alert(pokemon[i]);
        break
    }
}
*/
function cotizacionC (num1, num2){
    resultado = num1 / num2
    return alert(`Recibirá $ ${resultado.toFixed(2)}`)
}
function cotizacionV (num1 , num2){
    resultado = num1 * num2
    return alert(`Recibirá $ ${resultado.toFixed(2)} pesos argentinos`) 
}

let dolarC = 285
let dolarV = 281

let euroC = 313
let euroV = 308

let realC = 26
let realV = 25

let valorIngresado
let resultado = 0

let y = true

do {
let eleccion = prompt(`Que desea hacer?
1. Comprar.
2. Vender.
3. Salir.`)

switch(eleccion){
    case "1":
        let caso1 = Number(prompt(`Que desea comprar?
        1. Dolar.
        2. Euro.
        3. Real.
        4. Volver atras.`))

        switch(caso1){
            case 1:
                valorIngresado = Number(prompt(`Ingrese la cantidad de pesos que desea convertir.`))
                cotizacionC (valorIngresado, dolarC)
            break
            case 2:
                valorIngresado = Number(prompt(`Ingrese la cantidad de pesos que desea convertir.`))
                cotizacionC (valorIngresado, euroC)
            break
            case 3:
                valorIngresado = Number(prompt(`Ingrese la cantidad de pesos que desea convertir.`))
                cotizacionC (valorIngresado, realC)
            break
            case 4:
                
            break
        }
        break

    case "2":
        let caso2 = Number(prompt(`Que desea vender?
        1. Dolar.
        2. Euro.
        3. Real.
        4. Volver atras.`))
        switch(caso2){
            case 1:
                valorIngresado = Number(prompt(`Ingrese la cantidad de dolares que desea vender.`))
                cotizacionV (valorIngresado, dolarV)
            break
            case 2:
                valorIngresado = Number(prompt(`Ingrese la cantidad de euros que desea vender.`))
                cotizacionV (valorIngresado, euroV)
            break
            case 3:
                valorIngresado = Number(prompt(`Ingrese la cantidad de reales que desea vender.`))
                cotizacionV (valorIngresado, realV)
            break
        }
        break
    case "3":
        alert(`Gracias por visitarnos`)
        y = false
        break
    default:
        alert(`No ingresaste una opcion valida.`)
}
}while(y === true)
