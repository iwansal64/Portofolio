const randomize = (min, max) => {
    return Math.floor(Math.random() * (max - min) ) + min
}

const tabA = document.getElementById('tabA')
const tabB = document.getElementById('tabB')
const tabC = document.getElementById('tabC')
const tabD = document.getElementById('tabD')

tabA.onclick = x => { onClick('profile') }
tabB.onclick = x => { onClick('skills') }
tabC.onclick = x => { onClick('achievement') }
tabD.onclick = x => { onClick('organization') }

const decorations = document.querySelectorAll('.decor')
let size = 0
let posX = 0
let posY = 0
decorations.forEach(element => {
    size = randomize(25, 150)
    posX = randomize(50, 1300)
    posY = randomize(150, 600)

    let rgba = [randomize(0, 255), randomize(0, 255), randomize(0, 255), Math.random()]
    element.style.height = size.toString()+"px"
    element.style.width = size.toString()+"px"
    element.style.left = posX.toString()+"px"
    element.style.top = posY.toString()+"px"
    element.style.backgroundColor = `rgba(${rgba[0].toString()}, ${rgba[1].toString()}, ${rgba[2].toString()}, ${rgba[3]})`
});

const content = document.getElementById('content')
const mainTitle = document.getElementById('main-title')
const title = document.getElementById('title')
const circleIn = document.getElementById('in')
const circleOut = document.getElementById('out')
const circleDecor = document.getElementById('circle-decor')
const circleHiding = document.getElementById('circle-hiding')
const infoContent = document.getElementById('info-content')
const infoText = document.getElementById('info-text')
const infoTitle = document.getElementById('info-title')
const back = document.getElementById('back')
const next = document.getElementById('next')
const lastEmailMe = document.getElementById('last-email-me')

title.onclick = x => {nameClick()}
back.onclick = x => {wheeling(this, 1)}
next.onclick = x => {wheeling(this, 2)}

const profileSection = document.getElementById('profile-section')
const skillsSection = document.getElementById('skills-section')
const footerSection = document.getElementById('footer-section')
const navContentsMain = document.getElementById('main-title-nav')
const navContentsProfile = document.getElementById('profile-nav')
const navContentsSkills = document.getElementById('skills-nav')
const navContentsFooter = document.getElementById('footer-nav')


Array.from(document.getElementsByClassName("nav-bar-content")).forEach(ele => {
    ele.onclick = x => {
        nav(navContentsMain.id)
    }
})

let scrollY = 0
let maxScroll = 170

let firstTabA = Number.parseInt(window.getComputedStyle(tabA).right);
let firstTabB = Number.parseInt(window.getComputedStyle(tabB).bottom);
let firstTabC = Number.parseInt(window.getComputedStyle(tabC).left);
let firstTabD = Number.parseInt(window.getComputedStyle(tabD).top);
// let LinearGrad = window.getComputedStyle(document.body).backgroundImage;
// let linearGradSplit = LinearGrad.split("(")
// let firstLinearGrad = linearGradSplit[0]
// let lastLinearGrad = linearGradSplit[1].split(',')[1]+"("+linearGradSplit[2]+"("+linearGradSplit[3]+"("+linearGradSplit[4]+"("+linearGradSplit[5]
let firstLeftProfile = -60;
let firstLeftSkills = -70;
let firstLeftFooter = -80;
let firstLeftLastEmailMe = -65;

let nameCondition = true
let before = ""
let contentTitle = '';
// #region SCROLL THINGS...
let speedFactor = 4
let lock = false

