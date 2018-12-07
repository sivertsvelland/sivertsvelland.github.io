// @ts-check

function setup() {
    let divVis = document.getElementById("vis");
    let lukene = Array.from(document.querySelectorAll(".luke"));
    lukene.forEach(e => e.addEventListener("click", visLuke));

    let soundHappy = document.getElementById("happy");
    let soundSad = document.getElementById("sad");
    let videoJul = document.getElementById("julaften");

    soundHappy.src = "media/jingle.mp3";
    soundSad.src = "media/fail.mp3";

    function visLuke(e) {
        let today = new Date();
        let t = e.target;
        let nr = Number(t.innerHTML);
       if (nr > today.getDate() || nr < today.getDate()) {
            spill(soundSad);
            return;
        }
        if (nr === 24) {
            videoJul.style.display = "block";
            videoJul.src = "media/video24.mp4";
            videoJul.play();
            setTimeout(() => {
                videoJul.pause();
                videoJul.style.display = "none";
            }, 3000);
        }
        spill(soundHappy);
        divVis.style.backgroundImage = `url("media/bilde${nr}.jpg")`;
        divVis.style.display = "block";
        setTimeout(() => divVis.style.display = "none", 3000);
    }
}
function spill(sound){
    sound.load();
    sound.play();
    setTimeout(() => sound.pause(), 3000);
}
