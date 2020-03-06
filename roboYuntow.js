const dotenv = require('dotenv').config();
const tmi = require('tmi.js');
const dadJoke = require('./commands/dadJoke');

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

function onMessageHandler(target, context, msg, self) {
    if (self) {return;}

    const command = msg.trim();

    switch (command) {
        case "!joke":
            dadJoke;
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
