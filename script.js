document.addEventListener('DOMContentLoaded', function() {
    var options1 = {
      strings: ["FrontEnd Developer","Designer", "Web Developer", "Freelancer"],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      autoInsertCss: true
    };
  
    var options2 = {
      strings: ["FrontEnd Developer","Designer", "Web Developer", "Freelancer"],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      autoInsertCss: true
    };
  
    var typed1 = new Typed("#typed1", options1);
    var typed2 = new Typed("#typed2", options2);
  });
  