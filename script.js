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
        document.btn.classList.add('darkmoodbtn');
        rk = 1;
    }

    else
    {
        document.btn.classList.remove('darkmoodbtn');
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








// cusrsor Selection   ********************

let div = document.querySelector('#cursor');
let button = document.querySelector('#btns');

document.onmousemove = function(e) {
    //move cursor *********
    console.log("rakesh");
   cursor.style.top = e.pageY + 'px';
   cursor.style.left = e.pageX + 'px';
  
//    animate background  
button.style.backgroundPositionX = e.pageX/-4 + 'px';
button.style.backgroundPositionY = e.pageY/-4 + 'px';

//add elements to btn
let element =  document.createElement('span');
element.className = 'element';
button.prepend(element);
console.log(element);

// move elements randomly across x and y direction  
element.style.left = cursor.getBoundingClientRect().x -30 + 'px';
element.style.top = cursor.getBoundingClientRect().y - 368 + 'px';

setTimeout(function() {
    let text = document.querySelectorAll('.element')[0],
    directionX = Math.random() < .5 ? -1 : 1,
    directionY = Math.random() < .5 ? -1 : 1

    text.style.left = parseInt(text.style.left) - (directionX * (Math.random() * 200)) + 'px';
    text.style.top = parseInt(text.style.left) - (directionY * (Math.random() * 200)) + 'px';
    text.style.opacity = 0;
    text.style.transform = 'scale(.25)';


    // remove element  
    setTimeout(function(){
        element.remove();
    },400)

},10)
}



