// @ts-check

function setup() {
    let selVaretype = document.getElementById("varetype");
    let inpAntall = document.getElementById("antall");
    let btnBestill = document.getElementById("bestill");
    let divOversikt = document.getElementById("oversikt");

    selVaretype.addEventListener("change", visVarer);

    function visVarer() {
        document.getElementById(this.value + "div").classList.remove(this.value + "ting");
    }

    btnBestill.addEventListener("click", visBestilling);

    function visBestilling() {
        let inpVare = document.querySelector("input:checked");
        let antall = inpAntall.value;
        let vare = inpVare.value;

        if (antall < 1 || antall > 100 ) {
            alert("Ikke gidd å kødd da... Nå må vi laste inn siden på nytt, og prøve med seriøse antall denne gangen. OK?");
            location.reload();
        }

        let innhold = "";
        innhold += `Jasså, du trenger ${vare}? Også hele ${antall} stk... <p>
        Jaja, det er notert. Pakken vil bli sendt så snart vi har fått <br>
        bestilt varene dine fra en billigere nettside enn denne, og har<br>
        fått kalkulert hvor mye vi kan ta betalt for å tjene mest mulig<br>
        samtidig som det blir billigere for deg å handle av oss enn på<br>
        din lokale kolonialbutikk.<p>
        Du lurer kanskje på hvordan vi vet hvor varene skal sendes?<br>
        Og hvordan du har betalt for varene?<br>
        Vel, ikke tenk på det.<p>
        Takk for handelen, og velkommen igjen!`
        divOversikt.innerHTML = innhold;
    }
}