require('dotenv').config()
const API = require('../api/api')

let authController = {

    getToken: async (req, res) => {
        API.getToken()
            .then(response => {
                console.log('=====',response);
                return response;
            });
    }

}

module.exports = authController;