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
}*/

let numero = Number(prompt("Bienvenido a la ruleta pokemon, ingrese un numero del 0 al 10 para ver con que Pokemon se queda."))

let pokemon = ["PIKACHU", "CHARMANDER", "MEWTWO", "LUGIA", "TOTODILE", "CYNDAQUIL", "CHIKORITA", "EEVEE", "SQUIRTLE", "MEW", "ENTEI" ];

for (let i = 0; i < pokemon.length; i++) {
    if (i === numero) {
        alert(pokemon[i]);
        break
    }
}