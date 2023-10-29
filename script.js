let firstBtn = document.querySelector('.fisrtbtn');
let secondBtn = document.querySelector('.secondbtn');
let secondPage = document.querySelector('.secondpage');
let FirstPage = document.querySelector('.firstpage');
let Logo = document.querySelector('.logo');

let toggle = 0;

firstBtn.addEventListener('mouseover', function() {
    if((firstBtn.innerHTML='No') && (secondBtn.innerHTML='No')) {
        firstBtn.innerHTML='Yes';
        secondBtn.innerHTML='No';
    }
});

secondBtn.addEventListener('mouseover', function() {
    if((firstBtn.innerText='Yes') || (secondBtn.innerHTML='No')) {
        firstBtn.innerHTML='No';
        secondBtn.innerHTML='Yes';
    }
});

firstBtn.onclick = () => {
    secondPage.classList.add('show');
    FirstPage.classList.add('active');
}

secondBtn.onclick = () => {
    secondPage.classList.add('show');
    FirstPage.classList.add('active');
}

Logo.onclick = () => {
    secondPage.classList.remove('show');
    FirstPage.classList.remove('active');
}



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




// cusrsor Selection   ********************

let div = document.querySelector('#cursor');
let button = document.querySelector('#btns');

button.onmousemove = function(e) {
    //move cursor *********
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';
  
//add elements to btn
let element =  document.createElement('span');
element.className = 'element';
button.prepend(element);

// move elements randomly across x and y direction  
element.style.left = cursor.getBoundingClientRect().x - 40 + 'px';
element.style.right = cursor.getBoundingClientRect().y + 40 + 'px';
element.style.top = cursor.getBoundingClientRect().y - 368 + 'px';
element.style.right = cursor.getBoundingClientRect().x + 368 + 'px';

setTimeout(function() {
    let text = document.querySelectorAll('.element')[0],
    directionX = Math.random() < .5 ? -1 : 1,
    directionY = Math.random() < .5 ? -1 : 1

    text.style.left = parseInt(text.style.left) - (directionX * (Math.random() * 200)) + 'px';
    text.style.top = parseInt(text.style.left) - (directionY * (Math.random() * 200)) + 'px';
    text.style.opacity = 0;
    text.style.transform = 'scale(.15)';

    // remove element  
    setTimeout(function(){
        element.remove();
    },400)

},10)
}



