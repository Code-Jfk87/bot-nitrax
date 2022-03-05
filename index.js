const Discord = require("discord.js");
const { MessageActionRow, MessageButton } = require('discord.js');
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

//quoi feur

bot.on("messageCreate", message => {
    if(message.content.includes("quoi")){
        message.channel.send("feur")
    }});



bot.on('interactionCreate', async button1 => {
    if (!button1.isCommand()) return;
    
    if (button1.id === prefix + 'ping2') {
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('primary')
                    .setLabel('Primary')
                    .setStyle('PRIMARY'),
            );

        await button1.reply({ content: 'Pong!', components: [row] });
    }
});






//cancel "Intraction invalide " : button.defer()

















bot.login(process.env.token);



/*
bot.on("interactionCreate", interaction => {
    if(interaction.isButton()){
       var username = interaction.user.username
       interaction.user.send("Les modérateurs vous souhaitent la bienvenue **" + username + "** !");
       interaction.member.roles.add('946894619713605652');


       /////

       bot.on("guildMemberAdd", member => {
const newMember = new MessageEmbed()
	.setTitle("Oh.. Un nouveau !")
    .setColor("00F0FF")
	.setDescription("Salut <@" + member.id + "> sur " +  + ", tout d'abord, vas lire le règlement (pour pas te faire ban) aprés, su tu recherches de l'aide, vas dans <#939631823426822224> (y'en a dautre si tu veux).\n Si t'as juste envie de parler vas dans <#937790247708790844>. Une question ? Vas dans <#937507415237218364>")
//	.setThumbnail("")
//	.setImage("")
	.setTimestamp()
	.setFooter({ text: "A rejoin : ",iconURL: "https://cdn.discordapp.com/attachments/944950631909691464/949269033746825216/IMG_0972.gif" });
    bot.channels.cache.get("946883009280352308").send({ embeds: [newMember] });
});                                                                                                                                                                                                                                                                                                                                                                         
*/