let userPoint = 0;
let computerPoint = 0;

function jatek (userChoice){
    let valasztasok = ["ko","papir","ollo"]
    let random = Math.floor(Math.random()*3)

    console.log(random)
    

    let computerChoice = valasztasok[random];

    document.getElementById("eredmenyKep").src  = 

    console.log(computerChoice)

    if(userChoice == "ko" && computerChoice == "papir"
        || userChoice == "papir" && computerChoice == "ollo"
        || userChoice == "ollo" && computerChoice == "ko"
    )  {
        computerPoint++;
        console.log("Vesztettél")
    }
    else if ( userChoice == "ollo" && computerChoice == "papir" 
        || userChoice == "papir" && computerChoice == "ko"
        || userChoice == "ko" && computerChoice == "papir"
        || userChoice == "ko" && computerChoice == "ollo"
    ){  
          userPoint++;
          console.log("Gyöztél")
    }
    else{
        console.log("Döntetlen")
    }
    
   
    

    
    

   
    




}



