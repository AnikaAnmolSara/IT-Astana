const stickySections = [...document.querySelectorAll(".sticky")];
let pages = [
  ` <section class="w_100 about-us">

    <div class="about">
        <h1>About Us</h1>
    </div>
    
    <div class="animation">
        <span class="text1" id="text1">WE ARE</span>
        <span class="text2">IT ASTANA</span>
        <span><img class="logo_" src="./Image/Logo.png" alt=""></span>
    </div>
  </section>`,
  `<section class="w_100 about-us">
  <div class="wrapper">
  <div class="Pic">
      <a href="#"><img class="im" src="./Image/boss2.jpg" alt="Founder"></a>
      <div class="content">
          <h2> Faysal Mahmud Nahid</h2>
          <h1 class="founder">Founder of IT Astana</h1>
          <p class="para">Experienced Board Member with a demonstrated history of working in the information technology 
              and services industry. Skilled in SQL, C++, Cascading Style Sheets (CSS), HTML, and Programming.
               Strong business development professional with a Bachelor's degree focused in Computer Science from North South University. </p>
      </div>
  </div>
  </div>
    </section>`,
  `<section class="w_100">
<div class="container">
          <section class="job">
            <h1 class="text_career">
              Join us and develop your passion with our team
            </h1>
            <a href="./First_page.html #give-us-shout"
              ><button class="join_us">Join Us</button></a>
          </section>

        </div>
</section>`,
];

if(screen.width<481){

 document.getElementById("sticky_parent").remove()
}

pages.forEach((p, index) => {
  stickySections.forEach((section) => {
    let page = document.createElement("div");
    page.innerHTML = p;
    section.querySelector(".scroll_section").appendChild(page);
  });
});

window.addEventListener("scroll", (e) => {
  for (let i = 0; i < stickySections.length; i++) {
    transform(stickySections[i]);
  }
});

function transform(section) {
  const offsetTop = section.parentElement.offsetTop;
  const scrollSection = section.querySelector(".scroll_section");

  let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
  percentage = percentage < 0 ? 0 : percentage > 400 ? 400 : percentage;
  scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
}


   
    