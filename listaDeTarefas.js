// Define a função criar tarefa:
const criarTarefa = (evento) => {
    evento.preventDefault()                                         // Apaga eventos prévios do parâmetro passado para a função:
    
    const lista = document.querySelector('[data-list]')             // Procura o elemento que contém a lista:
    const input = document.querySelector('[data-form-input]')       // Procura o elemento correspondente ao input no formulário:
    const valor = input.value                                       // Guarda o conteúdo/valor do input dentro da constante "valor"

    const tarefa = document.createElement('li')                     // Cria um elemento do tipo li
    tarefa.classList.add('task')                                    // Acessa a lista de classes e adiciona uma classe
    const conteudo = `<p class="content">${valor}</p>`              // Transforma o valor recebido no input em html:
    
    tarefa.innerHTML = conteudo                                     // acessa o conteúdo da tarefa e troca pelo recebido no input
    tarefa.appendChild(BotaoConclui())                              // adiciona o novo botão como filho da tarefa
    lista.appendChild(tarefa)                                       // adiciona o conteúdo da tarefa na lista
    input.value = ""                                                // zera o valor do input:
}


const novaTarefa = document.querySelector('[data-form-button]')    //define constante que procura o elemento com seletor "data-atributs" correspondente ao botão
novaTarefa.addEventListener('click', criarTarefa)                  //adiciona um escutador de eventos ao botão anterior e, se o evento click acontecer, chama a função "criar tarefa"

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