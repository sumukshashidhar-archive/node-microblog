const jwt = require('jsonwebtoken')
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
    },


}