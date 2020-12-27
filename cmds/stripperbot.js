module.exports.run = async (client, msg, args) => {
	msg.channel.send( {files: [`./img/meme/stripperbot.mp4`]} );
}

module.exports.help = {
	name: "stripperbot"
}