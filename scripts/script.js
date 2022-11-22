const clickButton = document.querySelector('.click-me');

function clickHandler(){
    alert('Clicked!');
    // clickButton.removeEventListener('click', clickHandler);
}

clickButton.addEventListener('click', clickHandler, {once:true});

function changeBGPink(){
    // document.body.style.backgroundColor = 'pink'
    document.body.classList.add("pinkBG");
}

function clicked(){
    if(clickButton.textContent === 'Click Me!'){
        clickButton.textContent = 'clicked!'
    }
    else if(clickButton.textContent === 'clicked!'){
        clickButton.textContent = 'Click Me!'
}
}
clickButton.addEventListener('click', changeBGPink)
clickButton.addEventListener('click', clicked)