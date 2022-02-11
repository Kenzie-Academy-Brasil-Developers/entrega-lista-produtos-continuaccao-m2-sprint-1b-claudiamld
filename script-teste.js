//CONSTRUINDO LISTA DE PRODUTOS
let valor;
let subtotal = 0;
const ul = document.querySelector('.containerListaProdutos ul')
const botaoMostrarHortifruti = document.querySelector('.estiloGeralBotoes--filtrarHortifruti')
const btnMostrarTodos = document.querySelector('.estiloGeralBotoes--mostrarTodos')
const botaoInput = document.querySelector('.estiloGeralBotoes--botaoBuscaPorNome')
const price = document.querySelector('#precoTotal')


//CRIANDO ELEMENTOS
function montarListaProdutos(listaProdutos) {
    ul.innerHTML = '';

    listaProdutos.forEach((produto) => {
        const li = document.createElement('li')
        const img = document.createElement('img')
        const h3 = document.createElement('h3')
        const p = document.createElement('p')
        const span = document.createElement('span')

        //Adicionando dados do produto aos elementos
        img.src = produto.img;
        img.alt = produto.nome;
        h3.innerText = produto.nome;
        p.innerText = produto.preco;
        span.innerText = produto.secao;

        //Adicionando elementos para o li
        li.appendChild(img)
        li.appendChild(h3)
        li.appendChild(p)
        li.appendChild(span)

        //Adicionando li ao HTML
        ul.appendChild(li)
        li.addEventListener('click', function(event){
            subtotal += produto.preco
            price.innerText = `${subtotal},00`
            console.log(subtotal)
        })
    });   
}

//FILTRANDO PRODUTOS POR SEÇÃO
function filtrarPorHortifruti() {
    const listaHortifruti = produtos.filter((produto) => {
        return produto.secao === 'Hortifruti'
    })
    montarListaProdutos(listaHortifruti)
}

function mostrarTodos() {
    montarListaProdutos(produtos)
}

function filtrarPorNome(value) {
    const listaNomes = produtos.filter((produto) => {
       return produto.nome.toLowerCase() === value.toLowerCase()
    })
    montarListaProdutos(listaNomes)
    console.log(listaNomes);
}

function mostrarInput() {
    let input = document.querySelector('#campoBuscaPorNome')
    valor = input.value
    filtrarPorNome(valor)
}

// function calcularPreco() {
//     const precoTotal = produtos.reduce((acc, curr) => acc + curr.) {

//     })
// }

botaoInput.addEventListener('click', mostrarInput)
btnMostrarTodos.addEventListener('click', mostrarTodos)
botaoMostrarHortifruti.addEventListener('click', filtrarPorHortifruti)

//TAREFAS
    // 1- CONSTRUINDO A LISTA DE PRODUTOS
    // 2 - ADICIONANDO OS FILTROS
    // 3 - CALCULANDO O PREÇO TOTAL