function updateContent(up=true, animate=false) {
    // #region Update Up
    if (up) {
        if (scrollY > maxScroll) {
            scrollY = maxScroll
        }

        if (scrollY > 150) {
            let leftPos = scrollY - 140
            lastEmailMe.style.left = (firstLeftLastEmailMe + leftPos * speedFactor).toString() + "%"
        }
        else if (scrollY > 120) {
            let leftPos = scrollY - 120
            footerSection.style.left = (firstLeftFooter + leftPos * speedFactor).toString() + "%"

            if (animate) {
                footerSection.style.transitionDuration = "1s"
                circleOut.style.transitionDuration = "1s"
            }
            
            contentTitle = true
        }
        else if (scrollY > 90 && scrollY <= 120) {
            let leftPos = scrollY - 90
            skillsSection.style.left = (firstLeftSkills + leftPos * speedFactor).toString() + "%"

            if (animate) {
                skillsSection.style.transitionDuration = "1s"
                circleOut.style.transitionDuration = "1s"
            }
            
            contentTitle = true
        }
        else if (scrollY > 80 && scrollY <= 90) {
            contentTitle = true
        }
        else if (scrollY > 50 && scrollY <= 80) {
            let leftPos = scrollY - 50
            profileSection.style.left = (firstLeftProfile + leftPos * speedFactor).toString() + "%"

            circleOut.style.opacity = (1 - leftPos / 30).toString()
            circleOut.style.pointerEvents = "None"
            circleDecor.classList.add("zero-opacity")
            if (animate) {
                profileSection.style.transitionDuration = "1s"
                circleOut.style.transitionDuration = "1s"
            }
            
            contentTitle = false
        }
        else if (scrollY > 40) {
            contentTitle = "Contact me"
        }
        else if (scrollY > 30) {
            let value = scrollY - 30
            tabD.style.top = (firstTabD + value * (-(firstTabD) / 10)).toString() + "px"
            if (animate) {
                tabD.style.transitionDuration = "1s"
            }
            contentTitle = 'Organization'
        }
        else if (scrollY > 20) {
            let value = scrollY - 20
            tabC.style.left = (firstTabC + value * (-(firstTabC) / 10)).toString() + "px"
            if (animate) {
                tabC.style.transitionDuration = "1s"
            }
            contentTitle = 'Achievement'
        }
        else if (scrollY > 10) {
            let value = scrollY - 10
            tabB.style.bottom = (firstTabB + value * (-(firstTabB) / 10)).toString() + "px"
            if (animate) {
                tabB.style.transitionDuration = "1s"
            }
            contentTitle = 'Skills'
        }
        else {
            let value = scrollY
            tabA.style.right = (firstTabA + value * (-(firstTabA) / 10)).toString() + "px"
            if (animate) {
                tabA.style.transitionDuration = "1s"
            }
            contentTitle = 'Profile'
        }
    }
    // #endregion
    // #region Update Down
    else {
        if (scrollY > 150) {
            let leftPos = scrollY - 140
            lastEmailMe.style.left = (firstLeftLastEmailMe + leftPos * speedFactor).toString() + "%"
        }
        else if (scrollY >= 120) {
            let leftPos = scrollY - 120
            footerSection.style.left = (firstLeftFooter + leftPos * speedFactor).toString() + "%"
            
            if (animate) {
                footerSection.style.transitionDuration = "1s"
                circleOut.style.transitionDuration = "1s"
            }
            
            contentTitle = true
        }
        else if (scrollY >= 90 && scrollY < 120) {
            let leftPos = scrollY - 90
            skillsSection.style.left = (firstLeftSkills + leftPos * speedFactor).toString() + "%"
            
            if (animate) {
                skillsSection.style.transitionDuration = "1s"
                circleOut.style.transitionDuration = "1s"
            }
            
            contentTitle = true
        }
        else if (scrollY > 80 && scrollY < 90) {
            contentTitle = true
        }
        else if (scrollY >= 50 && scrollY <= 80) {
            let leftPos = scrollY - 50
            profileSection.style.left = (firstLeftProfile + leftPos * speedFactor).toString() + "%"
            circleOut.style.opacity = (1 - leftPos / 41).toString()
            circleOut.style.pointerEvents = "None"
            circleDecor.classList.add("zero-opacity")
            if (animate) {
                profileSection.style.transitionDuration = "1s"
                circleOut.style.transitionDuration = "1s"
            }
            
            contentTitle = false
        }
        else if (scrollY > 40) {
            contentTitle = "Contact me"
            circleDecor.style.opacity = "1"
            circleOut.style.transitionDuration = "0s"
            circleOut.style.opacity = "1"
            circleOut.style.pointerEvents = "auto"
        }
        else if (scrollY >= 30) {
            let value = scrollY - 30
            tabD.style.top = (firstTabD + value * (-(firstTabD) / 10)).toString() + "px"
            if (animate) {
                tabD.style.transitionDuration = "1s"
            }
            contentTitle = 'Organization'
        }
        else if (scrollY >= 20) {
            let value = scrollY - 20
            tabC.style.left = (firstTabC + value * (-(firstTabC) / 10)).toString() + "px"
            if (animate) {
                tabC.style.transitionDuration = "1s"
            }
            contentTitle = 'Achievement'
        }
        else if (scrollY >= 10) {
            let value = scrollY - 10
            tabB.style.bottom = (firstTabB + value * (-(firstTabB) / 10)).toString() + "px"
            if (animate) {
                tabB.style.transitionDuration = "1s"
            }
            contentTitle = 'Skills'
        }
        else if (scrollY >= 0) {
            let value = scrollY
            tabA.style.right = (firstTabA + value * (-(firstTabA) / 10)).toString() + "px"
            if (animate) {
                tabA.style.transitionDuration = "1s"
            }
            contentTitle = 'Profile'
        }
        else {
            contentTitle = 'NAME'
        }
    }
    // #endregion
}

