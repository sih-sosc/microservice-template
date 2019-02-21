/**
 * Express middleware to check if the key exists in the request header
 * provide service only if the authentication key exists
 */

module.exports = function (req, res, next) {
    const auth_key = req.get("AUTH_KEY");

    // check if the request header has the AUTH_KEY set
    if (auth_key && auth_key === process.env.AUTH_KEY) {
        // if yes, authenticate
        next()
    } else {
        // if no AUTH_KEY or missmatch, reject
        return res.status(401)
            .json({
                'message': 'unauthenticated request, missing auth key'
            });
    }
}