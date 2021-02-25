/**packages */
var CryptoJS = require("crypto-js");
const config = require("config");
const jwt = require("jsonwebtoken");

/**Encryp password*/
exports.EncrypPassword = (pasword) => {
    let secretKey = config.get("secretKeys").cryptojs;
    let encryptedPassword = CryptoJS.AES.encrypt(pasword, secretKey).toString();
    return encryptedPassword;

}

exports.DecryptedPassword = (cryptedPassword) => {
    let secretKey = config.get("secretKeys").cryptojs;
    let bytes = CryptoJS.AES.decrypt(cryptedPassword, secretKey);
    let originalPass = bytes.toString(CryptoJS.enc.Utf8);
    return originalPass;
}

exports.GenerateToken = (user) => {
    let secretKey = config.get("secretKeys").jwt;
    let token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + config.get("sessionTime"),
        data: {
            username:user.username,
            id:user._id,
            role:user.role
        }
      }, secretKey);
      return token;
}
