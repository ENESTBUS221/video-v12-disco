const Discord = require('discord.js')



exports.run = async (client, msg, args) => {

const embed = new Discord.MessageEmbed()
.setDescription(`Suspects v12 Disco Botu Altyapısı`)
.addField(`Disco Rolünü Ayarlamak İçin,`, `!disco-rol @rol`, true)
.addField(`Discoyu Başlatmak İçin,`, `!disco`, true)
.setFooter(`v12 Disco Botu Altyapısı | Suspects`)
.setThumbnail(msg.author.avatarURL({dynamic: true, format : "png"}))
.setTimestamp()
.setColor(`RANDOM`)
 msg.channel.send(embed)


}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["help"],
    permLevel: 0
  };
  
  exports.help = {
    name: "yardım"
      };
  