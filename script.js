
let list = ["tu chutia hai na","tu noob hai na?","tu single hai na"]
let c = 0;
let question = document.querySelector(".question")
let buttons = document.querySelectorAll(".button")
let no = document.querySelector("#no")
let yes = document.querySelector("#yes")
buttons.forEach((button)=>{
    button.addEventListener("mouseover",(event)=>{
        if (button.innerText === "No"){
            no.style.position = "absolute"
            let a = Math.floor(Math.random() * window.innerWidth)
            let b = Math.floor(Math.random() * window.innerHeight)
            no.style.left = `${Math.min(a, window.innerWidth - no.clientWidth)}px`;
            no.style.top = `${Math.min(b, window.innerHeight - no.clientHeight)}px`;
        }
    })
})
yes.addEventListener("click",()=>{
    if(question.innerText === "tu single hai na"){
        alert("nikal saale yaha se🤣😁")
    }else{
        alert("😊😂🤣😁🤣🤣")
        if (c<list.length){
            question.innerText = `${list[c]}`
            c++
        }
    }
})
