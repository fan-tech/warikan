"use strict";

// スクロール禁止だよ！
function handleTouchMove(event) {
  event.preventDefault();
}
document.addEventListener("touchmove", handleTouchMove, { passive: false });

// ワリカンする
// 変数宣言
let resltWarikan = document.getElementById("result-warikan");
let resultHasuu = document.getElementById("result-hasuu");

// 定数宣言
const hide = document.getElementById("hide");
// チェックする

function NaN_check1(str1) {
  if (isNaN(str1)) {
    return false;
  }
}
function NaN_check2(str2) {
  if (isNaN(str2)) {
    return false;
  }
}
// 書き換える

document.getElementById("warikan-btn").addEventListener("click", function(e) {
  const totalMoneyForm = document.getElementById("total-money-form").value;
  const totalPeopleForm = document.getElementById("total-people-form").value;

  NaN_check1(totalMoneyForm);
  NaN_check2(totalPeopleForm);

  let flag = 0;
  if (totalMoneyForm === "") {
    flag = 1;
  } else if (totalPeopleForm === "") {
    flag = 1;
  }

  if (flag !== 0) {
    window.alert("未入力があります。");
    flag = 0;
  } else if (totalPeopleForm === "0") {
    window.alert("「.」の含まれていない1以上の整数を入れてください。");
  } else if (totalMoneyForm === "0" ) {
    window.alert("「.」の含まれていない1以上の整数を入れてください。");
  } else if (NaN_check1(totalMoneyForm) === false || NaN_check2(totalPeopleForm) === false) {
    window.alert("1以上の半角数字を入力してください。");
  }  else if(Number.isInteger(totalPeopleForm) && Number.isInteger(totalMoneyForm)){

    let resultHitori = 0;
    let resultNokori = 0;

    resultHitori = Math.floor(
      parseInt(totalMoneyForm) / parseInt(totalPeopleForm)
    );

    resultNokori = parseInt(totalMoneyForm) % parseInt(totalPeopleForm);

    hide.classList.remove("bye-result");

    document.getElementById("result-warikan").innerHTML = `${resultHitori}円`;
    document.getElementById("result-hasuu").innerHTML = `${resultNokori}円`;

    flag = 0;
  } else {
    window.alert('整数を入力してください。')
  }
});

document.getElementById("clear-btn").addEventListener("click", function(e) {
  document.getElementById("total-money-form").value = "";
  document.getElementById("total-people-form").value = "";

  hide.classList.add("bye-result");
});
