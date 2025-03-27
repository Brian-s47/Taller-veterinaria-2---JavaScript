// *******************************  Zona De Funciones **********************************
// ****  Funcion de Ingresar Mascota nueva ****
function ingresarMascota(){
    let nuevaMascota = {
        nombre: "",
        especie: "",
        edad: "",
        peso: "",
        estadoSalud: ""
    }
    nuevaMascota.nombre = window.prompt(`Favor ingresar el Nombre de su mascota: (Solo Letras)`)
    nuevaMascota.especie = window.prompt(`Favor ingresar la especie de su mascota: 
    Ejemplo: Perro, Gato, Pez...`)
    nuevaMascota.edad = window.prompt(`Favor ingresar la edad de su mascota: `)
    nuevaMascota.peso = window.prompt(`Favor ingresar el peso en Kg su mascota: `)
    nuevaMascota.estadoSalud = window.prompt(`Favor ingresar el estado de salud de su mascota: `)

    setTimeout(() => {
        console.log(`Iniciando proceso de Registro de Mascota...`);
        console.log(nuevaMascota);        
        return (nuevaMascota);
    }, 9000);
}
// ****  Funcion Para mostrar todas las mascotas ingresadas ****
function listarMascotas(){
    for(let i = 0; i < mascotas.length; i++){
            window.alert(`Mascota #${i+1}
            Nombre: ${mascotas[i].nombre}
            Especie: ${mascotas[i].especie}
            Edad: ${mascotas[i].edad}
            Peso: ${mascotas[i].peso}
            Estado De Salud: ${mascotas[i].estadoSalud}`)
    }
}
// ****  Funcion Para Buscar mascota por nombre ****
function buscarMascota(){
    let nombre = prompt(`Favor ingresar el Nombre que desea buscar: (Solo Letras)`)
    for(let i = 0; i < mascotas.length; i++){
        if (mascotas[i].nombre === nombre){
            setTimeout(() => {
                window.alert("Consultando en la base de datos...");
            }, 3000);
            window.alert(`Informacion encontrada:
            Nombre: ${mascotas[i].nombre}
            Especie: ${mascotas[i].especie}
            Edad: ${mascotas[i].edad}
            Peso: ${mascotas[i].peso}
            Estado De Salud: ${mascotas[i].estadoSalud}`)
        }else{
            alert("La mascota no fue encontrada")
        }
    }
}
// ****  Funcion Para Actualizar estado de salud de la mascota por nombre ****
function actualizarMascota(){
    let nombre = prompt(`Favor ingresar el Nombre que desea Modificar Su estado de salud: (Solo Letras)`)
    for(let i = 0; i < mascotas.length; i++){
        if (mascotas[i].nombre === nombre){
            let nuevoEstado = window.prompt(`Favor ingresar el estado de salud de su mascota: `)
            mascotas[i].estadoSalud = nuevoEstado
            setTimeout(() => {
                window.alert("Veterinario Se encuentra actualizando el registro...");
            }, 5000);
            window.alert(`Informacion Actualizada:
            Nombre: ${mascotas[i].nombre}
            Estado De Salud: ${mascotas[i].estadoSalud}`)
        }else{
            alert("La mascota no fue encontrada")
        }
    }
}
// ****  Funcion Para Eliminar mascota por nombre ****
function EliminarMascota(){
    let nombre = prompt(`Favor ingresar el Nombre que desea Eliminar: (Solo Letras)`)
    for(let i = 0; i < mascotas.length; i++){
        if (mascotas[i].nombre === nombre){
            mascotas.splice(i, 1)
            window.alert(`La mascota ${nombre} Fue eliminada`)
        }else{
            alert("La mascota no fue encontrada")
        }
    }
}
// ****  Funcion Para Menu principal del sistema ****
function iniciarSistema(){
    let opcionMenu
    do{
        opcionMenu = prompt(`Favor ingresar la opcion que desea realizar del siguiente menu:
        1. Registrar una nueva mascota,. 
        2. Listar todas las mascotas registradas. 
        3. Buscar una mascota por nombre.
        4. Actualizar el estado de salud de una mascota.
        5. Eliminar una mascota por nombre.
        6. Salir del programa.`
        );
        switch (opcionMenu){
            case "1":
                let nuevaMascota = ingresarMascota();
                mascotas.push(nuevaMascota);
                setTimeout(() => {
                    window.alert("Iniciando proceso de Registro de Mascota...");
                }, 5000);
                window.alert("La mascota se a ingresado correctamente");
                break;
            case "2":
                // window.alert("Listar mascotas");
                listarMascotas()
                break;
            case "3":
                // window.alert("Buscar Mascota");
                buscarMascota()
                break;
            case "4":
                // window.alert("Actualizar estado de mascota");
                actualizarMascota()
                break;
            case "5":
                // window.alert("Eliminar Mascotas");
                EliminarMascota()
                break;
            case "6":
                window.alert("Gracias por usar nuestro sistema");
                break;
        }
    }while (opcionMenu !== "6");
} 

// *******************************  Zona De Variables ********************************************
let mascotas = [];  

// *******************************  Zona de Codigo de ejecucion **********************************
iniciarSistema();
