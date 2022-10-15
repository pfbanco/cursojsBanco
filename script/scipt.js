let equipoDesdeJSON = JSON.parse(localStorage.getItem("equipo")) || []
let idGlo = 0

//------------------------------------------------------------LO NECESARIO PARA BUSCAR EL POKEMON Y MOSTRARLO EN PANTALLA

const $formPmk = document.getElementById("buscador")
const $pkmBuscado = document.getElementById("namePokemon")
const $pokedexContainer = document.getElementById("pokemon-container")
$formPmk.addEventListener("click", buscarPokemon)

//------------------------------------------------------------FUNCION BUSCADORA

function buscarPokemon (e){
    e.preventDefault()
    let buscarPkm = $pkmBuscado.value.toLowerCase()
    fetch(`https://pokeapi.co/api/v2/pokemon/${buscarPkm}`)
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
            alert(`Pokemon no encontrado, compruebe que el nombre de su Pokemon esté bien escrito.`)})
        }

//------------------------------------------------------------USO BOTON PARA AGREGAR AL EQUIPO Y MOSTRARLO EN PANTALLA

const $btnAdd = document.getElementById("addPokemon")
const $equipoContainer = document.getElementById("contenedor-equipo")
$btnAdd.addEventListener('click', addEquipo)

//------------------------------------------------------------FUNCION PARA AGREGAR AL EQUIPO Y MOSTRAR EN PANTALLA

function addEquipo(){
    if(equipoDesdeJSON.length === 6){
        Swal.fire({
            icon: 'error',
            title: 'Tu equipo está completo!',
            footer: 'Haz espacio en tu  equipo para tu nuevo Pokemon'
        })
    }else{
    let pkmAPushear = Object.assign({}, pkmEnArray) 
    idGlo++
    pkmAPushear["paraEliminar"] = idGlo
    equipoDesdeJSON.push(pkmAPushear)
    }
    let equipoTemp = JSON.stringify(equipoDesdeJSON)
    localStorage.setItem("equipo", equipoTemp)
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
    Swal.fire({
        title: 'Excelente!',
        text: 'Este es tu equipo Pokemon.',
    })
    const $divPrueba = document.querySelector('.swal2-popup')
    $divPrueba.removeChild(document.querySelector('.swal2-actions'))
    equipoDesdeJSON.forEach(data => {
        const imgPkm = document.createElement('imgPkm')
        imgPkm.innerHTML = `<div><img class="swal2-image" src="${data.sprites.front_default}" alt="Pokemon image" style="width: 200px; height: 200px; display: block; margin-left: auto; margin-rigth: auto; border-radius: 10px;"></div> `
        $divPrueba.appendChild(imgPkm)})
}

//-------------------------------------------------------------

enlistarPkm ()