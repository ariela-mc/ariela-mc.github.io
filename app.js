const sections = [...document.querySelectorAll('section')]

let options = {
    threshold: 0.5
}

const handleIntersect = (entries) =>{
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            document.body.style.backgroundColor = entry.target.getAttribute('data-color')
        }
    })
}

const observer = new IntersectionObserver(handleIntersect, options)

sections.forEach(section => {
    observer.observe(section)
})

document.getElementById("proj-vid").defaultPlaybackRate = 2.0;

function alreadyHere() {
    alert("You are already here!");
}

function doesntExist() {
    alert("Whoops! This page doesnt exist.")
}

var togglebtn=document.querySelector(".toggle-btn");
            var nav=document.querySelector(".nav-links");
            var links=document.querySelectorAll(".nav-links li");
            togglebtn.addEventListener("click", function(){
                this.classList.toggle("click");
                nav.classList.toggle("open");
            })

        
