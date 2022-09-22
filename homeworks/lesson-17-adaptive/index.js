const burgerBtn = document.getElementById("js-burger");
const headerNavigation = document.getElementById("js-header-navigation");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("e-burger--open");
  headerNavigation.classList.toggle("header__navigation--show");
});

const links = document.getElementsByClassName("js-link");

for (const item of links) {
  item.addEventListener("click", () => {
    burgerBtn.classList.remove("e-burger--open");
    headerNavigation.classList.remove("header__navigation--show");
  });
}
