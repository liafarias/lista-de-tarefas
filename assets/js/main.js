const criarTarefa = document.querySelector('.criarTarefa');
const listaTarefas = document.querySelector('.listaTarefas')
const btnAddTarefa = document.querySelector('.btnAddTarefa');

function limparLista(){
    criarTarefa.value = '';
}

const criarItem = (tarefas, status='') => {
    const item = document.createElement('label');
    item.classList.add('tarefa');
    item.innerHTML = `
    <div class="tarefa">
        <ul><li><input class="check" type="checkbox">
        <div class="item">${tarefas}</div>
        <button class="btnDel" onclick><i class="fa fa-trash"></i></button></il></ul>
    </div>
    `
    document.getElementById('listaTarefas').appendChild(item);

    limparLista();
};

btnAddTarefa.addEventListener('click', function(){
    if(!criarTarefa.value && criarTarefa.value < 5) return;
    criarItem(criarTarefa.value);
});

criarTarefa.addEventListener('keypress', function(event){
    if(event.keyCode === 13){
        if(!criarTarefa.value) return;
    criarItem(criarTarefa.value);
    }
});

document.addEventListener('click', function(e){
    const el = e.target;
    if(el.classList.contains('btnDel')){
        el.parentElement.remove();
    }
});
