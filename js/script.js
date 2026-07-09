const counters = document.querySelectorAll(".counter");
// Gestion du popup
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");
const popupButton = document.getElementById("popupButton");
const popupMessage = document.getElementById("popupMessage");

function showPopup(message){
    if(popup){
        popupMessage.innerHTML = message;
        popup.classList.add("active");
    }
}

function hidePopup(){
    if(popup){
        popup.classList.remove("active");
    }
}

if(closePopup){
    closePopup.addEventListener(
        "click",
        hidePopup
    );
}

if(popupButton){
    popupButton.addEventListener(
        "click",
        hidePopup
    );
}

counters.forEach(counter => {
    counter.innerText = "0";
    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;
        const increment = target / 100;
        if(current < target){
            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCounter,20);
        }else{
            counter.innerText = target;
        }
    };
    updateCounter();
});

function candidature(){
    showPopup(
        "Merci pour votre intérêt ! Le formulaire de candidature sera bientôt disponible."
    );
}

const form = document.getElementById("contactForm");
if(form){
    form.addEventListener("submit", function(e){
        e.preventDefault();
        let nom = document.getElementById("nom").value;
        let email = document.getElementById("email").value;
        if(nom === "" || email === ""){
            alert(
                "Veuillez remplir les champs obligatoires."
            );
        }
        else{
            showPopup(
                "Merci " + nom + 
                ", votre demande a été envoyée avec succès."
            );
            form.reset();
        }
    });
}

const reveals = document.querySelectorAll(".reveal");
function revealOnScroll(){
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const visiblePoint = 100;
        if(elementTop < windowHeight - visiblePoint){
            element.classList.add("active");
        }
    });
}

window.addEventListener(
    "scroll",
    revealOnScroll
);
revealOnScroll();