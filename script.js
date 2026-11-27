let userPoint = 0;
let computerPoint = 0;
let userNaemff = "";

const magyarABC = [
    "a", "á", "b", "c", "d", "e", "é",
    "f", "g", "h", "i", "í", "j", "k", "l",
    "m", "n", "o", "ó", "ö", "ő", "p", "q", "r",
    "s", "t", "u", "ú", "ü", "ű", "v", "w",
    "x", "y", "z"
];

function check() {
    let hibaUzenet = "";
    let email = document.getElementById("emailIp").value;
    let userName = document.getElementById("userIp").value;

    let kukacHelye = -1;
    let pontHelye = -1;
    let magyarAbeceBetu = false;

    for (let i = 0; i < email.length; i++) {
        if (email[i] == "@") {
            kukacHelye = i;
        }
        if (email[i] == ".") {
            pontHelye = i;
        }
    }

    if (kukacHelye == -1 || pontHelye == -1) {
        hibaUzenet += "Ez nem egy email!<br>";
    }

    if (pontHelye < kukacHelye || pontHelye == kukacHelye + 1) {
        hibaUzenet += "Nem jó az email sorrend!<br>";
    }

    if (userName.length < 8 || userName.length > 20) {
        hibaUzenet += "A felhasználónév 8-20 karakter lehet!<br>";
    }

    for (let g = 0; g < userName.length; g++) {
        if (!magyarABC.includes(userName[g].toLowerCase())) {
            magyarAbeceBetu = true;
        }
    }

    if (magyarAbeceBetu) {
        hibaUzenet += "A felhasználónév karakterei nem megfelelőek!<br>";
    }

    if (hibaUzenet == "") {
        document.getElementById("urlapBox").style.display = "none";
        document.getElementById("tunes").style.display = "block";
        document.getElementById("userNameh1").innerHTML = userName + " Pontja";
        userNaemff = userName;
    }

    document.getElementById("hiba").innerHTML = hibaUzenet;
}

function resi() {
    userPoint = 0;
    computerPoint = 0;

    document.getElementById("koImg").style.borderWidth = "0px";
    document.getElementById("papirImg").style.borderWidth = "0px";
    document.getElementById("olloImg").style.borderWidth = "0px";

    document.getElementById("tunes").style.display = "block";
    document.getElementById("nyertBlock").style.display = "none";

    document.getElementById("tePont").innerHTML = userPoint;
    document.getElementById("gepPont").innerHTML = computerPoint;

    document.getElementById("nyertes").innerHTML = "----";
    document.getElementById("nyertes").style.color = "White";
}

function play(playerChoice) {
    let valszatsok = ["ko", "papir", "ollo"];
    let random = Math.floor(Math.random() * 3);
    let computerChoice = valszatsok[random];

    if (computerChoice == "ko") {
        document.getElementById("gepKep").src = "img/ko.png";
    } else if (computerChoice == "papir") {
        document.getElementById("gepKep").src = "img/papir.png";
    } else if (computerChoice == "ollo") {
        document.getElementById("gepKep").src = "img/ollo.png";
    }

    document.getElementById("nyertes").style.color = "#ffffff";

    if (
        playerChoice == "ko" && computerChoice == "ollo" ||
        playerChoice == "papir" && computerChoice == "ko" ||
        playerChoice == "ollo" && computerChoice == "papir"
    ) {
        userPoint++;
        document.getElementById("nyertes").innerHTML = `${userNaemff} nyert`;
    } else if (playerChoice == computerChoice) {
        document.getElementById("nyertes").innerHTML = "Döntetlen";
        document.getElementById("nyertes").style.color = "White";
    } else {
        computerPoint++;
        document.getElementById("nyertes").innerHTML = "Gép Nyert";
        document.getElementById("nyertes").style.color = "White";
    }

    document.getElementById("koImg").style.borderWidth = "0px";
    document.getElementById("papirImg").style.borderWidth = "0px";
    document.getElementById("olloImg").style.borderWidth = "0px";

    if (playerChoice == "ko") {
        document.getElementById("koImg").style.borderWidth = "3px";
    } else if (playerChoice == "papir") {
        document.getElementById("papirImg").style.borderWidth = "3px";
    } else if (playerChoice == "ollo") {
        document.getElementById("olloImg").style.borderWidth = "3px";
    }

    document.getElementById("tePont").innerHTML = userPoint;
    document.getElementById("gepPont").innerHTML = computerPoint;

    if (userPoint >= 10 || computerPoint >= 10) {
        document.getElementById("tunes").style.display = "none";
        document.getElementById("nyertBlock").style.display = "flex";

        document.getElementById("tePontEnd").innerHTML = userPoint;
        document.getElementById("gepPontEnd").innerHTML = computerPoint;

        if (userPoint >= 10) {
            document.getElementById("nyertesSpan").innerHTML = `${userNaemff}`;
        }

        if (computerPoint >= 10) {
            document.getElementById("nyertesSpan").innerHTML = "A gép";
        }
    }
}