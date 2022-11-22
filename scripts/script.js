const clickButton = document.querySelector('.click-me');

function clickHandler(){
    alert('Clicked!');
    // clickButton.removeEventListener('click', clickHandler);
}

clickButton.addEventListener('click', clickHandler, {once:true});
