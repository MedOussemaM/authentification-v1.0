
const Joi =  require('joi')


const registerValidate = data => {
    const schema = Joi.object({
        firstname : Joi.string()
                       .required()
                       .min(4),
        lastname :  Joi.string()
                        .required()
                        .min(4),     
        email :     Joi.string()
                        .required()
                        .min(8),
        password :  Joi.string()
                       .required()
                       .min(8),                                        
    })
     return schema.validate(data)
}

const loginValidate = data => {
    const schema = Joi.object({    
        email :     Joi.string()
                        .required()
                        .min(8),
        password :  Joi.string()
                       .required()
                       .min(8),                                        
    })
     return schema.validate(data)
}

module.exports.registerValidate = registerValidate
module.exports.loginValidate = loginValidate