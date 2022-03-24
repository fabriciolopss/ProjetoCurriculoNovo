$(document).ready(function(){
    // Add smooth scrolling to all links
    $(".section1").addClass("appear");
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });


window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    var section3 = document.querySelector(".apar");
    var nomeSection = document.querySelector(".section1");
    var parallax = document.querySelector(".parallax");
    var positionParallax = parallax.getBoundingClientRect();
    var position = section3.getBoundingClientRect();


    header.classList.toggle("sticky", window.scrollY > 0);
    section3.classList.toggle("chegou", window.scrollY > position.top);
    nomeSection.classList.toggle("appear", window.scrollY < 700);

    var html = document.querySelector(".html");
    html.classList.toggle("scrolled", window.scrollY >= positionParallax.top);

    var python = document.querySelector(".python");
    python.classList.toggle("scrolled", window.scrollY >= positionParallax.top);

    var c = document.querySelector(".c");
    c.classList.toggle("scrolled", window.scrollY >= positionParallax.top);

    var video = document.querySelector(".video");
    video.classList.toggle("scrolled", window.scrollY >= positionParallax.top);

    var js = document.querySelector(".js");
    js.classList.toggle("scrolled", window.scrollY >= positionParallax.top);

    var skills = document.querySelector(".skills");   
    var section2 = document.querySelector("#section2");   
    var positionSection2 = section2.getBoundingClientRect();
    skills.classList.toggle("scrolled", window.scrollY >= positionSection2.top );
})