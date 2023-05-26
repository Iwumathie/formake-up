function myFunction(x) {
    const navbar = document.querySelector("ul")
    const nav = document.querySelector(".navbar")

    const heroSection = document.querySelector(".hero-section")
    if(x.classList.toggle("change") ){ ;
    navbar.style.visibility="visible";
    heroSection.style.marginTop="350px"
 }
else{
    navbar.style.visibility="";
    // navbar.style.background="";
    heroSection.style.marginTop="0px"
 }

  }