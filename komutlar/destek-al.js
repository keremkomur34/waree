const Discord = require('discord.js');
const client = new Discord.Client();
var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  const codare = args.slice(0).join(' ');
  if (codare.length < 1) return message.channel.send('❎, İşlem başarısız! Destek sebebi belirtilmemiş! Doğru kullanım: `+destekal sebep`')
    message.channel.send('✅, İşlem başarılı! Talebiniz operatörlerimize gönderildi! Operatörlerimiz size `DM` yoluyla ulaşacaktır! Eğer özel mesajlarınız kapalı ise lütfen aktif hale getiriniz.');


    var Hook = new Discord.WebhookClient("972778358167449641", "kH40pOam7Ny0D3nogiPh9go1_zG7J_7JEMDd543XhzxiAsRS9hmZSX1jdd4loSad_qUC")

    let embed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setThumbnail(message.author.avatarURL())
    .setTitle(`Destek Talebi`)
    .setDescription(`
      **Talep Eden: **`+message.author.tag+`
      **Talep Sebebi: **\``+codare+`\`
      `)
    .setFooter(`Ware BOT | Destek Sistemi`)
    .setTimestamp()
    Hook.send(embed)

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['destekal'],
    permLevel: 0,  
  };
  
  exports.help = {
    name: 'destek-al',
    description: 'Talebinizi belirterek destek alabilirsiniz.',
    usage: 'destek-al ',
   
  };