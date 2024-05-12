const { Lambda, Streamer, Modos, VIP, Subs, Followers } = require('../permLevel.js')
const level = Lambda;
const type = ['info']; 
const desc = 'Envoie le lien du Discord';

function code(channel,client,tags,param1,param2){
    client.say(channel,`Lien du Discord : https://discord.gg/C5nmFeUUmb`)
}

module.exports = {level, type, desc, code};