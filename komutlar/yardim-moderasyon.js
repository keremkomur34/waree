const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  const ware = new Discord.MessageEmbed()

  .setTitle('Ware BOT - Moderasyon Komutları') //başlığınız.

  .setColor('BLUE') // Embed Rengi
  
  .addField('+sunucukur','Otomatik gelişmiş bir sunucu kurar.')

  .addField('+ban','Kişiyi sunucudan yasaklar.') //Yardım Komutlarınız

  .setThumbnail(client.user.avatarURL())

  .addField('+pban','Kişiyi sunucudan yasağı açılmayacak şekilde banlar.')

  .addField('+uyarı','Etiketlenen kişiyi uyarır.')

  .addField('+kick','Kişiyi sunucudan atar.')
  
  .addField('+snipe','Kişinin yazdıktan sonra sildiklerini gösterir.')
  
  .addField('+mute','Kişiyi belli bir süre susturur.')
  
  .addField('+destekal','BOT Geliştiricilerine talep gönderirsiniz.')
  
  .addField('+küfürengel','Küfür engelini kapatıp açarsınız.')
  
  .addField('+küfürlog','Edilen küfürleri belirtilen kanala kaydeder.')
  
  .addField('+emojiekle','Belirttiğiniz URL`yi emojiye dönüştürür.')
  
  .addField('+chnuke','Bu komutu kullandığınız kanalın içindeki tüm mesajları siler! [BETA]')
  
  .setImage('https://cdn.discordapp.com/attachments/970567056179204151/972219530912862238/standard_1.gif')

  .setFooter('Ware BOT®️ - Yardım Menüsü - 2022')

  message.channel.send(ware)

 

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['yardım-mod', 'yardım-moderasyon'],

  permLevel: 0,

};

exports.help = {

  name: 'yardım-moderasyon',

  usage: "+yardım-moderasyon"

};