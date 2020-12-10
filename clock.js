const clockContainer = document.querySelector(".js-clock"),
     clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`
        //10 보다 작은 숫자가 오면 0+숫자로 표현될 수 있는 삼항연산자
}

function init(){
    getTime();      //현재 시각 불러오기
    setInterval(getTime, 1000);     //1초마다 시간 업데이트
}
init();