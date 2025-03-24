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
global.owner = [ '085167249152', '6283137133540' ]
global.owner0 = '6283137133540@s.whatsapp.net'
global.ownernumber = '6283137133540'
global.ownername = "𝙺𝚈𝙰𝙼𝙸 𝚂𝙸𝙻𝙴𝙽𝙲𝙴"
global.linkSaluran = "https://whatsapp.com/channel/0029VazREKBEquiKMfoEYN23"
global.linkGrup = "https://chat.whatsapp.com/Fg7lZNth6WPCkTmxfNzvdh"
//====== [ SETTING BOT ] ========//
global.botname = '𝚂𝚒𝚕𝚎𝚗𝚌𝚎 𝙿𝚛𝚘𝚓𝚎𝚌𝚝 𝚅𝟷'
global.botnumber = '6283137133540'
global.bot_version = '1.1'
global.prefa = ['','!','.','#','&']
//~~~~~~~~~ Settings Payment ~~~~~~~~~//
global.dana = "081250431837"
global.ovo = "Tidak Tersedia"
global.qris = "https://img86.pixhost.to/images/414/561641458_slnckyami.jpg"
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
global.packname = 'ׄ 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝙱𝚈 : 𝙺𝚈𝙰𝙼𝙸 𝚂𝙸𝙻𝙴𝙽𝙲𝙴'
global.author = 'Crᧉׄdit : SlncKyami'
global.themeemoji = '🍁'
global.wm = "𝙺𝚈𝙰𝙼𝙸 𝙸𝙽𝙵𝙾"
global.idch = '--@newsletter'
global.titlech = '𝙺𝚈𝙰𝙼𝙸 𝚂𝙸𝙻𝙴𝙽𝙲𝙴'
//====== [ THEME URL & URL ] ========//
global.thumb = fs.readFileSync('./media/icon.png'); // Buffer Image
global.thumbnail = 'https://img102.pixhost.to/images/292/559882921_skyzopedia.jpg'
global.Url = '-'
global.logodana = "https://img100.pixhost.to/images/667/540082364_skyzopedia.jpg", 
global.logoovo = "https://img100.pixhost.to/images/667/540082774_skyzopedia.jpg", 
//====== [ GLOBAL MESSAGES  ] ========//
global.mess = {
    done: '𝚜𝚞𝚌𝚎𝚜𝚜',
    prem: '𝙼𝙰𝙰𝙵 𝙵𝙸𝚃𝚄𝚁 𝙸𝙽𝙸 𝙺𝙷𝚄𝚂𝚄𝚂 𝙿𝚁𝙴𝙼𝚄𝙸𝙼𝙽𝚈𝙰 𝙺𝚈𝙰𝙼𝙸',
    admin: '𝙵𝙸𝚃𝚄𝚁 𝙺𝙷𝚄𝚂𝚄𝚂 𝙰𝙳𝙼𝙸𝙽',
    botadmin: '𝙼𝙰𝚄 𝙿𝙰𝙺𝙴 𝙵𝙸𝚃𝚄𝚁 𝙸𝙽𝙸 𝙹𝙰𝙳𝙳𝙸𝙽 𝙺𝚈𝙰𝙼𝙸 𝚂𝙴𝙱𝙰𝙶𝙰𝙸 𝙰𝙳𝙼𝙸𝙽',
    owner: '𝙱𝚄𝙺𝙰𝙽 𝙺𝚈𝙰𝙼𝙸 𝙶𝙰𝚄𝚂𝙰𝙷 𝙼𝙰𝙲𝙴𝙼²',
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