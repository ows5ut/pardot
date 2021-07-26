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


// curl --location --request POST 'https://mart.my.salesforce.com/services/oauth2/token' \
// --header 'Content-Type: application/x-www-form-urlencoded' \
// --data-urlencode 'grant_type=password' \
// --data-urlencode 'username=ows5ut-aj03@force.com' \
// --data-urlencode 'password=12348765V2CgneDfsZYuNxx29nn0fL3tF' \
// --data-urlencode 'client_id=3MVG9SOw8KERNN09cesmLO4.5XwgchJyMl1d2W.CfMd_DBiJhG3UYyZcjjU.iM1jQf2KWoIzX9WxcJ3c70nPx' \
// --data-urlencode 'client_secret=3D281686ED1186E2C6FAE506611654E8E8627DA089CFCB105226DE5E8FCBD08A'