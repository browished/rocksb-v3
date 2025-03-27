const commandHandler = require('./commandHandler');
const config = require('../config');
const axios = require('axios'); // Import axios to send logs to the web server

module.exports = (client) => {
    commandHandler.loadCommands();

    client.on('messageCreate', async message => {
        if (!message.author || message.author.bot) return;

        const { prefix, allowedUserIDs, allowedNoPrefixUserIDs } = config;
        const content = message.content.trim();
        const isPrefixed = content.startsWith(prefix);

        // Extract command name and arguments
        const commandName = isPrefixed
            ? content.slice(prefix.length).trim().split(/ +/).shift().toLowerCase()
            : content.split(/ +/).shift().toLowerCase();

        const command = commandHandler.getCommand(commandName);
        if (!command) return;

        if (!allowedUserIDs.includes(message.author.id)) {
            return message.channel.send("You are not allowed to use this command.").catch(console.error);
        }

        const args = isPrefixed
            ? content.slice(prefix.length).trim().split(/ +/).slice(1)
            : content.split(/ +/).slice(1);

        if (!isPrefixed && !allowedNoPrefixUserIDs.includes(message.author.id)) {
            return message.channel.send("You are not allowed to use commands without a prefix.").catch(console.error);
        }

        // Execute the command
        try {
            await command.execute(message.channel, message, client, args);
            
            console.log("\n============================");
            console.log("Command Executed!");
            console.log("============================");
            console.log(`User: ${message.author.tag} (${message.author.id})`);
            console.log(`Command: ${commandName}`);
            console.log(`Args: [${args.join(', ')}]`);
            console.log("============================\n");

            // Send log data to the web server
            axios.post('http://localhost:3000/log-command', {
                user: message.author.tag,
                userId: message.author.id,
                command: commandName,
                args: args
            }).catch(error => console.error('Failed to send log to web server:', error));

        } catch (error) {
            console.error("\n[ERROR] Command Failed:");
            console.error(`User: ${message.author.tag} (${message.author.id})`);
            console.error(`Command: ${commandName}`);
            console.error("Error:", error, "\n");
            message.channel.send("There was an error executing that command.").catch(console.error);
        }
    });
};
