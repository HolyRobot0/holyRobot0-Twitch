const { Lambda, Streamer, Modos, VIP, Subs, Followers } = require('../permLevel.js')
const level = Modos;
const type = ['info','modération'];
const desc = `Affiche les information de l'utilisateur demandé dans le tchat`;

function code(channel,client,tags,param1){ 
    if(param1===undefined) console.log("Aucun utilisateur spécifié.");
    client.say(channel,`Infos sur ${param1} : 
    ...`)
}


module.exports = {level, type, desc, code};