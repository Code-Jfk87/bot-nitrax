const Discord = require("discord.js");
const canvas = require('canvas');
const bot = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS
    ]
});


//préfix commande
var prefix = "!"


bot.on("ready",() => {
    console.log("Bot opérationnel !")
});

bot.on("guildMemberAdd", members => {
    const canvas = canvas.CreateCanvas(1024, 500);
    ctx = canvas.getContext("2d");
    var background = canvas.loadImage("./background.png");
    ctx.drawImage(background, 0, 0, 1024, 500)
    var attachement = new Discord.MessageAttachment(canvas.toBuffer(), "welcome.png");
    bot.channels.cache.get("945326723413725254").send({files: [attachement]});
});                                                                                         



bot.on("messageCreate", message => {
    const links = ["discord.gg/"]
    if (message.content.includes(links)) {
    message.delete(message)
    const LinksEmbedWarning = new Discord.MessageEmbed()
        .setTitle("Warning")
        .setColor("EA3131")
        .setDescription("<@" + message.author.id + "> les invitations sont intedit !")
    message.channel.send({embeds: [LinksEmbedWarning]})

    }
});


bot.login(process.env.token);
