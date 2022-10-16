const { schedule } = require('@netlify/functions');
import fetch from 'node-fetch'

const API_ENDPOINT = "https://api.github.com/users/MogliCodes/events"

const handler = async function(event, context) {
    return fetch(API_ENDPOINT)
        .then(response => response.json())
        .then( data => {
            console.log('DATAAA', data[0].id)
            try {
                return {
                    statusCode: 200,
                }
            } catch (error) {
                console.log(error)
                return {
                    statusCode: 400,
                }
            }
        })
        .catch(error => ({ statusCode: 422, body: String(error) }));



};

exports.handler = schedule("* * * * * *", handler);
