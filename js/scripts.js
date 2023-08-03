window.onload = function() {
    const form = document.querySelector("form");
    form.onsubmit = function(event){
        event.preventDefault();

        let startMsg = document.getElementById("start");
        startMsg.setAttribute("class", "hidden");
        let nxtMsg = document.getElementById("nxt");
        nxtMsg.removeAttribute("class");
        const animal = document.getElementById("animal");

        if(animal === monkey) {
            
        }

    }
}
