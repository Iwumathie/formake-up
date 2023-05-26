function myFunction(x) {
    const navbar = document.querySelector("ul")
    const nav = document.querySelector(".navbar")

    const heroSection = document.querySelector(".hero-section")
    if(x.classList.toggle("change") ){ ;
    navbar.style.display="inline-block";
    navbar.style.background="rgba(0,0,0,0.2)";
    heroSection.style.marginTop="350px"
 }
else{
    navbar.style.display="";
    navbar.style.background="";
    heroSection.style.marginTop="0px"
 }

  }