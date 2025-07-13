let btn = document.querySelector('#btn')
let content = document.querySelector('#content')
let voice = document.querySelector('#voice')

function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="en-AU"
    window.speechSynthesis.speak(text_speak)

}
function wishMe() {
    let day = new Date()
    let hours =  day.getHours()
    if(hours >=0 && hours<12) {
        speak("Good Morning akansha Mam")
    }
    else if(hours>=12 && hours < 16){
        speak("Good Afternoon akansha Mam")
    } else {
        speak("Good Evening akansha Mam")
    }
}
window.addEventListener('load',()=> {
    wishMe()
})
let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition 
let recognition = new speechRecognition()
recognition.onresult=(event) => {
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText=transcript
    takeCommand(transcript.toLowerCase())
}
btn.addEventListener("click",() => {
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})
function takeCommand(message) {
    btn.style.display = "flex";
    voice.style.display = "none";

    if (message.includes("hello") || message.includes("hey")) {
        speak("Hello Mam, what can I do for you?");
    } else if (message.includes("who are you")) {
        speak("i am a virtual assistant created by Akansha Mam");
    } else if (message.includes("how are you")) {
        speak("I am fine Mam, how are you?");
    } else if (message.includes("open youtube")) {
        speak("Opening YouTube...");
        window.open("https://www.youtube.com/", "_blank");
    } else if (message.includes("open google")) {
        speak("Opening Google...");
        window.open("https://www.google.com/", "_blank");
    } else if (message.includes("open whatsapp")) {
        speak("Opening WhatsApp...");
        window.open("https://www.whatsapp.com/", "_blank");
    } else if (message.includes("time")) {
        let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        speak("The time is " + time);
    } else if (message.includes("date")) {
        let date = new Date().toLocaleString(undefined, { day: "numeric", month: "short" });
        speak("Today's date is " + date);
    } else if (message.includes("open calculator")) {
        speak("Sorry, I can't open calculator from browser.");
    } else{
    speak("Let me think...");

    fetch("http://localhost:3001/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
    })
    .then(res => res.json())
    .then(data => {
        content.innerText = data.reply;
        speak(data.reply);
    })
    .catch(err => {
        console.error(err);
        speak("Sorry, I couldn't get an answer from the AI.");
    });
    }
}
