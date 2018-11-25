// @ts-check

// Her definerer vi egenskapene for en ball
class Ball {
    constructor(x, y, vx, vy, w = 26, h = 26) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.w = w;
        this.h = h;
        this.div = document.createElement("div");
        this.div.className = "ball";
    }

    // Oppdaterer posisjonen på nettsiden
    render() {
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
    }

    // Oppdaterer x, y basert på farten til ballen
    flytt() {
        this.x += this.vx;
        this.y += this.vy;
    }
}

// Klargjør spillet - lager kobling er til HTML
// Setter opp slik at alt er klart
function setup() {
    let divBoard = document.getElementById("board");
    let divMain = document.getElementById("main");
    let btnStart = document.getElementById("start");

    btnStart.addEventListener("click", startSpillet);


    // Koblet til knappen som starter spillet
    function startSpillet(e) {
        divBoard.removeChild(btnStart);
        divBoard.addEventListener("click", leggTilBall);
        let baller = [];
        for (let i = 0; i < 1; i++) {
            let x = Math.random() * 524;
            let y = Math.random() * 524;
            let vx = Math.random() * 10 - 5;
            let vy = Math.random() * 10 - 5;
            let ball = new Ball(x, y, vx, vy)
            ball.render();
            divBoard.appendChild(ball.div);
            baller.push(ball);
        }

        setInterval(animering, 20);

        setInterval(addNewBalls, 50);

        // Nye baller legges til med en timer
        function addNewBalls() {
            if (baller.length > 20) return;
            nyBall();
        }
        function leggTilBall(e) {
            let x = e.offsetX;
            let y = e.offsetY;
            let vx = Math.random() * 10 - 5;
            let vy = Math.random() * 10 - 5;
            let ball = new Ball(x, y, vx, vy)
            let fart = Math.sqrt(vx*vx + vy*vy);
            ball.div.style.backgroundColor = farge(fart)
            ball.render();
            divBoard.appendChild(ball.div);
            baller.push(ball);
        }
        function nyBall() {
            let x = Math.random() * 524;
            let y = Math.random() * 524;
            let vx = Math.random() * 10 - 5;
            let vy = Math.random() * 10 - 5;
            let fart = Math.sqrt(vx*vx + vy*vy);
            let f = farge(fart);
            let ball = new Ball(x, y, vx, vy)
            ball.div.style.backgroundColor = farge(fart)
            ball.render();
            divBoard.appendChild(ball.div);
            baller.push(ball);
        }

        // Vi skal flytte alle ballene som er på skjermen
        // Ballene er lagret i arrayet baller
        // Iterer gjennom arrayet og flytter hver enkelt ball
        function animering() {
            for (let i = 0; i < baller.length; i++) {
                let ball = baller[i];
                ball.flytt();
                ball.render();
                if (ball.x > 524) {
                    ball.vx = -Math.abs(ball.vx);
                }
                if (ball.y > 524) {
                    ball.vy = -Math.abs(ball.vy);
                }
                if (ball.x < 0) {
                    ball.vx = Math.abs(ball.vx);
                }
                if (ball.y < 0) {
                    ball.vy = Math.abs(ball.vy);
                }
            }

            // Sjekker kollisjon mellom ballene
            // Ball 1 sjekker mot ball 2, 3, ...
            // Ball 2 sjekker mot ball 3, 4, ...
            // osv
            for (let i = 0; i < baller.length; i++) {
                let a = baller[i];
                for (let j = i + 1; j < baller.length; j++) {
                    let b = baller[j];
                    if (kollisjon(a, b)) {
                        // Vi har oppdaget en kollisjon
                        // Vi bytter vx på ballene
                        let v = a.vx;
                        a.vx = b.vx;
                        b.vx = v;
                    }
                }
            }
        }

        function kollisjon(a, b) {
            if (
                +a.x > +b.x - +a.w &&
                +a.x < +b.x + +b.w &&
                +a.y > +b.y - +a.h &&
                +a.y < +b.y + +b.h
            ) {
                return true;
            } else {
                return false;
            }
        }
    }
}

function farge(fart) {
    let f;
    if (fart < 4) {
        f = "red";
    } else {
        f = "blue";
    }
    return f;
}