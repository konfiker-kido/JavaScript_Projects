  var number=2; 
  var score=0;
  var timeLimit=60;

  function timeSeconds(){
     timeLimit = document.querySelector("#timeInput").value;   
  }

  function createBubbbles () {
        var bubbles="";
    for(let i=1;i<134;i++){    
        let num=Math.round(Math.random()*10);
        bubbles+= `<div class="bubble-box">${num} 
        </div>`;           
    }
    document.querySelector(".bubble-container").innerHTML=bubbles;      
   }
      
   function countTimer(){
        let time=setInterval(function(){
            if(timeLimit>=0){      
                document.querySelector("#timeStamp").textContent=timeLimit;
                timeLimit--;
            }else{
                clearInterval(time);  
                document.querySelector(".bubble-container").innerHTML=`<h1>Game Over!</h1>`;  

            }
        },1000)
   }

   function changeHit(){
         number=Math.round(Math.random()*10);
         document.querySelector("#hitStamp").textContent=number;  
   }
   function countGamePoints(){
       document.querySelector(".bubble-container").addEventListener("click",
       function(e){
           let bubbleNum=(Number(e.target.textContent)); 
           if(bubbleNum===number){       
                score+=10;
                document.querySelector("#scoreStamp").innerHTML=score;      
                 createBubbbles();
                 changeHit();  
           }
               
       })
   }

   function startButton(){
    document.querySelector(".startButton").addEventListener("click",function(e){         
        timeSeconds();       
        createBubbbles(); 
            countTimer();
            changeHit();
            countGamePoints();    
    })
   }
   startButton(); 
  

    