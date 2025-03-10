  document.addEventListener('DOMContentLoaded', function() {
    var options1 = {
      strings: ["FrontEnd Developer","Designer", "Web Developer"],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      autoInsertCss: true
    };
  
    var options2 = {
      strings: ["FrontEnd Developer","Designer", "Web Developer"],
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

document.getElementById("resume").addEventListener("click", function () {
    
  const link = document.createElement("a");
  
  link.href = "assets/resume.pdf"; 
  
  link.download = "My_Resume.pdf"; 
  
  document.body.appendChild(link);
  
  link.click();
  
  document.body.removeChild(link);
});

  