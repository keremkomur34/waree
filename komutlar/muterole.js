const Discord = require('discord.js');
const database = require('quick.db');

exports.run = async (client, message, args) => {// can#0002

if(!message.member.hasPermission('MANAGE_MESSAGES')) return;
if(!args[0]) return message.channel.send('Bir rol etiketlemen gerekli!');

if(args[0] === 'olustur') {
  
message.guild.roles.create({ data: { name: args.slice(1).join(' ') || 'muted', color: '#f4424b' }}).then(role => {
role.setPermissions(0);
message.channel.send("✔ İşlem başarılı! Bazı değişiklikler uygulanıyor! Bu işlem birkaç saniye sürebilir!").then(() => {
let arrayed = message.guild.channels.cache.filter(a => a.type === 'text').array();

var okay = 0;

for(const key in arrayed) {
arrayed[key].overwritePermissions([{
id: role.id,
deny: ['SEND_MESSAGES', 'ADD_REACTIONS'],
}], 'Muterole updated by '+message.author.tag);
okay++;
};
database.set(`carl-mute-role.${message.guild.id}`, role.id);
return message.channel.send("İşlem başarılı! **"+role.name+"** oluşturuldu **with** "+okay+" 0 hata ile. ");

});
});
};

if(!args[0] === 'olustur') {
let role = message.guild.roles.cache.get(args[0]) || message.mentions.roles.first() || message.guild.roles.cache.find(a => a.name.toLowerCase().includes(args.slice(0).join(' ').toLowerCase()))
if(!role) return message.channel.send('Role "'+args.slice(0).join(' ')+'" not found.');

database.set(`carl-mute-role.${message.guild.id}`, role.id);
return message.channel.send(`**${role.name}** mute rolü olarak ayarlandı.`);
};

}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['muterol','muterolü','mutelirolü','mute-rolü'],
  permLevel: 0
};
 
exports.help = {
  name: 'muterole'
};// codare ♥