const Discord = require("discord.js");
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

bot.on("messageCreate", message => {
    console.log("tata")
});

bot.login(process.env.token);