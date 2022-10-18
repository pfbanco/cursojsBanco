# cursojsBanco
Intente hacer una app que simule una Pokedex.
El usuario puede:
1- Buscar Pokémon por su nombre o por su id (a través del botón "BUSCAR") y luego agregarlo al equipo (a través del botón "Agregar al equipo" dentro de la tarjeta del Pokémon).
2- Así también puede eliminar del equipo los Pokémon agregados uno x uno lo que permite perfeccionar el equipo o probar alternativas (a través del botón "Sacar del Equipo" en la tarjeta del Pokémon).
3- Existe la posibilidad de generar en su totalidad o terminar el equipo en proceso de manera aleatoria (a través del botón "Generar Equipo Aleatoriamente").
4- Se puede mostrar el equipo en un modal dependiendo de la cantidad de miembros del equipo arrojará un msj diferente (a través del botón "Mostrar equipo").

Los datos se obtienen de una API (https://pokeapi.co/)
ESTA API TIENE UNA BASE DE DATOS DE 898 PKM POR LO QUE SI NO SABE EL NOMBRE DE NINGUN PKM PUEDE BUSCARLOS USANDO UN NUMERO DE 1 a 828
Para las alertas se usó SweetAlert 2

Las mayores dificultades:
Fueron agregar un id (idGlo) particular a cada Pokémon para eliminar de a uno.
Luego que el idGlo se mantenga luego de una actualizacion.
Manejar las funciones con parametros y argumentos.
