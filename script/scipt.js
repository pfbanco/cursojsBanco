let equipoDesdeJSON = JSON.parse(localStorage.getItem("equipo")) || []
let idGlo = JSON.parse(localStorage.getItem("idGlo")) || 0


//------------------------------------------------------------LO NECESARIO PARA BUSCAR EL POKEMON Y MOSTRARLO EN PANTALLA

const $formPmk = document.getElementById("buscador")
const $pkmBuscado = document.getElementById("namePokemon")
const $pokedexContainer = document.getElementById("pokemon-container")
$formPmk.addEventListener("click", buscarPokemon)

//------------------------------------------------------------FUNCION BUSCADORA

async function buscarPokemon (e) {
    e.preventDefault()
    
    let buscarPkm = $pkmBuscado.value.toLowerCase()
    await fetch(`https://pokeapi.co/api/v2/pokemon/${buscarPkm}`)
        .then(resp => resp.json())
        .then(data => {
            pkmEnArray = data
            $pokedexContainer.innerHTML = `<div class="pokeCard">
            <h3 class="pokeName">${data.name.toUpperCase()}</h3>
            <img class="pokeImg" src="${data.sprites.front_default}" alt="Un pokemon">
            <p class="pokeId"> N°:${data.id.toString().padStart(3, 0)}</p>
            <p class="pokeHabilidad">${data.abilities[0].ability.name.toUpperCase()}</p>
            <p class="pokeTypes">${data.types[0].type.name.toUpperCase()} ${data.types[1] ? data.types[1].type.name.toUpperCase() : ""}</p>
            </div>`
            })
        .catch(() =>{
            Swal.fire({
                icon: 'error',
                title: 'Pokemon no encontrado!',
                text: 'Escribe el nombre de tu pokemon correctamente.',
                footer: 'Tambien es posible buscar por ID del Pokemon.'
            })})
        }

//------------------------------------------------------------USO BOTON PARA AGREGAR AL EQUIPO Y MOSTRARLO EN PANTALLA

const $btnAdd = document.getElementById("addPokemon")
const $equipoContainer = document.getElementById("contenedor-equipo")
$btnAdd.addEventListener("click", () => {addEquipo(pkmEnArray)})

//------------------------------------------------------------FUNCION PARA AGREGAR AL EQUIPO Y MOSTRAR EN PANTALLA

function addEquipo(pokemon){
    if(equipoDesdeJSON.length >= 6){
        Swal.fire({
            icon: 'error',
            title: 'Tu equipo está completo!',
            footer: 'Haz espacio en tu  equipo para tu nuevo Pokemon'
        })
    }else{
    let pkmAPushear = Object.assign({}, pokemon) 
    idGlo++
    pkmAPushear["paraEliminar"] = idGlo
    equipoDesdeJSON.push(pkmAPushear)
    }
    let equipoTemp = JSON.stringify(equipoDesdeJSON)
    localStorage.setItem("equipo", equipoTemp)
    let id = JSON.stringify(idGlo)
    localStorage.setItem("idGlo", id)
    enlistarPkm()
}

//------------------------------------------------------------

function enlistarPkm(){
    $equipoContainer.innerHTML = ""
    equipoDesdeJSON.forEach(data =>{
        const card = document.createElement('card')
        card.innerHTML = `<div class="pokeCard">
                            <h3 class="pokeName">${data.name.toUpperCase()}</h3>
                            <img class="pokeImg" src="${data.sprites.front_default}" alt="Un pokemon">
                            <p class="pokeId"> N°:${data.id.toString().padStart(3, 0)}</p>
                            <p class="pokeHabilidad">${data.abilities[0].ability.name.toUpperCase()}</p>
                            <p class="pokeTypes">${data.types[0].type.name.toUpperCase()} ${data.types[1] ? data.types[1].type.name.toUpperCase() : ""}</p>
                            <button id="btnQuitar${data.paraEliminar}">Sacar del Equipo</button>
                        </div>`
    $equipoContainer.appendChild(card)
    const $delPkm = document.getElementById(`btnQuitar${data.paraEliminar}`)
    $delPkm.addEventListener('click',() => {remEquipo(data.paraEliminar)})
})}

//------------------------------------------------------------ELIMINAR POKEMONS DEL EQUIPO

function remEquipo(e){
    const equipo = equipoDesdeJSON.filter(function(data){
        return data.paraEliminar !== e
    })
    equipoDesdeJSON = [...equipo]
    let equipoTemp = JSON.stringify(equipoDesdeJSON)
    localStorage.setItem("equipo", equipoTemp)
    enlistarPkm()
}
//------------------------------------------------------------MOSTRAR EQUIPO EN MODAL IMAGEN

const $mostrarEquipo = document.getElementById("showTeam")
$mostrarEquipo.addEventListener('click', mostrarEnModal)

//-------------------------------------------------------------

function mostrarEnModal() {
    if(equipoDesdeJSON.length === 0){
    Swal.fire('Primero debes agregar al menos un Pokemon a tu Equipo.')
    }
    else if(equipoDesdeJSON.length === 6){
    Swal.fire({
        title: 'Excelente!',
        text: 'Este es tu Equipo Pokemon.',
    })
    }
    else{
        Swal.fire({
            title: 'Vas realmente bien!',
            text: `Aun puedes agregar ${6 - equipoDesdeJSON.length} Pokemon a tu Equipo`,
        })
    }
    const $divPrueba = document.querySelector('.swal2-popup')
    $divPrueba.removeChild(document.querySelector('.swal2-actions'))
    equipoDesdeJSON.forEach(data => {
        const imgPkm = document.createElement('imgPkm')
        imgPkm.innerHTML = `<div>
        <h3 class="pokeName" style="text-align: center">${data.name.toUpperCase()}</h3>
        <img class="swal2-image" src="${data.sprites.front_default}" alt="Pokemon image" style="width: 200px; height: 200px; display: block; margin-left: auto; margin-rigth: auto; border-radius: 10px;"></div> `
        $divPrueba.appendChild(imgPkm)})
}

//-------------------------------------------------------------EQUIPO RANDOM

const $randomTeam = document.getElementById("randomTeam")
$randomTeam.addEventListener('click', randomTeam)

//-------------------------------------------------------------

async function randomTeam (){
    for(i = equipoDesdeJSON.length ; i < 6; i++){
    let numID = Math.floor(Math.random()*898) +1
    await fetch(`https://pokeapi.co/api/v2/pokemon/${numID}`)
        .then(resp => resp.json())
        .then(data => {addEquipo(data)})}
}
//-------------------------------------------------------------

enlistarPkm ()



