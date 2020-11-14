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

    signing: function (username, role, name, grade, section) {
        return jwt.sign(
            {
                username: username,
                role: role,
                name: name,
                grade: grade,
                section: section,
            },
            privateKEY,
            jENV.signOptions
        );
    },


}