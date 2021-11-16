// Define a função criar tarefa:
const criarTarefa = (evento) => {
    // Apaga eventos prévios do parâmetro passado para a função:
     evento.preventDefault()
    // Procura o elemento correspondente ao input no formulário:
    const input = document.querySelector('[data-form-input]')
    // Guarda o conteúdo/valor do input dentro da constante "valor"
    const valor = input.value
    // Procura o elemento da lista usando seletor data atributs:
    const tarefa = document.querySelector('[data-task]')
    // Transforma o valor recebido no input em html:
    const conteudo = `<p class="content">${valor}</p>`
    // substitui o elemento da lista guardado na constante "tarefa" pelo conteúdo recebido no input
    tarefa.innerHTML = conteudo
    // zera o valor do input:
    input.value = ""
}

//define constante que procura o elemento com seletor "data-atributs" correspondente ao botão:
const novaTarefa = document.querySelector('[data-form-button]')

//adiciona um escutador de eventos ao botão anterior e, se o evento click acontecer, chama a função "criar tarefa"
novaTarefa.addEventListener('click', criarTarefa)
