// @ts-check

function setup() {

    let inpKm = document.getElementById("km");
    let btnKonverter = document.getElementById("konverter");
    let outMiles = document.getElementById("miles");

    btnKonverter.addEventListener("click", konverter);

    function konverter(e) {
        // @ts-ignore
        let km = inpKm.valueAsNumber; //valueAsNumber fungerer kun med tall
        let miles = km / 1.6;
        outMiles.innerHTML = miles.toFixed(2);
    }
}