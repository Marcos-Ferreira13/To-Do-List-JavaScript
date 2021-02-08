
// Capturando Valores 




let darkBtn = document.querySelector('.dark-mode');
let search = document.querySelector("#search-btn");
let div = document.querySelector(".annotation-content");
let replace = document.querySelector('.content-replace')
let replaceInput = document.querySelector('#replace')
let replaceButton = document.querySelector('.save')
let span = document.querySelector('.sub')


let inputAnotacao = document.getElementsByClassName("anotation-input")[0];

let inputAnotacaoReplace = document.getElementsByClassName("anotation-input")[1];



// Funções
function gerarID (){
    return Math.floor(Math.random() * 10000);
    
}


var criarLi = function(inputAnotacao){
    if(inputAnotacao.value.trim().length!==0){
        
        var li = document.createElement('li');
        let divIcons = document.createElement('div');
        divIcons.classList.add('icons')
        var btnEdit = document.createElement('i');
        btnEdit.id = "btnEdit"
        var btnExcluir = document.createElement('i');
        btnExcluir.id = "btnExcluir";
        
        btnExcluir.innerHTML = '<i class="fas fa-trash"></i>';
        li.id = gerarID();

        var idTarefa = li.getAttribute('id')
        
        btnExcluir.setAttribute('onclick',`excluir(${idTarefa})`)
        btnEdit.setAttribute('onclick',`editar(${idTarefa})`)
        btnEdit.innerHTML = '<i class="fas fa-edit"></i>';
        li.textContent = inputAnotacao.value;
       
        li.classList.add('annotation');
        divIcons.appendChild(btnEdit);
        divIcons.appendChild(btnExcluir);
        li.appendChild(divIcons);
        return li;
        
       
    }else{
        alert("Campo vazio, digite algo!")
    }
    
}



function excluir(idTarefa){
    var liRemove = document.getElementById(`${idTarefa}`)
    div.removeChild(liRemove);
   
}    


function editar(idTarefa){
    replace.classList.add('show-replace');
    
    span.innerHTML = `${idTarefa}`
    replaceButton.addEventListener('click',function(){
       
        var liEdit = document.getElementById(`${idTarefa}`)
        
        var novaLi = criarLi(inputAnotacaoReplace);
        div.replaceChild(novaLi,liEdit);
        inputAnotacaoReplace.value = ""
    
        replace.classList.remove('show-replace')
    })
    
}    



//Eventos


search.addEventListener('click',function(){
    var novaLi = criarLi(inputAnotacao);
    div.appendChild(novaLi);
    inputAnotacao.value = ""
});
btnExcluir.addEventListener('click',excluir())

btnEdit.addEventListener('click',editar());













