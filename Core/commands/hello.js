const authorization = ['lambda'];
const type = ['fun'];
const desc = 'Say hello to the person who invoc the command';

function code(channel,client,tags){
    client.say(channel,`Coucou ${tags.username} !!`)
}


module.exports = {authorization, type, desc, code};