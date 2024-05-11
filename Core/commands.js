class Commands {

    commands = {
        '!hello' : require('./commands/hello.js')
    }


    isCommand(command){
        return this.commands.hasOwnProperty(command);
    }

    execute(channel,client,command,tags){
        console.log(tags)
        this.commands[command].code(channel,client, tags);
    }

}

module.exports = Commands;