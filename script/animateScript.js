// animate page script
let word = document.querySelector('.word');
let score = document.querySelector('.score')
let myButtons = document.querySelectorAll('.phonics')
let startButton = document.querySelector('.start-button');
let submitButton = document.querySelector('.submit-button');
let image = document.querySelector('.image')

let myScore = 0;

let wordList = [
    {word:"cat", sound:"../sounds/cat.mp3", myImage:"../images/cool-cat.webp"},

    {word:'bag', sound:'../sounds/bag.mp3', myImage:'../images/bag.jpg'},

    {word:'mat', sound:'../sounds/mat.mp3', myImage:'../images/mat.webp'},
    
    {word:'fan', sound:'../sounds/fan.mp3',       myImage:'../images/fan.jpg'},

    {word:'dog', sound:'../sounds/dog.mp3', myImage:'../images/dog.jpg'},

    {word:'fat', sound:'../sounds/fat.mp3', myImage:'../images/fat.jpg'},

    {word:'hat', sound:'../sounds/hat.mp3', myImage:'../images/hat.jpg'},

    {word:'ax', sound:'../sounds/ax.mp3', myImage:'../images/ax.jpg'},

    {word:'man', sound:'../sounds/man.mp3', myImage:'../images/man.jpg'},

    {word:'tap', sound:'../sounds/tap.mp3', myImage:'../images/tap.webp'},
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
                    currentTypedWord = "";
                    image.style.display = 'none'
                    loadNextAudio();
                },4000)
            }else{
                word.style.color = 'red';
                
                word.textContent = currentData.word;

                
                let audio = new Audio(currentData.sound);
                audio.play();

                setTimeout(()=>{
                    word.textContent = "";  
                    

                    currentTypedWord = "";

                    currentWordIndex++;

                    loadNextAudio(); 
                },1000);
            }
        }
    })
})
    
    
    // console.log(currentData)
    
    // console.log(currentTypedWord)
    
});

function loadNextAudio(){
    word.style.color = 'white';
    if(currentWordIndex<wordList.length){
        currentData = wordList[currentWordIndex];
        let nextAudio = new Audio(currentData.sound);
        nextAudio.play();

        

    }else{
        word.textContent = "Game over! Well done!"
        score.textContent = 'Your final score is: '+myScore;
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

