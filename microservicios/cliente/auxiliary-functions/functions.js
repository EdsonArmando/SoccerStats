var CryptoJS = require("crypto-js");
const moment = require('moment');

const generatePassword = () => {
    let password = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYabcdefghilkmnopqrstuvwxyz0123456789@#$';

    for (i = 1; i <= 8; i++) {
        let char = Math.floor(Math.random() * str.length + 1);
        password += str.charAt(char)
    }
    return password;
}

const encrypt = (value) => {
    return CryptoJS.AES.encrypt(value, 'SiSaleSA_').toString();
}

const decrypt = (value) => {
    var bytes = CryptoJS.AES.decrypt(value, 'SiSaleSA_');
    return bytes.toString(CryptoJS.enc.Utf8);
}

const comparePassword = (password1, password2) => {
    const decryptPassword = decrypt(password2);
    console.log(password1, decryptPassword);

    return (password1 == decryptPassword) ? true : false;
}

module.exports = {
    generatePassword,
    encrypt,
    decrypt,
    comparePassword,
}