let userPoint = 0;
let computerPoint = 0;
let buttonPress = 0;

function jatek (userChoice){
    let valasztasok = ["ko","papir","ollo"]
    let random = Math.floor(Math.random()*3)

   document.getElementById("ko").style.borderWidth = 0;
   document.getElementById("ollo").style.borderWidth = 0;
   document.getElementById("papir").style.borderWidth = 0;

   if(userChoice == "ko"){
    document.getElementById("ko").style.borderWidth = "2px";
   }
   else if(userChoice == "ollo"){
    document.getElementById("ollo").style.borderWidth = "2px";
   }
   else{
    document.getElementById("papir").style.borderWidth = "2px";
   }

    

    console.log(random)
    

    let computerChoice = valasztasok[random];

    document.getElementById("eredmenyKep").src = `Images/${computerChoice}.png`



   

    console.log(computerChoice)

    if(userChoice == "ko" && computerChoice == "papir"
        || userChoice == "papir" && computerChoice == "ollo"
        || userChoice == "ollo" && computerChoice == "ko"
    )  {
        computerPoint++;
        document.getElementById("eredmeny").innerHTML("Vesztettél")
        document.getElementById("computerpointK").innerHTML({computerPoint})
        buttonPress ++;


    }
    else if ( userChoice == "ollo" && computerChoice == "papir" 
        || userChoice == "papir" && computerChoice == "ko"
        || userChoice == "ko" && computerChoice == "papir"
        || userChoice == "ko" && computerChoice == "ollo"
    ){  
          userPoint++;
          
        document.getElementById("eredmeny").innerHTML("Te nyertél")
        document.getElementById("userPointK").innerHTML({userPoint})
        buttonPress ++;

    }
    else{
        console.log("Döntetlen")
        buttonPress ++;
    }
    if(buttonPress == 10 ){
        console.log("Játék vége")
    }
   
    
   
    

    
    

   
    




}



