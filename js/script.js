gsap.from('#intro .char', {
    yPercent: 110,
    stagger: 0.03,
    duration : 0.3,
    ease:'power1'
})
// gsap.from('#intro .char', {
//     rotationX: 180,
//     xPercent: 110,
//     stagger: 0.03,
//     duration : 0.3,
//     ease:'power1'
// })

const koTime = document.querySelector('#koTime')

function updateTime() {
    
    const koreaTime = new Date().toLocaleTimeString("en-US", {
        // timeZone:'Asia/Seoul',
        // hour:'2-digit',
        // minute: '2-digit',
        // second:'2-digit',
        hour12: false

    })
    koTime.textContent = koreaTime
}

updateTime()
setInterval(updateTime, 1000)