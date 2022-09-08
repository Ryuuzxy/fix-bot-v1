import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
    let info = fs.readFileSync('./mp3/little-girl-sayingtalking-hello-sound-effectcute-sound-effectsadorable.opus')

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

conn.reply(m.chat, info, m, { quoted: fkontak },{ contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://youtube.com/channel/UCBYk6B1tkZ233ElCqImkC7Q",
    mediaType: 2,
    description: "https://www.youtube.com/channel/UCBYk6B1tkZ233ElCqImkC7Q", 
    title: 'ᴿʸᵘᵘᶻˣʸ',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sig  }}})
}
handler.customPrefix = /^(hallo|hello|alo|allo)$/i
handler.command = new RegExp

export default handler