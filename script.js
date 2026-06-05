const header = document.querySelector(".site-header");
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) header.classList.add("scrolled");
  else header.classList.remove("scrolled");
});

menuBtn?.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

const animate = () => {
  const items = document.querySelectorAll(".reveal");
  const trigger = window.innerHeight * 0.88;

  items.forEach(item => {
    const top = item.getBoundingClientRect().top;
    if (top < trigger) {
      item.style.opacity = 1;
      item.style.transform = "translateY(0)";
      item.style.transition = "all .8s ease";
    }
  });
};

window.addEventListener("scroll", animate);
window.addEventListener("load", animate);

document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
const slides = document.querySelectorAll(".slide");

if(slides.length > 0){

    let currentSlide = 0;

    setInterval(() => {

        slides[currentSlide].classList.remove("active");

        currentSlide++;

        if(currentSlide >= slides.length){
            currentSlide = 0;
        }

        slides[currentSlide].classList.add("active");

    }, 5000);

}
window.addEventListener("load", () => {

    const loader = document.getElementById("door-loader");

    if(loader){

        setTimeout(() => {
            loader.classList.add("open");
        }, 500);

        setTimeout(() => {
            loader.style.display = "none";
        }, 3000);

    }

});
window.addEventListener("scroll", function(){

    const header = document.querySelector(".site-header");

    if(window.scrollY > 50){
        header.classList.add("scrolled");
    }else{
        header.classList.remove("scrolled");
    }

});
const doorCursor = document.getElementById("doorCursor");

if(doorCursor){
    document.addEventListener("mousemove", (e)=>{
        doorCursor.style.left = e.clientX + "px";
        doorCursor.style.top = e.clientY + "px";
    });
}
const inquiryForm = document.getElementById("inquiryForm");

if(inquiryForm){

    inquiryForm.addEventListener("submit", function(e){

        e.preventDefault();

        let name = document.getElementById("name").value;
        let phone = document.getElementById("phone").value;
        let project = document.getElementById("project").value;
        let message = document.getElementById("message").value;

        let whatsappNumber = "918901295560";

        let text =
`🏠 PRIME DOORS CHANDIGARH

📌 NEW INQUIRY

👤 Name: ${name}

📞 Phone: ${phone}

🚪 Project Type: ${project}

📝 Message:
${message}`;

        let url =
`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

        window.open(url, "_blank");

    });

}