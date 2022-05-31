// Preloader
window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".preloader").classList.add("hide");
  }, 400);
});
//End Preloader
// Navbar sector
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 100);
  document.querySelector('.back_to_top').classList.toggle('open', window.scrollY > 100);

});
// Back to top 
const backBtn = document.querySelector('.back_to_top');
backBtn.addEventListener('click', () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}); 

// Faq
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
  faq.addEventListener('click', (e) => {
    faq.classList.toggle('open');
    // 
    const icon = faq.querySelector('.faq_icon i');
    if (icon.className === "uil uil-plus") {
      icon.className = "uli uil-minus";
    } else {
      icon.className = "uli uil-plus";
    }
  });
});

// Responsive Navbar
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open_menu_btn");
const closeMenuBtn = document.querySelector("#close_menu_btn");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeMenuBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});

const closeNav = () => {
  menu.style.display = "none";
  closeMenuBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
}
closeMenuBtn.addEventListener('click', closeNav);