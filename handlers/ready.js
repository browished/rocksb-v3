module.exports = (client) => {
    client.on('ready', () => {
        console.log("\n==========================");
        console.log(`🤖 Logged in as: ${client.user.tag}`);
        console.log("==========================\n");

        console.log("📌 BOT STATUS:");
        console.log(`🌍 Guilds: ${client.guilds.cache.size}`);
        console.log(`📢 Channels: ${client.channels.cache.size}`);
        console.log(`👥 Users: ${client.users.cache.size}`);
        console.log("\n🌟━━━━━━━━━━━━━━━━━━━━━━━🌟\n");
    });
};
