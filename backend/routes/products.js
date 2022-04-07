function addProduct(req, res) {
    const { name, type, price, rating, warranty_years, available } = req.body

    console.log( { name, type, price, rating, warranty_years, available } )

    res.send('add product success')

}

function getProduct(req, res) {
    res.send( { "_id" : 1, "name" : "AC1 Phone1", "type" : "phone", "price" : 200.05, "rating" : 3.8,"warranty_years" : 1, "available" : true } )
}

function updateProduct(req, res) {
    const { id } = req.params
    const { name, type, price, rating, warranty_years, available } = req.body

    console.log( "trying to update product with id: ", id, "with the following data: " )

    console.log( { name, type, price, rating, warranty_years, available } )

    res.send('update product success')
}

function deleteProduct(req, res) {

    const { id } = req.params

    console.log( "trying to delete product with id: ", id )

    console.log( { id } )

    res.send('delete product success')

}

module.exports = {getProduct, updateProduct, addProduct, deleteProduct}
