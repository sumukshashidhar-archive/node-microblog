const jwt = require('jsonwebtoken')
const fs = require("fs");
const path = require("path");

const publicKeyPath = path.join(__dirname, "./../keys/public.pem");
const privateKeyPath = path.join(__dirname, "./../keys/private.pem");

// key imports
const publicKEY = fs.readFileSync(publicKeyPath, "utf-8");
const privateKEY = fs.readFileSync(privateKeyPath, "utf-8");

// options
const jENV = require("./../config/tokenOptions");

module.exports = {
    verification: async function (token) {
        return new Promise(async (resolve, reject) => {
            jwt.verify(token, publicKEY, jENV.verifyOptions, function (
                err,
                decodedToken
            ) {
                if (err) {
                    logger.error(err)
                    resolve(false);
                } else {
                    resolve(decodedToken);
                }
            });
        });
    },

    signing: function (user_id) {
        return jwt.sign(
            {
                user_id: user_id
            },
            privateKEY,
            jENV.signOptions
        );
    }
}