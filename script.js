document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("fugitive-button");
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    button.addEventListener("mouseover", function () {
        var newX = Math.random() * (windowWidth - button.offsetWidth);
        var newY = Math.random() * (windowHeight - button.offsetHeight);

        button.style.left = newX + "px";
        button.style.top = newY + "px";
    });
});
