const concluirTarefa = (atualiza, id) => {
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'))

    tarefasCadastradas[id].concluida = !tarefasCadastradas[id].concluida
    localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas))

    atualiza()
} 

const BotaoConclui = (atualiza, id) => {
    const botaoConclui = document.createElement('button')          //define um componente que cria um elemento botão
    botaoConclui.classList.add('check-button')
    botaoConclui.innerText = 'concluir'
    botaoConclui.addEventListener('click', () => concluirTarefa(atualiza,id))         //se o botão for clicado chama a função concluir tarefa         
    return botaoConclui
}


export default BotaoConclui