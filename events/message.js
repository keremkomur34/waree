const ayarlar = require('../ayarlar.json');
const db = require ('quick.db')
let talkedRecently = new Set();
module.exports = message => {
  if (talkedRecently.has(message.author.id)) {
    return;
  }
  talkedRecently.add(message.author.id);
	setTimeout(() => {
    talkedRecently.delete(message.author.id);
  }, 2500);
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(ayarlar.prefix)) return;
  let command = message.content.split(' ')[0].slice(ayarlar.prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
    
  }; 
  
  if(cmd && cmd.help.name !== 'bakım-modu') {
  const bakımmodu = require('quick.db').fetch(client.user.id);
  if(bakımmodu == true) {
  var DURATION = require('humanize-duration');
  const chimped = db.fetch(client.user.id+':)');
  var TIMESTAMP = Date.now() - chimped.time;
  var RESULT = DURATION(TIMESTAMP, { language: 'tr', round: true, conjunction: ', ', serialComma: false });
if (message.author.id != "852614976534609940"){
  message.react(':x:');
  return message.reply(`***${client.user.username}*** şu anda bakım arasında! <:blurpe_announcements:972925568511250494>
\nYaklaşık ***${RESULT} önce*** bakıma alınmış.\nBakıma alan geliştirici: ***${chimped.author.tag}***`);
}
  };
  }; 
  
  if (cmd) { 
    if (perms < cmd.conf.permLevel) return;
    //KARALİSTE <3>

if (db.fetch(`cokaradalistere_${message.author.id}`)) return message.channel.send("❌, Hata! Ware BOT'un karalistesinde bulunuyorsun. Komutları kullanamazsın! İletişim işin: <@852614976534609940>")
    cmd.run(client, message, params, perms);
  }

  

};

