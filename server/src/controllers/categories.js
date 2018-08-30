module.exports.categories = (req, res) => {
  mongoClient.connect('mongodb://yuriy:kldu57nv@ds121461.mlab.com:21461/art_products', (err, client) => {
    client.db('art_products').collection('products').findOne({products: {$type: 'array'}}, 'products', (err, result) => {
      res.send(result)
    })
  })
}