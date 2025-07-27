const buttons = document.querySelectorAll(".flipper");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const card = button.nextElementSibling;
        card.classList.toggle("flipped");
    });
});