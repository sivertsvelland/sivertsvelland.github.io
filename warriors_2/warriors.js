// @ts-check

function setup() {

    let btnStart = document.querySelector("button");
    let btnOmstart = document.getElementById("omstart");

    btnStart.addEventListener("click", start);
    btnOmstart.addEventListener("click", omstart);

    function start() {
        document.getElementById("board").style.display = "block";
        document.getElementById("intro").style.display = "none";
    }

    function omstart() {
        location.reload();
    }

    const downKeys = new Set();

    let x = 55; // Kordinater for rød figur
    let y = 55; // Kordinater for rød figur og kule
    let bullet = document.getElementById("bullet")
    let bx = x; // X-akse til rød figurs kule

    let x2 = 695; // Kordinater for blå figur
    let y2 = 495; // Kordinater for blå figur
    let bullet2; //kulen til blå figur
    let bx2 = x2; // X-akse til blå figurs kule

    let b1 = false;
    let b2 = false;


    let warrior = document.getElementById("warrior"); // Rød figur
    let warrior2 = document.getElementById("warrior2"); // Blå figur
    let divBoard = document.getElementById("board"); // Brett
    let divWinner = document.getElementById("winner"); // Viser vinner

    document.addEventListener('keydown', event => downKeys.add(event.key)); // Trigger bevegelse
    document.addEventListener('keyup', event => downKeys.delete(event.key)); // Stopper bevegelsen

    // Beveger rød figur
    function moveWarrior() {
        function isDown(key) { return downKeys.has(key) }
        const s = warrior.style;
        const a = isDown('Shift') ? 10 : 1; // Boost
        if (isDown('s')) s.top = (y += a) + 'px'; if (y <= 19) { y = 19; }
        if (isDown('w')) s.top = (y -= a) + 'px'; if (y >= 545) { y = 545; }
        if (isDown('a')) s.left = (x -= a) + 'px'; if (x >= 731) { x = 731; }
        if (isDown('d')) s.left = (x += a) + 'px'; if (x <= 17) { x = 17; }

        document.addEventListener("keydown", shoot);
        //trenger ikke setInterval i denne koden

        // Lager kule for rød
        function shoot(e) {
            switch (e.key) {
                case " ":
                    if (!b1) {
                        
                        bullet.style.top = y + 'px';
                        bullet.style.left = x + 'px';
                        /*
                        bullet = document.createElement("div");
                        bullet.className = "bullet";
                        bullet.style.top = y + 'px';
                        bullet.style.left = x + 'px';
                        divBoard.appendChild(bullet);
                        */
                        b1 = true;
                        moveBullet();
                        
                    }
                    break;
            }

        }

        // Flytter kule, fjerner kule når den når enden av brettet, for rød
        function moveBullet() {
            if (b1) {
                bullet.style.opacity = "1";
                //bullet.style.top = String(y + );
                bullet.style.left = bx++ + "px";
                

                if (overlap({ x: x2, y: y2, w: 50, h: 75 }, { x: bx, y: y, w: 20, h: 20 })) {
                    document.getElementById("warrior2").style.display = "none";
                    document.getElementById("winner").style.display = "block";
                    divWinner.innerHTML = "Red warrior won!";
                    document.getElementById("omstart").style.display = "block";
                } else if (bx > 780) {
                    bullet.style.top = y + 'px';
                    bullet.style.left = x + 'px';
                    b1 = false;
                    bullet.style.opacity = "0.2";
                    return;
                }


                window.requestAnimationFrame(moveBullet);

            }

            function overlap(a, b) {
                return (a.x < b.x - a.w && a.y < b.y + a.w && a.y > b.y - a.h && b.y < a.y + b.h);
            }
        }

        window.requestAnimationFrame(moveWarrior);
        window.requestAnimationFrame(moveBullet);
    }

    // Beveger blå figur
    function moveWarrior2() {
        function isDown(key) { return downKeys.has(key) }
        const s2 = warrior2.style;
        const a2 = isDown('-') ? 10 : 1; // Boost
        if (isDown('ArrowDown')) s2.top = (y2 += a2) + 'px'; if (y2 <= 19) { y2 = 19; }
        if (isDown('ArrowUp')) s2.top = (y2 -= a2) + 'px'; if (y2 >= 545) { y2 = 545; }
        if (isDown('ArrowLeft')) s2.left = (x2 -= a2) + 'px'; if (x2 >= 731) { x2 = 731; }
        if (isDown('ArrowRight')) s2.left = (x2 += a2) + 'px'; if (x2 <= 17) { x2 = 17; }

        document.addEventListener("keydown", shoot2);
        //trenger ikke setInterval i denne koden

        // Lager kule for blå
        function shoot2(e) {
            switch (e.key) {
                case "Alt":
                    if (!bullet2) {
                        bullet2 = document.createElement("div");
                        bullet2.className = "bullet2";
                        bullet2.style.top = y2 + 'px';
                        bullet2.style.left = x2 + 'px';
                        divBoard.appendChild(bullet2);
                        moveBullet2();

                    }
                    break;
            }
        }

        // Flytter kule, fjerner kule når den når enden av brettet, for blå

        function moveBullet2() {
            if (bullet2) {
                bullet2.style.left = bx2-- + "px";

                if (overlap2({ x: x, y: y, w: 50, h: 75 }, { x: bx2, y: y2, w: 20, h: 20 })) {
                    document.getElementById("warrior").style.display = "none";
                    document.getElementById("winner").style.display = "block";
                    divWinner.innerHTML = "Blue warrior won!";
                    document.getElementById("omstart").style.display = "block";
                }

                function overlap2(a, b) {
                    return (a.x > b.x && a.y < b.y + a.w && a.y > b.y - a.h && b.y < a.y + b.h);
                }

                if (bx2 < 0) {
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