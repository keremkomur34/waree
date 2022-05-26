const Discord = require('discord.js');


exports.run = (client, message, params) => {
    if(message.author.id === message.guild.owner.id) {
      
            message.channel.send(new Discord.MessageEmbed().setColor('#000000').setTitle('Ware BOT | Sunucu Kurma Sistemi').setDescription('Bu komutu kullanmak riskli olabilir. Lütfen en iyi deneyimi almak için hiç kanal olmayan bir sunucu da yapınız!').setFooter('Bu eylemi onaylıyorsan "evet" yazman yeterlidir. Bu eylem 30 saniye içinde sona erecek!'))
.then(() => {
message.channel.awaitMessages(response => response.content === 'evet', {
max: 1,
time: 30000,
errors: ['time'],
})
.then((collected) => {
  
  
            message.guild.channels.create(`ÖNEMLİ KANALLAR`, { type: 'category'});
   message.guild.channels.create(`「📜」kurallar`, {type : "text"})
    .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "ÖNEMLİ KANALLAR")))
   message.guild.channels.create(`「🚪」giriş-çıkış`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "ÖNEMLİ KANALLAR")))
   message.guild.channels.create(`「📢」duyuru`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "ÖNEMLİ KANALLAR")))
   message.guild.channels.create(`「🎥」video-odası`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "ÖNEMLİ KANALLAR")))
             message.guild.channels.create(`SOHBET KANALLARI`, { type: 'category'});
   message.guild.channels.create(`「💬」sohbet`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "SOHBET KANALLARI")))
   message.guild.channels.create(`「🔩」komutlar`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "SOHBET KANALLARI")))
   message.guild.channels.create(`「☯」rank-chat`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "SOHBET KANALLARI")))
   message.guild.channels.create(`「📷」foto-chat`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "SOHBET KANALLARI")))
   message.guild.channels.create(`「🚨」şikayet-odasi`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "SOHBET KANALLARI")))
              message.guild.channels.create(`SES KANALLARI`, { type: 'category'});
   message.guild.channels.create(`╠ ● Genel Sohbet `, {type : "voice"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "SES KANALLARI")))
    message.guild.channels.create(`╠ ● Müzik Odası`, {type : "voice"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "SES KANALLARI")))
   message.guild.channels.create(`╠ ● Bekleme Odası`, {type : "voice"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "SES KANALLARI")))
            message.guild.channels.create(`OYUN ODALARI`, { type: 'category'});
message.guild.channels.create(`🎮 • League of Legends`, {type : "voice"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "OYUN ODALARI")))
    message.guild.channels.create(`🎮 • VALORANT`, {type : "voice"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "OYUN ODALARI")))
    message.guild.channels.create(`🎮 • Counter Strike: Global Offensive`, {type : "voice"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "OYUN ODALARI")))
    message.guild.channels.create(`🎮 • PUBG`, {type : "voice"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "OYUN ODALARI")))
    message.guild.channels.create(`🎮 • Fortnite`, {type : "voice"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "OYUN ODALARI")))
    message.guild.channels.create(`🎮 • Minecraft`, {type : "voice"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "OYUN ODALARI")))
    message.guild.channels.create(`🎮 • ROBLOX`, {type : "voice"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "OYUN ODALARI")))
  message.channel.send("✅ • Komut başarıyla çalıştırıldı! Rolleri kendin özelleştirebilirsin.")
          });
});
      
        
    } else {
        message.channel.send(':x: **Üzgünüm ama bu komutu sadece sunucu sahibi kullanabilir!**');
    }
};


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sunucu-kur"],
  permLevel: 3,
  kategori: "mod"
};


exports.help = {
  name: 'sunucukur',
  description: 'Sunucuyu kurar.',
  usage: 'sunucukur'
};