function scrollDown(num, animate) {
    
    if (animate) {
        if (scrollY >= maxScroll) {
            scrollY += 1
        }
        else if(scrollY >= maxScroll + 1) {
            return
        }
        else {
            scrollY += (10 - scrollY % 10)
        }
    }
    else {
        scrollY += num
    }

    updateContent(true, animate)
    titleUpdate()
}

function scrollUp(num, animate) {
    
    if (animate) {
        if (scrollY == 0) {
            scrollY -= 1
        }
        else if(scrollY <= -1) {
            return
        }
        else {
            scrollY -= scrollY % 10 != 0? scrollY % 10 : 10
        }
    }
    else {
        scrollY -= num
    }

    updateContent(false, animate)
    titleUpdate()
}

function titleUpdate() {
    if (before != contentTitle) {
        before = contentTitle
        
        if (contentTitle.toString() == "false") {
            title.innerHTML = ""
            mainTitle.style.transitionDuration = "1s"
            mainTitle.style.color = "rgba(0, 0, 0, 1)"
        }
        else if (contentTitle.toString() == "true") {
            title.innerHTML = ""
            mainTitle.style.transitionDuration = "1s"
            mainTitle.style.color = "rgba(0, 0, 0, 0)"

        }
        else {
            title.innerHTML = contentTitle
        }
        

        content.innerHTML = ""
        if (contentTitle == "Profile") {
            content.innerHTML = "\nRidwan B.S\nKelas 9"
            content.style.color = "red"
        }
        else if (contentTitle == "Skills") {
            content.innerHTML = "\nSkills : Python, Javascript, html, css"
            content.style.color = "aqua"
        }
        else if (contentTitle == "Achievement") {
            content.innerHTML = "\nPython : Bikin linear regresi\nHTML, CSS, Javascript : bikin ini\nC# : membuat game"
            content.style.color = "#0c8"
        }
        else if (contentTitle == "Organization") {
            content.innerHTML = "\nCuman dikit hehe :v"
            content.style.color = "#f5c"
        }
        if (contentTitle == "NAME") {
            content.innerHTML = ""
            title.innerHTML = "Ridwan"
            title.className = "myname"
            title.style.color = "black"
            title.onclick = x => {nameClick()}
            nameCondition = true
        }
        else if (contentTitle == "Contact me") {
            title.innerHTML = "Mail Me"
            title.classList.add("contact-me")
            title.onclick = x => {onClick("contact-me")}
            title.style.cursor = "pointer"
        }
        else {
            title.className = "content"
            title.classList.remove("Contact-Me")
            title.style.cursor = "default"
            title.onclick = x => {}
            nameCondition = false
        }
    }
}


function wheeling(e, code=0) {
    
    if (code == 0) {
        if (e.wheelDelta > 0 && scrollY > -1) {
            scrollUp(1, false)
        }
        else if (e.wheelDelta < 0) {
            scrollDown(1, false)
        }
    }
    else if (code == 1) {
        scrollUp(10, true)
        
    }
    else if (code == 2) {
        scrollDown(10, true)
    }
}

// #endregion



