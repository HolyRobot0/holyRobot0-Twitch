const { Lambda, Streamer, Modos, VIP, Subs, Followers } = require('../permLevel.js')
const level = Streamer; //streamer > modos > vip > subs > followers > lambda
const type = ['easter-egg']; //info, fun, easter-egg, etc....
const desc = 'Simple description of the command';

function code(channel,client,tags,param1,param2){ //Param1 et 2 ne sont pas obligatoires
    client.disconnect()
        .then((data) => {
            // data returns [server, port]
            console.log("Déconnection du tchat.")
        }).catch((err) => {
            //
        });

}


module.exports = {level, type, desc, code};