/**
* jangan dihapus/diganti ya kontol
* lu itu cuma make jadi jangan diapa apain ya bangsat
* mending lu tambahin deh nama lu jangan hapus kreditnya
**/

let handler = async (m, { conn, usedPrefix }) => {
    let tqto = `*BIG THANKS TO*
    
Terimakasih Utama Nya Teruntuk:
➸ @${`${global.owner[0]}`.split('@')[0]}

Terimakasih Juga Untuk Kang Banned:
➸ @${'0'.split('@')[0]}

──────────────────────
• God
• My ortu
• Humanz ( Me )
• Nurutomo
• Adiwajshing
• Xteam
• Penyedia Layanan API
• Orang-orang yang Berdonasi
──────────────────────`
await conn.sendButtonLoc(m.chat, await conn.resize('https://telegra.ph/file/d2475a380a985bdb4c603.jpg', 300, 300),  tqto, `Ini Ucapan Terima Kasih Untuk Orang Nya Telah Berpatisipasi

Official By @${'0'.split('@')[0]}`, 'Rules', '.rules', m)
}
handler.help = ['tqto']
handler.tags = ['info']
handler.command = /^(credits?|thanks?to|tqto|ttq)$/i

module.exports = handler
