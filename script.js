"use strict";

//Header toggle
let MenuBtn = document.getElementById("MenuBtn");

MenuBtn.addEventListener("click", function () {
  document.querySelector("body").classList.toggle("mobile-nav-active");
  this.classList.toggle("fa-xmark");
});

//Typing Effect
let typed = new Typed(".auto-input", {
  strings: ["Full Stack Developer!", "Freelancer!", "Japanese Students!"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 2000,
  loop: true,
});

// Active link state on scroll

// get all links
let navLinks = document.querySelectorAll("nav ul li a");
console.log(navLinks);

//get all sections
let sections = document.querySelectorAll("section");
console.log(sections);

window.addEventListener("scroll", function () {
  const scrollPos = window.scrollY + 20;
  sections.forEach((section) => {
    if (
      scrollPos > section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (
          section.getAttribute("id") === link.getAttribute("href").substring(1)
        ) {
          link.classList.add("active");
        }
      });
    }
  });
});

// script.js

const pageSelect = document.getElementById("pageSelect");
const goButton = document.getElementById("goButton");

// Lấy URL của trang hiện tại
const currentUrl = window.location.href;

// Đặt sự kiện click cho nút "Chuyển đến trang"
goButton.addEventListener("click", () => {
  const selectedPage = pageSelect.value;

  // Kiểm tra xem trang hiện tại và trang được chọn có giống nhau hay không
  if (currentUrl !== selectedPage) {
    window.location.href = selectedPage;
  }
});

// Đặt sự kiện change cho thẻ <select> để tự động chuyển trang
pageSelect.addEventListener("change", () => {
  const selectedPage = pageSelect.value;

  // Kiểm tra xem trang hiện tại và trang được chọn có giống nhau hay không
  if (currentUrl !== selectedPage) {
    window.location.href = selectedPage;
  }
});

// script.js

// const pageSelect = document.getElementById("pageSelect");

// Lấy URL của trang hiện tại
// const currentUrl = window.location.href;

// Lặp qua tất cả các tùy chọn trong thẻ <select>
for (let i = 0; i < pageSelect.options.length; i++) {
  const option = pageSelect.options[i];

  // Kiểm tra xem giá trị của tùy chọn có giống với URL hiện tại không
  if (option.value === currentUrl) {
    // Đặt tùy chọn này làm tùy chọn được chọn và hiển thị nó
    option.selected = true;
    break;
  }
}

// Đặt sự kiện change cho thẻ <select> để chuyển trang khi lựa chọn thay đổi
pageSelect.addEventListener("change", () => {
  const selectedPage = pageSelect.value;

  // Kiểm tra xem trang hiện tại và trang được chọn có giống nhau hay không
  if (currentUrl !== selectedPage) {
    window.location.href = selectedPage;
  }
});
