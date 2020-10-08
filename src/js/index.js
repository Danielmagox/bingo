import _ from "lodash"

const playNumber = document.querySelectorAll(".number")
const button = document.querySelector(".btnThrow")
const dice = document.querySelector(".dice_number")
const TOTAL_NUMBERS = 100
const CARD_SIZE = 15

const generateArray = (N) => {
  return _.shuffle(_.range(N))
}

const shuffledNumbers = generateArray(TOTAL_NUMBERS)

const selectRandomIndex = (length) => {
  return Math.floor(Math.random() * length)
}

const addNumberCarton = () => {
  playNumber.forEach(element => (element.textContent = shuffledNumbers[selectRandomIndex(shuffledNumbers.length)]))
}

addNumberCarton()

let playerCount = 0
let cpuPart = 0

const addNumberDice = () => {
  dice.textContent = shuffledNumbers[selectRandomIndex(shuffledNumbers.length)]
  _.pull(shuffledNumbers, parseInt(dice.textContent))
  playNumber.forEach(function(element) {
    if (parseInt(element.textContent) === parseInt(dice.textContent)) { element.className += " cross_number" }
  })
  playerCount = document.querySelector(".player_part").querySelectorAll(".cross_number").length
  cpuPart = document.querySelector(".cpu_part").querySelectorAll(".cross_number").length
  checkWinner(playerCount, cpuPart)
}

button.addEventListener("click", addNumberDice)

const checkWinner = (player, cpu) => {
  if (player === CARD_SIZE && cpu === CARD_SIZE) {
    alert("Draw!")
    button.remove()
  } else if (cpu === CARD_SIZE) {
    alert("Cpu player wins!")
    button.remove()
  } else if (player === CARD_SIZE) {
    alert("Player wins!")
    button.remove()
  }
}
