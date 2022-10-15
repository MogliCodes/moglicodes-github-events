const { schedule } = require('@netlify/functions');

console.log('SERVERLESS')

const handler = async function(event, context) {
    console.log("Received event:", event);
    console.log('SERVERLESS')
    return {
        statusCode: 200,
    };
};

exports.handler = schedule("* * * * *", handler);
