const Discord = require('discord.js');

exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Administrator yetkiniz yok!")
  message.channel.messages.fetch().then((results) => {
    message.channel.bulkDelete(results)
  })
  const channelnuke = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Kanal Bombalandı!")
    .setDescription(`Kanal ${message.author} Tarafından Başarıyla Bombalandı`)
    .setImage("https://media2.giphy.com/media/oe33xf3B50fsc/giphy.gif?cid=82a1493br28e71fctwvy9ivzeh1xxm1utfcul2j7tdkiy9pm&rid=giphy.gif&ct=g")
    .setFooter(`${message.author.tag}`)
    .setTimestamp(Date.now())
  message.channel.send(channelnuke)

}; // codareeeeee

exports.conf = {
  aliases: ['chnuke'],
  permLevel: 3,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'Kanal Nuke',
  description: 'Mesajı yazdığınız kanalı temizler.',
  usage: 'chnuke',
};
