module.exports.run = async (client, msg, args) => {
	msg.channel.send( {files: [`./img/meme/dance.gif`]} );
}

module.exports.help = {
	name: "dance"
}
