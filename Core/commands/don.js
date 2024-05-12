const { Lambda, Streamer, Modos, VIP, Subs, Followers } = require('../permLevel.js')
const level = Lambda;
const type = ['info']; 
const desc = 'Simple description of the command';

function code(channel,client,tags,param1,param2){
    client.say(channel,`Tu veux m'faire un don ? 😳 : https://streamlabs.com/brokholy`)
}

module.exports = {level, type, desc, code};