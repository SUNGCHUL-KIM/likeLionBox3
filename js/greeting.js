const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden"; //대문자만 쓰는 이유는 string만 포함된 변수임을 구분하기 위해서임
const USERNAME_KEY = "username";

// function onLoginSubmit(tomato) {
//     tomato.preventDefault(); //브라우저의 기본 동작ㅇ르 막아준다.
//     console.log(tomato); //함수를 호출할 때, JS는 함수의 관한 정보도 같이 제공한다? 이 대목에서는 이벤트 호출에 관한 것.
//     //const username = loginInput.value;
//     // console.log(username);
// }
function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting();
}

function paintGreeting() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;
    //"hello " + username과 같은 의미 1. ${}을 이용하여 변수 입력, 2.``기호를 사용할 것
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// loginForm.addEventListener("submit", onLoginSubmit);
// form에서 서밋할 떄 입력값을 받아냄, 

//local storage -> 브라우저에서 제공하는 저장소(유저 이름과 같은) localStorage.setItem(key, value)

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) { // 저장된 이름이 없을 때, 폼을 보임
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else { //있을 때는 폼을 없앰
    paintGreeting();
    
}

