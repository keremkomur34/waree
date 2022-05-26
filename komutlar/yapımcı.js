const Discord = require('discord.js'); 
const client = new Discord.Client(); 
exports.run = (client, message) => { if 
  (message.channel.type !== 'dm') 
{ const ozelmesajkontrol = new Discord.MessageEmbed() 
.setColor("36393F") 
.setTimestamp() 
.setAuthor(`${client.user.username}`, 
           client.user.avatarURL) 
.setDescription(`**Sahip:** <@852614976534609940>\n**Coder:** <@852614976534609940>\n**Yardımcı: <@946451151023394886>**\n**Tester:** <@425716693659025418> `); 

 message.channel.send(ozelmesajkontrol) } }; 

exports.conf = { 
enabled: true,
guildOnly: false,
aliases: ['yapımcım','yapımcı','yapımcılarım','yapımcılar','credits','credit',],
permLevel: 0 

}; 

exports.help = {

name: 'yapımcım', 
description: 'Yapımcımı ve yardımcılarımı gösterir.', 
usage: 'yapımcım' 

};
