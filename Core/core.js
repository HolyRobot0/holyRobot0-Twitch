//The core of HolyRobot0
console.log("C'EST OK ????????")
const { BOTNAME, SECRET_TOKEN } = require('./auth.js');
const tmi = require('tmi.js');

const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: BOTNAME,
		password: SECRET_TOKEN
	},
	channels: [ 'BrokHoly' ]
});

client.connect();

client.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	if(self) return;

	if(message.toLowerCase() === '!hello') {
		// "@alca, heya!"
		client.say(channel, `@${tags.username}, heya!`);
	}
});