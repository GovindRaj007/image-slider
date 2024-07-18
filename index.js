const left = document.querySelector(".left-arrow")
const right = document.querySelector(".right-arrow")
const slider = document.querySelector(".slider")


let slideNumber = 1
const length = slider.childElementCount

const btn = document.querySelectorAll(".button")
btn[0].style.backgroundColor = "white"

const resetBg = () => {
    btn.forEach(button => {
        button.style.backgroundColor = "transparent"
    })
}
btn.forEach((button, i) => {  //button is each button element from btn and i is indexes for each element starting from 0
    button.addEventListener("click", () => {
        resetBg()
        slider.style.transform = `translateX(-${i * 400}px)`
        slideNumber = i + 1
        button.style.backgroundColor = "white"

    })
})


const nextSlide = () => {
    slider.style.transform = `translateX(-${slideNumber * 400}px)`
    slideNumber++

}
const prevSlide = () => {
    slider.style.transform = `translateX(-${(slideNumber - 2) * 400}px)`
    slideNumber--
}
const getFirstSlide = () => {
    slider.style.transform = `translateX(0px)`
    slideNumber = 1
}
const getLastSlide = () => {
    slider.style.transform = `translateX(-${(length - 1) * 400}px)`
    slideNumber = length
}
const changeColor = () => {
    resetBg()
    btn[slideNumber - 1].style.backgroundColor = "white"
}

right.addEventListener("click", () => {
    slideNumber < length ? nextSlide() : getFirstSlide()
    changeColor()

})
left.addEventListener("click", () => {
    slideNumber > 1 ? prevSlide() : getLastSlide()
    changeColor()

})