module.exports.run = async (client, msg, args) => {
//	msg.channel.send("https://cdn.discordapp.com/attachments/608747052431572993/621925474326806528/greese.mov");
	msg.channel.send( {files: [`./img/meme/greese.mov`]} );
}

module.exports.help = {
	name: "greese.mov"
}