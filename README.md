# portfolio-template2
애니메이션 그리드 README

개요

이 프로젝트는 Anime.js를 사용하여 div 요소의 애니메이션 그리드를 생성합니다. 두 개의 컨테이너(.c1, .c2) 내부에 동적으로 요소를 생성한 후 애니메이션을 적용합니다.

주요 기능

그리드 애니메이션: 격자 형태로 배치된 요소에 애니메이션 효과 적용

Anime.js 통합: Anime.js를 활용한 부드러운 애니메이션

반복 애니메이션: 애니메이션이 무한 루프로 실행됨

코드 설명

요소 생성

const c1 = document.querySelector('.c1')
const c2 = document.querySelector('.c2')
let childElement = null
let num1 = 250
let num2 = 200

appendChild(c1, num1)
appendChild(c2, num2)

function appendChild(child, idx) {
    for (let i = 0; i < idx; i++) {
        childElement = document.createElement('div')
        child.append(childElement)
    }
}

appendChild 함수는 .c1과 .c2 내부에 div 요소를 동적으로 추가합니다.

num1, num2는 각각 컨테이너 내부에 생성할 요소 개수를 정의합니다.

.c2 애니메이션

anime({
    targets: '.c2>div',
    scale: [
        { value: .1, easing: 'easeOutSine', duration: 500 },
        { value: 1, easing: 'easeInOutQuad', duration: 1200 }
    ],
    delay: anime.stagger(200, { grid: [20, 20], from: 'center' }),
    loop: true
});

.c2>div 요소들이 0.1에서 1로 크기가 커지도록 애니메이션 효과 적용

easeOutSine, easeInOutQuad와 같은 easing 함수를 사용해 부드러운 전환 효과 제공

중앙에서 시작해 일정한 간격(stagger)으로 애니메이션 실행

무한 반복(loop: true)

.c1 애니메이션

anime({
    targets: '.c1>div',
    translateX: anime.stagger(10, { grid: [14, 5], from: 'center', axis: 'x' }),
    translateY: anime.stagger(10, { grid: [14, 5], from: 'center', axis: 'y' }),
    rotateZ: anime.stagger([0, 90], { grid: [14, 5], from: 'center', axis: 'x' }),
    delay: anime.stagger(200, { grid: [20, 20], from: 'center' }),
    easing: 'easeInOutQuad',
    loop: true
});

.c1>div 요소들이 X, Y 축을 따라 이동하고, Z축을 기준으로 회전하는 애니메이션 적용

stagger를 활용하여 격자 형태의 자연스러운 애니메이션 연출

loop: true로 무한 반복

요구 사항

Anime.js: Anime.js를 프로젝트에 포함해야 합니다.

HTML 구조: .c1과 .c2가 HTML 문서 내에 존재해야 합니다.

설치 방법

Anime.js를 CDN으로 포함합니다:

<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>

HTML 구조를 추가합니다:

<div class="c1"></div>
<div class="c2"></div>

위의 JavaScript 코드를 프로젝트에 추가합니다.

사용 방법

해당 스크립트를 브라우저에서 실행하면 .c1과 .c2 내부 요소들이 애니메이션됩니다.
