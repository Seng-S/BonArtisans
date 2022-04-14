const express = require('express')
const app = express()
const port = 3000

const {getProducts, updateProduct, addProduct, deleteProduct, getProductbyId} = require('./routes/products.js')

app.use(express.urlencoded( {extended: false} ))
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/product', addProduct)
app.get('/products', getProducts)
app.get('/product/:id', getProductbyId)
app.put('/product/:id', updateProduct)
app.delete('/product/:id', deleteProduct)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

