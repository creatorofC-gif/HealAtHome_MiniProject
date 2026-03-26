const contactForm = document.getElementById(".contact-form");
if(contactForm){
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(contactForm));
        console.log(data);
        alert("Message sent!");
        contactForm.reset();
    });
}