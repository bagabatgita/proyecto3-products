const Products= require('../models/products.models')


const findAllProducts = async() => {
    const products = await Products.findAll()
    return products

}

const findProductById = async(id) => {
    const data = await Products.findOne({
        where: {
            id:id
        }
    })
    return data
}

const createProduct = async(productObj) => {
    const newproduct = await Products.create({
        name: productObj.name,
        description: productObj.description,
        price: productObj.price,
        stock: productObj.stock
    })
    return newproduct
}

const updateProduct = async(id, productObj) => {
    const selectedProduct = await Products.findOne({
        where: {
            id: id
        }
    })
    
    if(!selectedProduct) return null

    const modifiedProduct = await selectedProduct.update(productObj)
    return modifiedProduct
    
}

const deleteProduct = async(id) => {
    const product = await Products.destroy({
        where: {
            id: id
        }
    })
    return product // 1 || 0
}

module.exports = {
    findAllProducts,
    findProductById,
    createProduct,
    updateProduct,
    deleteProduct
}
