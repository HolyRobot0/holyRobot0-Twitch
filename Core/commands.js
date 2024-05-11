const PATH = './commands/'
const { Lambda, Streamer, Modos, VIP, Subs, Followers, compareLevel } = require('./permLevel.js')

class Commands {

    commands = {
        '!hello' : require(`${PATH}hello.js`),
        '!coucou' : require(`${PATH}coucou.js`),
        '!infouser' : require(`${PATH}infoUser.js`),
        '!shutdown' : require(`${PATH}shutdown.js`)
    }


    isCommand(command){
        return this.commands.hasOwnProperty(command);
    }

    asEnoughLevel(channel,tags,level){
        console.log(tags.username, " & ", level, " & ", channel)
        if(tags.username === channel.replace("#", "")) return compareLevel(Streamer,level);
        if(tags.mod) return compareLevel(Modos,level);
        //if(tags.)
        compareLevel(Lambda,level);
    }

    execute(channel,client,command,tags, param1 = undefined, param2 = undefined){
        if(this.asEnoughLevel(channel,tags,this.commands[command].level)){ //Ici il faut que l'utilisateur ai le niveau de permission d'executer la commande.
            this.commands[command].code(channel,client, tags, param1, param2);
        }
    }

}

module.exports = Commands;