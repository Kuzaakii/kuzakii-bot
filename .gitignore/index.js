const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "+"

// Team Aqua
client.on('messageReactionAdd', (messageReaction, user) => {
  if (messageReaction.emoji.id == "434691524417290241") {
    messageReaction.message.guild.members.get(user.id).addRole("420634223997747211");
  }
});
client.on('messageReactionRemove', (messageReaction, user) => {
  if (messageReaction.emoji.id == "434691524417290241") {
    messageReaction.message.guild.members.get(user.id).removeRole("420634223997747211");
  }
});
// Team Rocket
client.on('messageReactionAdd', (messageReaction, user) => {
  if (messageReaction.emoji.id == "434696132422008843") {
    messageReaction.message.guild.members.get(user.id).addRole("434689676519931904");
  }
});
client.on('messageReactionRemove', (messageReaction, user) => {
  if (messageReaction.emoji.id == "434696132422008843") {
    messageReaction.message.guild.members.get(user.id).removeRole("434689676519931904");
  }
});
// Team Magma
client.on('messageReactionAdd', (messageReaction, user) => {
  if (messageReaction.emoji.id == "434695319783997440") {
    messageReaction.message.guild.members.get(user.id).addRole("434693665080737796");
  }
});
client.on('messageReactionRemove', (messageReaction, user) => {
  if (messageReaction.emoji.id == "434695319783997440") {
    messageReaction.message.guild.members.get(user.id).removeRole("434693665080737796");
  }
});
// Team Galaxie 
client.on('messageReactionAdd', (messageReaction, user) => {
  if (messageReaction.emoji.id == "434697176027758593") {
    messageReaction.message.guild.members.get(user.id).addRole("420634390234660868");
  }
});
client.on('messageReactionRemove', (messageReaction, user) => {
  if (messageReaction.emoji.id == "434697176027758593") {
    messageReaction.message.guild.members.get(user.id).removeRole("420634390234660868");
  }
});
// Team Plasma
client.on('messageReactionAdd', (messageReaction, user) => {
  if (messageReaction.emoji.id == "434697844650278912") {
    messageReaction.message.guild.members.get(user.id).addRole("434694027246567424");
  }
});
client.on('messageReactionRemove', (messageReaction, user) => {
  if (messageReaction.emoji.id == "434697844650278912") {
    messageReaction.message.guild.members.get(user.id).removeRole("434694027246567424");
  }
});
// Team Flare
client.on('messageReactionAdd', (messageReaction, user) => {
  if (messageReaction.emoji.id == "434697845241806869") {
    messageReaction.message.guild.members.get(user.id).addRole("434694392310398976");
  }
});
client.on('messageReactionRemove', (messageReaction, user) => {
  if (messageReaction.emoji.id == "434697845241806869") {
    messageReaction.message.guild.members.get(user.id).removeRole("434694392310398976");
  }
});
// Team Skull
client.on('messageReactionAdd', (messageReaction, user) => {
  if (messageReaction.emoji.id == "434697844910194689") {
    messageReaction.message.guild.members.get(user.id).addRole("434694666835722240");
  }
});
client.on('messageReactionRemove', (messageReaction, user) => {
  if (messageReaction.emoji.id == "434697844910194689") {
    messageReaction.message.guild.members.get(user.id).removeRole("434694666835722240");
  }
});


// Ready 
client.on('ready', () => {
	client.user.setGame('prefix + help - kuzakiibot.com');
  console.log('Je suis prêt !');
});

// Salut 
client.on('message', message => {
  if (message.content === 'Salut') {
    message.reply('salut :p');
  }
   if(message.content.startsWith(prefix + "avatar")){
    var mentionned = message.mentions.users.first();
    if(mentionned){
        var avatar = mentionned.avatarURL;
    } else {
        var avatar = message.author.avatarURL;
    }
    message.channel.send("", {embed: {
      color: 0xFF7777,
      image: {
        url:avatar,
}}})}
 if (message.content.startsWith(prefix + "serverinfo")){
    var embed1 = new Discord.RichEmbed()
    .setTitle("ServerInformaion")
    .addField("Server Name", message.guild.name)
    .addField("users", client.users.size)
    .addField("channels", client.channels.size)
    .addField("region", message.guild.region)
    .addField("creation at", message.guild.createdAt)
    .addField("Owner Of Server", message.guild.owner)
    .addField("Roles", message.guild.roles.size)
    .addField("users", client.users.size)
    .setFooter("This Will Updated from time to other")
    .setThumbnail(message.guild.iconURL)
    message.channel.send(embed1);
  }
         if (message.content.startsWith(prefix +"say")) {
                    message.delete(message.author)
                    message.channel.send(message.content.substr(prefix.length+4))
            }
if ( message.content === (prefix + "help")){
    message.channel.send("", {embed: {
    color: 0xFF7777,
    title: "Commande:",
    description: `prefix : ${prefix}`,
    fields: [{
      name: "Utilitaire:",
      value: `${prefix}avatar - Permet de voir votre avatar ou celui d'un utilisateur mentionné.\n${prefix}invite - Rejoindre mon serveur.\n${prefix}help - Affiche la liste de commandes.\n*help - Permet d'utiliser le bot musique. \n${prefix}serverinfo - Donnes des informations sur le serveur.`  ,
	  
    },{
      name: "Fun(OFF):",
      value: `${prefix}chien (OFF) - Envoie des images aléatoires de chiens.\n${prefix}chat - Envoie des images aléatoires de chats`,
}]}})} 
    if(message.content === (prefix + 'invite')){
		var InvitePerm = ['ADMINISTRATOR', 'MANAGE_ROLES', 'KICK_MEMBERS', 'BAN_MEMBERS', 'MANAGE_MESSAGES'];
		client.generateInvite(InvitePerm)
		  .then(link => {
			  message.channel.send({
				  embed: {
					  type: 'rich',
					  color: 0xFF7777,
					  title: 'Clique ici pour rejoindre mon serveur !',
					  description: `[Invite](${link})`,
}})})} 
if(message.content === prefix + "chien" ){
  const randomPuppy = require("random-puppy");
  randomPuppy().then(chien => {
    message.channel.send("", {embed: {
      color: 0xFF7777,
      image: {
        url: chien,
}}})})} 

 if( message.content === prefix + "chat" ) {
  const randomCat = require("random-cat");
    message.channel.send("", {embed: {
      color: 0xFF7777,
      image: {
        url: randomCat.get(),
    }}})};
    });

client.login(process.env.TOKEN);
