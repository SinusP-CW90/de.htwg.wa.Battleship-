let cellClassLeft = document.getElementsByClassName("cellLeft");
let cellClassRight = document.getElementsByClassName("cellRight");
let cell00C = document.getElementById("cellLeft-R0-C0").firstElementChild;
let playgroundSize = 4;
let player1ShipCount = playgroundSize;
let shootPlayer2Count = 0;
let gameState = "start";
let player1Ship;
let progressBarWidth = 0;

function startGame(){
    document.getElementById("gameContainer").style.visibility = "visible";
    document.getElementById("startButton").style.display = "none";
    document.getElementById("infoText").classList.add("text-danger");
    document.getElementById("infoText").innerHTML="Player 1 - please set "+ player1ShipCount +" ships on your left side!";
    ValidateForm();
}

function ValidateForm()
{
    let radioButtons = document.getElementsByName("vbtn-radio");
    for(let i = 0; i < radioButtons.length; i++)
    {
        if(radioButtons[i].checked == true)
        {
            player1Ship = radioButtons[i].value;
            if(confirm("You have selected " + radioButtons[i].value + " as your favorite ship. Is that correct?"))

                return true;
            else
                return false;
        }
    }
}

function setOwnShips(){
    this.firstElementChild.innerHTML = "<img src='http://localhost:9000/assets/images/"+player1Ship+".png' alt='S' class='gameContainer' id=this.value/>";
    this.firstElementChild.setAttribute("shoot","shipIsSet")
    player1ShipCount -= 1;
    document.getElementById("infoText").innerHTML = "Player 1 - please set "+ player1ShipCount +" ships on your left side!";

    if(player1ShipCount <= 0){
        phase2();
    }
}

function setRandomPlayer2Ships(){
    for (let i = 0; i < playgroundSize; i++) {
        let currentCell = "cellRightValue-R"+i+"-C"+Math.floor(Math.random() * 4);
        document.getElementById(currentCell).classList.add("shipIsSet");
        //document.getElementById(currentCell).innerHTML="S";
        document.getElementById(currentCell).innerHTML="<img src='http://localhost:9000/assets/images/pirateShip.png' alt='S' class='gameContainer' id=this.value/>";
    }
}

function phase2(){
    setTimeout(function(){ alert("You set all your Ships");}, 1000);
    setRandomPlayer2Ships();
    //document.getElementById("cellRightTest").setAttribute("title","");
    document.getElementById("infoText").innerHTML = "Player 1 - Now shoot Player2´s ships:\n" +
        "you hit "+ shootPlayer2Count +" already";
    removeLeftCellEvents();
    //TODO change bg by player switch
    document.getElementsByClassName("cellLeft").onmouseover = function()
    {
        this.style.backgroundColor = "darkred";
    }
    for (let i = 0; i < cellClassRight.length; i++) {
        cellClassRight[i].addEventListener("click", shoot, false);
    }
}

function shoot(){
    console.log("test");
    console.log(this.firstElementChild.classList.value);
    if(this.firstElementChild.classList.value === "number shipIsSet"){

        this.firstElementChild.innerHTML = "<img src='http://localhost:9000/assets/images/shootShip1.png' alt='S' class='gameContainer' id=this.value/>";
        this.style.borderColor="red"
        shootPlayer2Count +=1;
        progressBarWidth +=25;
        document.getElementById("progressBar").style.width =  progressBarWidth+"%";
        document.getElementById("infoText").innerHTML = "Player 1 - Now shoot Player2´s ships:\n" +
            "you hit "+ shootPlayer2Count +" already";
    }
    else{
        this.firstElementChild.innerHTML = "<img src='http://localhost:9000/assets/images/miss2.png' alt='S' class='gameContainer' id=this.value/>";
        let thisCell = this;
        setTimeout(function(){ thisCell.firstElementChild.innerHTML = "<img src='http://localhost:9000/assets/images/missAfter.png' alt='S' class='gameContainer' id=this.value/>"}, 1500);
        setTimeout(function(){ thisCell.firstElementChild.innerHTML = "<img src='http://localhost:9000/assets/images/missAfterAfter.png' alt='S' class='gameContainer' id=this.value/>"}, 3000);
    }
    winCheck();
    setTimeout(    function(){shootRandomLeftShips()}, 1500);
}



function winCheck(){
    console.log("pg Size:" +playgroundSize);

    if(shootPlayer2Count === playgroundSize){
        document.getElementById("infoText").innerHTML = "Player 1 WON!!!!!!!!!!!!"
        setTimeout(function(){ alert("You WON!!!");}, 1000);
    }
}

function shootRandomLeftShips(){
    let currentCell = "cellLeftValue-R"+Math.floor(Math.random() * 4)+"-C"+Math.floor(Math.random() * 4);
    switch(document.getElementById(currentCell).getAttribute("shoot")) {
        case "shipIsSet":
            document.getElementById(currentCell).setAttribute("shoot","hit")
            document.getElementById(currentCell).innerHTML = "<img src='http://localhost:9000/assets/images/"+player1Ship+"Hit.png' alt='S' class='gameContainer' id=this.value/>";
            document.getElementById(currentCell).parentElement.style.borderColor="red"
            break;
        case "hit":
            shootRandomLeftShips()
            break;
        case "miss":
            shootRandomLeftShips()
            break;
        case "":
            document.getElementById(currentCell).setAttribute("shoot","miss");
            document.getElementById(currentCell).innerHTML = "<img src='http://localhost:9000/assets/images/miss2.png' alt='S' class='gameContainer' id=this.value/>";
            setTimeout(function(){ document.getElementById(currentCell).innerHTML = "<img src='http://localhost:9000/assets/images/missAfter.png' alt='S' class='gameContainer' id=this.value/>"}, 1500);
            setTimeout(function(){ document.getElementById(currentCell).innerHTML = "<img src='http://localhost:9000/assets/images/missAfterAfter.png' alt='S' class='gameContainer' id=this.value/>"}, 3000);
            break;
        default:
            }
}

function addLeftCellEvents(){
    for (let i = 0; i < cellClassLeft.length; i++) {
        cellClassLeft[i].addEventListener("click", setOwnShips, false);
    }
}

function removeLeftCellEvents(){
    for (let i = 0; i < cellClassLeft.length; i++) {
        cellClassLeft[i].removeEventListener("click", setOwnShips, false);
    }
}

window.onload = function(){
    document.getElementById("gameContainer").style.visibility = "hidden";
    addLeftCellEvents();
    document.getElementById("startButton").addEventListener("click", startGame, false);
}