document.addEventListener("DOMContentLoaded", function () {

    const basePath = window.location.pathname.includes("diet-nuh")
        ? "/diet-nuh/"
        : "/";

    fetch(basePath + "components/header/header.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        });
});