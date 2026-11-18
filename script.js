let userPoint = 0;
let computerPoint = 0;

function play(playerChoice) {
    if(userPoint >= 9 || computerPoint >= 9){
        document.getElementById("tunes").style.display = "none";
   
    }else{
 
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
    if (playerChoice == "ko" && computerChoice == "ollo" || playerChoice == "papir" && computerChoice == "ko" || playerChoice == "ollo" && computerChoice == "papir") {
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
    document.getElementById("koImg").style.borderWidth = "0px"
    document.getElementById("papirImg").style.borderWidth = "0px"
    document.getElementById("olloImg").style.borderWidth = "0px"
    if (playerChoice == "ko") {
        document.getElementById("koImg").style.borderWidth = "3px"

    } else if (playerChoice == "papir") {
        document.getElementById("papirImg").style.borderWidth = "3px"

    } else if (playerChoice == "ollo") {
        document.getElementById("olloImg").style.borderWidth = "3px"

    }

    
    //Pont ki rakása
    document.getElementById("tePont").innerHTML = userPoint
    document.getElementById("gepPont").innerHTML = computerPoint
    }
}   