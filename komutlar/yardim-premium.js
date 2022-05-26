const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  const ware = new Discord.MessageEmbed()

  .setTitle('Ware BOT - PREMIUM Bilgi Menüsü') //başlığınız.

  .setColor('RED') // Embed Rengi

  .addField('1.','Fiyat: **4,99TL**') //Yardım Komutlarınız

  .setThumbnail(client.user.avatarURL())

  .addField('2.','Alınan **PREMIUM** üyelikler sınırsızdır.')

  .addField('3.','**PREMIUM** hakkında sorun yaşarsanız +destekal PREMIUM')
  
  .addField('4.','**PREMIUM** hakkında detaylı bilgiler discord destek adresimizde. +destekal PREMIUM')
  
  .setImage('https://cdn.discordapp.com/attachments/970567056179204151/972219530912862238/standard_1.gif')

  .setFooter('Ware BOT®️ - PREMIUM Yardım Menüsü - 2022')

  message.channel.send(ware)

 

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['yardım-pre', 'yardım-premium'],

  permLevel: 0,

};

exports.help = {

  name: 'yardım-premium',

  usage: "+yardım-premium"

};