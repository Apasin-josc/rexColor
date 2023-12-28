document.addEventListener("DOMContentLoaded", function () {
    const rockets = document.getElementById("rockets");
    const surprise = document.getElementById("surprise");

    rockets.addEventListener("click", function () {
        rockets.classList.remove("rocket-animation");
        surprise.style.display = "flex";
    });
});
