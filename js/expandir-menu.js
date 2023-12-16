const btnExp = document.querySelector("#btn-exp");
const menuSide = document.querySelector(".menu-lateral");
const esconderElementos = document.querySelectorAll(".esconder");

btnExp.addEventListener("click", function () {
  menuSide.classList.toggle("expandir");
  esconderElementos.forEach(function (element) {
    element.style.display === "none";
  });
});
