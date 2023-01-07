//selecting all required elements
const gallery = document.querySelectorAll(".gallery .image");
const previewBox = document.querySelector(".preview-box");
const previewImg = previewBox.querySelector("img");
const closeIcon = previewBox.querySelector(".icon");
const currentImg = previewBox.querySelector(".current-img");
const totalImg = previewBox.querySelector(".total-img");
const shadow = document.querySelector(".shadow");

window.onload = () => {
  //once window loaded
  for (let i = 0; i < gallery.length; i++) {
    totalImg.textContent = gallery.length; //배열의 길이를 전달
    let newIndex = i; //newIndex 변수한테 i값 전달하기
    let clickImgIndex;
    gallery[i].onclick = () => {
      clickImgIndex = newIndex; //클릭된 이미지 인덱스를 클릭된 이미지 변수값에 전달해주기
      function preview() {
        currentImg.textContent = newIndex + 1; //newIndex값 전달하기
        let selectedImgUrl = gallery[newIndex].querySelector("img").src; //클릭한 이미지 URL
        previewImg.src = selectedImgUrl; //클릭한 이미지 URL을 previewImg한테 넘겨주기
      }

      const prevBtn = document.querySelector(".prev");
      const nextBtn = document.querySelector(".next");
      if (newIndex == 0) {
        prevBtn.style.display = "none";
      }
      if (newIndex == gallery.length - 1) {
        nextBtn.style.display = "none";
      }
      prevBtn.onclick = () => {
        newIndex--; //newIndex 변수 줄이기
        if (newIndex == 0) {
          preview();
          prevBtn.style.display = "none";
        } else {
          preview(); //이미지를 업데이트하기 위해 상위함수 재호출
          prevBtn.style.display = "block";
        }
      };
      nextBtn.onclick = () => {
        newIndex++; //newIndex 변수 키우기
        if (newIndex == gallery.length - 1) {
          preview();
          nextBtn.style.display = "none";
        } else {
          preview(); //이미지를 업데이트하기 위해 상위함수 재호출
          nextBtn.style.display = "block";
        }
      };

      preview(); //상위함수 호출
      previewBox.classList.add("show");
      shadow.style.display = "block";
      document.querySelector("body").style.overflow = "hidden"; //모바일 화면에서 모달창 키우면 스크롤바 숨기기

      closeIcon.onclick = () => {
        newIndex = clickImgIndex;
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
        previewBox.classList.remove("show");
        shadow.style.display = "none";
        document.querySelector("body").style.overflow = "auto"; //스크롤바 복귀
      };
    };
  }
};
