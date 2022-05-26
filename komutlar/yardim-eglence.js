const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  const ware = new Discord.MessageEmbed()

  .setTitle('Ware BOT - Eğlence Komutları') //başlığınız.

  .setColor('BLUE') // Embed Rengi

  .addField('+duello','Etiketlediğiniz kişiye düello isteği gönderir.') //Yardım Komutlarınız

  .setThumbnail(client.user.avatarURL())

  .addField('+ascii','Yazıyı ascii şekilde gösterir.')
  
  .addField('+boks','Boks makinesine yumruk atarsınız.')
  
  .addField('+aşk-ölçer','Etiketlediğiniz kişinin size ne kadar aşık olduğunu gösterir.')
  
  .addField('+xox','Etiketlediğiniz kişi ile beraber XOX oynarsınız.')
  
  .addField('+avatar','Etiketlediğiniz kişinin ya da sizin profilinizi atmaya yarar.')


  
  .setImage('https://cdn.discordapp.com/attachments/970567056179204151/972219530912862238/standard_1.gif')

  .setFooter('Ware BOT®️ - Yardım Menüsü - 2022')

  message.channel.send(ware)

 

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['yardım-fun', 'yardım-eğlence'],

  permLevel: 0,

};

exports.help = {

  name: 'yardım-eğlence',

  usage: "+yardım-eğlence"

};