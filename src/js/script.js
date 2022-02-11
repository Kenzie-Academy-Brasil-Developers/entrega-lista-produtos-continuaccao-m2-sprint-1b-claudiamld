//TAREFAS
//a) Criar um botão para cada card, para adicionar o produto ao carrinho --> OK
//b) Listar os nutrientes do produto --> OK obs.:último item não existente do leite retornando undefined
//c) Filtrar no campo de busca por nome do produto, categoria e seção --> OK
//f) Mostrar produtos na tela assim que carregar a página --> OK
//d) Implementar a funcionalidade do carrinho
//e) Preço total sobre todos os produtos adicionados ao carrinho

//SELECIONANDO ELEMENTOS
let cart = []
let valor;
let subtotal = 0;
const ul = document.querySelector('.containerListaProdutos ul')
const botaoMostrarHortifruti = document.querySelector('.estiloGeralBotoes--filtrarHortifruti')
const btnMostrarTodos = document.querySelector('.estiloGeralBotoes--mostrarTodos')
const botaoInput = document.querySelector('.estiloGeralBotoes--botaoBuscaPorNome')
const price = document.querySelector('#precoTotal')
const divCarrinho = document.querySelector("#carrinho ul")
const precoTotal = document.querySelector('#precoTotal')


//CRIANDO ELEMENTOS



function montarListaProdutos(listaProdutos) {
    ul.innerHTML = '';

    listaProdutos.forEach((produto) => {
        const li = document.createElement('li')
        const img = document.createElement('img')
        const h3 = document.createElement('h3')
        const p = document.createElement('p')
        const span = document.createElement('span')
        const button = document.createElement('button')

        const ol = document.createElement('ol')
        const primeiroComponente = document.createElement('li')
        const segundoComponente = document.createElement('li')
        const terceiroComponente = document.createElement('li')
        const quartoComponente = document.createElement('li')

        //Adicionando dados do produto aos elementos
        img.src = produto.img;
        img.alt = produto.nome;
        h3.innerText = produto.nome;
        p.innerText = produto.preco;
        span.innerText = produto.secao;
        button.innerText = 'Adicionar ao carrinho'
        button.id = `botao-${produto.id}`
        primeiroComponente.innerText = produto.componentes[0]
        segundoComponente.innerText = produto.componentes[1]
        terceiroComponente.innerText = produto.componentes[2]
        
        //Adicionando elementos para a ol
        ol.appendChild(primeiroComponente)
        ol.appendChild(segundoComponente)
        ol.appendChild(terceiroComponente)
        
        if(produto.componentes.length > 3) {
            ol.appendChild(quartoComponente)
            quartoComponente.innerText = produto.componentes[3]
        }
        //Adicionando elementos para o li
        li.appendChild(img)
        li.appendChild(h3)
        li.appendChild(p)
        li.appendChild(span)
        li.appendChild(button)
        li.appendChild(ol)

        //Adicionando li ao HTML
        ul.appendChild(li)
        const btnAdd = document.querySelector(`#botao-${produto.id}`)
        btnAdd.addEventListener('click', function() {
            adicionarProdutoCarrinho(produto)
        })
    });   
}
        
montarListaProdutos(produtos)

function adicionarProdutoCarrinho(product) {
        cart.push(product)
        subtotal += product.preco
        renderizarCarrinho(cart)
}

function renderizarCarrinho(cart) {
    subtotal = 0
    divCarrinho.innerHTML = '';

    cart.forEach((produto) => {
        const li = document.createElement('li')
        const img = document.createElement('img')
        const h3 = document.createElement('h3')
        const p = document.createElement('p')
        const span = document.createElement('span')

        const ol = document.createElement('ol')
        const primeiroComponente = document.createElement('li')
        const segundoComponente = document.createElement('li')
        const terceiroComponente = document.createElement('li')
        const quartoComponente = document.createElement('li')

        //Adicionando dados do produto aos elementos
        img.src = produto.img;
        img.alt = produto.nome;
        h3.innerText = produto.nome;
        p.innerText = produto.preco;
        span.innerText = produto.secao;
        primeiroComponente.innerText = produto.componentes[0]
        segundoComponente.innerText = produto.componentes[1]
        terceiroComponente.innerText = produto.componentes[2]
        quartoComponente.innerText = produto.componentes[3]
        quartoComponente.classList.add('lastChild')

        //Adicionando elementos para a ol
        ol.appendChild(primeiroComponente)
        ol.appendChild(segundoComponente)
        ol.appendChild(terceiroComponente)
        ol.appendChild(quartoComponente)

        //Adicionando elementos para o li
        li.appendChild(img)
        li.appendChild(h3)
        li.appendChild(p)
        li.appendChild(span)
        li.appendChild(ol)

        //Adicionando li ao HTML
        divCarrinho.appendChild(li)

        subtotal += Number(produto.preco)

        precoTotal.innerHTML = `${subtotal},00`    
    });   
}

renderizarCarrinho(cart)

//FILTRANDO PRODUTOS POR HORTIFRUTI
function filtrarPorHortifruti() {
    const listaHortifruti = produtos.filter((produto) => {
        return produto.secao === 'Hortifruti'
    })
    montarListaProdutos(listaHortifruti)
}

function mostrarTodos() {
    montarListaProdutos(produtos)
}

//FILTRANDO PRODUTOS PELO INPUT
function filtrarBtnBuscar(value) {
    const valorBuscar = produtos.filter((produto) => {
        if(produto.nome === value) {
            return produto.nome
        }
        if(produto.secao === value) {
            return produto.secao
        }
        if(produto.categoria === value) {
            return produto.categoria
        }
    })
    montarListaProdutos(valorBuscar)
}

//PEGANDO VALOR DO INPUT
function mostrarInput() {
    let input = document.querySelector('.campoBuscaPorNome')
    valor = input.value
    filtrarBtnBuscar(valor)
    console.log(valor);
}


//INTERCEPTANDO EVENTOS
botaoInput.addEventListener('click', mostrarInput)
btnMostrarTodos.addEventListener('click', mostrarTodos)
botaoMostrarHortifruti.addEventListener('click', filtrarPorHortifruti)

// function calcularPreco() {
//     const precoTotal = produtos.reduce((acc, curr) => acc + curr.) {

//     })
// }