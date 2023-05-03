let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    let idx1=Math.floor(Math.random()*fighters.length)
    let idx2=Math.floor(Math.random()*fighters.length)
    let message=fighters[idx1] + " VS " + fighters[idx2]
    stageEl.textContent=message
})
