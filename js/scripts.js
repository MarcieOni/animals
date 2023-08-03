window.onload = function() {
    const form = document.querySelector("form");
    form.onsubmit = function(event){
        event.preventDefault();

        let startMsg = document.getElementById("start");
        startMsg.setAttribute("class", "hidden");
        let nxtMsg = document.getElementById("nxt");
        const animal = document.getElementById("animal").value;
        const monkeyPic = document.getElementById("monkey");
        const dogPic = document.getElementById("dog");
        const catgirlPic = document.getElementById("catgirl");
        const fishPic = document.getElementById("fish");
        const lizardPic = document.getElementById("lizard");
        const failMsg = document.getElementById("fail");
        if(animal === "monkey") {
            monkeyPic.removeAttribute("class", "hidden");

        } else if(animal === "dog") {
            dogPic.removeAttribute("class", "hidden");
            nxtMsg.removeAttribute("class");

        } else if(animal === "catgirl") {
            catgirlPic.removeAttribute("class", "hidden");
            nxtMsg.removeAttribute("class");

        } else if(animal === "fish") {
            fishPic.removeAttribute("class", "hidden");
            nxtMsg.removeAttribute("class");

        } else if(animal === "lizard") {
            lizardPic.removeAttribute("class", "hidden");
            nxtMsg.removeAttribute("class");

        } else {
            failMsg.removeAttribute("class", "hidden");

        }
    }
}
