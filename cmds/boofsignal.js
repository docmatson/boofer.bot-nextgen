module.exports.run = async (client, msg, args) => {
	msg.channel.send("It's time to boof @here");
	msg.channel.send( {files: [`./img/meme/boofsignal.png`]} );
}

module.exports.help = {
	name: "boofsignal"
}