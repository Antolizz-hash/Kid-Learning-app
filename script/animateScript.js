// animate page script
let word = document.querySelector('.word');
let score = document.querySelector('.score')
let myButtons = document.querySelectorAll('.phonics')
let startButton = document.querySelector('.start-button');
let submitButton = document.querySelector('.submit-button');
let image = document.querySelector('.image')

let myScore = 0;

let wordList = [
    {word:"cat", sound:"../sounds/cat.m4a", myImage:"../images/cool-cat.webp"},

    {word:'bag', sound:'../sounds/bag.m4a', myImage:'../images/bag.jpg'},

    {word:'mat', sound:'../sounds/mat.m4a', myImage:'../images/mat.webp'},
    
    {word:'fan', sound:'../sounds/fan.m4a',       myImage:'../images/fan.jpg'},

    {word:'dog', sound:'../sounds/dog.m4a', myImage:'../images/dog.jpg'},

    {word:'fat', sound:'../sounds/fat.m4a', myImage:'../images/fat.jpg'},

    {word:'hat', sound:'../sounds/hat.m4a', myImage:'../images/hat.jpg'},

    {word:'ax', sound:'../sounds/ax.m4a', myImage:'../images/axe.jpg'},

    {word:'man', sound:'../sounds/man.m4a', myImage:'../images/man.jpg'},

    {word:'tap', sound:'../sounds/tap.m4a', myImage:'../images/tap.webp'},
]


let currentTypedWord = "";

let currentWordIndex = 0;
let currentData = wordList[currentWordIndex];
startButton.addEventListener('click', function(){

    

    let audio = new Audio(currentData.sound);
    audio.play()

    
    myButtons.forEach(button =>{
    button.addEventListener("click", function(){
        
        word.textContent += this.innerText.toLowerCase();
        currentTypedWord = word.textContent.trim().toLowerCase()
        if(currentTypedWord.length === currentData. word.length){
            if(currentTypedWord === currentData.word){
                image.src = currentData.myImage;
                image.style.display = 'block';
                myScore++;

                currentWordIndex++;

                currentData = wordList[currentWordIndex];


                setTimeout(()=>{
                    word.textContent = ""
                    image.style.display = 'none'
                    loadNextAudio();
                },5000)
            }else{
                word.style.color = 'red';

                setTimeout(()=>{
                    word.textContent = "";
                    word.style.color = 'black';
                },1000);
            }
        }
    })
})
    
    
    // console.log(currentData)
    
    // console.log(currentTypedWord)
    
});

function loadNextAudio(){
    if(currentWordIndex<wordList.length){
        let currentData = wordList[currentWordIndex];
        let nextAudio = new Audio(currentData.sound);
        nextAudio.play();

        

    }else{
        word.textContent = "Game over! Well done!"
    }
}

submitButton.addEventListener('click',function(){

    
    
    score.textContent = 'Your score is: '+myScore
})


function showSidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
}

function hideSidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
}
// myButtons.forEach(button =>{
//     button.addEventListener("click", function(){
//         word.textContent += this.innerText;
//     })
// })

