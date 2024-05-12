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

//Extrait la commande et ses paramètre si patern reconnu
function tryInvocCommand(message){
	if((message.trim())[0]==='!'){
		words = message.split(" ");
		if(words.length==1) return {'commandName' : words[0]};
		if(words.length==2) return {'commandName' : words[0], 'param1' : words[1]};
		if(words.length>2) return {'commandName':words[0], 'param1':words[1], 'param2':words[2]};
	} else return;
}

//Une fonction qui détecte des mots clés qui ne sont pas des commandes.
function detectKeyword(){}

function addToUserDB(tags){
	
}


//MESSAGES ET COMMANDS '!'
//Il existe d'autre options que le 'message'. 
client.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	if(self) return;
	var commandParams = tryInvocCommand(message);
	//console.log(commandParams);
	if((commandParams != null) || (commandParams != undefined) ){
		if(commands.isCommand(commandParams.commandName.toLowerCase())) {
			commands.execute(channel,client,commandParams.commandName.toLowerCase(),tags,commandParams.param1,commandParams.param2);
		} else {
				console.log("La commande n'existe pas frérot.");
		}
	}

	addToUserDB(tags);
});

//RAIDS
const raid = require('./raids.js')
client.on('raided',(channel,username,viewers) => {
	raid.raider(client,channel,username,viewers);
});

//SUBS
client.on('subscription',(channel,username,methods,message,userstate)=>{})

//Comment ça se passe pour les follow ?
