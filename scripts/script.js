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



const image = document.querySelector('#shoppingCart')
function updateImage(){
    image.src="Images/cart.png";
    image.alt="shopping cart";
    image.width="100";
    image.height="100";
    // image.setAttribute('src',"Images/cart.png")
}

clickButton.addEventListener('click', updateImage)


const buttonContainer = document.querySelector('.button-container')


function changeBGGreen(e){
    if (e.target.tagName === 'BUTTON'){
        e.target.classList.add("greenBG")
    }
}

buttonContainer.addEventListener('clicked', changeColour)
function changeColour(e){
    e.target.style.color = e.target.textContent
}



