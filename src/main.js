const string = `
.skin * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.skin *::after {
    box-sizing: border-box;
}

.skin *::before {
    box-sizing: border-box;
}

.skin {
    background: #ffe600;
    position: relative;
    height: 50vh;
}

.nose {
    border: 10px solid red;
    border-color: black transparent transparent;
    border-bottom: none;
    width: 0px;
    position: relative;
    left: 50%;
    top: 145px;
    margin-left: -10px;
    z-index: 5;
}

@keyframes wave {
    0% {
        transform: rotate(0deg);
    }
    33% {
        transform: rotate(5deg);
    }
    66% {
        transform: rotate(-5deg);
    }
    100% {
        transform: rotate(0deg);
    }
}

.nose:hover {
    transform-origin: center bottom;
    animation: wave 300ms infinite linear;
}

.yuan {
    width: 20px;
    height: 6px;
    position: absolute;
    left: -10px;
    top: -16px;
    border-radius: 10px 10px 0 0;
    background: black;
}

.eye {
    border: 2px solid #000;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background: #2e2e2e;
    border-radius: 50%;
}

.eye::before {
    content: '';
    display: block;
    border: 3px solid #000;
    width: 25px;
    height: 25px;
    background: white;
    border-radius: 50%;
    position: relative;
    left: 8px;
    top: 4px;
}

.eye.left {
    transform: translateX(-100px);
}

.eye.right {
    transform: translateX(100px);
}

.mouth {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 170px;
    margin-left: -100px;
}

.mouth .up {
    position: relative;
    top: -20px;
    z-index: 1;
}

.mouth .up .lip {
    border: 3px solid black;
    height: 30px;
    width: 100px;
    background: #ffe600;
    border-top-color: transparent;
    border-right-color: transparent;
    position: relative;
    position: absolute;
    left: 50%;
    margin-left: -50px;
}

.mouth .up .lip.left {
    border-radius: 0 0 0 50px;
    transform: rotate(-15deg) translateX(-52px);
}

.mouth .up .lip.right {
    border-radius: 0 0 50px 0;
    transform: rotate(15deg) translateX(52px);
}

.mouth .up .lip::before {
    bottom: 0;
    background: #ffe600;
    content: '';
    display: block;
    width: 7px;
    height: 30px;
    position: absolute;
}

.mouth .up .lip.left::before {
    right: -6px;
}

.mouth .up .lip.right::before {
    left: -6px;
}

.mouth .down {
    height: 180px;
    position: absolute;
    top: 5px;
    width: 100%;
    overflow: hidden;
}

.mouth .down .yuan1 {
    border: 3px solid black;
    width: 150px;
    height: 1000px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    border-radius: 75px/300px;
    background: #9b000a;
    overflow: hidden;
}

.mouth .down .yuan1 .yuan2 {
    width: 200px;
    height: 300px;
    position: absolute;
    bottom: -155px;
    background: #ff485f;
    left: 50%;
    margin-left: -100px;
    border-radius: 100px;
}

.face {
    position: absolute;
    left: 50%;
    border: 3px solid black;
    width: 88px;
    height: 88px;
    top: 200px;
    margin-left: -44px;
    z-index: 3;
}

.face.left {
    transform: translateX(-200px);
    background: #ff0000;
    border-radius: 50%;
}

.face.right {
    transform: translateX(200px);
    background: #ff0000;
    border-radius: 50%;
}
` //创建文件夹  声明string   导出string   export default string     在原来的js文件夹引入   import string from './ .js'
let n = 1
demo.innerText = string.substr(0, n)
demo2.innerHTML = string.substr(0, n)

let time = 100

const run = () => {
    n += 1
    if (n > string.length) {
        window.clearInterval(id)
        return
    }
    demo.innerText = string.substr(0, n)
    demo2.innerHTML = string.substr(0, n)
    demo.scrollTop = demo.scrollHeight
}

const pause = () => {
    window.clearInterval(id)
}

const play = () => {
    return setInterval(run, time);
}

let id = play()

const slow = () => {
    window.clearInterval(id)
    time = 300
    id = play()
}
const normal = () => {
    window.clearInterval(id)
    time = 100
    id = play()
}
const fast = () => {
    window.clearInterval(id)
    time = 0
    id = play()
}

btnPause.onclick = pause
btnPlay.onclick = () => {
    id = play()
}
btnSlow.onclick = slow
btnNormal.onclick = normal
btnFast.onclick = fast