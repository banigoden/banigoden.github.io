// Show the skills section when the "Show Skills" button is clicked
function showSkills() {
    var skills = document.getElementById("skills");
    skills.style.display = "block";
  }
  
  document.getElementById("show-button").addEventListener("click", showSkills);
  
  // Scroll to the top of the page when the "Back to Top" button is clicked
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  
  document.getElementById("top-button").addEventListener("click", scrollToTop);
  
  // Show the contact form when the "Contact Me" button is clicked
  function showForm() {
    var form = document.getElementById("contact-form");
    form.style.display = "block";
  }
  
  document.getElementById("contact-button").addEventListener("click", showForm);
  
  // Send the contact form when the "Send" button is clicked
  function sendForm() {
    alert("Your message has been sent!");
  }
  
  document.getElementById("send-button").addEventListener("click", sendForm);

    // Get the "RoadMap" link and the pop-up image
var link = document.querySelector("nav li a");
var popup = document.getElementById("popup");

// Show the pop-up image when the link is clicked
link.addEventListener("click", function() {
  popup.style.display = "block";
});

// Get the close button
var closeButton = document.getElementById("close-button");

// Hide the pop-up image when the close button is clicked
closeButton.addEventListener("click", function() {
  popup.style.display = "none";
}); 

 