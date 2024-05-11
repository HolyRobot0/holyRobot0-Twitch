const PATH = './commands/'

class Commands {

    commands = {
        '!hello' : require(`${PATH}hello.js`),
        '!coucou' : require(`${PATH}coucou.js`)
    }


    isCommand(command){
        return this.commands.hasOwnProperty(command);
    }

    execute(channel,client,command,tags, param1 = undefined, param2 = undefined){
        this.commands[command].code(channel,client, tags, param1, param2);
    }

}

module.exports = Commands;