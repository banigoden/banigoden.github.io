// Get all the navigation links
var links = document.querySelectorAll("nav li a");

// Add a mouseover event listener to each link
links.forEach(function(link) {
  link.addEventListener("mouseover", function() {
    // Add the "blink" class to the link
    link.classList.add("blink");
  });
});

// Add a mouseout event listener to each link
links.forEach(function(link) {
  link.addEventListener("mouseout", function() {
    // Remove the "blink" class from the link
    link.classList.remove("blink");
  });
});

// Get the topics and subtopics
var topics = document.querySelectorAll("#topics ul li");

// Add a click event listener to each topic
topics.forEach(function(topic) {
  topic.addEventListener("click", function() {
    // Toggle the visibility of the subtopics
    this.querySelector("ul").classList.toggle("visible");
  });
});


// Get the "RoadMap" link and the pop-up image
var link = document.querySelector("#popup a");
var popup = document.getElementById("popup");

// Check if the link element exists
if (link) {
  // Show the pop-up image when the link is clicked
  link.addEventListener("click", function(event) {
    // Prevent the default action (following the link)
    event.preventDefault();
    popup.style.display = "block";
  });
}

// Get the close button
var closeButton = document.getElementById("close-button");

if (closeButton) {
// Hide the pop-up image when the close button is clicked
closeButton.addEventListener("click", function() {
  popup.style.display = "none";
});
}
