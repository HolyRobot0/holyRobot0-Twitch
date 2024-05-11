const authorization = ['lambda'];
const type = ['fun'];
const desc = 'Say hello to the person who invoc the command';

function code(channel,client,tags,param1){
    if(param1!=undefined){
        client.say(channel,`Hey ${param1} !! ${tags.username} te dis bonjouuuur !`)
    } else {
        client.say(channel,`Tu dis coucou à personne là mon gâté ${tags.username}`)
    }
}

module.exports = {authorization, type, desc, code};