const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "÷"

client.on('ready', () => {
	client.user.setGame('÷help - kuzakiibot.com');
  console.log('Je suis prêt !');
});

client.on('guildMemberAdd', member => {
  let guild = member.guild;
  guild.channels.get("420314176020545548").send(`${member.user} a rejoint !`);
});

client.on('guildMemberRemove', member => {
  let guild = member.guild;
  guild.channels.get("420314176020545548").send(`${member.user.username} a quitté !`);
});

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
    .setTitle("Information du Serveur")
    .addField("Nom du Serveur", message.guild.name)
    .addField("Salon", client.channels.size)
    .addField("region", message.guild.region)
    .addField("creation at", message.guild.createdAt)
    .addField("Créateur", message.guild.owner)
    .addField("Roles", message.guild.roles.size)
    .addField("Utilisateurs", client.users.size)
    .setFooter("This Will Updated from time to other")
    .setThumbnail(message.guild.iconURL)
    message.channel.send(embed1);
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
      name: "Fun:",
      value: `${prefix}chien - Envoie des images aléatoires de chiens.\n${prefix}chat - Envoie des images aléatoires de chats`,
}]}})} 
    if(message.content === (prefix + 'invite')){
		var InvitePerm = ['ADMINISTRATOR', 'MANAGE_ROLES', 'KICK_MEMBERS', 'BAN_MEMBERS', 'MANAGE_MESSAGES'];
		client.generateInvite(InvitePerm)
		  .then(link => {
			  message.channel.send({
				  embed: {
					  type: 'rich',
					  color: 0xFF7777,
					  title: 'Invitation',
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
