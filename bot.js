const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');

const client = new Client();

/* ===== QR CODE ===== */
client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

/* ===== BOT READY ===== */
client.on('ready', () => {
    console.log('✅ Bot is ready!');
});

/* ===== MESSAGES ===== */
client.on('message', async (message) => {
    if (!message.body) return;

    const text = message.body.trim().toLowerCase();
    console.log(`📩 ${message.from}: ${text}`);

    const commands = {
        'hi': 'Hello!',
        'hello': 'Hello there 👋',
        'ping': 'pong 🏓'
    };

    if (commands[text]) {
        await message.reply(commands[text]);
    }
});

/* ===== INITIALIZE CLIENT ===== */
client.initialize();