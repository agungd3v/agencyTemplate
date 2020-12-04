window.addEventListener('scroll', () => {
    const distance = window.scrollY
    document.querySelector('.welcome').style.transform = `translateY(${distance * 1 / 2}px)`
})
window.addEventListener('wheel', evt => {
    console.log(evt)
}, { capture: true, passive: true })