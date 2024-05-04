// Nastavení počátečního indexu slide
let slideIndex = 0;

// Funkce pro zobrazení slidů
function showSlides() {
  // Získání všech elementů s třídou "slide"
  const slides = document.getElementsByClassName("slide");
  
  // Skrytí všech slidů
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Inkrementace indexu slide
  slideIndex++;
  
  // Pokud jsme na konci seznamu slidů, vrátíme se na začátek
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  // Zobrazení aktuálního slide
  slides[slideIndex - 1].style.display = "block";
  
  // Spuštění funkce showSlides každých 2500 ms (2.5 sekundy)
  setTimeout(showSlides, 2500);
}

// Spuštění funkce showSlides
showSlides();

// Funkce pro pohyb mezi slidy
function moveSlide(n) {
  // Aktualizace indexu slide
  slideIndex += n;
  
  // Získání všech elementů s třídou "slide"
  const slides = document.getElementsByClassName("slide");
  
  // Pokud jsme na konci seznamu slidů, vrátíme se na začátek
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  // Pokud jsme na začátku seznamu slidů, přejdeme na konec
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  
  // Skrytí všech slidů
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Zobrazení aktuálního slide
  slides[slideIndex - 1].style.display = "block";
}
