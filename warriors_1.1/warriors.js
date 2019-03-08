// @ts-check

function setup() {

    let btnStart = document.querySelector("button");

    btnStart.addEventListener("click", start);

    function start() {
        document.getElementById("board").style.display = "block";
        document.getElementById("intro").style.display = "none";
    }

    const downKeys = new Set();

    let x = 55; // Kordinater for rød figur
    let y = 55; // Kordinater for rød figur
    let bullet; // Kulen til rød figur
    let bx = x; // X-akse til rød figurs kule
    let by = y; // Y-akse for kule til bruk i overlap

    let x2 = 55; // Kordinater for blå figur
    let y2 = 55; // Kordinater for blå figur
    let bullet2; //kulen til blå figur
    let bx2 = x2; // X-akse til blå figurs kule


    let warrior = document.getElementById("warrior"); // Rød figur
    let warrior2 = document.getElementById("warrior2"); // Blå figur
    let divBoard = document.getElementById("board"); // Brett

    document.addEventListener('keydown', event => downKeys.add(event.key)); // Trigger bevegelse
    document.addEventListener('keyup', event => downKeys.delete(event.key)); // Stopper bevegelsen

    // Beveger rød figur
    function moveWarrior() {
        function isDown(key) { return downKeys.has(key) }
        const s = warrior.style;
        const a = isDown('Shift') ? 10 : 1; // Boost
        if (isDown('s')) s.top = (y += a) + 'px'; if (y <= 19) { y = 19; }
        if (isDown('w')) s.top = (y -= a) + 'px'; if (y >= 546) { y = 546; }
        if (isDown('a')) s.left = (x -= a) + 'px'; if (x >= 731) { x = 731; }
        if (isDown('d')) s.left = (x += a) + 'px'; if (x <= 17) { x = 17; }

        document.addEventListener("keydown", shoot);
        //trenger ikke setInterval i denne koden

        // Lager kule for rød
        function shoot(e) {
            switch (e.key) {
                case " ":
                    if (!bullet) {
                        bullet = document.createElement("div");
                        bullet.className = "bullet";
                        bullet.style.top = y + 'px';
                        bullet.style.left = x + 'px';
                        divBoard.appendChild(bullet);
                        moveBullet();

                    }
                    break;
            }
        }

        // Flytter kule, fjerner kule når den når enden av brettet, for rød
        function moveBullet() {
            if (bullet) {
                bullet.style.left = bx++ + "px";
                // Overlapp test er kommentert ut fordi at den hindret figuren i å skyte
                // det ble registrert overlapp med en gang bullet ble laget.
                /*
                if (overlap({ x: x2, y: y2, w: 50, h: 75 }, { x: bx, y: by, w: 20, h: 20 })) {
                    alert("treff");
                }
                */
                if (bx > 780) {
                    divBoard.removeChild(bullet);
                    return;
                }
                window.requestAnimationFrame(moveBullet);
            }
            /*
            function overlap(a, b) {
                return (a.x > b.x - a.w && a.x < b.x + b.w && a.y > b.y - a.h && a.y < b.y + b.h);
             }
             */
        }

        

        window.requestAnimationFrame(moveWarrior);
        window.requestAnimationFrame(moveBullet);
    }

    // Beveger blå figur
    function moveWarrior2() {
        function isDown(key) { return downKeys.has(key) }
        const s2 = warrior2.style;
        const a2 = isDown('-') ? 10 : 1; // Boost
        if (isDown('ArrowDown')) s2.bottom = (y2 -= a2) + 'px'; if (y2 <= 3) { y2 = 3; }
        if (isDown('ArrowUp')) s2.bottom = (y2 += a2) + 'px'; if (y2 >= 530) { y2 = 530; }
        if (isDown('ArrowLeft')) s2.right = (x2 += a2) + 'px'; if (x2 >= 731) { x2 = 731; }
        if (isDown('ArrowRight')) s2.right = (x2 -= a2) + 'px'; if (x2 <= 17) { x2 = 17; }

        document.addEventListener("keydown", shoot2);
        //trenger ikke setInterval i denne koden

        // Lager kule for blå
        function shoot2(e) {
            switch (e.key) {
                case "Alt":
                    if (!bullet2) {
                        bullet2 = document.createElement("div");
                        bullet2.className = "bullet2";
                        bullet2.style.bottom = y2 + 'px';
                        bullet2.style.right = x2 + 'px';
                        divBoard.appendChild(bullet2);
                        moveBullet2();

                    }
                    break;
            }
        }

        // Flytter kule, fjerner kule når den når enden av brettet, for blå
        
            function moveBullet2() {
                if (bullet2) {
                bullet2.style.right = bx2++ + "px";
                if (bx2 > 780) {
                    divBoard.removeChild(bullet2);
                    return;
                }
                window.requestAnimationFrame(moveBullet2);
            }
        }

        window.requestAnimationFrame(moveWarrior2);
        window.requestAnimationFrame(moveBullet2);
    }

    window.requestAnimationFrame(moveWarrior);
    window.requestAnimationFrame(moveWarrior2);
}