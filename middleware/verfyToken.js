/**packages */
const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = (req, res, next) => {
    let tk =req.headers["access-token"];
    if(tk){
        let secretkey = config.get("secretKeys").jwt;
        let tkDecoded = jwt.verify(tk, secretkey);
        let currentDate =  Math.floor(Date.now() / 1000);
        if(tkDecoded.exp >= currentDate){
            next();
        }else{
            return res.status(400).json({
                mess:"This token is not valid"
            });
        }
    }else{
        return res.status(400).json({
            mess:"Not access token set."
        })
    }
}