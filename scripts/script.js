document.querySelector(".links").style.animationPlayState = "running";

function showImage() {
    document.querySelector("#actie").classList.toggle("show");
}

function bookmark(button) {
    button.classList.toggle("bookmarked");
}

function like(button) {
    button.classList.toggle("liked");
}

function spinStars() {
    const stars = document.querySelectorAll("#reviews svg");

    stars.forEach(function(star) {
        star.style.animation = "none";
    });

    setTimeout(function() {
        stars.forEach(function(star) {
            star.style.animation = "draaien 0.6s ease";
        });
    }, 10);
}

function boltClick() {
    const bolt = document.querySelector("#bolt");

    bolt.classList.add("active");

    setTimeout(function() {
        bolt.classList.remove("active");
    }, 1000);
}

var openKnop = document.querySelector(".open");
var sluitKnop = document.querySelector(".sluit");
var menu = document.querySelector(".menu");

openKnop.onclick = function () {
    menu.classList.add("toonMenu");
};

sluitKnop.onclick = function () {
    menu.classList.remove("toonMenu");
};

/* bonus: sluiten met Escape */
window.onkeydown = function (event) {
    if (event.key == "Escape") {
        menu.classList.remove("toonMenu");
    }
};
