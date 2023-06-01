function myFunction(x) {
    const navbar = document.querySelector("ul")
    const nav = document.querySelector(".navbar")

    const heroSection = document.querySelector(".hero-section")
    if(x.classList.toggle("change") ){ ;
    navbar.style.visibility="visible";
    navbar.style.opacity="1"
    heroSection.style.marginTop="350px"
 }
else{
    navbar.style.visibility="";
    // navbar.style.background="";
    heroSection.style.marginTop="0px"
 }

  }

//   function myLayout(){

//   }
//   const header = document.createElement("div")
//   header.classList.add("nav");
//   header.innerHTML="This is a div";

// console.log(header.lastChild.data);

//   const layout = (header) => {
//     return(
//         <div>
//         <h1>Hello World</h1>
//         <div></div>
//         </div>
//     )
//   }