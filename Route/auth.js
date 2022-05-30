const router = require('express').Router()
const bcrypt = require('bcrypt')

const User = require('../model/User')
const { registerValidate, loginValidate } = require('../validate')



router.post('/register' , async (req, res) => {

const { error } = registerValidate(req.body)
if(error) return res.status(400).send(error.details[0].message)

const emailExist = await User.findOne({email : req.body.email})
if(emailExist) return res.status(400).send('Email Already Exist')


const hashPassword = await bcrypt.hash(req.body.password, 10)

const user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: hashPassword,
    date: req.body.date
})
try {
    const savedUser = await user.save();
    res.send({ user: user._id });

}catch(err){
    res.status(400).send(err);
}


});

router.post('/login', async(req, res) => {
    const { error } = loginValidate(req.body)
if(error) return res.status(400).send(error.details[0].message)

const user = await User.findOne({email: req.body.email})
if(!user) return res.status(400).send('Email is not exist')

const validPassword = await bcrypt.compare(req.body.password, user.password)
if(!validPassword) res.status(400).send('Pass Invalid')

res.send('Logged IN')

})

module.exports = router




