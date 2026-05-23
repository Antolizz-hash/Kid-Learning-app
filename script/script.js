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
        image: "images/cat.png",
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
let wordDisplay = document.querySelector('.words');
let imageDisplay = document.querySelector('.image');
let readButton = document.querySelector('.read-button');

// Word list with specific timestamp checkpoints for each word
let wordList = [
    {word: "Cat", audio: "../sounds/cat.m4a", image: "../images/cat.png", times: {l1: 0.8, l2: 2.11, l3: 3.4, reveal: 5.04}},
    {word: "Mat", audio: "../sounds/mat.m4a", image: "../images/mat.webp", times: {l1: 0.8, l2: 2.11, l3: 3.4, reveal: 5.04}},
    {word: "Rat", audio: "../sounds/rat.m4a", image: "../images/rat.webp", times: {l1: 0.8, l2: 2.11, l3: 3.4, reveal: 5.04}},
    {word: "Hat", audio: "../sounds/hat.m4a", image: "../images/hat.jpg", times: {l1: 0.8, l2: 2.11, l3: 3.4, reveal: 5.04}},
    {word: "Bat", audio: "../sounds/bat.m4a", image: "../images/bat.jpg", times: {l1: 0.8, l2: 2.11, l3: 3.4, reveal: 5.04}},
    {word: "Fat", audio: "../sounds/fat.m4a", image: "../images/fat.jpg", times: {l1: 0.8, l2: 2.11, l3: 3.4, reveal: 5.04}},
    {word: "Cap", audio: "../sounds/cap.m4a", image: "../images/cap.webp", times: {l1: 0.8, l2: 2.11, l3: 3.4, reveal: 5.04}},
    {word: "Man", audio: "../sounds/man.m4a", image: "../images/man.jpg", times: {l1: 0.8, l2: 2.11, l3: 3.4, reveal: 5.04}},
    {word: "Van", audio: "../sounds/van.m4a", image: "../images/van.webp", times: {l1: 0.8, l2: 2.11, l3: 3.4, reveal: 5.04}},
    {word: "Cab", audio: "../sounds/cab.m4a", image: "../images/cab.jpg", times: {l1: 0.8, l2: 2.11, l3: 3.4, reveal: 5.04}},
    {word: "Pan", audio: "../sounds/pan.m4a", image: "../images/pan.jpg", times: {l1: 0.8, l2: 2.11, l3: 3.4, reveal: 5.04}},
    {word: "Can", audio: "../sounds/can.m4a", image: "../images/can.webp", times: {l1: 0.8, l2: 2.11, l3: 3.4, reveal: 5.04}},
    {word: "yam", audio: "../sounds/yam.m4a", image: "../images/yam.png", times: {l1: 0.8, l2: 2.11, l3: 3.4, reveal: 5.04}},
    {word: "Jam", audio: "../sounds/jam.m4a", image: "../images/jam.jpg", times: {l1: 0.8, l2: 2.11, l3: 3.4, reveal: 5.04}},
    {word: "ax",  audio: "../sounds/ax.m4a",  image: "../images/ax.jpg",  times: {l1: 0.8, l2: 2.11, l3: 2.11, reveal: 3.5}}, 
    {word: "Bag", audio: "../sounds/bag.m4a", image: "../images/bag.jpg", times: {l1: 0.8, l2: 2.11, l3: 3.4, reveal: 5.04}},
    {word: "Rag", audio: "../sounds/rag.m4a", image: "../images/rag.webp", times: {l1: 0.8, l2: 2.11, l3: 3.4, reveal: 5.04}},
    {word: "Map", audio: "../sounds/map.m4a", image: "../images/map.webp", times: {l1: 0.8, l2: 2.11, l3: 3.4, reveal: 5.04}},
    {word: "Tap", audio: "../sounds/tap.m4a", image: "../images/tap.webp", times: {l1: 0.8, l2: 2.11, l3: 3.4, reveal: 5.04}},
    {word: "fan", audio: "../sounds/fan.m4a", image: "../images/fan.jpg", times: {l1: 0.8, l2: 2.11, l3: 3.4, reveal: 5.04}}
];

let activePool = [];

readButton.addEventListener("click", function(){

    readButton.disabled = true;

    if (activePool.length === 0) {
        activePool = [...wordList];
    }

    let randomIndex = Math.floor(Math.random() * activePool.length);
    
   
    let currentItem = activePool.splice(randomIndex, 1)[0]; 

    let letters = currentItem.word.toUpperCase().split("");

    // Reset interface
    wordDisplay.innerHTML = "";
    wordDisplay.classList.remove("bounce");
    imageDisplay.classList.remove("show");
    imageDisplay.src = "";

   
    let audio = new Audio(currentItem.audio);
    audio.play();

    let l1Shown = false;
    let l2Shown = false;
    let l3Shown = false;
    let wordShown = false;

    let interval = setInterval(() => {

        // Show 1st Letter (e.g., "C")
        if(audio.currentTime >= currentItem.times.l1 && !l1Shown){
            wordDisplay.innerHTML = letters[0];
            l1Shown = true;
        }

        // Show 1st + 2nd Letter (e.g., "CA")
        if(audio.currentTime >= currentItem.times.l2 && !l2Shown){
            wordDisplay.innerHTML = letters[0] + letters[1];
            l2Shown = true;
        }

        // Show 1st + 2nd + 3rd Letter (e.g., "CAT")
        if(letters.length >= 3 && audio.currentTime >= currentItem.times.l3 && !l3Shown){
            wordDisplay.innerHTML = letters[0] + letters[1] + letters[2];
            l3Shown = true;
        }

        // Whole word bounce animation and image reveal
        if(audio.currentTime >= currentItem.times.reveal && !wordShown){

            // console.log("Reveal triggered");

            wordDisplay.innerHTML = currentItem.word.toUpperCase();

            wordDisplay.classList.add("bounce");

            imageDisplay.src = currentItem.image;

            imageDisplay.onload = () => {
                // console.log("Image loaded");
                imageDisplay.classList.add("show");
            };

            // imageDisplay.onerror = () => {
            //     console.log("Image failed");
            // };

            wordShown = true;
        }

        audio.addEventListener("ended", () => {
            clearInterval(interval);
            readButton.disabled = false;
        });

    }, 100); 
});


