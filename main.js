var square = document.querySelectorAll(".square");
var displayColor = document.querySelector(".displayColor");
var message = document.querySelector(".message");
 var h1 = document.querySelector("h1");
//console.log(square);

var colors = generateRandomColor(6);
// [
// "rgb(255, 0, 0)",
// "rgb(255, 255, 0)",
// "rgb(255, 255, 255)",
// "rgb(0, 255, 0)",
// "rgb(255, 0, 255)",
// "rgb(0, 0, 255)",
// ]; 

var pickedColor = pickedRandomColor(colors);
displayColor.textContent = pickedColor


for(var i = 0; i< square.length; i++){
    //alert(colors[i]);
    square[i].style.backgroundColor = colors[i];
    square[i].addEventListener("click", function() {
        //alert("clicked");
        var choosenColor = this.style.backgroundColor;
        //console.log(choosenColor);
        //console.log(pickedColor);
        if(choosenColor === pickedColor){
            h1.style.backgroundColor = pickedColor;
            message.textContent = "You Win...";
            matchColor(pickedColor);
            //alert("you win..");
        }else{
            this.style.backgroundColor = "#232323";
            message.textContent = "You lose...";
            //alert("you lose..");
        }
    })
}

// change all square color while win
function matchColor(color){
    for(var i = 0; i< square.length; i++)
    {
        square[i].style.backgroundColor = color;
    }
}

//random color select 
function pickedRandomColor(colors){
    var randomNum = Math.floor(Math.random() * colors.length);
    return colors[randomNum];
}

//genarate random color

function generateRandomColor(number){
    var colors = [];

    for(var i =0; i<number; i++){
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);

        var randomColor = "rgb"+"("+r+", "+g+", "+b+")";
        //console.log(randomColor);
        colors.push(randomColor);
    }

    return colors;
}
