module.exports.run = async (client, msg, args) => {
//	msg.channel.send("https://gyazo.com/bbe13197f5569751b22e3c54523db04a");
	msg.channel.send( {files:[`./img/meme/slumped.gif`]} );
}

module.exports.help = {
	name: "slumped"
}