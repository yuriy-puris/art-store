module.exports.checkout = (req, res) => {
  UserModel.findOne({ _id: req.session.userId }, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      if( result === null ) {
        res.set('Set-Cookie','login=false', {expires: -1})
      } else {
        res.set('Set-Cookie','login=true')
      }
    }
  })
}