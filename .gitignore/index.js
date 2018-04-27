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
  if (messageReaction.emoji.id == "435457840086384650") {
    messageReaction.message.guild.members.get(user.id).addRole("434689676519931904");
  }
});
client.on('messageReactionRemove', (messageReaction, user) => {
  if (messageReaction.emoji.id == "435457840086384650") {
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
  if (messageReaction.emoji.id == "435463189770010644") {
    messageReaction.message.guild.members.get(user.id).addRole("420634390234660868");
  }
});
client.on('messageReactionRemove', (messageReaction, user) => {
  if (messageReaction.emoji.id == "435463189770010644") {
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
// Fondation Aether
client.on('messageReactionAdd', (messageReaction, user) => {
  if (messageReaction.emoji.id == "435461435666202626") {
    messageReaction.message.guild.members.get(user.id).addRole("435461651592904715");
  }
});
client.on('messageReactionRemove', (messageReaction, user) => {
  if (messageReaction.emoji.id == "435461435666202626") {
    messageReaction.message.guild.members.get(user.id).removeRole("435461651592904715");
  }
});


// Ready 
client.on('ready', () => {
	client.user.setPresence({game: {name: `${prefix}help - kuzakiibot.xyz | Joue à ${client.guilds.size} serveurs`, type: 2}})
  console.log('Je suis prêt !');
});

// Salut 
client.on('message', message => {
  if (message.content === 'Salut')
    message.reply('salut :p')
  if (message.content === 'yo')
    message.channel.send('plait')
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
if(message.content.startsWith(prefix + "serverinfo")){
    var embed1 = new Discord.RichEmbed()
    .setTitle("Information du Serveur")
    .addField("Nom du Serveur", message.guild.name)
    .addField("Utilisateur", message.guild.members.size)
    .addField("Salon", client.channels.size)
    .addField("Région", message.guild.region)
    .addField("Crée le", message.guild.createdAt)
    .addField("Créateur du Serveur", message.guild.owner)
    .addField("Rôles", message.guild.roles.size)
    .setFooter("Kυzαkıı-вσт ©️ 2018")
    .setThumbnail(message.guild.iconURL)
    message.channel.send(embed1);
  }
         if (message.content.startsWith(prefix +"say")) {
                    message.delete(message.author)
                    message.channel.send(message.content.substr(prefix.length+4))
            }
if (message.content === (prefix + "help")){
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

