const pages = document.querySelectorAll(".page");
const translateAmount= 100;
let translate = 0;
 



const slide = (direction)=>{
    
    direction === "next" ? translate -= translateAmount : translate += translateAmount ;
    
    pages.forEach(
        pages=> (pages.style.transform = `translateX(${translate}%)`)
    )
};

const newbutton = document.getElementById("NB");

const  slide2 =()=>{
  translate -= translateAmount;
          pages.forEach(
              pages=>(pages.style.transform = `translateX(${translate}%)`)
          )
      };
      newbutton.addEventListener('click', slide2);

const changeSize= ()=>{
    
}






 


