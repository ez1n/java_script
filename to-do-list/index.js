const date = document.querySelector(".date")
const checkbox = document.querySelector(".checkbox");
const checkList = document.querySelector(".check-list");
const listSpace = document.querySelector(".list-space");
const addBtn = document.querySelector(".add-btn");

/**
 * 기능
 * 체크박스 눌렀을때 할일 지우기 (가운데 선)
 */

addBtn.addEventListener("click", () => {
  const li = document.createElement("li");
  const textInput = document.createElement("input");
  const checkInput = document.createElement("input");
  textInput.type = "text";
  checkInput.type = "checkbox";
  li.className = "list-input";
  textInput.className = "check-list";
  checkInput.className = "checkbox";

  li.append(checkInput, ' ',textInput);
  listSpace.appendChild(li);
});

checkbox.addEventListener("click", () => {

});