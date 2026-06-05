/* ==========================
   TYPING ANIMATION
========================== */

var typed = new Typed("#typing", {

    strings: [

        "Computer & Communication Engineering Student",
        "AI Enthusiast",
        "Cybersecurity Learner",
        "Java Developer",
        "Python Programmer",
        "Problem Solver"

    ],

    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1500,
    loop: true

});


/* ==========================
   DARK MODE
========================== */

const themeBtn =
document.getElementById("theme-toggle");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const icon =
    themeBtn.querySelector("i");

    if(document.body.classList.contains("dark")){

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    }else{

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

});


/* ==========================
   COUNTER ANIMATION
========================== */

const counters =
document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target =
        +counter.getAttribute("data-target");

        let count = 0;

        const increment =
        target / 100;

        const updateCounter = () => {

            if(count < target){

                count += increment;

                counter.innerText =
                Math.floor(count);

                requestAnimationFrame(updateCounter);

            }else{

                counter.innerText = target;

            }

        };

        updateCounter();

    });

};


/* ==========================
   INTERSECTION OBSERVER
========================== */

const statsSection =
document.querySelector(".stats");

let counterStarted = false;

const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting &&
           !counterStarted){

            startCounter();

            counterStarted = true;

        }

    });

});

observer.observe(statsSection);


/* ==========================
   SCROLL REVEAL
========================== */

const revealElements =
document.querySelectorAll(

".section, .project-card, .certificate-card, .stat-box"

);

const revealObserver =
new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},

{
    threshold:0.15
}

);

revealElements.forEach(el=>{

    revealObserver.observe(el);

});


/* ==========================
   CONTACT FORM
========================== */

const contactForm =
document.querySelector(".contact-form");

contactForm.addEventListener(
"submit",
function(e){

    e.preventDefault();

    alert(
      "Thank you! Your message has been received."
    );

    contactForm.reset();

});


/* ==========================
   ACTIVE NAV LINK
========================== */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-links a");

window.addEventListener(
"scroll",
()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop =
        section.offsetTop;

        if(
            pageYOffset >=
            sectionTop - 200
        ){

            current =
            section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(
            link.getAttribute("href")
            .includes(current)
        ){

            link.classList.add("active");

        }

    });

});


/* ==========================
   SMOOTH NAVBAR SHADOW
========================== */

const navbar =
document.querySelector(".navbar");

window.addEventListener(
"scroll",
()=>{

    if(window.scrollY > 50){

        navbar.style.boxShadow =
        "0 10px 25px rgba(0,0,0,0.1)";

    }
    else{

        navbar.style.boxShadow =
        "none";

    }

});
const ctx = document.getElementById("skillsChart");

new Chart(ctx, {

    type: "pie",

    data: {

        labels: [
            "Java",
            "Python",
            "SQL",
            "GitHub",
            "DSA"
        ],

        datasets: [{

            data: [
                90,
                85,
                80,
                80,
                75
            ],

            backgroundColor: [

                "#FF6B6B",
                "#4ECDC4",
                "#FFD93D",
                "#6C63FF",
                "#FF9F1C"

            ],

            borderColor: "#ffffff",
            borderWidth: 4

        }]

    },

    options: {

        responsive: true,

        plugins: {

            legend: {

                position: "bottom",

                labels: {

                    padding: 20,
                    font: {
                        size: 15
                    }

                }

            }

        }

    }

});