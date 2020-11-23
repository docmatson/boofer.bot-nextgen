module.exports.run = async (client, msg, args) => {
//	msg.channel.send("https://gyazo.com/05508a2c81c65a3755ef249402d105a6");
	msg.channel.send( {files: [`./img/meme/dance.gif`]} );
}

module.exports.help = {
	name: "dance"
}
