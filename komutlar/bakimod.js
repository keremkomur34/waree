const Discord = require('discord.js');
const database = require('quick.db');

exports.run = async (client, message, args) => {
if(message.author.id !== '852614976534609940') return;

function gönderkardesim(content) {
const infoEmbed = new Discord.MessageEmbed()
.setColor('BLUE')
.setDescription(content)
.setTimestamp()
.setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }));
return message.channel.send(infoEmbed)
};

const durum = await database.fetch(client.user.id);
if(durum == true) {

await database.delete(client.user.id);
return gönderkardesim('Bakım artık sona erdi! Artık herkes komutları kullanabilir.');

                                                                 // <a:839442360583716904:935528245527461980> Bu şekilde emoji idsini yazıp emoji ekleyebilirsiniz 
} else {

await database.set(client.user.id, true);
database.set(client.user.id+':)', {
author: message.author,
time: Date.now()
});

return gönderkardesim('Bakım modu açıldı.\nArtık <@852614976534609940> dışında kimse komutları kullanamayacak.');
};

                                                // <a:839442360583716904:935528245527461980> Bu şekilde emoji idsini yazıp emoji ekleyebilirsiniz 

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bakım'],
  permLevel: 0
};
 
exports.help = {
  name: 'bakım-modu',
    description: 'bakım'
};