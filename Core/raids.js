function raider(client,channel,username,viewers){
    switch(username){
        case 'lashyza' : {
            client.say(channel,`OUE SALUT SHYZA !! OMGGGG Z'ÊTES ${viewers} ?! bruh`);
            client.say(channel,`Si vous la connaissez pas allez la suivre !! https://www.twitch.tv/lashyza
            https://www.twitch.tv/lashyza
            https://www.twitch.tv/lashyza`);
            break;
        }
        case 'lvcyd' : {
            client.say(channel,`OMGGGG COUCOU LVCYD !! SALUT WAW VOUS ÊTES ${viewers} ?!?!`);
            client.say(channel,`Ici c'est team BROCOLIS !! Si vous êtes pas d'accord on vous mets des PATATES !!`);
            client.say(channel,`Allez la suivre ceux qui connaissent pas oh : 
            https://www.twitch.tv/lvcyd
            https://www.twitch.tv/lvcyd
            https://www.twitch.tv/lvcyd`);
            break;
        }
        case 'alfgoto' : {
            client.say(channel,`Un instant.... Je crois bien qu'un légende vient de nous raid....`);
            client.say(channel,`MERCI ALF !!! Et coucou à tes ${viewers} viewers !!`);
            client.say(channel,`https://www.twitch.tv/alfgoto
            https://www.twitch.tv/alfgoto
            https://www.twitch.tv/alfgoto`)
        }
        case 'holyrobot0' : {
            client.say(channel,`C'est le monde à l'envers là ${username} D:`);
            client.say(channel,`Avec tes ${viewers} viewers là... et bah...`);
            client.say(channel,`https://www.twitch.tv/holyrobot0
            https://www.twitch.tv/holyrobot0
            https://www.twitch.tv/holyrobot0`);
            break;
        }
        default : { client.say(channel,`Merci pour le raid ${username} !! Et bienvenue à tes ${viewers} viewers !!`); break; }
    }

}

module.exports = {raider}