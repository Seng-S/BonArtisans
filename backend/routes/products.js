function addProduct(req, res) {
    const { name, type, price, rating, warranty_years, available } = req.body

    console.log( { name, type, price, rating, warranty_years, available } )

    res.send('add product success')

}

function getProducts(req, res) {
    res.send( [
            { "_id" : 1, "name" : "AC1 Phone1", "type" : "phone", "price" : 200.05, "rating" : 3.8,"warranty_years" : 1, "available" : true },
            { "_id" : 2, "name" : "AC2 Phone2", "type" : "phone", "price" : 147.21, "rating" : 1,"warranty_years" : 3, "available" : false },
            { "_id" : 3, "name" : "AC3 Phone3", "type" : "phone", "price" : 150, "rating" : 2,"warranty_years" : 1, "available" : true },
            { "_id" : 4, "name" : "AC4 Phone4", "type" : "phone", "price" : 50.20, "rating" : 3,"warranty_years" : 2, "available" : true }
        ] 
    )
}

function getProductbyId(req, res) {
    const { id } = req.params

    res.send( { } )
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

module.exports = {getProducts, updateProduct, addProduct, deleteProduct, getProductbyId}

