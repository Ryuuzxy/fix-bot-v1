let fs = require('fs')
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return
    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('Undangan untuk bergabung') || m.text.startsWith('Invitation to join') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
    let teks = `「 タRyuuzxyツ 」

    ╭━━━━「 SEWA 」
    ┊⫹⫺ Hemat: 6k/grup (1 minggu)
    ┊⫹⫺ Normal: 20k/grup (1 bulan)
    ┊⫹⫺ Standar: 37k/grup (2 bulan)
    ┊⫹⫺ Pro: 45k/grup (4 bulan)                                                      
    ┊⫹⫺ Vip: = 65k/grup (6 bulan)
    ╰═┅═━––––––๑
    
    ╭━━━━「 PREMIUM 」
    ┊⫹⫺ Hemat: 5k (1 minggu)
    ┊⫹⫺ Normal: 20k (1 bulan)
    ┊⫹⫺ Pro: 40k (4 bulan)
    ┊⫹⫺ Vip: 50k (8 bulan)                                               
    ┊⫹⫺ Permanent: = 70k (Unlimited)
    ╰═┅═━––––––๑
    
    ⫹⫺ PAYMENT:
    • Pulsa Indosat: [085778411638]
    • Dana: [087857125886]
    • Gopay: [085778411638]
    • Ovo: [085778411638]
    
    Nomor Owner :
    wa.me/6285778411638
    
    ▌│█║▌║▌║║▌║▌║█│▌
    
    #By ©R么ғғᴜʀɪ`
    this.reply(m.chat, teks, m)
    const data = global.owner.filter(([id, isCreator]) => id && isCreator)
    this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
    }
}

export default handler
