

setInterval(setClock, 1000)

let hourHand = document.querySelector("#hour-hand")
let minuteHand = document.querySelector("#minute-hand")
let secondHand = document.querySelector("#second-hand")

function setClock() {
    let currentDate = new Date()
    let secondRatio = currentDate.getSeconds() /60
    let minuteRatio = (secondRatio + currentDate.getMinutes()) / 60
    let hourRatio = (minuteRatio + currentDate.getHours()) /12
    setRotation (secondHand, secondRatio)
    setRotation (minuteHand, minuteRatio)
    setRotation (hourHand, hourRatio)

}

function setRotation(element,rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
    
}