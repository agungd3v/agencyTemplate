const buttonPlayMaker = () => {
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
}

class TypeWritter {
  constructor(element, words, waitSec = 3000) {
    this.element = element
    this.words = words
    this.txt = ''
    this.wordIndex = 0
    this.wait = parseInt(waitSec, 10)
    this.type()
    this.isDeleting = false
  }
  type() {
    const currentIndex = this.wordIndex % this.words.length
    const fullTxt = this.words[currentIndex]
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1)
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1)
    }
    this.element.innerHTML = this.txt
    let typeSpeed = 50
    if (!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.wait
      this.isDeleting = true
    }
    if (this.isDeleting && this.txt === '') {
      this.isDeleting = false
      this.wordIndex++
      typeSpeed = 50
    }
    setTimeout(() => this.type(), typeSpeed)
  }
}

buttonPlayMaker()

export { buttonPlayMaker, TypeWritter }