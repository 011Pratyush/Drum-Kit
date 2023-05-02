for(var i = 0 ; i < document.querySelectorAll(".drum").length ; i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click", handleclick ); // To call function we use addEventlistener
// it has usually 2 parameters first is the event u can check the type of events in mdn website like here click 
// is an event
}

function handleclick()
{

    // this.style.color = "white"; this is used to state that particular object

    var buttonInnerHTML = this.innerHTML;
    console.log(buttonInnerHTML);
    // makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

    switch (buttonInnerHTML) {
        case "w":
            var audio = new Audio("tom-1.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("tom-2.mp3");
            audio.play();
            break;
            
        case "s":
            var audio = new Audio("tom-3.mp3");
            audio.play();
            break;
                
        case "d":
            var audio = new Audio("tom-4.mp3");
            audio.play();
            break;
                    
        case "j":
            var audio = new Audio("snare.mp3");
            audio.play();
            break;
                        
        case "k":
            var audio = new Audio("crash.mp3");
            audio.play();
            break;
            
        case "l":
            var audio = new Audio("kick-bass.mp3");
            audio.play();
            break;
                
        default: console.log()
            break;
    }
}

document.addEventListener("keypress", function(event) {

    makeSound(event.key); // event has many more properties key is an inside thing which says which key was pressed
    buttonAnimation(event.key);

})
function makeSound(key)
{
    switch (key) {
        case "w":
            var audio = new Audio("tom-1.mp3");
            audio.play();
            break;
            
        case "a":
            var audio = new Audio("tom-2.mp3");
            audio.play();
            break;
            
        case "s":
            var audio = new Audio("tom-3.mp3");
            audio.play();
            break;
                
        case "d":
            var audio = new Audio("tom-4.mp3");
            audio.play();
            break;
                    
        case "j":
            var audio = new Audio("snare.mp3");
            audio.play();
            break;
                        
        case "k":
            var audio = new Audio("crash.mp3");
            audio.play();
            break;
            
        case "l":
            var audio = new Audio("kick-bass.mp3");
            audio.play();
            break;
                
        default: console.log()
            break;
    }
}




document.addEventListener("keypress", function(event) {
    console.log(event);
});

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    // to add class --> classList.add("pressed")
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 10);  // 100 milli seconds
}







































// var housekeeper1 = {
//     yearsofexperience: 12,
//     name: "Jane",
//     cleaningRepertoire: ["bathroom", "lobby", "bedroom"]
// }
// // Constructor Function
// function BellBoy (name, age, hasWorkPermit, languages)
// {
//     this.name = name;
//     this.age = age;
//     this.hasWorkPermit = hasWorkPermit;
//     this.languages = languages;
// }
// // This will help to take input of 10000000 inputs;
// var BellBoy1 = new BellBoy("Timmy", 19, true, ["French", "English"]);

// // var audio = new Audio("sounds/tom-1.mp3");
// // audio.play();
