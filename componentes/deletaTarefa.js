const deletarTarefa = (atualiza, id) => {
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'))
    const index = id
    tarefasCadastradas.splice(index, 1)    //.splice é um método de array e portanto funciona para o localStorage, elimina a partir do índice "index" apenas 1 item
    localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas))

    atualiza()
}

const BotaoDeleta = (atualiza, id) => {
    const botaoDeleta = document.createElement('button')
    botaoDeleta.innerText = 'Deletar'
    botaoDeleta.addEventListener('click', ()=> deletarTarefa(atualiza, id))

    return botaoDeleta
}

export default BotaoDeleta