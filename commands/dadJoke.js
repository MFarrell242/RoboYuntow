const  client = require('tmi.js');

const axios = require('axios');

const dadJoke = function() {
    axios.get(
        URL= 'https://icanhazdadjoke.com'
    ).then(res => {
        client.say(target, res.joke);
    }).catch(err=>{
        client.say(target, 'Joke machine broke, sorry!');
    });
}

exports.dadJoke = dadJoke;