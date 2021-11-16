const BotaoConclui = () => {
    const botaoConclui = document.createElement('button')          //define um componente que cria um elemento botão
    botaoConclui.classList.add('check-button')
    botaoConclui.innerText = 'concluir'
    botaoConclui.addEventListener('click', concluirTarefa)         //se o botão for clicado chama a função concluir tarefa         
    return botaoConclui
}

const concluirTarefa = (evento) => {
    const botaoConclui = evento.target                             // seleciona o alvo do evento
    const tarefaCompleta = botaoConclui.parentElement              // seleciona o pai do elemento que foi clicado
    tarefaCompleta.classList.toggle('done')                        // acessa a lista de classes e o método toggle coloca ou retira a classe "done"
}

export default BotaoConclui