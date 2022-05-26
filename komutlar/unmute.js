const Discord = require('discord.js');
const database = require('quick.db');

exports.run = async (client, message, args) => {// can#0002

if(!message.member.hasPermission('MANAGE_MESSAGES')) return;

const muteRoleFetch = await database.fetch(`carl-mute-role.${message.guild.id}`);
if(!muteRoleFetch) return message.channel.send('Bu sunucu ``MUTE`` rolüne sahip değil!, oluşturmak için `!muterole ` ya da `!muterole create [name]` yazarak bir tane oluşturabilirsin.');

if(!args[0]) return message.channel.send(`\`\`\`${message.content.split('unmute')[0]}unmute  [reason]
      ^^^^^^^^
member is a required argument that is missing.\`\`\``);

let member = message.guild.members.cache.get(args[0]) || message.mentions.members.first() || message.guild.members.cache.find(a => message.guild.members.cache.get(a.user.id).nickname && a.nickname.toLowerCase().includes(args[0].toLowerCase())) || message.guild.members.cache.find(a => a.user.username.toLowerCase().includes(args[0].toLowerCase()))
if(!member) return message.channel.send(`Üye "${args[0]}" bulunamadı.`);
member.roles.remove(muteRoleFetch).then(() => {
return message.channel.send('Başarıyla **unmute** atıldı! **'+member.user.tag+'**');
})
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['un-mute','susturmakaldir','susturmakaldır','susturma-kaldır','susturma-kaldir'],
  permLevel: 0
};
 
exports.help = {
  name: 'unmute'
};// codare ♥