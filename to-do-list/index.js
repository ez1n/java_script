const date = document.querySelector(".date")
const checkList = document.querySelector(".check-list");
const listSpace = document.querySelector(".list-space");
const addBtn = document.querySelector(".add-btn");

/**
 * 기능
 * 체크박스 눌렀을때 할일 지우기 (가운데 선)
 * 리스트 삭제하기
 * 데이터 저장하기
 */

addBtn.addEventListener("click", () => {
  const li = document.createElement("li");
  const checkInput = document.createElement("input");
  checkInput.type = "checkbox";
  li.className = "list-input";
  checkInput.className = "checkbox";

  if (checkList.value == "") {
    checkList.focus();
    return;
  }
  li.append(checkInput, checkList.value);
  listSpace.appendChild(li);
  checkList.value = "";
});

