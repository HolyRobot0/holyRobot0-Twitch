const authorization = ['lambda']; //streamer > modos > vip > subs > followers > lambda
const type = ['easter-egg']; //info, fun, easter-egg, etc....
const desc = 'Simple description of the command';

function code(channel,client,user,param1,param2){ //Param1 et 2 ne sont pas obligatoires
    client.say(channel,`Ptdr t ki ${user.username} ?`)
}


module.exports = {authorization, type, desc, code};