
let arrayTheJSON = [];
let newArrayJson = [];

function enviarDatos() {
    let name = document.getElementById("name").value;
    let apellidos = document.getElementById("apellidos").value;
    let telephone = document.getElementById("telefono").value;
    let paises = document.getElementById("paises").value;
    let field = document.getElementById("field").value;

    let jsonTexto = {
        'nombre': name,
        'apellidos': apellidos,
        'telephone': telephone,
        'paises': paises,
        'field': field
    };

    arrayTheJSON.push(jsonTexto);

    console.log(jsonTexto);
}

function consultarDatos() {

    let paisesSelect = document.getElementById('selectPais').value;
    console.log(paisesSelect);

    newArrayJson = arrayTheJSON.filter((e) => e.paises == paisesSelect);

    alert(JSON.stringify(newArrayJson));
}