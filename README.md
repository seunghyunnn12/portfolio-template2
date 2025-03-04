# portfolio-template2
GSAP 애니메이션 및 한국 시간 표시 README

개요

이 프로젝트는 GSAP을 사용하여 텍스트 애니메이션을 적용하고, JavaScript를 활용하여 한국 시간을 실시간으로 표시합니다.

주요 기능

GSAP 애니메이션: #intro .char 요소에 y축 이동 효과 적용

실시간 한국 시간 표시: setInterval을 사용하여 매초 업데이트

코드 설명

GSAP 애니메이션 적용

gsap.from('#intro .char', {
    yPercent: 110,
    stagger: 0.03,
    duration : 0.3,
    ease:'power1'
})

#intro .char 요소들이 아래에서 위로 등장하는 애니메이션 적용

stagger: 0.03을 사용하여 요소들이 순차적으로 나타남

duration: 0.3 초 동안 애니메이션 실행

ease: 'power1'으로 자연스러운 가속도 적용

주석 처리된 코드 (추가 옵션)

// gsap.from('#intro .char', {
//     rotationX: 180,
//     xPercent: 110,
//     stagger: 0.03,
//     duration : 0.3,
//     ease:'power1'
// })

X축 회전(rotationX: 180) 및 오른쪽에서 왼쪽으로 이동하는 애니메이션

필요에 따라 주석을 해제하여 사용 가능

한국 시간 업데이트

const koTime = document.querySelector('#koTime')

function updateTime() {
    const koreaTime = new Date().toLocaleTimeString("en-US", {
        hour12: false
    })
    koTime.textContent = koreaTime
}

updateTime()
setInterval(updateTime, 1000)

#koTime 요소에 현재 시간을 표시

updateTime() 함수에서 toLocaleTimeString()을 사용하여 현재 시간 변환

setInterval(updateTime, 1000)을 사용해 1초마다 시간 업데이트

요구 사항

GSAP 라이브러리

HTML 구조: #intro .char 및 #koTime 요소가 HTML 문서에 존재해야 함

설치 방법

GSAP을 CDN으로 포함합니다:

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>

HTML 구조 추가:

<div id="intro">
    <span class="char">텍스트</span>
</div>
<div id="koTime"></div>

JavaScript 코드를 추가합니다.

사용 방법

HTML 파일을 실행하면 #intro .char 요소에 애니메이션이 적용되고, #koTime에 실시간 시간이 표시됩니다.

라이선스

이 프로젝트는 오픈 소스로 자유롭게 수정 및 사용 가능합니다.

