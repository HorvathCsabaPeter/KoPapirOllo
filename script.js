let userPoint = 0;
let computerPoint = 0;


function check(){
    let hibaUzenet = "";
    let emailhejes = false;
    let email = document.getElementById("emailIp").value
    let userName = document.getElementById("userIp").value

    for(let i = 0; email.length < i; i++){
        let vanKukac = false;
        let vanPont = false;
        if(email[i] == "@"){
            vanKukac= true;
        }
        if(email[i] == "@"){
            vanPont = true;
        }
    }

    if(userName.length < 8 ){
        hibaUzenet =+ "Minimum 8 karakternek kell lenie a felhasználónévnek!"
    }
}



function resi() {
    userPoint = 0;
    computerPoint = 0;

    document.getElementById("koImg").style.borderWidth = "0px"
    document.getElementById("papirImg").style.borderWidth = "0px"
    document.getElementById("olloImg").style.borderWidth = "0px"

    document.getElementById("tunes").style.display = "block";
    document.getElementById("nyertBlock").style.display = "none"

    document.getElementById("tePont").innerHTML = userPoint
    document.getElementById("gepPont").innerHTML = computerPoint

    document.getElementById("nyertes").innerHTML = "----"
    document.getElementById("nyertes").style.color = "Green";
}


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
    if (playerChoice == "ko" && computerChoice == "ollo" || playerChoice == "papir" && computerChoice == "ko" || playerChoice == "ollo" && computerChoice == "papir") {
        userPoint++;
        document.getElementById("nyertes").innerHTML = "Te nyertél"
    } else if (playerChoice == computerChoice) {
        document.getElementById("nyertes").innerHTML = "Döntetlen"
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


    if (userPoint >= 10 || computerPoint >= 10) {
        document.getElementById("tunes").style.display = "none";
        document.getElementById("nyertBlock").style.display = "flex"
        document.getElementById("tePontEnd").innerHTML = userPoint
        document.getElementById("gepPontEnd").innerHTML = computerPoint
        if (userPoint >= 10) {
            document.getElementById("nyertesSpan").innerHTML = "Az ember"
        }
        if (computerPoint >= 10) {
            document.getElementById("nyertesSpan").innerHTML = "A gép"
        }
    }

    //Pont ki rakása
    document.getElementById("tePont").innerHTML = userPoint
    document.getElementById("gepPont").innerHTML = computerPoint

}   
