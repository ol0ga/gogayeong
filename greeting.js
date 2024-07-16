const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
//const loginButton = document.querySelector("#login-form button");

//const link= document.querySelector('a');

const HIDDEN_CLASSNAME = "hidden";
//string만 포함된 변수는 대문자로 표기,string을 저장하고 싶을때 대문자로. 여기서는 중요한 정보를 담은것이 아니라서
const USERNAME_KEY = "username";

function onLoginSubmit(event){
//    console.log(loginInput.value);

    event.preventDefault();
//    console.log(loginInput.value);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
//    greeting.innerText = "hello " + username; 아래와같음
    //greeting.innerText = `hello ${username}`; // ``백틱기호 ''작은 따옴표 ""큰 따옴표

    //greeting.classList.remove(HIIDEN_CLASSNAME);
    paintGreetings(username);
//    console.log(username);

    //const username = loginInput.value;

    //if(username === ""){
    //    alert("name.!!!!!");
    //} else if(username.length > 15){
    //    alert("이름 너무 길어");
    //}

    //console.log(username);
//}

//function handleLinkClick(event){
//    event.preventDefault();
//    console.dir(event);
//    alert("clicked")
}

loginForm.addEventListener("submit", onLoginSubmit);
//link.addEventListener("click", handleLinkClick)
//loginButton.addEventListener("click", onLoginBtnClick);

// ()추가 ===> 바로실행한다는 뜻
//submit ===> 브라우저의 기본 동작을 막음 ==> 우리가 원하는 다음 동작을 가능하게 함
//localstorage ===> 브라우저에 무언가를 저장하게 해줌

function paintGreetings(username){
    greeting.innerText = `바보 ${username}`;// show the greetings
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME); // show the form
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}