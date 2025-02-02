// Imported document object to run code in a browser environment
document.addEventListener("DOMContentLoaded", () => {
  const menuLinks = document.querySelectorAll(".menu-link");
  const sections = document.querySelectorAll(".container-main .page-color > div");

  const handleScroll = (event) => {
    event.preventDefault();
    menuLinks.forEach(link => link.classList.remove("active"));
    event.currentTarget.classList.add("active");

    // Removed extra indentation
    const targetId = event.currentTarget.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: "smooth" });
  };

  menuLinks.forEach(link => {
    link.addEventListener("click", handleScroll);
  });

  const highlightSectionInView = () => {
    let index = sections.length;
    // Changed the loop condition to decrement index
    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    menuLinks.forEach(link => link.classList.remove("active"));
    menuLinks[index].classList.add("active");
  };

  // Added event parameter to the arrow function
  window.addEventListener("scroll", (event) => {
    highlightSectionInView();
  });
});