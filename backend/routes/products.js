const {db} = require('../infra/connection')
const {Product} = require('../infra/product')

function addProduct(req, res) {
    const { name, type, price, rating, warranty_years, available } = req.body

    Product.insertMany( [ { 
        name, 
        type, 
        price, 
        rating, 
        warranty_years, 
        available
    } ])

    console.log( { name, type, price, rating, warranty_years, available } )

    res.send('add product success')

}

async function getProduct(req, res) {

    const results = await Product.find( {} )

    res.send(results)
}

async function updateProduct(req, res) {
    const { id } = req.params
    const { name, type, price, rating, warranty_years, available } = req.body

    const filter = { _id: id };
    const update = { 
        name, 
        type, 
        price, 
        rating, 
        warranty_years, 
        available
    };

    await Product.findOneAndUpdate(filter, update)

    console.log( "trying to update product with id: ", id, "with the following data: " )

    console.log( { name, type, price, rating, warranty_years, available } )

    res.send('update product success')
}

async function deleteProduct(req, res) {

    const { id } = req.params

    const filter = { _id: id };

    console.log( "trying to delete product with id: ", id )

    await Product.findOneAndDelete(filter)

    console.log( { id } )

    res.send('delete product success')

}

module.exports = {getProduct, updateProduct, addProduct, deleteProduct}

