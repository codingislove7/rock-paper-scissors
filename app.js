// selectors
const sumComputer = document.querySelector(".sumComputer")
const sumPlayer = document.querySelector(".sumPlayer")
const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")
const message = document.querySelector(".message")
const computerHistory = document.querySelector(".computerHistory")
const playerHistory = document.querySelector(".playerHistory")
// option we have
const rps = ["rock", "paper", "scissors"]

const resultSums = {
    computer: 0,
    player: 0
}

function result(playerSelection) {
    // choose randomly an Option
    const index = Math.floor(Math.random() * rps.length)
    const computerSelection = rps[index]


    //check who is the winner
    if (computerSelection === playerSelection) {
        resultMessage("bala bla", computerSelection)
        history(computerSelection,playerSelection,"draw")
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            resultSums.computer += 1
            resultMessage("computer", computerSelection)
            history(computerSelection,playerSelection,"computer")
        } else {
            resultSums.player += 1
            resultMessage("player", computerSelection)
            history(computerSelection,playerSelection,"player")
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            resultSums.computer += 1
            resultMessage("computer", computerSelection)
            history(computerSelection,playerSelection,"computer")
        } else {
            resultSums.player += 1
            resultMessage("player", computerSelection)
            history(computerSelection,playerSelection,"player")
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            resultSums.computer += 1
            resultMessage("computer", computerSelection)
            history(computerSelection,playerSelection,"computer")
        } else {
            resultSums.player += 1
            resultMessage("player", computerSelection)
            history(computerSelection,playerSelection,"player")
        }
    }


    // update sum result 
    sumComputer.innerText = resultSums.computer
    sumPlayer.innerText = resultSums.player
}
// SHOW RESULT MESSAGE
function resultMessage(winner, selection) {
    const div = document.createElement("div")
    div.classList.add("alert", "text-center", "h3")
    if (winner === "computer") {
        div.innerText = `Computer choose ${selection}
    Computer is the winner`
        div.classList.add("alert-danger")

    } else if (winner === "player") {
        div.innerText = `Computer choose ${selection}
    You are the winner`
        div.classList.add("alert-success")
    } else {
        div.innerText = `Computer choose ${selection}
        Draw`
        div.classList.add("alert-secondary")
    }
    message.append(div)
    setTimeout(() => {
        div.remove()
    }, 3000)
}

function history(computerSelection,playerSelection,result) {

if (result === "computer") {
         // computer lists 
const cli = document.createElement("li")
cli.style.color = "green"
const cIcon = icons(computerSelection)
cli.appendChild(cIcon)
// computerHistory.appendChild(cli)
computerHistory.insertBefore(cli, computerHistory.childNodes[0]);
// player lists
const pli = document.createElement("li")
pli.style.color = "red"
const pIcon = icons(playerSelection)
pli.appendChild(pIcon)
// playerHistory.appendChild(pli)
playerHistory.insertBefore(pli, playerHistory.childNodes[0]);

} else if (result === "player") {
    // computer lists 
const cli = document.createElement("li")
cli.style.color = "red"
const cIcon = icons(computerSelection)
cli.appendChild(cIcon)
computerHistory.insertBefore(cli, computerHistory.childNodes[0]);
// player lists
const pli = document.createElement("li")
pli.style.color = "green"
const pIcon = icons(playerSelection)
pli.appendChild(pIcon)
playerHistory.insertBefore(pli, playerHistory.childNodes[0]);
} else if (result === "draw") {
    // computer lists 
const cli = document.createElement("li")
cli.style.color = "grey"
const cIcon = icons(computerSelection)
cli.appendChild(cIcon)
computerHistory.insertBefore(cli, computerHistory.childNodes[0]);
// player lists
const pli = document.createElement("li")
pli.style.color = "grey"
const pIcon = icons(playerSelection)
pli.appendChild(pIcon)
playerHistory.insertBefore(pli, playerHistory.childNodes[0]);
}
}

function icons(selection) {
    const r = document.createElement("i")
    r.classList.add("far", "fa-hand-rock", "rock")
    const p = document.createElement("i")
    p.classList.add("far", "fa-hand-paper", "paper")
    const s = document.createElement("i")
    s.classList.add("far", "fa-hand-scissors", "scissors")
    if (selection === "rock") {
        return r
    } else if (selection === "paper") {
        return p
    } else if (selection === "scissors") {
        return s
    }
}