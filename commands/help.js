const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (client, message, args) => {
  if (message.author.bot) return;
  let prefix = config.prefix;
  if (!message.content.startsWith(prefix)) return;

  let help = new Discord.MessageEmbed()
    .setAuthor("Krezy")
    .setTitle("Command List & Guide for the Bot")
    .setDescription(
      "Below are Commands you can do with Bot, Right now there is only 6 commands available, more commands will be added soon."
    )
    .addField(
      "🎁 Giveaway 🎁",
      "start [channel-name] [Time] [winners] [Prize]\nreroll [prize name]\nend [prize name]"
    )
    .addField(
      "Examples",
      "G$start #giveaway 5m 1 Testing\nG$end Testing\nG$reroll Testing"
    )
    .addField("Utility", "ping, invite", true)
    .addField("ℹ Information ℹ", "stats", true)
    .addField("By Krezy")
    .setTimestamp()
    .setFooter(
      `Command Requested By ${message.author.tag}`,
      client.user.displayAvatarURL()
    );
  message.channel.send(
    "**Sent the commands in Direct Messages! 💌, Check DMs**"
  );

  return message.author.send(help);
};

module.exports.help = {
  name: "help"
};
