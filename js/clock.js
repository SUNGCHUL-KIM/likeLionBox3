//기본 개념 - 인터벌, 타임아웃
//특정시간마다 반복되어 일어나야 하는 무언가(인터벌) setInterval(함수, 몇 초마다)
//padStart -> 13:24:1처럼 초 단위에서 2개의 자리가 안 나오는 경우를 방지. "1".padStart(2,"0")
//padEnd -> 마지막에 채우는 방식
const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText =`${hours}:${minutes}:${seconds}`;
}

// setInterval(sayHello, 5000);
getClock(); //이 코드는 새로고침 시 즉시 시간을 보이게 함. 없으면 00:00:00부터 시작된다.
setInterval(getClock, 1000);


