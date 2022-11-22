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
clickButton.addEventListener('click', changeBGPink)
