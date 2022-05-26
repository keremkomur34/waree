const discord = require('discord.js'); //modüller
const CC = require('currency-converter-lt')

exports.run = async (client, message, args) => {
    let dolar = new CC({ from: "USD", to: "TRY", amount: 1 })
    let euro = new CC({ from: "EUR", to: "TRY", amount: 1 })
    dolar.convert().then(d => {
        var one_dolar = d
        euro.convert().then(e => {
            var one_euro = e

            let embed = new discord.MessageEmbed()
                .setTitle("Türkiye Merkez Bankası tarafından resmi sonuçlar gösterilmiştir.")
                .setDescription(`1 Dolar ($) = ${one_dolar}\n1 Euro (€) = ${one_euro}`)
                .setFooter("Ware BOT - Döviz Kuru")
                    message.channel.send(embed)
                })
        })
}
exports.conf = {
    enabled: true, //kullanıma açık mı değil mi
    guildOnly: true, //dmde kullanıma açık mı değil mi
    aliases: ['döviz','doviz','borsa','dolar','euro'], //kısayollar
    permLevel: 0 //perm level mainde karşıliklar yazar
  };
 
  exports.help = {
    name: "döviz", //komutu çalıştıracak olan kelime
    description: "",//açıklama (isteğe bağlı)
    usage: ""//kullanım (isteğe bağlı)
  };