document.addEventListener("DOMContentLoaded", function () {

    const status = document.querySelector(".deployment-status p");

    setTimeout(function () {
        if (status) {
            status.textContent = "Application Online";
        }
    }, 1000);


    const cards = document.querySelectorAll(".skill-card");

    cards.forEach(function (card) {

        card.addEventListener("mouseenter", function () {
            card.style.transform = "translateY(-8px)";
        });

        card.addEventListener("mouseleave", function () {
            card.style.transform = "translateY(0)";
        });

    });

});
