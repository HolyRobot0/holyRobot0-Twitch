const { Lambda, Streamer, Modos, VIP, Subs, Followers } = require('../permLevel.js')
const level = Lambda;
const type = ['fun'];
const desc = 'Say hello to the person who invoc the command';

function code(channel,client,tags){
    client.say(channel,`Coucou ${tags.username} !!`)
}


module.exports = {level, type, desc, code};