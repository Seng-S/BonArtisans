const express = require('express')
const app = express()
const port = 3000

const {getProduct, updateProduct, addProduct, deleteProduct} = require('./routes/products.js')

app.use(express.urlencoded( {extended: false} ))
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/products', getProduct)
app.post('/product', addProduct)
app.put('/product/:id', updateProduct)
app.delete('/product/:id', deleteProduct)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

