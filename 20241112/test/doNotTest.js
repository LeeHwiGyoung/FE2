const viewer = document.querySelector(".viewer");
const inp = document.querySelector(".inp-txt");
const btn = document.querySelector(".btn-push");

function btnClickHandler(e) {
  viewer.textContent = inp.value;
}

btn.addEventListener("click", (e) => btnClickHandler(e));
