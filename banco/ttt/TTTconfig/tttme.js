const tttme = (pushname, userWins, userDefeats, userTies, userPoints) => {
  return `┏═══🔥*ESTADISTICAS*🔥═══┓
║ 
║ *User: ${pushname}* 
║
║ ➻❥ *Vitórias: ${userWins}* 
║ ➻❥ *Derrotas: ${userDefeats}*
║ ➻❥ *Empates : ${userTies}*
║ ➻❥ *Puntos  : ${userPoints}*
║
┗═══════════════════┛`
}

exports.tttme = tttme
