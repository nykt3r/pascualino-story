 // Función para avanzar a la siguiente página
function nextPage(currentPageId) {
    var currentPage = document.getElementById(currentPageId);
    var nextPage = currentPage.nextElementSibling;
    if (nextPage) {
        currentPage.style.display = "none";
        nextPage.style.display = "flex";
    }
}

// Función para retroceder a la página anterior
function previousPage(currentPageId) {
    var currentPage = document.getElementById(currentPageId);
    var previousPage = currentPage.previousElementSibling;
    if (previousPage) {
        currentPage.style.display = "none";
        previousPage.style.display = "flex";
    }
}

// Event listeners para los botones de siguiente y anterior en cada página
document.getElementById("PageOneNext").addEventListener("click", function() {
    nextPage("PageOne");
});
document.getElementById("PageTwoBack").addEventListener("click", function() {
    previousPage("PageTwo");
});
document.getElementById("PageTwoNext").addEventListener("click", function() {
    nextPage("PageTwo");
});
document.getElementById("PageThreeBack").addEventListener("click", function() {
    previousPage("PageThree");
});
document.getElementById("PageThreeNext").addEventListener("click", function() {
    nextPage("PageThree");
});
document.getElementById("PageFourBack").addEventListener("click", function() {
    previousPage("PageFour");
});
document.getElementById("PageFourNext").addEventListener("click", function() {
    nextPage("PageFour");
});
document.getElementById("PageFiveBack").addEventListener("click", function() {
    previousPage("PageFive");
});
document.getElementById("PageFiveNext").addEventListener("click", function() {
    nextPage("PageFive");
});
document.getElementById("PageSixBack").addEventListener("click", function() {
    previousPage("PageSix");
});
document.getElementById("PageSixNext").addEventListener("click", function() {
    nextPage("PageSix");
});
document.getElementById("PageSevenBack").addEventListener("click", function() {
    previousPage("PageSeven");
});
document.getElementById("PageSevenNext").addEventListener("click", function() {
    nextPage("PageSeven");
});
document.getElementById("PageEightBack").addEventListener("click", function() {
    previousPage("PageEight");
});
document.getElementById("PageEightNext").addEventListener("click", function() {
    nextPage("PageEight");
});