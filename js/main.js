const BTNPLAY = document.getElementById("play");
const CONTAINER = document.querySelector(".container");
const SCELTA = document.getElementById("difficult");
const ARRAYNUMERI=[]
const NUMEROBOMBE= 16;
// dichiaro tasto play, container e la scelta della difficoltà

// dichiaro tasto e container

BTNPLAY.addEventListener("click",
    function(){
        CONTAINER.innerHTML = ""
        let valueDifficult= 0;
        if (SCELTA.value == "ez"){
            valueDifficult = 101;
            let bombe= generaArrayNrRandom(NUMEROBOMBE,1,100)
            console.log(bombe);
            for( let i = 1; i < valueDifficult; i++){
                let box= document.createElement("div");
                box.innerHTML = `${i}`
                CONTAINER.append(box)
                box.classList.add("boxstyle")
                
                box.addEventListener("click",
                function(){
                    if (bombe.includes(i)){
                        this.classList.toggle("bomba")
                    }
                    else{
                        this.classList.toggle("active")
                    }
                    console.log(i)
                    
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
        }
        if (SCELTA.value == "normal"){
            valueDifficult = 82;
            let bombe= generaArrayNrRandom(NUMEROBOMBE,1,81)
            console.log(bombe);
        }
        if (SCELTA.value == "hard"){
            valueDifficult = 50;
            let bombe= generaArrayNrRandom(NUMEROBOMBE,1,49)
            console.log(bombe);
        }
        
})