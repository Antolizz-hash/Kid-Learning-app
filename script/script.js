let display = document.getElementsByClassName("display")[0];

let buttons = document.querySelectorAll(".phonics");

let image = document.getElementsByClassName("image")[0];

const images = {
    a: "images/apple.png",
    b: "images/ball.png",
    c: "images/cat.webp",
    d: "images/dog.jpg",
    e: "images/elephant.jpg",
    f: "images/fish.jpg",
    g: "images/giraffe.jpg",
    h: "images/house.jpg",
    i: "images/ice-cream.jpg",
    j: "images/jacket.webp",
    k: "images/kite.jpg",
    l: "images/lorry.jpg",
    m: "images/monkey.png",
    n: "images/net.webp",
    o: "images/ostrich.jpg",    
    p: "images/pencil.jpg",
    q: "images/queen.webp",
    r: "images/rabbit.jpg",
    s: "images/socks.png",
    t: "images/tap.webp",
    u: "images/umbrella.webp",
    v: "images/van.webp",
    w: "images/watch.webp",
    x: "images/xmass-tree.jpg",  
    y: "images/yam.png",
    z: "images/zebra.jpg"
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