const mongoClient = require("mongodb").MongoClient

module.exports.menu = (res, req) => {
  //header menu
  mongoClient.connect('mongodb://yuriy:kldu57nv@ds121461.mlab.com:21461/art_products', (err, client) => {
    client.db('art_products').collection("main_menu").find({}).toArray(function(err, datadb) {
      datadb.forEach(function(item) {
        res.send(item.main_menu)
        client.close()
      })
    })
  })
}