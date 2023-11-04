const pages = document.querySelectorAll(".page");


let currentIndex= 0;
 
 let current = 100;
   


const slide = ()=>{
    //move the darkie square 1 grade deaper
    document.getElementById('darkie').style.zIndex = (current - 1);  
    current = (current - 1);

    
    pages[currentIndex].style.left= '-100%'; /*slides the page to the left*/ 


    pages[currentIndex + 1].style.left= '-100px';/*makes current page stand a little left fo us to see the next*/ 


 
        currentIndex = currentIndex + 1;
        
        console.log("here");
        console.log(currentIndex);
        console.log(pages.length-1);

        if (currentIndex === pages.length ){
           console.log("yes");

        }
      
        
    }


function mOver() {
   pages[currentIndex].style.left= '-180px';
  };
  
  function mOut() {
    pages[currentIndex].style.left= '-100px';  };

    function back(){

        //reset index and pages positions
        currentIndex = 0;
        pages[0].style.left ="-100px";
        pages[1].style.left="0";
        pages[2].style.left="0";
        pages[3].style.left="0";

        //reset darkie z-indes and current
          function resetDarkie(){
            current = 100;
            document.getElementById('darkie').style.zIndex= current;
                                }
         setTimeout(resetDarkie, 1000);   
                    
        }
    


   










 


