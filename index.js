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
    const logsChannel = bot.message.cache.get("949046209073520711")
    logsChannel.send("Je suis pret à travailler !")                 
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
