const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');

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
    bot.user.setActivity("Sauver Le Monde")
});




bot.on("messageCreate", message => {
    const links = ["discord.gg/"]
    if (message.content.includes(links)) {
    message.delete(message)
    const LinksEmbedWarning = new Discord.MessageEmbed()
        .setTitle("Warning")
        .setColor("EA3131")
        .setDescription("<@" + message.author.id + "> les invitations sont interdit !")
    message.channel.send({embeds: [LinksEmbedWarning]})
    } 
});                                                    




bot.on("guildMemberAdd", member => {
    var srvName = Discord.Guild.id
    const newMember = new MessageEmbed()
        .setTitle("Oh.. Un nouveau !")
        .setColor("00F0FF")
        .setDescription("Salut <@" + member.id + ">, tout d'abord, vas lire le règlement (pour pas te faire ban) aprés, su tu recherches de l'aide, vas dans <#939631823426822224> (y'en a dautre si tu veux).\n Si t'as juste envie de parler vas dans <#937790247708790844>. Une question ? Vas dans <#937507415237218364>")
        .setTimestamp()
        .setFooter({ text: "A rejoin : ",iconURL: "https://cdn.discordapp.com/attachments/944950631909691464/949269033746825216/IMG_0972.gif" })
        member.user.send({ embeds: [newMember] });
    }
);   
    
 



//quoi feur

bot.on("messageCreate", message => {
    if(message.content.includes("quoi")){
        message.react("🇫")
        message.react("🇪")
        message.react("🇺")
        message.react("🇷")
        message.react("😂")
        }
    }
);

bot.on("messageCreate", message => {
    if (message.content === "inscription") {
        message.delete()
        var bossMythique = new Discord.MessageActionRow()
            .addComponents(new Discord.MessageButton()
                .setCustomId("bp1")
                .setLabel(" Je m'inscris !")
                .setStyle("SUCCESS")
                .setEmoji("✔️")
            )
            .addComponents(new Discord.MessageButton()
                .setCustomId("bp2")
                .setLabel("Finalement, nan.")
                .setStyle("DANGER")
                .setEmoji("❌")
                
            );
    
            message.channel.send({content: "**Inscription !**\n\nSi vous voulez faire le boss mythique mais que vous n'avez personne cliqué sur \"Je m'inscris\" pour le faire avec <@938426561495973888>, ils vous pingerons qaund ils seront disponibles.", components: [bossMythique]})
    
        }
    }
); 
    
bot.on("interactionCreate", (interaction) => {
    if(interaction.isButton()){
        if(interaction.customId === "bp1") {
            bot.channels.cache.get("951952606656360489").send("Vous êtes inscrit <@" + interaction.user.id + "> !"); //salon historique
            interaction.deferUpdate();
            interaction.member.roles.add("952228825218031636"); 
            }
    
        if(interaction.customId == "bp2"){
            bot.channels.cache.get("951952606656360489").send("Vous n'êtes plus inscrit <@" + interaction.user.id + "> !"); //salon historique
            interaction.deferUpdate();
            interaction.member.roles.remove("952228825218031636");
            
            }
        }
    }
);


bot.login(process.env.token);