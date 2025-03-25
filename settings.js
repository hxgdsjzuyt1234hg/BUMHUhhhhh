/*

credits © Daffa Developer
𝗗𝗲𝘃 𝗦𝗰 : 𝗗𝗮𝗳𝗳𝗮 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿
ᴅɪʟᴀʀᴀɴɢ ʀɪɴᴇᴍ
ᴅɪʟᴀʀᴀɴɢ ᴅɪ sᴇʙᴀʀ/ғʀᴇᴇ
ʟᴀɴɢɢᴀʀ? ɢᴡ ғɪx ʙɪᴀʀ ɢᴀʙɪsᴀ ᴅɪᴘᴀᴋᴇ ʟᴀɢɪ

*/


const fs = require('fs')

global.botname = "Ravage V3.0"
global.version = "3.0"
global.owner = "919149247203"
global.numberbot = ""
global.footer = "DAFFA ALWAYS SOLO?"
global.title = "© ᴅᴀғғᴀ ᴅᴇᴠᴇʟᴏᴘᴇʀ"
global.website = "whatsapp.com/channel/0029VakL4GD2phHJckS4Wc24"
global.idch = "120363374006048687@newsletter"
global.chjid = "https://whatsapp.com/channel/0029VakL4GD2phHJckS4Wc24"
global.wm = "ᴅᴀғғᴀ ᴅᴇᴠᴇʟᴏᴘᴇʀ"

//===================================//
global.session = "session"


//=========== [ IMG-URL ] ===========//
global.thumb = "https://f.top4top.io/p_3320musil1.jpg"
global.image = {
Reply: "https://f.top4top.io/p_3320musil1.jpg"
}
//==================================//

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
