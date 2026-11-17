let userPoint = 0;
let computerPoint = 0;


function play(playerChoice) {
    let valszatsok = ["ko", "papir", "ollo"]
    let random = Math.floor(Math.random() * 3);

    let computerChoice = valszatsok[random]

    //Gép Kép Kirakása
    if (computerChoice == "ko") {
        document.getElementById("gepKep").src = "img/ko.png"
    } else if (computerChoice == "papir") {
        document.getElementById("gepKep").src = "img/papir.png"
    } else if (computerChoice == "ollo") {
        document.getElementById("gepKep").src = "img/ollo.png"
    }


    //logika
    document.getElementById("nyertes").style.color = "Green";
    if (playerChoice == "ko" && computerChoice == "ollo") {
        userPoint++;
        document.getElementById("nyertes").innerHTML = "Te nyertél"
    } else if (playerChoice == "papir" && computerChoice == "ko") {
        userPoint++;
        document.getElementById("nyertes").innerHTML = "Te nyertél"
    } else if (playerChoice == "ollo" && computerChoice == "papir") {
        userPoint++;
        document.getElementById("nyertes").innerHTML = "Te nyertél"
    } else if (playerChoice == computerChoice) {
        document.getElementById("nyertes").innerHTML ="Döntetlen"
        document.getElementById("nyertes").style.color = "Orange";
    } else {
        computerPoint++;
        document.getElementById("nyertes").innerHTML = "Gép Nyert"
          document.getElementById("nyertes").style.color = "Red";
    }


    //Player Piros Kerítés
    document.getElementById("koImg").classList = "";
    document.getElementById("papirImg").classList = "";
    document.getElementById("olloImg").classList = "";
    if (playerChoice == "ko") {
        document.getElementById("koImg").classList = "seletedImg";
    } else if (playerChoice == "papir") {
        document.getElementById("papirImg").classList = "seletedImg";
    } else if (playerChoice == "ollo") {
        document.getElementById("olloImg").classList = "seletedImg";
    }

    //Pont ki rakása
    document.getElementById("tePont").innerHTML = userPoint
    document.getElementById("gepPont").innerHTML = computerPoint

}