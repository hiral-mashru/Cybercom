module.exports = {
    secret: "mashru",
    //default: algorithm: 'HS256'
    expiresIn: 60*10, // (second) 10 min 
    notBefore:  1, // after 1 sec we'll be able to use this token value
    audience: "site-users",
    issuer: "hiral mashru",
    algorithm: "HS384"
}