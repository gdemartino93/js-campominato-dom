const BTNPLAY = document.getElementById("play");
const CONTAINER = document.querySelector(".container");
const SCELTA = document.getElementById("difficult");
const ARRAYNUMERI=[]
const NUMEROBOMBE= 16;
const MAIN= document.querySelector("main")
let score= 0;
nomeUtente= prompt("Inserisci il tuo nome")
document.getElementById("nomeOutput").innerHTML=`<span id="infoutente">Benvenuto ${nomeUtente}</span>`

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
                CONTAINER.append(box)
                box.classList.add("boxstyle")
                
                box.addEventListener("click",
                function(){                    
                    if (bombe.includes(i)){
                        this.classList.toggle("bomba");
                       
                        CONTAINER.innerHTML+=`<div class="velonero"><span>Game Over</span></div>`;
                        
                    }else{
                    this.classList.add("active");
                    score++
                    document.getElementById("outputScore").innerHTML=`${score}`

                    console.log(score);
                    }
                })
                if (SCELTA.value == "ez"){
                    valueDifficult = 101;
                    box.classList.add("width-easy")
                }
            }
        }
        
        if (SCELTA.value == "normal"){
            valueDifficult = 82;
            let bombe= generaArrayNrRandom(NUMEROBOMBE,1,81)
            console.log(bombe);
            for( let i = 1; i < valueDifficult; i++){
                let box= document.createElement("div");
                CONTAINER.append(box)
                box.classList.add("boxstyle")
                box.innerHTML=`${i}`
                
                
                box.addEventListener("click",
                function(){
                    if (bombe.includes(i)){
                        this.classList.toggle("bomba")
                        
                        CONTAINER.innerHTML+=`<div class="velonero"><span>Game Over</span></div>`;
                        box.classList.add("bomba")
                    }
                    else{
                    console.log(i)
                    this.classList.toggle("active")
                    }
                })
                if (SCELTA.value == "normal"){
                    valueDifficult = 82;
                    box.classList.add("width-mid")
                }
            }
        }
        if (SCELTA.value == "hard"){
            valueDifficult = 50;
            let bombe= generaArrayNrRandom(NUMEROBOMBE,1,49)
            console.log(bombe);
            for( let i = 1; i < valueDifficult; i++){
                let box= document.createElement("div");
                CONTAINER.append(box)
                box.classList.add("boxstyle")
                
                box.addEventListener("click",
                function(){
                    if (bombe.includes(i)){
                        box.classList.toggle("bomba")
                        CONTAINER.innerHTML+=`<div class="velonero"><span>Game Over</span></div>`;
                    }
                    else{
                    console.log(i)
                    this.classList.toggle("active")
                    }
                })  
                if (SCELTA.value == "hard"){
                    valueDifficult = 50;
                    box.classList.add("width-hard")
                }
            }
        }        
})