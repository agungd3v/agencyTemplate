const parallax = () => {
    window.addEventListener('scroll', () => {
        const distance = window.scrollY
        document.querySelector('.welcome').style.transform = `translateY(${distance * 1 / 2}px)`
    })
}

parallax()

export { parallax }