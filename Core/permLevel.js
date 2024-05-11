//Ici le but serait d'identifier simplement les autorisation des rôles.
class User{}

class Streamer extends User{}
class Modos extends User{}
class VIP extends Modos{}
class Subs extends VIP{}
class Followers extends Subs{}
class Lambda extends Followers{}

function compareLevel(level1, level2){
    if(level1===level2) return true; //Le deux sont au même niveau
    if(level2.prototype instanceof level1) return true; //level2 < level1
    if(level1.prototype instanceof level2) return false; //level1 < level2
    else return false; //Les level ont la même force mais sont différents.
}

module.exports = { User, Streamer, Modos, VIP, Subs, Followers, Lambda, compareLevel};