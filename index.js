function clickcrash()
{
    var audio=new Audio("./sounds/crash.mp3"); 
    audio.play();
}
function clickkick()
{
    var audio=new Audio("./sounds/kick-bass.mp3"); 
    audio.play();
}
function clicksnare()
{
    var audio=new Audio("./sounds/snare.mp3"); 
    audio.play();
}
function clicktom1()
{
    var audio=new Audio("./sounds/tom-1.mp3"); 
    audio.play();
}
function clicktom2()
{
    var audio=new Audio("./sounds/tom-2.mp3"); 
    audio.play();
}
function clicktom3()
{
    var audio=new Audio("./sounds/tom-3.mp3"); 
    audio.play();
}
function clicktom4()
{
    var audio=new Audio("./sounds/tom-4.mp3"); 
    audio.play();
}

document.getElementById("a").addEventListener("click",clickcrash);
document.getElementById("s").addEventListener("click",clickkick);
document.getElementById("d").addEventListener("click",clicksnare);
document.getElementById("f").addEventListener("click",clicktom1);
document.getElementById("j").addEventListener("click",clicktom2);
document.getElementById("k").addEventListener("click",clicktom3);
document.getElementById("l").addEventListener("click",clicktom4);

document.addEventListener("keypress",function(event)
{
    makeSound(event.key);
});

function makeSound(key)
{
    switch(key)
    {
        case "a":
            var audio=new Audio("./sounds/crash.mp3"); 
            audio.play();
            break;
        case "s":
            var audio=new Audio("./sounds/kick-bass.mp3"); 
            audio.play();
            break;
        case "d":
            var audio=new Audio("./sounds/snare.mp3"); 
            audio.play();
            break;
        case "f":
            var audio=new Audio("./sounds/tom-1.mp3"); 
            audio.play();
            break;
        case "j":
            var audio=new Audio("./sounds/tom-2.mp3"); 
            audio.play();
            break;
        case "k":
            var audio=new Audio("./sounds/tom-3.mp3"); 
            audio.play();
            break;
        case "l":
            var audio=new Audio("./sounds/tom-4.mp3"); 
            audio.play();
            break;   
    }
}