const UserModel = require('../models/modelUser')

module.exports.login = (req, res) => {
  let { loginName, loginPassword } = req.body
  UserModel.findOne({ userName: loginName }, 'userName userEmail userPassword', (err, user) => {
    if (err) {
      console.log('invalid login')
      return res.send(401).send('invalid login')
    } else {
      let passwordCheck = bcrypt.compare(loginPassword, user.userPassword)
      if (passwordCheck) {
        req.session.userId = user._id
        let userData = {
          userName: user.userName,
          userEmail: user.userEmail
        }
        return res.send(userData)
      } else {
        console.log('invalid password')
        return res.send(400).send('invalid password')
      }
    }
  })
};

module.exports.signup = async (req, res) => {
  // check email
  const candidate = await UserModel.findOne({email: req.body.userEmail})


  const newUser = new UserModel({
    name: req.body.userName,
    email: req.body.userEmail,
    password: req.body.userPassword,
    phone: bcrypt.hashSync(req.body.userPhone, bcrypt.genSaltSync(5))
  })

  newUser.save()
    .then((user) => {
      console.log('User succesfully created')
      let userData = {
        userName: user.userName,
        userEmail: user.userEmail
      }
      res.send(userData)
    })

}

module.exports.logout = (req, res) => {
  req.session.destroy()
  res.sendStatus(200)
}