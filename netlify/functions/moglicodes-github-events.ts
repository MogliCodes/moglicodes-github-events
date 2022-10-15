const { schedule } = require('@netlify/functions');
import { $fetch } from 'ohmyfetch'

console.log('SERVERLESS OUTSIDE')

const handler = async function(event, context) {
    const { users } = await $fetch('https://api.github.com/users/MogliCodes/events')
    console.log('users', users)

    console.log("Received event:", event);
    console.log('SERVERLESS INSIDE')
    return {
        statusCode: 200,
    };
};

exports.handler = schedule("* * * * *", handler);
