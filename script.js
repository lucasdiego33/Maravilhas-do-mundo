let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")

let container = document.querySelector(".container")
let list = document.querySelector(".list")
let caixinhas = document.querySelector(".caixinhas")


btn1.onclick = () =>  movimentarItem("btn1")
btn2.onclick = () =>  movimentarItem("btn2")

function movimentarItem(type){
     let listItens = document.querySelectorAll(".list .itens")
     let caixinhaItens = document.querySelectorAll(".caixinhas .itens2")
   

      if(type === "btn1"){
          list.appendChild(listItens[0])
          caixinhas.appendChild(caixinhaItens[0])
          container.classList.add("btn1")

      } else {
         
        list.prepend(listItens[listItens.length -1])
        caixinhas.prepend(caixinhaItens[caixinhaItens.length -1])
        container.classList.add("btn2")

      }

     setTimeout(() => {
        container.classList.remove("btn1")
        container.classList.remove("btn2")
     },2000);
        
}


