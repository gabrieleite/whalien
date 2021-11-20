function Enviar() {

    var nome = document.getElementById("nomeid");
    var data = document.getElementById("dataid");
    var hora = document.getElementById("horaid");

    if (nome.value != "") {
        alert('Olá ' + nome.value + ' sua reserva foi realizada com sucesso!! No dia ' + data.value + " às " + hora.value );
    }

}