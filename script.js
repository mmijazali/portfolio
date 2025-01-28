// Nav List
const navs = document.querySelectorAll(".nav-list li");
const switches = document.querySelector(".box");
const sections = document.querySelectorAll(".section");
navs.forEach((nav, idx) => {
  nav.addEventListener("click", () => {
    document.querySelector(".nav-list li.active").classList.remove("active");
    nav.classList.add("active");
    switches.style.transform = `rotateY(${idx * -90}deg)`;

    document.querySelector(".section.active").classList.remove("active");
    sections[idx].classList.add("active");

    const array = Array.from(sections);
    const arraySets = array.slice(1, -1);
    arraySets.forEach(arrSet => {
        if(arrSet.classList.contains('active')) {
            sections[4].classList.add('action-contact');
        }
    });
        if(sections[0].classList.contains('active')){
            sections[4].classList.remove('action-contact');
        }

});
});

const resumelist = document.querySelectorAll(".resume-list");
const resumeBox = document.querySelectorAll(".resume-box");

resumelist.forEach((list, idx) => {
  list.addEventListener("click", () => {
    document.querySelector(".resume-list.active").classList.remove("active");
    list.classList.add("active");

    document.querySelector(".resume-box.active").classList.remove("active");
    resumeBox[idx].classList.add("active");
  });
});

const portfolio = document.querySelectorAll(".portfolio-list");
const portfolioBox = document.querySelectorAll(".portfolio-box");
portfolio.forEach((list, idx) => {
  list.addEventListener("click", () => {
    document.querySelector(".portfolio-list.active").classList.remove("active");
    list.classList.add("active");

    document.querySelector(".portfolio-box.active").classList.remove("active");
    portfolioBox[idx].classList.add("active");
  });
});
setTimeout(() => {
    sections[4].classList.remove('active');
}, 1500)