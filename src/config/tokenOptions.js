module.exports = {
    issuer: "node-micro auth service",
    signOptions: {
        issuer: "node-micro auth service",
        expiresIn: "24h",
        algorithm: "RS512",
    },
    verifyOptions: {
        issuer: "node-micro auth service",
        expiresIn: "24h",
        algorithm: "RS512",
    },
};