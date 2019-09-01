const produtos = [
    {
        id: 1,
        nome: 'Samsung Galax S10',
        fabricante: 'Samgung',
        preco: 4000,
    },
    {
        id:2,
        nome: 'MI 9',
        fabricante: 'Xiaomi',
        preco: 1500,
    },
    {
        id:3,
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

const postProduto = (obj) => {
    produtos.push(obj)
    return obj 
}


module.exports = { getProduto, postProduto }
