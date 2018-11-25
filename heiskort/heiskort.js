// @ts-check

class Bestilling {
    constructor(alder, dager) {
        this.alder = alder;
        this.dager = dager;
    }
}

function setup() {

    let bestilling = [];

    let inpalder = document.getElementById("alder");
    let inpdager = document.getElementById("dager");
    let btnLagre = document.getElementById("lagre");
    let divOversikt = document.getElementById("oversikt");

    btnLagre.addEventListener("click", lagreData);

    function lagreData() {
        let alder = inpalder.value;
        let dager = inpdager.value;
        let b = new Bestilling(alder, dager);
        bestilling[0] = b;
        visListe();
    }


    function visListe() {
        let b = bestilling[0];
        let rabatt = 0;
        let pris = 0;
        if (b.alder < 12) {
            pris = b.dager * 100;
        }
        else {
            pris = b.dager * 200;
        }


        if (b.alder < 12 && pris > 500) {
            rabatt = pris - 500;
            pris = 500;
        }
        if (b.alder >= 12 && pris > 1000) {
            rabatt = pris - 1000;
            pris = 1000;
        }

        if (b.dager > 7) {
            alert("E du helt skutt i hode eller??? Du kan jo ikke bestille for mer enn 7 dager ditt fjols!");
            location.reload();
        }

        if (b.dager < 1) {
            alert("Hvordan i huleste helvette har du tenkt til at det en gang skal være en mulighet å bestille i negativt antall dager?????");
            alert("Seriøst, kommer ikke over hvor dom du er...");
            location.reload();
        }

        let innhold = "";

        innhold += `<li>Du er ${b.alder} år, og har bestilt dagskort for ${b.dager} dager. Prisen din blir ${pris}, du har fått ${rabatt} kr i rabatt.</li>`

        innhold += "";
        divOversikt.innerHTML = innhold;
    }
}