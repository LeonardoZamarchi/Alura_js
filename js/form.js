var botaoAdicionar = document.querySelector('#adicionar-paciente')

botaoAdicionar.addEventListener('click', function(event){
    event.preventDefault();
    
    var form = document.querySelector('#form-adiciona')
    var paciente = obtemPacienteFormulario(form)
    var pacienteTr = montaTr(paciente)    
    var tabela = document.querySelector('#tabela-pacientes')
    var erros = validaPaciente(paciente)

    if(erros.length > 0){
        exibeMsgErro(erros) 
        return        
    }
    
    tabela.appendChild(pacienteTr)

    form.reset()

    var msgErro = querySelector('#mensagens-erro')
    msgErro.innerHTML = ''
})


function obtemPacienteFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente
}

function montaTr(paciente) {
    var pacienteTr = document.createElement('tr')
    pacienteTr.classList.add('paciente')

    pacienteTr.appendChild(montaTd(paciente.nome,'info-nome'))
    pacienteTr.appendChild(montaTd(paciente.peso,'info-peso'))
    pacienteTr.appendChild(montaTd(paciente.altura,'info-altura'))
    pacienteTr.appendChild(montaTd(paciente.gordura,'info-gordura'))
    pacienteTr.appendChild(montaTd(paciente.imc,'info-imc')) 
    
    
    return pacienteTr   
}

function montaTd(dado, classe){
    var td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)

    return td
}

function validaPaciente(paciente){
    var erros=[]
    
    if(!paciente.nome.length){
        erros.push('Nome Inválido!')
    }
    if((!validaPeso(paciente.peso)) || (!paciente.peso.length)){
        erros.push('Peso Inválido!')
    }
    if((!validaAltura(paciente.altura))|| (!paciente.altura.length)){
        erros.push('Altura Inválida!')
    }
    if(!paciente.gordura.length){
        erros.push('Gordura Inválida!')
    }
    
    return erros
}

function exibeMsgErro(erros){
    var ul = document.querySelector('#mensagens-erro')
    ul.innerHTML=''
    erros.forEach(function(erro){
        var li = document.createElement('li')
        li.textContent = erro
        ul.appendChild(li)
    })
    return ul
}