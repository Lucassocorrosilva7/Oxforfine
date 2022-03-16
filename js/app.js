const date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear();

const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const link = document.querySelectorAll(".link");

toggleBtn.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

for (let i = 0; i < link.length; i++) {
  link[i].addEventListener("click", () => {
    sidebar.classList.remove("show-sidebar");
  });
}
