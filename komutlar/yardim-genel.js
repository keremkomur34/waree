const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  const ware = new Discord.MessageEmbed()

  .setTitle('Ware BOT - Genel Komutlar') //başlığınız.

  .setColor('BLUE') // Embed Rengi

  .addField('+davet','Botun davet linkini gösterir.') //Yardım Komutlarınız

  .setThumbnail(client.user.avatarURL())

  .addField('+döviz','Anlık dolar ve euro kurunu gösterir.')

  .addField('+ping','Botun anlık gecikmesini gösterir.')

  .addField('+yapımcı','Botun yapımcısını ve yardımcılarını gösterir.')
  
  .addField('+kullanıcı-bilgi','Etiketlediğiniz kişinin veya sizin istatistiklerinizi gösterir.')
  
  .addField('+sunucu-bilgi','Bulunduğunuz sunucunun istatistiklerini gösterir.')
  
  .addField('+güncellemeler','BOT`a gelen güncellemeleri gösterir.')
  
  .addField('+seviye','Seviyenizi gösterir.')
  
  .setImage('https://cdn.discordapp.com/attachments/970567056179204151/972219530912862238/standard_1.gif')

  .setFooter('Ware BOT®️ - Yardım Menüsü - 2022')

  message.channel.send(ware)

 

};

exports.conf = {

  enabled: true,

  guildOnly: true,

  aliases: ['yardım-genell', 'yardım-genel'],

  permLevel: 0,

};

exports.help = {

  name: 'yardım-genel',

  usage: "+yardım-genel"

};