const axios = require('axios');
require('dotenv').config()
var qs = require('qs');

const instance = axios.create({
    baseURL: process.env.USER_DOMAIN,
    headers: {
        'Content-type': 'application/x-www-form-urlencoded',
    }
});

let API = {
    getToken: async () => {
        return instance.post('/services/oauth2/token',
            qs.stringify({
                grant_type: 'password',
                client_id: process.env.CLIENT_ID,
                client_secret: process.env.CLIENT_SECRET,
                username: process.env.USERNAME,
                password: process.env.PASSWORD + process.env.SECURITY_TOKEN
            })
        )
        .then(resp=>{
            return resp.data;
        })
        .catch(error=>{
            console.log( error.response );
        });
    }
}

module.exports = API;