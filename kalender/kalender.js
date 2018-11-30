// @ts-check

const monthNames = new Map();
monthNames.set(1, "Januar");
monthNames.set(2, "Februar");
monthNames.set(3, "Mars");
monthNames.set(4, "April");
monthNames.set(5, "Mai");
monthNames.set(6, "Juni");
monthNames.set(7, "Juli");
monthNames.set(8, "August");
monthNames.set(9, "September");
monthNames.set(10, "Oktober");
monthNames.set(11, "November");
monthNames.set(12, "Desember");

const monthLength = new Map();
monthLength.set(1, 31);
monthLength.set(2, 28);
monthLength.set(3, 31);
monthLength.set(4, 30);
monthLength.set(5, 31);
monthLength.set(6, 30);
monthLength.set(7, 31);
monthLength.set(8, 31);
monthLength.set(9, 30);
monthLength.set(10, 31);
monthLength.set(11, 30);
monthLength.set(12, 31);

function setup() {
    let divYear = document.getElementById("year");
    let btnPrevy = document.getElementById("prevy");
    let btnNexty = document.getElementById("nexty");
    let divMonth = document.getElementById("month");
    let btnPrevm = document.getElementById("prevm");
    let btnNextm = document.getElementById("nextm");
    let divDays = document.getElementById("dag");

    let year;
    let month;
    let day;

    start();
    show();
    skudd();

    function start() {
        year = 2018;
        month = 11;
        day = 27;
    }


    btnPrevy.addEventListener("click", prevY);
    btnNexty.addEventListener("click", nextY);

    function prevY() {
        year--;
        show();
    }

    function nextY() {
        year++;
        show();
    }

    btnPrevm.addEventListener("click", prevM);
    btnNextm.addEventListener("click", nextM);

    function prevM() {
        if (month < 2) {
            year--;
            month = 13;
        }
        month--;


        show();
    }

    function nextM() {
        if (month > 11) {
            year++;
            month = 0;
        }
        month++;

        show();
    }

    function show() {
        divYear.innerHTML = String(year);
        divMonth.innerHTML = monthNames.get(month);
        
    }

    function skudd(y,m) {
        if (m !==2) return 0;
        if (y % 400 === 0) return 1;
        if (y % 100 === 0) return 0;
        if (y % 4 === 0) return 1;
        return 0;
    }
}