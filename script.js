/*
Script to make animation for section 1 icons
*/
const icons = document.querySelectorAll('.section-1-icons i');
let i = 1;
setInterval(()=>{
    i++;
    const icon = document.querySelector('.section-1-icons .change');
    let nextSib = icon.nextElementSibling;
    icon.classList.remove('change');
    if(i > icons.length){
        icons[0].classList.add('change');
        i = 1;
    }else{
        nextSib.classList.add('change');
        
    }
    
},2000);