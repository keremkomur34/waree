const Discord = require('discord.js');

exports.run = function(client, message, args) {
  const sayi = args.slice(0).join('');
if(sayi.length < 1) {
  return message.reply("Silmem için miktar belirt.")
} else {
  message.channel.bulkDelete(sayi);
message.channel.send("İşlem başarılı! **" + sayi + "** adet mesaj uzaya fırlatıldı! :rocket:").then(msg => {
	message.delete(5000)
});
}
};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['sil','temizle','mesaj-sil','fırlat'],
  permLevel: 0 
};

exports.help = {
  name: 'temizle', 
  description: 'Belirtilen miktar kadar mesaj siler.',
  usage: 'temizle '
};