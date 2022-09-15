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

/*
function cotizacionC (num1, num2){
    resultado = num1 / num2
    return alert(`Recibirá $ ${resultado.toFixed(2)}`)
}
function cotizacionV (num1 , num2){
    resultado = num1 * num2
    return alert(`Recibirá $ ${resultado.toFixed(2)} pesos argentinos`) 
}

const precioDivisa = [{
    dolarC: 285, 
    dolarV: 281
},
    {euroC: 313, 
    euroV: 308
},
    {realC: 26, 
    realV: 25
}]

/*let dolarC = 285
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
                if (isNaN(valorIngresado)){
                    alert(`Debe ingresar un numero`)
                }else{
                    cotizacionC (valorIngresado, precioDivisa[0].dolarC)
                    //cotizacionC (valorIngresado, dolarC)
                }

            break
            case 2:
                valorIngresado = Number(prompt(`Ingrese la cantidad de pesos que desea convertir.`))
                if (isNaN(valorIngresado)){
                    alert(`Debe ingresar un numero`)
                }else{
                    cotizacionC (valorIngresado, precioDivisa[1].euroC)
                    //cotizacionC (valorIngresado, euroC)
                }
            break
            case 3:
                valorIngresado = Number(prompt(`Ingrese la cantidad de pesos que desea convertir.`))
                if (isNaN(valorIngresado)){
                    alert(`Debe ingresar un numero`)
                }else{
                    cotizacionC (valorIngresado, precioDivisa[2].realC)
                    //cotizacionC (valorIngresado, realC)
                }
            break
            case 4:
                
            break1
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
                if (isNaN(valorIngresado)){
                    alert(`Debe ingresar un numero`)
                }else{
                    cotizacionV (valorIngresado, precioDivisa[0].dolarV)
                    //cotizacionV (valorIngresado, dolarV)
                }
            break
            case 2:
                valorIngresado = Number(prompt(`Ingrese la cantidad de euros que desea vender.`))
                if (isNaN(valorIngresado)){
                    alert(`Debe ingresar un numero`)
                }else{
                    cotizacionV (valorIngresado, precioDivisa[1].euroV)
                    //cotizacionV (valorIngresado, euroV)
                }
            break
            case 3:
                valorIngresado = Number(prompt(`Ingrese la cantidad de reales que desea vender.`))
                if (isNaN(valorIngresado)){
                    alert(`Debe ingresar un numero`)
                }else{
                    cotizacionV (valorIngresado, precioDivisa[2].realV)
                    cotizacionV (valorIngresado, realV)
                }
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
}while(y === true)*/

//-----------------------------------------------------------

//function crearEquipo(){
//    if (confirm = true){
//        equipoPkm.push(elijeUnPkm)
//    }
//    else
//    alert('Continua buscando tu Pokemon')
//}

function Pokemon(nombre,id, tipo1, tipo2, habilidad){
    this.nombre = nombre
    this.id = id
    this.tipo1 = tipo1
    this.tipo2 = tipo2
    this.habilidad = habilidad
}

