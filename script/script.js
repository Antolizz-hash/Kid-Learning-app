let display = document.getElementsByClassName("display")[0];

let buttons = document.querySelectorAll(".phonics");

let image = document.getElementsByClassName("image")[0];

function showSidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
}

function hideSidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
}
const phonicsData = {

    a: {
        image: "images/apple.png",
        word: "Apple"
    },

    b: {
        image: "images/ball.png",
        word: "Ball"
    },

    c: {
        image: "images/cat.webp",
        word: "Cat"
    },

    d: {
        image: "images/dog.jpg",
        word: "Dog"
    },

    e: {
        image: "images/elephant.jpg",
        word: "Elephant"
    },
    f:{
        image: "images/fish.jpg",
        word: "Fish"
    },

    g: {
        image: "images/giraffe.jpg",
        word: "Giraffe"
    },
    h:{
        image: "images/horse.jpg",
        word: "Horse"
    },

    i: {
        image: "images/ice-cream.jpg",
        word: "Ice Cream"
    },
    j:{
        image: "images/jacket.webp",
        word: "Jacket"
    },

    k: {
        image: "images/kite.jpg",
        word: "Kite"        
    },
    l: {
        image: "images/lorry.jpg",
        word: "Lorry"
    },

    m: {
        image: "images/monkey.png",
        word: "Monkey"
    },
    n: {
        image: "images/net.webp",
        word: "Net"
    },

    o: {
        image: "images/ostrich.jpg",
        word: "Ostrich"
    },
    p: {
        image: "images/pencil.jpg",
        word: "Pencil"
    },  
    q: {
        image: "images/queen.webp",
        word: "Queen"
    },
    r: {
        image: "images/rabbit.jpg",
        word: "Rabbit"
    },
    s: {
        image: "images/socks.png",
        word: "Socks"
    },
    t: {
        image: "images/tap.webp",
        word: "Tap"
    },
    u: {
        image: "images/umbrella.webp",
        word: "Umbrella"
    },
    v: {
        image: "images/van.webp",
        word: "Van"
    },  
    w: {
        image: "images/watch.webp",
        word: "Watch"
    },
    x: {
        image: "images/xmass-tree.webp",
        word: "X-Mas Tree"
    },
    y: {
        image: "images/yam.png",
        word: "Yam"
    },
    z: {
        image: "images/zebra.jpg",
        word: "Zebra"
    }

};

buttons.forEach(button => {

    button.addEventListener("click", function(){

        let letter = this.innerText.trim().toLowerCase();

        display.innerText = this.innerText;

        image.src = phonicsData[letter].image;

        let audio = new Audio(`sounds/${letter}.m4a`);

        audio.play();

        audio.onended = function(){

            let speech = new SpeechSynthesisUtterance(
                phonicsData[letter].word
            );

            speech.lang = "en-US";

            window.speechSynthesis.speak(speech);

        };

    });

});