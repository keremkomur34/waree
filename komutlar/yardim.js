const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  const ware = new Discord.MessageEmbed()

  .setTitle('Ware BOT - Yardım Menüsü') //başlığınız.

  .setColor('BLUE') // Embed Rengi
  
  .addField('Destek Sunucusu:','https://discord.gg/BG5X6Jj2jw')

  .addField('Yardım Komutları','**Ware BOT**') //Yardım Komutlarınız

  .setThumbnail(client.user.avatarURL())

  .addField('Genel Komutlar','+yardım-genel')

  .addField('Moderasyon Komutlar','+yardım-moderasyon')

  .addField('Eğlence Komutları','+yardım-eğlence')

  .addField('Premium Komutları','+yardım-premium')
  
  .setImage('https://cdn.discordapp.com/attachments/970567056179204151/972219530912862238/standard_1.gif')

  .setFooter('Ware BOT®️ - Yardım Menüsü - 2022')

  message.channel.send(ware)

 

};

exports.conf = {

  enabled: true,

  guildOnly: true,

  aliases: ['help', 'YARDIM', 'HELP', 'yardim'],

  permLevel: 0,

};

exports.help = {

  name: 'yardım',

  usage: "+yardım"

};