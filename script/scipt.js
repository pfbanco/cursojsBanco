//CONSTRUCTOR
function Pokemon(nombre,idPkm, tipo1, tipo2, habilidad, img = "./src/Charmander.png.webp", id){
    this.nombre = nombre
    this.idPkm = idPkm
    this.tipo1 = tipo1
    this.tipo2 = tipo2
    this.habilidad = habilidad
    this.img = img
    this.id = id
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
//localStorage.setItem("equipo", JSON.stringify(pokemons))
let equipoDesdeJSON = []
equipoDesdeJSON = JSON.parse(localStorage.getItem("equipo"))
let idGlo = 0

//DOM

//------------------------------------------------------------LO NECESARIO PARA BUSCAR EL POKEMON Y MOSTRARLO EN PANTALLA
const $formPmk = document.querySelector("form")
const $pkmBuscado = document.getElementById("namePokemon")
const $pokedexContainer = document.getElementById("pokemon-container")
$formPmk.addEventListener("submit", buscarPokemon)

function buscarPokemon (e){
    e.preventDefault()
    let buscarPkm = $pkmBuscado.value.toLowerCase()
    pkmEnArray = pokemons.find(pkm => pkm.nombre == buscarPkm)
    if(pkmEnArray === undefined || buscarPkm == 0){
    alert('Pokemon no encontrado, compruebe que el nombre de su Pokemon esté bien escrito.')
    }else{
    $pokedexContainer.innerHTML = `<div class="pokeCard">
    <h5 class="pokeName">${pkmEnArray.nombre.toUpperCase()}</h5>
    <img class="pokeImg" src="${pkmEnArray.img}" alt="Un pokemon">
    <p class="pokeId">${pkmEnArray.idPkm}</p>
    <p class="pokeTypes">${pkmEnArray.tipo1 +" "+ pkmEnArray.tipo2}</p>
    <p class="pokeHabilidad">${pkmEnArray.habilidad}</p>
</div>`
    }
    return pkmEnArray
}
//------------------------------------------------------------USO BOTON PARA AGREGAR AL EQUIPO Y MOSTRARLO EN PANTALLA
const $btnAdd = document.getElementById("addPokemon")
const $equipoContainer = document.getElementById("nav-equipo")
$btnAdd.addEventListener('click', addEquipo)

function addEquipo(){
    if(equipoDesdeJSON.length === 6){
    alert('Tu equipo está completo.')
    }else{
    idGlo++
    equipoDesdeJSON.push( new Pokemon(pkmEnArray.nombre,pkmEnArray.idPkm, pkmEnArray.tipo1, pkmEnArray.tipo2,pkmEnArray.habilidad,pkmEnArray.img, idGlo))
    }
    let equipoTemp = JSON.stringify(equipoDesdeJSON)
    localStorage.setItem("equipo", equipoTemp)
    enlistarPkm()
}

//------------------------------------------------------------ENLISTO POKEMON Y MUESTRO EN PANTALLA
function enlistarPkm(){
    equipoDesdeJSON = JSON.parse(localStorage.getItem("equipo"))
    $equipoContainer.innerHTML = ""
    equipoDesdeJSON.forEach(pkm =>{
        const card = document.createElement('card')
        card.innerHTML = `<div class="pokeCard">
                            <h5 class="pokeName">${pkm.nombre.toUpperCase()}</h5>
                            <img class="pokeImg" src="${pkm.img}" alt="Un pokemon">
                            <p class="pokeId">${pkm.idPkm}</p>
                            <p class="pokeTypes">${pkm.tipo1 +" "+ pkm.tipo2}</p>
                            <p class="pokeHabilidad">${pkm.habilidad}</p>
                            <button id="btnQuitar${pkm.id}">Sacar del Equipo</button>
                        </div>`
    $equipoContainer.appendChild(card)
    const $delPkm = document.getElementById(`btnQuitar${pkm.id}`)
    $delPkm.addEventListener('click',() =>{ remEquipo(pkm.id)})
})}

//------------------------------------------------------------ELIMINAR POKEMONS DEL EQUIPO
function remEquipo(e){
    const equipo = JSON.parse(localStorage.getItem("equipo")).filter(function(pkm){
        return pkm.id !== e
    })
    let equipoTemp = JSON.stringify(equipo)
    localStorage.setItem("equipo", equipoTemp)
    enlistarPkm()
}
enlistarPkm()
