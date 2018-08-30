module.exports.purchase = (req, res) => {
  let actualUserId = req.session.userId,
    date = new Date(),
    dateString = date.getDate()  + "-" + (date.getMonth()+1) + "-" + date.getFullYear() + " " +
      date.getHours() + ":" + date.getMinutes();

  let UserPurchases = {
    products: req.body.purchases,
    totalAmount: req.body.totalSumm,
    userId: actualUserId,
    date: date
  }
  mongoClient.connect('mongodb://yuriy:kldu57nv@ds121461.mlab.com:21461/art_products', (err, client) => {
    client.db('art_products').collection('purchased_products').insertOne(UserPurchases)
    res.sendStatus(200)
  })
}