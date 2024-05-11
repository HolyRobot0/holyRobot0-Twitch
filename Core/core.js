//The core of HolyRobot0
const { BOTNAME, SECRET_TOKEN } = require('./auth.js');
const tmi = require('tmi.js');
const Commands = require('./commands.js');
const commands = new Commands();

const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: BOTNAME,
		password: SECRET_TOKEN
	},
	channels: [ 'BrokHoly' ]
});

client.connect();

//Il existe d'autre options que le 'message'. 
client.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	if(self) return;

	if(message.toLowerCase() === '!hello') {
		// "@alca, heya!"
		// client.say(channel, `@${tags.username}, heya!`);
		if(commands.isCommand('!hello')){
			commands.execute(channel,client,'!hello',tags);
		} else {
			console.log("La commande n'existe pas frérot.")
		}
	}
	// console.log(tags)
});
