// codigo pros botões é ativado ao passar o mose pelo article de forma individual
function changeClass(button) {
        let button1 = document.getElementById('button1');
        let button2 = document.getElementById('button2');
        let button3 = document.getElementById('button3');
        let button4 = document.getElementById('button4');
        button.classList.remove('comprar');
        button.classList.add("comprar2");
}
function changeClassBack(button) {
        button.classList.add("comprar");
        button.classList.remove('comprar2');
}
// codigo pro modal chamado pelo clique no link de #funcionamento esse mostra o modal
function modalDisplay() {
        let modal = document.getElementById('modal');
        modal.classList.add('abrir');
}
//codigo pro modal chamado pelo clique no X esse fecha o modal 
function modalUndisplay() {
        let modal = document.getElementById('modal');
        modal.classList.remove('abrir');        
}
//o botao de fechar o modal funciona mas o de entrar em contato não ja que não havia
//instrução de pra onde ele deveria levar. 
