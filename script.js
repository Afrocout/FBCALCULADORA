const teclasNum=[...document.querySelectorAll(".num")]
const teclasop=[...document.querySelectorAll(".op")]
const teclaRes=document.querySelector(".res")
const display=document.querySelector(".display")
const ton=document.getElementById("ton")
const tlimpar=document.getElementById("tlimpar")
const tigual=document.getElementById("tigual")
const tptw=document.getElementById("tptw")

let sinal =false
let decimal=false

teclasNum.forEach((el)=>{
  el.addEventListener("click",(evt)=>{
    sinal=false
    
    if(evt.target.innerHTML==","){
      if(!decimal){
        decimal=true
        if(display.innerHTML=="0"){
            display.innerHTML="0,"
        }else{
          display.innerHTML+=evt.target.innerHTML
        }
    }
  }else{
    if(display.innerHTML=="0"){
      display.innerHTML=""
   }
    display.innerHTML+=evt.target.innerHTML
}
  })
  
})
 

teclasop.forEach((el)=>{
  el.addEventListener("click",(evt)=>{
    if(!sinal){
        sinal=true
        if(display.innerHTML=="0"){
          display.innerHTML=""
        }
        if(evt.target.innerHTML=="x"){
          display.innerHTML+="*"
        }else{
          display.innerHTML+=evt.target.innerHTML
        }
     }
    
     })
})

tlimpar.addEventListener("click",(evt)=>{
  sinal=false
  decimal=false
  display.innerHTML="0"
})

tigual.addEventListener("click",(evt)=>{
  sinal=false
  decimal=false
  const res=eval(display.innerHTML)
  display.innerHTML=res
})
function back(){
  var display = document.getElementById('display').innerHTML;
  document.getElementById('display').innerHTML = display.substring(0, display.length -1);
}



/* - pocentagem - copy*/
