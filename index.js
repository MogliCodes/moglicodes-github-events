const cron = require('node-cron');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));



async function fetchData(){
    const response = await fetch('https://api.github.com/users/MogliCodes/events')
    const data = await response.json();
    console.log('users', data)
}

cron.schedule('* * * * * *', function() {
    fetchData()
});
