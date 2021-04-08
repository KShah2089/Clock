const hour = document.querySelector('[hour]')
const minute = document.querySelector('[minute]')
const second = document.querySelector('[second]')

setInterval(setClock, 1000)

function setClock() {
  const now = new Date()
  const seconds_ratio = now.getSeconds() / 60
  const minutes_ratio = (seconds_ratio + now.getMinutes()) / 60
  const hours_ratio = (minutes_ratio + now.getHours()) / 12
  setRotation(second, seconds_ratio)
  setRotation(minute, minutes_ratio)
  setRotation(hour, hours_ratio)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()