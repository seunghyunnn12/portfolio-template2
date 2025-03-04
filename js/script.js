const c1 = document.querySelector('.c1')
const c2 = document.querySelector('.c2')
let childElement = null
let num1 = 250
let num2 = 200


appendChild(c1,num1)
appendChild(c2,num2)
function appendChild(child,idx) {
    for (let i = 0; i < idx; i++) {
        childElement = document.createElement('div')
        child.append(childElement)
    }
}

anime({
    targets: '.c2>div',
    scale: [
        { value: .1, easing: 'easeOutSine', duration: 500 },
        { value: 1, easing: 'easeInOutQuad', duration: 1200 }
    ],
    delay: anime.stagger(200, { grid: [20, 20], from: 'center' }),
    loop: true
});

anime({
    targets: '.c1>div',
    translateX: anime.stagger(10, { grid: [14, 5], from: 'center', axis: 'x' }),
    translateY: anime.stagger(10, { grid: [14, 5], from: 'center', axis: 'y' }),
    rotateZ: anime.stagger([0, 90], { grid: [14, 5], from: 'center', axis: 'x' }),
    delay: anime.stagger(200, { grid: [20, 20], from: 'center' }),
    easing: 'easeInOutQuad',
    loop: true
});