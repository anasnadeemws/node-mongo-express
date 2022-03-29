require('dotenv').config();

module.exports = {
    domain: process.env.DOMAIN,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    audience: process.env.AUDIENCE,
    grantType: process.env.GRANT_TYPE,
    connection: process.env.CONNECTION,
    secret: process.env.secret,
    frontendClientId: process.env.FRONTEND_CLIENT_ID,
    frontendGrantType: process.env.FRONTEND_GRANT_TYPE,
    apiAudience: process.env.API_AUDIENCE
};
