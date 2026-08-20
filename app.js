const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");
const closeBtn = document.querySelector(".close-menu");
const testimonials = document.querySelectorAll(".testimonial-card");
let current = 0;
function showTestimonial() {
 testimonials[current].classList.remove("active");
 current++;
 if (current >= testimonials.length) {
  current = 0;
 }
 testimonials[current].classList.add("active");
}
setInterval(showTestimonial, 5000);

menuBtn.addEventListener("click", () => {
 navLinks.classList.toggle("active");
});
closeBtn.addEventListener("click", () => {
 navLinks.classList.remove("active");
});

window.addEventListener("scroll", () => {
 const header = document.querySelector(".navbar");
 if (window.scrollY > 40) {
  header.classList.add("scrolled");
 } else {
  header.classList.remove("scrolled");
 }
});

const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
 if (window.scrollY > 300) {
    backToTop.classList.add("show");
 } else {
  backToTop.classList.remove("show");
 }
});

backToTop.addEventListener("click", () => {
 window.scrollTo({
  top: 0,
  behavior: "smooth"
 });
});

const reveals = document.querySelectorAll(".reveal");
function revealSections() {
 reveals.forEach((section) => {
  const windowHeight = window.innerHeight;
  const revealTop = section.getBoundingClientRect().top;
  const revealPoint = 120;
  if (revealTop < windowHeight - revealPoint) {
   section.classList.add("active");
     }
 });
}

window.addEventListener("scroll", revealSections);
revealSections();
window.addEventListener("load", () => {
 const preloader = document.getElementById("preloader");
 setTimeout(() => {
  preloader.classList.add("hide");
 }, 1000);
});

const cartButtons = document.querySelectorAll(".addcart-btn");
const cartCount = document.querySelector(".cart-count");
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let count = 0;
cartCount.textContent = cart.length;
cartButtons.forEach(button => {
 button.addEventListener("click", () => {
  const card = button.closest(".product-card");
  const product = {
      name: card.dataset.name,
   price: card.dataset.price,
   image: card.dataset.image
  };
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingProduct = cart.find(item => item.name === product.name);
if (existingProduct) {
 existingProduct.quantity++;
} else {
 product.quantity = 1;
 cart.push(product);
}
localStorage.setItem("cart", JSON.stringify(cart));
alert(`${product.name} added to cart!`);
count++;
cartCount.textContent = count;

 });
});
