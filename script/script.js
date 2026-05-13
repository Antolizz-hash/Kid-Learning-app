let display = document.getElementsByClassName("display")[0];

let buttons = document.querySelectorAll(".phonics");

let image = document.getElementsByClassName("image")[0];

const images = {
    a: "images/apple.png",
    b: "images/ball.png",
    c: "images/cat.webp",
    d: "images/dog.png",
    e: "images/eagle.png"
};

buttons.forEach(button => {

    button.addEventListener("click", function(){

        display.innerText = this.innerText;

        let letter = this.innerText.toLowerCase();

        let audio = new Audio(`sounds/${letter}.m4a`);

        audio.play();

        image.src = images[letter];
        console.log(images[letter]);

    });

});