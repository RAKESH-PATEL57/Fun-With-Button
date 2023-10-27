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



//**********************           / Dark Mood section   **************************


let darkMoodBtn = document.querySelector('.darkmood');
var rk = 0;
darkMoodBtn.onclick = () => {
  
    if(rk==0)
    {
        document.body.classList.add('darkmoodbtn');
        rk = 1;
    }

    else
    {
        document.body.classList.remove('darkmoodbtn');
        rk = 0;
    }
    
}




// second page   ******************

let secondPageBtn = document.querySelector('.buttons');


secondPageBtn.onclick = () => {
    
    secondPageBtn.classList.add('show');
}

secondPageBtn.addEventListener('onclick',function() {
    console.log("rakesh");
});



