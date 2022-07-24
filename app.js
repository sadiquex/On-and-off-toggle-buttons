const button = document.getElementById("btn");
const clickIcon = document.getElementById("icon");

clickIcon.addEventListener("click", () => {
  changeBtn();
  clickIcon.classList.toggle("on");
});

function changeBtn() {
  button.classList.toggle("on");
}
