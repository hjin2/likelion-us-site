const options = {
  root: null, // viewport
  rootMargin: "0px",
  threshold: 0, // 1.0은 50%가 viewport에 들어와 있어야 callback 실행
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
});

const elementList = document.querySelectorAll(".element");
const sbContainerList = document.querySelectorAll(".sbContainer");

// 반복문을 돌려 모든 DOM에 적용
elementList.forEach((el) => observer.observe(el));
sbContainerList.forEach((el) => observer.observe(el));