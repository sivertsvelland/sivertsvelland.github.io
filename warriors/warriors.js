// @ts-check

function setup() {
    let warrior = document.getElementById("warrior");
    let warrior2 = document.getElementById("warrior2");
    let divBoard = document.getElementById("board");

    let x = 55;
    let y = 55;
    let bullet;
    let bx = x;
    let x2 = 55;
    let y2 = 55;
    let bullet2;
    let bx2 = x2;

    setInterval(moveBullet, 1);
    setInterval(moveBullet2, 1);

    document.addEventListener("keydown", moveWarrior);
    document.addEventListener("keydown", moveWarrior2);
    document.addEventListener("keydown", shoot);
    document.addEventListener("keydown", shoot2);



    function moveWarrior(e) {
        switch (e.key) {
            case "w":
                warrior.style.top = y-- + "px";
                break;
            case "a":
                warrior.style.left = x-- + "px";
                break;
            case "s":
                warrior.style.top = y++ + "px";
                break;
            case "d":
                warrior.style.left = x++ + "px";
                break;
        }
        if (y <= 19) {
            y = 19;
            return y;
        }
        if (y >= 546) {
            y = 546;
            return y;
        }
        if (x >= 731) {
            x = 731;
            return x;
        }
        if (x <= 17) {
            x = 17;
            return x;
        }

    }

    function moveWarrior2(e) {
        switch (e.key) {
            case "ArrowUp":
                warrior2.style.bottom = y2++ + "px";
                break;
            case "ArrowLeft":
                warrior2.style.right = x2++ + "px";
                break;
            case "ArrowDown":
                warrior2.style.bottom = y2-- + "px";
                break;
            case "ArrowRight":
                warrior2.style.right = x2-- + "px";
                break;
        }
        if (y2 <= 19) {
            y2 = 19;
            return y;
        }
        if (y2 >= 546) {
            y2 = 546;
            return y;
        }
        if (x2 >= 731) {
            x2 = 731;
            return x;
        }
        if (x2 <= 17) {
            x2 = 17;
            return x;
        }
    }

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
        return;
    }

    function shoot2(e) {
        switch (e.key) {
            case "-":
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
        return;
    }

    function moveBullet() {
        bullet.style.left = bx++ + "px";
        if (bx > 780) {
            divBoard.removeChild(bullet);
        }
        return;
    }
    function moveBullet2() {
        bullet2.style.right = bx2++ + "px";
        if (bx2 > 780) {
            divBoard.removeChild(bullet2);
        }
        return;
    }
}