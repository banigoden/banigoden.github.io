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

$(document).on("scroll", function() {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $(".tag");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];

    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible");
    } else {
      $(tag).removeClass("visible");
    }
  }
});

