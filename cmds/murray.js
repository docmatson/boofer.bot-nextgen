module.exports.run = async (client, msg, args) => {
//	msg.channel.send("https://cdn.discordapp.com/attachments/576077313893203970/608689839369486346/image0.jpg");
	msg.channel.send( {files:[`./img/meme/murray.jpg`]} );
}

module.exports.help = {
	name: "murray"
}

