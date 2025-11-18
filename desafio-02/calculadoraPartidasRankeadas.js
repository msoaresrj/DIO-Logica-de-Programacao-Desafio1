// Array contendo as estatísticas dos heróis: Vitorias e Derrotas
let heroName = "Aragorn"
let heroVictories = 15
let heroDefeats = 5
let totalMatches = heroVictories + heroDefeats

function calculateRankedMatches(victories, defeats) {
    result = victories - defeats
    return result
}

let resultMatches = calculateRankedMatches(heroVictories, heroDefeats)

if (resultMatches >= 10 && resultMatches <= 20) {
  rank = "Bronze"
} else if (resultMatches >= 21 && resultMatches <= 50) {
  rank = "Prata"
} else if (resultMatches >= 51 && resultMatches <= 80) {
  rank  = "Ouro"
} else if (resultMatches >= 81 && resultMatches <= 90) {
  rank = "Diamante"
} else if (resultMatches >= 91 && resultMatches <= 100) {
  rank = "Lendário"
} else if (resultMatches > 100) {
  rank = "Imortal"
} else {
  rank = "Ferro"
}

console.log(`O Herói ${heroName} tem um saldo de ${resultMatches} pontos. com um total de ${totalMatches} partidas rankeadas. O herói está na categoria ${rank}.`)
