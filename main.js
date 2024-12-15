let scroll = document.querySelector(`.scroll`)
let barText = document.querySelectorAll(`.barText`)
let btnCT = document.querySelector(`.btnCT`)
let up = document.querySelector(`.up`) 

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        scroll.style.backgroundColor = `rgba(255, 157, 0, 0.5)`
        up.style.display = `block`
    } else {
        scroll.style.backgroundColor = `transparent`
        up.style.display = `none`
    }
}) 

barText[0].addEventListener('click', () => {
    let curTrip = document.querySelector(`.curTrip`)
    curTrip.scrollIntoView({behavior: `smooth`})
})

barText[1].addEventListener('click', () => {
    let hotelTextCont = document.querySelector(`.hotelTextCont`)
    hotelTextCont.scrollIntoView({behavior: `smooth`})
})

barText[2].addEventListener('click', () => {
    let datePrice = document.querySelector(`.datePrice`)
    datePrice.scrollIntoView({behavior: `smooth`})
})

btnCT.addEventListener(`click`, () => {
    let formSection = document.querySelector(`.formSection`)
    formSection.scrollIntoView({behavior: `smooth`})
})

up.addEventListener(`click`, () => {
    let imgBox = document.querySelector(`.imgBox`)
    imgBox.scrollIntoView({behavior: `smooth`})
})

let imagesFT = ["images/Rectangle 19.png", "images/слайдер 1  картинка 2.png", "images/слайдер 1  картинка 3.png"]

let i = 0

let imgFT = document.querySelector(`.imgFT`)
let btnLeftFT = document.querySelector(`.btnLeftFT`)
let btnRightFT = document.querySelector(`.btnRightFT`)

function updateBackgroundFT() {
    imgFT.style.backgroundImage = `url("${imagesFT[i]}")`
}

btnLeftFT.addEventListener('click', () => {
    i = (i - 1 + imagesFT.length) % imagesFT.length
    updateBackgroundFT()
});

btnRightFT.addEventListener('click', () => {
    i = (i + 1) % imagesFT.length
    updateBackgroundFT()
});

let imagesCT = ["images/Rectangle 22.png", "images/слайдер 2  картинка 2.png", "images/слайдер 2  картинка 3.png"]

let l = 0

let imgCT = document.querySelector(`.imgCT`)
let btnLeftCT = document.querySelector(`.btnLeftCT`)
let btnRightCT = document.querySelector(`.btnRightCT`)

function updateBackgroundCT() {
    imgCT.style.backgroundImage = `url("${imagesCT[l]}")`
}

btnLeftCT.addEventListener('click', () => {
    l = (l - 1 + imagesCT.length) % imagesCT.length
    updateBackgroundCT()
});

btnRightCT.addEventListener('click', () => {
    l = (l + 1) % imagesCT.length
    updateBackgroundCT()
});

let token = `7754847286:AAEI0Hei6RdzfagUgRYwVhfgbDGPJN85GH8`
let botName = `@bekbols_cappadocia_bot`
let urlAPI = `https://api.telegram.org/bot${token}/sendMessage`
let chatID = `1146510337`

let tg = document.querySelector(`#tg`)

tg.addEventListener('submit', function(e) {
    e.preventDefault()
    let message = `<b>Заявка с сайта "Cappadocia"</b>\n`
    message += `<b>Отправитель: </b>  ${this.name.value}\n`
    message += `<b>Номер:</b>  ${this.number.value}\n`
    axios.post(urlAPI, {
        chat_id : chatID,
        parse_mode : `html`,
        text : message
    }).then ((res) => {
        this.name.value = ``
        this.number.value = ``
    }).catch((err) => {
        console.log(err);
    }).finally(() => {
        console.log(`Good`);
    })
})