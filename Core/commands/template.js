const { Lambda, Streamer, Modos, VIP, Subs, Followers } = require('../permLevel.js')
const level = Lambda; //streamer > modos > vip > subs > followers > lambda
const type = ['easter-egg']; //info, fun, easter-egg, etc....
const desc = 'Simple description of the command';

function code(channel,client,tags,param1,param2){ //Param1 et 2 ne sont pas obligatoires
    client.say(channel,`Ptdr t ki ${tags.username} ?`)
}


module.exports = {level, type, desc, code};