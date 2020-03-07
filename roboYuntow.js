const dotenv = require('dotenv').config();
const tmi = require('tmi.js');
const axios = require('axios');

const opts = {
    identity: {
        username: process.env.BOT_USERNAME,
        password: process.env.OAUTH_TOKEN
    },
    channels: [
        process.env.CHANNEL_NAME
    ]
};

const client = new tmi.client(opts);

client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

client.connect();

function onMessageHandler(target, context, message, self) {
    if (self) {return;}

    const command = message.trim();

    switch (command) {
        case "!joke":
            // axios.get('https://icanhazdadjoke.com')
            //     .then(function(response){
            //         client.say(target, `joke machine broke, sorry`)})
            //     .catch(function(err) {
            //         console.log(err);
            // });
            client.say(target, "joke machine broke.");
            break;
        case "!credits":
            client.say(target, 'this bot was made by viewer Butts Buttington! PRAISE BE TO BUTTS!');
            break;
        default:
            return;
    }
}

function onConnectedHandler(addr, port) {
    console.log(`* connected to ${addr}:${port}`);
}

// const dadJoke = function(target) {
//     axios({
//         method:'get',
//         url: 'https://icanhazdadjoke.com'
//     }).then(res => {
//         client.say(target, res.joke);
//     }).catch(err=>{
//         console.log(err);
//         return('Joke machine broke, sorry!');
//     });
// };
