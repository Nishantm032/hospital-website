let doctors = document.querySelectorAll(".team");
let card = document.querySelectorAll(".serviceCard");

let count = 0;

doctors.forEach(function(card, index){
    card.style.left = `${index*100}%`
})

function myFun(){
    doctors.forEach(function(currValue) {
        currValue.style.transform = `translateX(-${count * 100}%)`
    })
}

setInterval(function(){
    count++;
    if(count == doctors.length){
        count = 0;
    }
    myFun()
},3000)

//service card
card.forEach(function(currCard){
    currCard.addEventListener("click", function(){
        console.log(currCard);
        let div =  document.createElement("div");
        div.classList.add("detailCard");
        div.innerHTML= `
        <i id="icon" class="fa-solid fa-xmark"></i>
        <img src=${currCard.firstElementChild.src} alt="">
        <h2>${currCard.lastElementChild.innerHTML}</h2>
        <p>the best way to test your data regarding for your chest test is generally depends upon how much your chest is healthy.</p> `

        document.querySelector("body").appendChild(div);
        document.querySelector("#icon").addEventListener("click", function(){
            div.remove()
        })
    })
})