let popup = false
let informations = {
    "profile":"Name : Ridwan B.S\nKelas : 9\nSMP DAYA UTAMA",
    "skills":"-Python\t-C#\n-Javascript\t-Java\n-Html\n-Css\n-Dart",
    "achievement":
        "Python :\n\t-Membuat kalkulator regresi grafik\n\t-Membuat kalkulator grafik fungsi\n\t-Membuat aplikasi crop image automatis",
    "organization":"-pernah nyoba ikut ngoding bareng orang luar negeri (projek mod hollow knight) cuman gak terlalu guna hehe\n-ikut organisasi di projek bellshade cuman gak tau caranya kontribusi wkwk"
}
let titleColor = {
    "profile":"#d00",
    "skills":"#0dd",
    "achievement":"#af0",
    "organization":"#c0f"
}

function onClick(info) {
    if (lock) {
        return
    }

    infoContent.classList.replace("popdown", "popup")
    popup = true

    if (info == "contact-me") {
        infoTitle.innerHTML = "Mail Me!"
        infoTitle.classList.add("contact-me-title")
        infoTitle.style.cursor = "pointer"
        infoTitle.onclick = x => {
            window.location.href = "mailto:iwansal64@gmail.com?subject=Saran/Masukan"
        }
        return
    }
    
    infoTitle.classList.remove("contact-me-title")
    infoTitle.innerHTML = info.toString()
    infoTitle.style.backgroundColor = titleColor[info]
    infoText.innerHTML = informations[info]
    infoText.style.color = titleColor[info]
    infoTitle.onclick = x => {}
}




let navList = {
    "main-title-nav" : 0,
    "profile-nav" : 80,
    "skills-nav" : 120,
    "footer-nav" : 150
}
let br = false
let t = 0
function nav(target) {
    if (lock) {
        return
    }
    if (target in navList) {
        let targetDistance = navList[target]
        let loop = setInterval(() => {
            if (targetDistance > scrollY?targetDistance <= scrollY:targetDistance >= scrollY) {
                console.log(scrollY)
                scrollDown(Math.sign(scrollY - targetDistance), false)
                if (t == 500) {
                    clearInterval(loop)
                }
                t += 1
            }
            else {
                clearInterval(loop)
            }
        }, 100);
    }
}

let timeout;

// Animation Gilak
function nameClick() {
    if (lock) {
        return
    }
    if (nameCondition) {
        document.body.style.transitionDelay = "2s"
        document.body.style.backgroundColor = "#bbb"

        circleOut.style.transition = "1s"
        circleOut.style.backgroundColor = "#0ff"

        circleHiding.style.transitionDelay = "0.1s"
        circleHiding.style.transitionDuration = "0.9s"
        circleHiding.style.backgroundColor = "#0dd"
        circleHiding.style.transitionProperty = "background-color"

        circleIn.style.transition = "1s"
        circleIn.style.backgroundColor = "#0bb"

        title.style.transition = "1s"
        title.style.color = "#0ff"

        back.style.backgroundColor = "#0aa"
        back.style.borderColor = "#2cc"

        next.style.backgroundColor = "#0aa"
        next.style.borderColor = "#2cc"

        circleDecor.classList.remove("zero-opacity")
        circleDecor.style.transition = "2s"
        circleDecor.style.width = "800px"
        circleDecor.style.height = "800px"
        circleDecor.style.opacity = "1"
        
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            circleOut.style.transition = "0.25s"
            circleOut.style.backgroundColor = "#a00"
            
            circleHiding.style.transitionDelay = "0.25s"
            circleHiding.style.transitionDuration = "0.15s"
            circleHiding.style.backgroundColor = "#b00"
            circleHiding.style.transitionProperty = "background-color"
            
            circleIn.style.backgroundColor = "#c00"
            circleIn.style.transitionDelay = "0.4s"
            circleIn.style.transitionDuration = "0.15s"
            circleIn.style.transitionProperty = "background-color"

            title.style.transition = "0.25s"
            title.style.color = "#f00"

            back.style.transition = "0.25s"
            back.style.backgroundColor = "#525252"
            back.style.borderColor = "#676767"
            
            next.style.transition = "1s"
            next.style.backgroundColor = "#525252"
            next.style.borderColor = "#676767"
            
            circleDecor.classList.add("zero-opacity")
            
            setTimeout(() => {
                title.style.transition = "0.5s"
                title.style.color = "#000"
                
                circleOut.style.transition = "0.5s"
                circleOut.style.backgroundColor = "#555"
                
                
            }, 200);
            
            setTimeout(() => {
                circleIn.style.transitionDuration = "0.15s"
                circleIn.style.backgroundColor = "#ccc"
                
                circleHiding.style.transitionDuration = "0.15s"
                circleHiding.style.backgroundColor = "#333"
                
                title.style.transition = "0.1s"
                title.style.backgroundColor = "#800"
                title.style.color = "#990"
                
                setTimeout(() => {
                    title.style.backgroundColor = "#666"
                    title.style.transition = "0.25s"
                    title.style.color = "#000"
                    title.style.rotate = "0deg"

                    document.body.style.transitionDelay = "0.25s"
                    document.body.style.backgroundColor = "#fff"
                }, 250);
                
            }, 480);

        }, 1600);
    }
}
// -----------------------------------------------

