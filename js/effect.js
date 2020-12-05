const eff = document.querySelectorAll('.eff')
let scale = 100
let opacity = 0
eff.forEach((e, i) => {
  setInterval(() => {
    if (scale === 180) {
      scale = 100
      opacity = 0
    }
    scale++
    opacity++
    scale = scale
    opacity = opacity
    e.style.width = scale + '%'
    e.style.height = scale + '%'
    e.style.backgroundColor = `rgba(23, 202, 154, ${ 3 / opacity })`
  }, 40 * (i + 1))
})