function openSite(){
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("mainContent").classList.remove("hidden");
}

/* MUZYKA */
function playMusic(){
    let music = document.getElementById("music");
    if(music.paused){
        music.play();
    } else {
        music.pause();
    }
}

/* LICZNIK */
const startDate = new Date("2026-02-22");

function updateCounter(){
    const now = new Date();
    let diff = now - startDate;

    let days = Math.floor(diff / (1000*60*60*24));

    document.getElementById("counter").innerText =
        days + " dni ❤️";
}

setInterval(updateCounter, 1000);
updateCounter();

/* SERDUSZKA W TLE */
setInterval(() => {
    let heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random()*100 + "vw";
    heart.style.top = "-20px";
    heart.style.fontSize = Math.random()*20 + 10 + "px";
    heart.style.animation = "fall 4s linear";
    document.body.appendChild(heart);

    setTimeout(()=>heart.remove(),4000);
},500);

/* animacja CSS dynamicznie */
const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
    to {
        transform: translateY(100vh);
        opacity: 0;
    }
}`;
document.head.appendChild(style);
