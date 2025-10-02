// main.js




// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

  const text = "Professional Web Developer | Creative Designer | Passionate about building modern websites and learning new technologies."; 
  const typingElement = document.getElementById("typing");
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      typingElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, 40); }
  }

  typeWriter(); 
  
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
