module.exports.run = async (client, msg, args) => {
//	msg.channel.send("https://media.discordapp.net/attachments/558357966605254666/558361851155447839/hole-in-a-wall-png-8_2.png?width=596&height=516");
	msg.channel.send( {files: [`./img/meme/deathboi.png`]} );
}

module.exports.help = {
	name: "deathboireturns"
}
