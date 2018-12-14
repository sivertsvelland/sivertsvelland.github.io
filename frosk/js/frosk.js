//@ts-check

function setup() {

    document.getElementById("resten").style.display = "none";
    document.getElementById("spm").style.display = "none";
    document.getElementById("spm2").style.display = "none";


    let svar = document.getElementById("sesvar");
    svar.addEventListener("click", seSvar);
    

    function seSvar(){
        document.getElementById("spm").style.display = "none";
        var randomWords = ["Ja, du vil nok sansynligvis inngå ett tvangsekteskap fordi at ingen noen gang kommer til å elske deg!", "Nei, du kommer ikke til å inngå ett tvangsekteskap for selv om du tvang noen på livet til å gifte seg med deg så ville de heller ha hoppet forann en buss! Ditt misfoster.", "Kanskje, vet da faen jeg! Trodde du virkelig at en dum quiz på en froskenettside kan svare deg på det?"];
    
        var randomIndex = Math.floor(Math.random() * 3);//creates random No. from 1 - 3
    
        document.getElementById("melding").innerHTML = randomWords[randomIndex];
        //the problem
    }

    

    let mann = document.getElementById("question-1-answers-A");
    mann.addEventListener("click", visSpm2);

    function visSpm2() {
        document.getElementById("spm2").style.display = "block";
    }
    
    let alder = document.getElementById("alder");
    let lagre = document.getElementById("lagreAlder");
    lagre.addEventListener("click", lagreAlder);

    alder.addEventListener("keyup", function(event) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
          // Trigger the button element with a click
          document.getElementById("lagreAlder").click();
        }
      });

    function lagreAlder() {
        if (alder.value > 10 ){
            document.getElementById("sjekk").style.display = "none";
            document.getElementById("spm").style.display = "block";
            var source = "../media/fortnite.mp3"
            var audio = document.createElement("audio");
            //
            audio.autoplay = true;
            //
            audio.load()
            audio.addEventListener("load", function() { 
                audio.play(); 
            }, true);
            audio.src = source;
        }
    }
    
    

    let question1B = document.getElementById("question-1-answers-B");
    question1B.addEventListener("click", goAway);

    let question2A = document.getElementById("question-2-answers-A");
    question2A.addEventListener("click", vegetarianer);

    let question2B = document.getElementById("question-2-answers-B");
    question2B.addEventListener("click", visResten);


    function visResten() {

        document.getElementById("resten").style.display = "block";
    }

    function vegetarianer() {
        location.href = "../html/error.html";
    }

    function goAway() {
        location.href = "../html/error.html";
        return;

    }

}