/*
BUY NO ENC? CHAT 6285167249152
SCRIPT INI BUATAN KYAMI SILENCE 
BASE ASLI ZUROKU
*/

const fs = require('fs')
const chalk = require('chalk')
const moment = require('moment-timezone')
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')	
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')

//====== [ SETTING PAIRING & TOKEN ] ========//
global.pairing = '--'
//====== [ SETTING OWNER  ] ========//
global.owner = [ '62895602780332', '6281266627226' ]
global.owner0 = '62895602780332@s.whatsapp.net'
global.ownernumber = '62895602780332'
global.ownername = "𝗔𝗥𝗦7𝘇"
global.linkSaluran = "https://whatsapp.com/channel/0029VbA7zaGC1FuHThMOPz3h"
global.linkGrup = "https://chat.whatsapp.com/LWHRE83k9w2J3zJBhGsTQ1"
//====== [ SETTING BOT ] ========//
global.botname = '𝗔𝗥𝗝𝗨𝗡-𝗔𝗦𝗦𝗜𝗦𝗧𝗔𝗡𝗧'
global.botnumber = '60177901240'
global.bot_version = '1.1'
global.prefa = ['','!','.','#','&']
//~~~~~~~~~ Settings Payment ~~~~~~~~~//
global.dana = "081266627226"
global.ovo = "081266627226"
global.qris = "https://ar-hosting.pages.dev/1742791280747.jpg"
//========== Setting Panell V1 ==========//
global.domain = 'https://xyzoxkhulzprivat.vinn.biz.id'
global.apikey = 'ptla_slIHsEZE0t9cqbWWyRzPuQlQhq4iYSMuozzkCh4tFp6'
global.capikey = 'ptlc_tqnI47J2V7eowN4cDRKHLYNSBRfub64Y2oi4tHJniCa'
//========== Setting Panell V2 ==========//
global.domain2 = 'https://xyzoxkhulzprivat.vinn.biz.id'
global.apikey2 = 'ptla_slIHsEZE0t9cqbWWyRzPuQlQhq4iYSMuozzkCh4tFp6'
global.capikey2 = 'ptlc_tqnI47J2V7eowN4cDRKHLYNSBRfub64Y2oi4tHJniCa'
//========== Setting Panell V3 ==========//
global.domain3 = 'https://xyzoxkhulzprivat.vinn.biz.id'
global.apikey3 = 'ptla_slIHsEZE0t9cqbWWyRzPuQlQhq4iYSMuozzkCh4tFp6'
global.capikey3 = 'ptlc_tqnI47J2V7eowN4cDRKHLYNSBRfub64Y2oi4tHJniCa'
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
//====== [ SETTING PACKNAME ] ========//
global.packname = 'ׄ 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝙱𝚈 : 𝗔𝗥𝗝𝗨𝗡𝗕𝗢𝗧𝘇'
global.author = 'Crᧉׄdit : 𝗔𝗥𝗦7𝘇'
global.themeemoji = '🍁'
global.wm = "𝗔𝗥𝗝𝗨𝗡𝗕𝗢𝗧𝘇 𝗜𝗡𝗙𝗢"
global.idch = '--@newsletter'
global.titlech = '𝗔𝗥𝗝𝗨𝗡-𝗔𝗦𝗦𝗜𝗦𝗧𝗔𝗡𝗧'
//====== [ THEME URL & URL ] ========//
global.thumb = fs.readFileSync('./media/icon.png'); // Buffer Image
global.thumbnail = 'https://ar-hosting.pages.dev/1742791440926.jpg'
global.Url = '-'
global.logodana = "https://img100.pixhost.to/images/667/540082364_skyzopedia.jpg", 
global.logoovo = "https://img100.pixhost.to/images/667/540082774_skyzopedia.jpg", 
//====== [ GLOBAL MESSAGES  ] ========//
global.mess = {
    done: '𝚜𝚞𝚌𝚎𝚜𝚜',
    prem: '𝙼𝙰𝙰𝙵 𝙵𝙸𝚃𝚄𝚁 𝙸𝙽𝙸 𝙺𝙷𝚄𝚂𝚄𝚂 𝙿𝚁𝙴𝙼𝚄𝙸𝙼𝙽𝚈𝙰 𝗔𝗥𝗦7𝘇',
    admin: '𝙵𝙸𝚃𝚄𝚁 𝙺𝙷𝚄𝚂𝚄𝚂 𝙰𝙳𝙼𝙸𝙽',
    botadmin: '𝙼𝙰𝚄 𝙿𝙰𝙺𝙴 𝙵𝙸𝚃𝚄𝚁 𝙸𝙽𝙸 𝙹𝙰𝙳𝙳𝙸𝙽 𝗔𝗥𝗦7𝘇 𝚂𝙴𝙱𝙰𝙶𝙰𝙸 𝙰𝙳𝙼𝙸𝙽',
    owner: '𝙱𝚄𝙺𝙰𝙽 𝗔𝗥𝗦7𝘇 𝙶𝙰𝚄𝚂𝙰𝙷 𝙼𝙰𝙲𝙴𝙼²',
    group: '𝙵𝙸𝚃𝚄𝚁 𝙶𝚁𝚄𝙿',
    private: '𝙵𝙸𝚃𝚄𝚁 𝙿𝚁𝙸𝚅𝙰𝚃𝙴 𝙲𝙷𝙰𝚃',
    wait: '𝙱𝙴𝙽𝚃𝙰𝚁 𝚃𝚄𝙽𝙶𝙶𝚄𝙸𝙽 𝙶𝙰𝚄𝚂𝙰𝙷 𝚂𝙿𝙰𝙼',
    error: '𝙴𝚁𝚁𝙾𝚁 𝙽𝙸𝙷!',
}

//  - AKHIR -
//  JIKA ADA YANG KURANG MENGERTI SILAHKAN CHAT ADMIN DI WHATSAPP MAUPUN DI TELEGRAM OKEY
//  - Number : 𝟼𝟸𝟾𝟾𝟿𝟻𝟼𝟺𝟷𝟸𝟸𝟿
//  - Telegram : @AlwaysZuroku


let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(`Update'${__filename}'`)
    delete require.cache[file]
    require(file)
})
