
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

// STICKY HEADER

const sectionHeroEl = document.querySelector('.section-hero')
const observer = new IntersectionObserver(function(entries){
  const entrie = entries[0]
  if(!entrie.isIntersecting){
    document.querySelector('.header').classList.add('sticky')
  }else{
    document.querySelector('.header').classList.remove('sticky')

  }
},
{
  root:null,
  threshold:0,
  rootMargin:'-180px',
})
observer.observe(sectionHeroEl)