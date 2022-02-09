var navLinks= document.getElementById("navLinks");
    function showMenu(){
        navLinks.style.right="0";
    }
    function hideMenu(){
        navLinks.style.right="-200px"
    }
    const btnScrollToTop = document.querySelector("#btnScrollToTop");
  
    btnScrollToTop.addEventListener("click",function(){
      window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
      });
    });
   