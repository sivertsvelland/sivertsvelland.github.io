//@ts-check

function startGame() {
    let divBoard = document.getElementById("board");
    let btnOmstart = document.querySelector("#omstart > button");
    let divOmstart = document.getElementById("omstart");
    let divPoeng = document.getElementById("poeng");
    let poeng = 0;

    let apple;
    const BRETT = { w: 30, h: 20 };
    const SIZE = 20;
    let v = { x: 1, y: 0 };

    let gameTimer;

    let segments;
    let head;

    function makeSegment(pos) {
        let s = document.createElement("div");
        s.className = "snake";
        divBoard.appendChild(s);
        s.pos = { x: pos.x, y: pos.y };
        segments.push(s);
        place(s);
    }

    function place(element) {
        let pos = element.pos;
        element.style.transform = "translate(" + pos.x * SIZE + "px," + pos.y * SIZE + "px)";
    }

    function visPoeng() {
        divPoeng.innerHTML = "Poeng:" + poeng.toFixed(1);
    }

    function makeApple() {
        if (!apple) {
            apple = document.createElement("div");
            apple.className = "apple";
            divBoard.appendChild(apple);
            apple.pos = { x: 0, y: 0 };
        }
        apple.pos.x = Math.floor(Math.random() * BRETT.w);
        apple.pos.y = Math.floor(Math.random() * BRETT.h);
        place(apple);
        poeng = poeng + 1;
        visPoeng()
    }

    setTimeout(reallyStartTheGame, 0.1 * 1000);

    document.addEventListener("keydown", saveKey);

    btnOmstart.addEventListener("click", omstart);

    function omstart (){
        location.reload();
    }

    function reallyStartTheGame() {
        divBoard.innerHTML = "";
        segments = [];
        head = 0;
        makeApple();
        makeSegment({ x: 10, y: 10 });
        gameTimer = setInterval(gameLoop, 100);
        divBoard.style.width = BRETT.w * SIZE + "px";
        divBoard.style.height = BRETT.h * SIZE + "px";
    }

    function gameLoop() {
        let l = segments.length;
        let tail = (head + 1) % l;
        let tseg = segments[tail];
        let hseg = segments[head];
        tseg.pos.x = (hseg.pos.x + v.x + BRETT.w) % BRETT.w;
        tseg.pos.y = (hseg.pos.y + v.y + BRETT.h) % BRETT.h;
        head = tail;
        place(tseg);
        if (tseg.pos.x === apple.pos.x &&
            tseg.pos.y === apple.pos.y) {
            makeSegment(tseg.pos);
            makeApple();
        } else sjekkSlange();
    }

    function sjekkSlange() {
        let h = segments[head]
        for (let i = 0; i < segments.length; i++) {
            if (i === head) continue;
            let s = segments[i];
            if (s.pos.x === h.pos.x && s.pos.y === h.pos.y) {
                clearInterval(gameTimer);
                divBoard.innerHTML = "Game over"  + "<br>" + "Du suge virkelig du, fikk jo bara " + poeng.toFixed(1) + " poeng...";
                divOmstart.style.left = "300px";
            }
        }
    }

    function saveKey(e) {
        let k = e.keyCode;
        switch (k) {
            case 37:
                v.x = -1; v.y = 0;
                break;
            case 38:
                v.x = 0; v.y = -1;
                break;
            case 39:
                v.x = 1; v.y = 0;
                break;
            case 40:
                v.x = 0; v.y = 1;
                break;
        }
    }
}