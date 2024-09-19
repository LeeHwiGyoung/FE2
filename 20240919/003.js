const title = document.querySelector("h1");
const msg = document.querySelector(".msg");
const button = document.querySelector(".btn-title-change");
// 이미지의 attribute를 갖고 오기
const img = document.querySelector("img");
// 버튼을 클릭하면 p 태그의 메세지가 h1의 컨텐츠로 지정이 되도록 이벤트 작성
button.addEventListener("click", (e) => {
  const text = msg.innerText;
  title.innerText = text;
});

//이미지를 클릭하면 이미지의 alt 값이 h1의 컨텐츠가 되도록 이벤트 작성하기

img.addEventListener("click", (e) => {
  title.innerText = e.target.alt;
});
