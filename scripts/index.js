
//폭탄이 있는 위치를 나타내는 배열
//DOM이 로드가 되면 반복문을 이용하여 [0,0,0,0,0,0,0,0,1]로 초기화
let num = [0, 0, 0, 0, 0, 0, 0, 0, 1];

//박스를 선택한 순서를 기록하는 배열
let selNum = [];

//박스를 선택한 개수를 기록하는 변수
let cnt = 0;

//폭탄이 섞였는지 체크하는 flag변수
let shuffleFlag = false;

//메시지 표시 함수
const showMsg = (m) => {
    document.querySelector("#msg").innerHTML = m;
}
// 보드 내용 지우기
const boardInit = () => {
    const board = document.querySelectorAll(".boardBox");
    for (let item of board) {
        item.innerHTML = '';
    }
    cnt = 0;
    selNum.length = 0;
}

//보드 숫자 누른 후 보여주기 함수
const show = (n) => {
   
    if (!shuffleFlag) {
        showMsg("폭탄을 섞어주세요.");
        //boxShuffle();
        return;
    }
    else {
        const boardBox = document.querySelectorAll(".boardBox");
        // document.querySelector("#box" + n).innerHTML = ` `;
        
        if(selNum.indexOf(n) != -1) return;
        cnt++;
        selNum.push(n);
        

        if (selNum.length == 9) {
            showMsg("성공");
            boardBox[n - 1].innerHTML = `<img src = "./images/hart.png">`;
            shuffleFlag = false;
        }
        else {
            //console.log(n);
            console.log(boardBox[n - 1]);
            if (num[n - 1] != 1) {
                boardBox[n - 1].innerHTML = `<img src = "./images/hart.png">`;
            }
            else {
                showMsg("실패");
                boardBox[n - 1].innerHTML = `<img src = "./images/boom.png">`;
                shuffleFlag = false;
            }
        }
    }
}

//폭탄섞기 함수 
const boxShuffle = () => {
    showMsg("폭탄을 섞었습니다. 게임을 진행해 주세요.");
    if (shuffleFlag) { 
        boardInit();
        return;
    }
    
    shuffleFlag = true;
    // const msg = document.getElementById("msg");
    // msg.innerHTML = `<p></p>`;
    num.sort(() => Math.random() - 0.5);
    console.log(num);
    boardInit();
}

/* DOM이 로드된 후에 클릭이벤트 연결*/
document.addEventListener("DOMContentLoaded", () => {

});