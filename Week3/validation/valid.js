
//validations
//regex:- regular expression used for checking similiar patterns
//email validatation
const validEmail = (email)=>{
    return email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
}
//password validation
const validPass=(password)=>{
    return password.match( /^[a-zA-Z0-9!@#$%^&*]{6,16}$/)
}
//mobile validation
const validPhone = (moblie)=>{
    return moblie.match(/^\d{10}$/)
}
module.exports = {validEmail, validPass, validPhone}