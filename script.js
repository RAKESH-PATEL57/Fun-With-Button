let firstBtn = document.querySelector('.fisrtbtn');
let secondBtn = document.querySelector('.secondbtn');

let toggle = 0;

firstBtn.addEventListener('mouseover', function() {
    if((firstBtn.innerHTML='No') && (secondBtn.innerHTML='No')) {
        firstBtn.innerHTML='Yes';
        secondBtn.innerHTML='No';
    }
});

secondBtn.addEventListener('mouseover', function() {
    if((firstBtn.innerHTML='Yes') || (secondBtn.innerHTML='No')) {
        firstBtn.innerHTML='No';
        secondBtn.innerHTML='Yes';
    }
});



let darkMoodBtn = document.querySelector('.darkmood');
var rk = 0;
darkMoodBtn.onclick = () => {
  
    if(rk==0)
    {
        darkMoodBtn.classList.add('darkmoodbtn');
        rk = 1;
    }

    else
    {
        darkMoodBtn.classList.remove('darkmoodbtn');
        rk = 0;
    }
    
}