window.addEventListener('wheel', e => {
    if (lock) {
        e.preventDefault
    }
    else {
        wheeling(e, 0)
    }
}, {passive: false})

infoContent.addEventListener('click', e => {
    if (lock) {
        e.preventDefault
    } else {
        if (popup) {
            infoContent.classList.replace("popup", "popdown")
            infoTitle.innerHTML = ""
            infoText.innerHTML = ""
            popup = false
        }
    }
}, {passive: false})

window.addEventListener('touchmove', x => {
    x.preventDefault()
}, {passive: false})


// Decoration Cuy
setInterval(() => {
    decorations.forEach(element => {
        let movementX = 0
        let movementY = 0
        let elementStyle = window.getComputedStyle(element)
        let elementTop = Number.parseInt(elementStyle.top)
        let elementLeft = Number.parseInt(elementStyle.left)
        let maxBound = [800, 600]
        let min = -50
        let max = 50
        
        if (elementLeft >= maxBound[0] - Math.abs(min)) {
            movementX = randomize(min, max - (elementLeft - maxBound[0]))
        }
        else if (elementLeft <= max) {
            movementX = randomize(min + elementLeft, max)
        }
        else {
            movementX = randomize(min, max)
        }

        if (elementStyle.top >= maxBound[1] - Math.abs(min)) {
            movementY = randomize(min, max - (elementTop - maxBound[1]))
        }
        else if (elementStyle.top <= max) {
            movementY = randomize(min + elementTop, max)
        }
        else {
            movementY = randomize(min, max)
        }
        element.style.transition = "1s"
        element.style.left = (elementLeft+movementX).toString()+"px"
        element.style.pos = (elementTop+movementY).toString()+"px"

        
    });
}, 1500);


let degree = Number.parseInt(window.getComputedStyle(document.body).backgroundColor.split('(')[1].split(',')[0]) - 200
let down = true
setInterval(() => {

    if (degree >= 54) {
        down = true
    }
    else if (degree <= 0){
        down = false;
    }

    down==true? degree-=1 : degree+=1

    let rgbVal = degree + 200
    document.body.style.backgroundColor = `rgb(${rgbVal}, ${rgbVal}, ${rgbVal})`
}, 100);

function mediaQuery(x) {
    if (x.media == "(max-width: 321px)") {
        if (x.matches) { // If media query matches
            speedFactor = 3.5
            firstLeftProfile = -110
            firstLeftSkills = -120
            firstLeftFooter = -130
            return true
        }
    }
    else if (x.media == "(max-width: 376px)") {
        if (x.matches) { // If media query matches
            speedFactor = 3
            firstLeftFooter = -130
            return true
        }
    }
    else if (x.media == "(max-width: 426px)") {
        if (x.matches) { // If media query matches
            speedFactor = 2
            return true
        }
    }
    speedFactor = 3.5
    return false
}


var x = window.matchMedia("(max-width: 321px)")
var y = window.matchMedia("(max-width: 376px)")
var z = window.matchMedia("(max-width: 426px)")
setInterval(() => {
    if (!mediaQuery(x)) {
        if(!mediaQuery(y)) {
            mediaQuery(z)
        }
    }
}, 100);


window.addEventListener('keydown', e => {
    if (e.key == "t") {
        console.log("BREAKED")
        br = true
    }
})
