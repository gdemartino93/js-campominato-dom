const BTNPLAY = document.getElementById("play");
const CONTAINER = document.querySelector(".container");
const SCELTA = document.getElementById("difficult");
const ARRAYNUMERI=[]
// dichiaro tasto play, container e la scelta della difficoltà

// dichiaro tasto e container

BTNPLAY.addEventListener("click",
    function(){
        CONTAINER.innerHTML = ""
        let valueDifficult= 0;
        if (SCELTA.value == "ez"){
            valueDifficult = 101;
            let bombe= generaArrayNrRandom(16,1,100)
        }
        if (SCELTA.value == "normal"){
            valueDifficult = 82;
            let bombe= generaArrayNrRandom(16,1,81)
        }
        if (SCELTA.value == "hard"){
            valueDifficult = 50;
            let a= generaArrayNrRandom(16,1,49)
        }
        for( let i = 1; i < valueDifficult; i++){
            let box= document.createElement("div");
            box.innerHTML = `${i}`
            CONTAINER.append(box)
            box.classList.add("boxstyle")
            
            box.addEventListener("click",
            function(){
                console.log(i)
                this.classList.toggle("active")
            })

            if (SCELTA.value == "ez"){
                valueDifficult = 101;
                box.classList.add("width-easy")
            }
            if (SCELTA.value == "normal"){
                valueDifficult = 82;
                box.classList.add("width-mid")
            }
            if (SCELTA.value == "hard"){
                valueDifficult = 50;
                box.classList.add("width-hard")
            }
        }
})


let a= generaArrayNrRandom(16,1,100)
console.log(a);