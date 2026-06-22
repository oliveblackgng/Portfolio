const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});

const contactBtn = document.getElementById("contactBtn");
const contactMenu = document.getElementById("contactMenu");

contactBtn.addEventListener("click", () => {

    if(contactMenu.style.maxHeight === "100px"){
        contactMenu.style.maxHeight = "0px";
        contactBtn.textContent = "CONTACT +";
    }
    else{
        contactMenu.style.maxHeight = "100px";
        contactBtn.textContent = "CONTACT -";
    }

});