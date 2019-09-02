let idInicial = 1

function autoID() {
    return idInicial++
}

let produtos = [
    {
        id: autoID(),
        nome: 'Samsung Galax S10',
        fabricante: 'Samgung',
        preco: 4000,
    },
    {
        id:autoID(),
        nome: 'MI 9',
        fabricante: 'Xiaomi',
        preco: 1500,
    },
    {
        id:autoID(),
        nome: 'Iphone X',
        fabricante: 'Apple',
        preco: 9000,
    }
]

const getProduto =  (id) => {
    if (!id){
        return produtos
    } else {
        let produto = produtos.filter( (produto) => produto.id == id)

        return produto ? produto : null
    }
}

const postProduto = obj => {
    let novoObj = {
        id: autoID(),
        ...obj
    }
    produtos.push(novoObj)
    return novoObj
}

const deleteProduto = id => {
    let produtosSelecionados = produtos.filter(produto => produto.id != id)
    let produtoDeletado = produtos.filter(produto => produto.id == id)
    produtos = produtosSelecionados
    return produtoDeletado
}

const alterarProduto = (id, dados) => {
    const index = produtos.findIndex(produto => produto.id == id)
    if (index < 0) return null    
    const produtoAlterado = {
        ...produtos[index],
        ...dados
    }

    produtos.splice(index, 1, produtoAlterado)
    return produtoAlterado
}

module.exports = { getProduto, postProduto, deleteProduto, alterarProduto }