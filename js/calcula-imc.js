var titulo = document.querySelector('h1')
var pacientes = document.querySelectorAll(".paciente")

for (var i = 0; i < pacientes.length;i++){
    var paciente = pacientes[i] 
    var tdPeso = paciente.querySelector('.info-peso')
    var peso = tdPeso.textContent

    var tdAltura = paciente.querySelector(".info-altura")
    var altura = tdAltura.textContent

    var tdImc = paciente.querySelector(".info-imc")

    var pesoValido = validaPeso(peso)
    var alturaValida = validaAltura(altura)

    var imc = ""

    

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

function validaPeso(peso){
    if(peso <= 0 || peso > 200){
        return false
    }else{
        return true
    }
}

function validaAltura(altura){
    if(altura <= 0 || altura > 3.00){
        return false
    }else{
        return true
    }
}