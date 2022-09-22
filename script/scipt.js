//CONSTRUCTOR
function Pokemon(nombre,id, tipo1, tipo2, habilidad, img = "./src/Charmander.png.webp"){
    this.nombre = nombre
    this.id = id
    this.tipo1 = tipo1
    this.tipo2 = tipo2
    this.habilidad = habilidad
    this.img = img
}
//BASE DE DATOS DE POKEMON
const pokemons = []
let bulbasaur = new Pokemon('bulbasaur', 1, 'Planta', 'Veneno', 'Espesura')
let ivysaur = new Pokemon('ivysaur',2, 'Plnata', 'Veneno','Espesura')
let venasaur = new Pokemon('venasaur',3, 'Plnata', 'Veneno','Espesura')
let charmander = new Pokemon('charmander',4, 'Fuego', 'Sin segundo tipo','Mar llamas', "./src/Charmander.png.webp")
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
let tysis = new Pokemon('tysardo', 31, 'Veneno','Oscuridad','Porteñosis aguda', "./src/tysis.png")

pokemons.push(bulbasaur, ivysaur, venasaur, charmander,charmeleon,charizard, squirtle, wartortle, blastoise, caterpie, metapod, butterfree, weedle, kakuna,beedrill, pidgey, pidgeotto, pidgeot, rattata, raticate, spearow, fearow, ekans, arbok, pikachu, raichu, sandshrew, sandslash ,nidoranH, nidorina, tysis)

let equipoPkm = []
let equipoFinal = []
//Flag para salir del bucle. 
let flag = true
/*
function inicio() {opcInicio = prompt(`Qué desea hacer?
1. Buscar Pokemon.
2. Ver mi equipo.
3. Borrar mi equipo.
4. Salir.`)
return opcInicio
}

function buscador () {
    buscarPkm = prompt('Escribe el nombre del pokemon que buscas.').toLowerCase()
    buscarPkmEnArray = pokemons.find(pkm => pkm.nombre == buscarPkm)
    if(buscarPkmEnArray === undefined || buscarPkm == null || buscarPkm == 0){
    alert('Pokemon no encontrado, compruebe que el nombre de su Pokemon esté bien escrito.')
    buscador()
    }else{ 
    return buscarPkmEnArray}
}

//SIGUE SIN ANDARME EL "CANCEL"

function agregarAlEquipo(){ 
    let deseaAgregar = confirm(`${buscarPkmEnArray.nombre.toUpperCase()} N: ${buscarPkmEnArray.id} 
    Tipo: ${buscarPkmEnArray.tipo1.toUpperCase()}, ${buscarPkmEnArray.tipo2.toUpperCase()} 
    Habilidad: ${buscarPkmEnArray.habilidad.toUpperCase()}
    Desea agregar a ${buscarPkmEnArray.nombre.toUpperCase()} a su equipo?`)
    if(deseaAgregar === false){
    inicio()
    } else if(equipoPkm.length === 6){
    alert('Tu equipo está completo.')
    inicio()
    }else{
    equipoPkm.push(buscarPkmEnArray)
    return equipoPkm    
    }
}
function borrarEquipo(){
        equipoPkm = []
}

while(flag === true){
inicio()
switch(opcInicio){
    case "1":
    buscador()
    agregarAlEquipo()
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
        alert('Su equipo a sido borrado.')
        break
    case "4":
        alert(`Gracias por visitarnos`)
        flag = false
        break
    default:
        alert(`No ingresaste una opción valida.`)
}
}
*/
//DOM
let sectionEquipo = document.getElementById("nav-equipo")
//let temp = document.querySelector("template")
//let card = temp.content.querySelector("div")
let cardPokedex = document.getElementById("pokemon-container")
let busquedaPkm = document.querySelector("form")


const quitarPkm = document.getElementById("delPokemon")
const agregarPkm = document.getElementById("addPokemon")
agregarPkm.addEventListener('click', ponerEnEquipo)
//quitarPkm.addEventListener('click', sacarDelEquipo)

function ponerEnEquipo(){
    if(equipoFinal.length === 6){
    alert('Tu equipo está completo.')
    }else{
    equipoPkm.push(buscarPkmEnArray)
    agregarAlEquipo()
}}

function sacarDelEquipo(){
    document.getElementById("nav-equipo").remove(this)
    //sectionEquipo.removeChild(this)
}

const pkmBuscado = document.getElementById("namePokemon")

busquedaPkm.addEventListener("submit", buscarPokemon)
function buscarPokemon (e){
    e.preventDefault()
    let buscarPkm = pkmBuscado.value.toLowerCase()
    buscarPkmEnArray = pokemons.find(pkm => pkm.nombre == buscarPkm)
    if(buscarPkmEnArray === undefined || buscarPkm == null || buscarPkm == 0){
    alert('Pokemon no encontrado, compruebe que el nombre de su Pokemon esté bien escrito.')
    }else{
    cardPokedex.innerHTML = `<div class="pokeCard">
    <h5 class="pokeName">${buscarPkmEnArray.nombre.toUpperCase()}</h5>
    <img class="pokeImg" src="${buscarPkmEnArray.img}" alt="Un pokemon">
    <p class="pokeId">${buscarPkmEnArray.id}</p>
    <p class="pokeTypes">${buscarPkmEnArray.tipo1 +" "+ buscarPkmEnArray.tipo2}</p>
    <p class="pokeHabilidad">${buscarPkmEnArray.habilidad}</p>
</div>`
    }
    return buscarPkmEnArray
}

function agregarAlEquipo (){
equipoPkm.forEach((equipoPoke)=>{
    sectionEquipo.innerHTML += `<div class="pokeCard">
    <h5 class="pokeName">${equipoPoke.nombre.toUpperCase()}</h5>
    <img class="pokeImg" src="${equipoPoke.img}" alt="Un pokemon">
    <p class="pokeId">${equipoPoke.id}</p>
    <p class="pokeTypes">${equipoPoke.tipo1 +" "+ equipoPoke.tipo2}</p>
    <p class="pokeHabilidad">${equipoPoke.habilidad}</p>
    <button id="delPokemon">Quitar del equipo</button>
</div>`
    sectionEquipo.onclick = sacarDelEquipo
    equipoFinal.push(equipoPkm)
    equipoPkm = []
})}
