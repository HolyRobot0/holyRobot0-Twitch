const authorization = ['lambda'];
const type = ['fun'];
const desc = 'Say hello to the person who invoc the command';

function code(channel,client,user){
    client.say(channel,`Coucou ${user.username} !!`)
}


module.exports = {authorization, type, desc, code};