const pokemons = []
let bulbasaur = new Pokemon('bulbasaur', 1, 'Planta', 'Veneno', 'Espesura')
let ivysaur = new Pokemon('ivysaur',2, 'Plnata', 'Veneno','Espesura')
let venasaur = new Pokemon('venasaur',3, 'Plnata', 'Veneno','Espesura')
let charmander = new Pokemon('charmander',4, 'Fuego', 'Sin segundo tipo','Mar llamas')
let charmeleon = new Pokemon('charmeleon',5, 'Fuego', 'Sin segundo tipo','Mar llamas')
let charizard = new Pokemon('charizard',6, 'Fuego', 'Sin segundo tipo','Mar llamas')
let squirtle = new Pokemon('squirtle',7, 'Agua', 'Sin segundo tipo','Torrente')
let wartortle = new Pokemon('wartortle',8, 'Agua', 'Sin segundo tipo','Torrente')
let blastoise = new Pokemon('blastoise',9, 'Agua', 'Sin segundo tipo','Torrente')
let caterpie = new Pokemon('caterpie',10, 'Bicho', 'Sin segundo tipo','Polvo escudo')
let metapod = new Pokemon('metapod',11, 'Bicho', 'Sin segundo tipo','Mudar')
let butterfree = new Pokemon('butterfree',12, 'Bicho','Volador','Ojo compuesto')
let weedle = new Pokemon('weedle',13, 'Bicho', 'Veneno','Polvo escudo')
let kakuna = new Pokemon('kakuna',14, 'Bicho', 'Veneno','Mudar')
let beedrill = new Pokemon('beedrill',15, 'Bicho', 'Veneno','Enjambre')
let pidgey = new Pokemon('pidgey',16, 'Normal', 'Volador','Vista lince')
let pidgeotto = new Pokemon('pidgeotto',17,'Normal', 'Volador','Vista lince')
let pidgeot = new Pokemon('pidgeot',18, 'Normal', 'Volador','Vista lince')
let rattata = new Pokemon('rattata',19, 'Normal', 'Sin segundo tipo','Fuga')
let raticate = new Pokemon('raticate',20, 'Normal', 'Sin segundo tipo','Fuga')
let spearow = new Pokemon('spearow',21, 'Normal','Volador','Vista lince')
let fearow = new Pokemon('fearow',22, 'Normal','Volador','Vista lince')
let ekans = new Pokemon('ekans',23, 'Veneno', 'Sin segundo tipo','Intimidacion')
let arbok = new Pokemon('arbok',24, 'Veneno', 'Sin segundo tipo','Intimidacion')
let pikachu = new Pokemon('pikachu',25, 'Electrico', 'Sin segundo tipo','Electricidad estatica')
let raichu = new Pokemon('raichu',26, 'Electrico', 'Sin segundo tipo','Electricidad estatica')
let sandshrew = new Pokemon('sandshrew',27, 'Tierra', 'Sin segundo tipo','Velo arena')
let sandslash = new Pokemon('sandslash',28, 'Tierra', 'Sin segundo tipo','Velo arena')
let nidoranH = new Pokemon('nidoranH',29, 'Veneno', 'Sin segundo tipo','Punto toxico')
let nidorina = new Pokemon('nidorina',30, 'Veneno','Sin segundo tipo','Punto toxico')

pokemons.push(bulbasaur, ivysaur, venasaur, charmander,charmeleon,charizard, squirtle, wartortle, blastoise, caterpie, metapod, butterfree, weedle, kakuna,beedrill, pidgey, pidgeotto, pidgeot, rattata, raticate, spearow, fearow, ekans, arbok, pikachu, raichu, sandshrew, sandslash ,nidoranH, nidorina)

let equipoPkm = []

let y = true


function inicio() {opcInicio = prompt(`Qué desea hacer?
1. Buscar Pokemon.
2. Ver mi equipo.
3. Borrar mi equipo.
4. Salir.`)
return opcInicio
}
function buscador () {
    buscarPkm = prompt('Escribe el nombre del pokemon que buscas.').toLocaleLowerCase()
    buscarPkmEnArray = pokemons.find(pkm => pkm.nombre == buscarPkm)
    if(buscarPkmEnArray === undefined){
    alert('Pokemon no encontrado, compruebe que el nombre de su Pokemon esté bien escrito.')
    buscador()
    }else{ 
    return buscarPkmEnArray}
}
function agregarAlEquipo(){ 
    confirm(`${buscarPkmEnArray.nombre.toUpperCase()} N: ${buscarPkmEnArray.id} 
    Tipo: ${buscarPkmEnArray.tipo1.toUpperCase()}, ${buscarPkmEnArray.tipo2.toUpperCase()} 
    Habilidad: ${buscarPkmEnArray.habilidad.toUpperCase()}
    Desea agregar a ${buscarPkmEnArray.nombre.toUpperCase()} a su equipo?`)
    if(agregarAlEquipo === false){
    buscador()
    } else if(equipoPkm.length === 6){
    alert('Tu equipo está completo.')
    inicio()
    }else{
    equipoPkm.push(buscarPkmEnArray)
    return equipoPkm    
    }
}
function borrarEquipo(){
    do(equipoPkm.shift())
    while(equipoPkm.length != 0)
    return alert('Borraste tu equipo.')
}


do {
inicio()
switch(opcInicio){
    case "1":
    do{
    buscador()
    agregarAlEquipo()
    }while(buscarPkm === 'esc' || equipoPkm.length <= 5)
    continue
    case "2":
        if(equipoPkm.length == 0){
        alert('Aún no agregaste ningun Pokemon a tu equipo.')
        }else{
        alert(equipoPkm.map(equipo => `${(equipo.nombre).toUpperCase()} `))
        }    
        break
    case "3":
        borrarEquipo()
        break
    case "4":
        alert(`Gracias por visitarnos`)
        y = false
        break
    default:
        alert(`No ingresaste una opción valida.`)
}
}while(y === true)