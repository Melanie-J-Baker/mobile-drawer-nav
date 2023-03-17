import "./style.css";

const drawerMenu = (() => {
  const openBtn = document.querySelector(".open-btn");
  const menu = document.querySelector(".menu");
  openBtn.addEventListener("click", function () {
    openBtn.style.display = "none";
    menu.style.display = "grid";
  });

  const exitBtn = document.querySelector(".exit-btn");
  exitBtn.addEventListener("click", function () {
    menu.style.display = "none";
    openBtn.style.display = "block";
  });
})();

export { drawerMenu };
