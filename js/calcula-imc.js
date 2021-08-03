var titulo = document.querySelector('h1')
var pacientes = document.querySelectorAll(".paciente")

for (var i = 0; i < pacientes.length;i++){
    var paciente = pacientes[i] 
    var tdPeso = paciente.querySelector('.info-peso')
    var peso = tdPeso.textContent

    var tdAltura = paciente.querySelector(".info-altura")
    var altura = tdAltura.textContent

    var tdImc = paciente.querySelector(".info-imc")

    var pesoValido = true
    var alturaValida = true

    var imc = ""

    if(peso <= 0 || peso > 200){

        pesoValido = false
    }
    if(altura <= 0 || altura > 3.00){

        alturaValida = false
    }

    if (alturaValida && pesoValido){
        var imc= calculaImc(peso,altura)
        tdImc.textContent = imc
    }
    else{
        imc = "Inválido!"        
        tdImc.textContent = imc
        paciente.classList.add("paciente-invalido")
    }
}



function calculaImc(peso,altura) {
    var imc = 0
    
    imc = peso/(altura*altura)
    return imc.toFixed(2)
}