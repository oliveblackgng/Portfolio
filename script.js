const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});

const contactForm = document.getElementById("contactForm");
const contactToggle = document.getElementById("contactToggle");
const contactMenu = document.getElementById("contactMenu");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const subject = encodeURIComponent(`Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}%0AEmail: ${email}%0A%0A${message}`);
    const mailto = `mailto:oliveblack.1305@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailto;
});

contactToggle.addEventListener("click", () => {
    if (contactMenu.style.maxHeight === "200px") {
        contactMenu.style.maxHeight = "0px";
    } else {
        contactMenu.style.maxHeight = "200px";
    }
});