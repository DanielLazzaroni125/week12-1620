const clickButton = document.querySelector('.click-me');

function clickHandler(){
    alert('Clicked!')
}

clickButton.addEventListener('click', clickHandler)