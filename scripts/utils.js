let shadowSize = 10

function changeBackgroundColor() {

    // alert("Hello World!")
    const bodyElement = document.querySelector('.body');

    const colors = ['#a1c4fd', '#c2c9fb', '#fdbb2d'];

    const randomColorPosition = Math.floor(Math.random() * colors.length)



    bodyElement.style.backgroundColor = colors[randomColorPosition];
}

document.querySelector('.body').addEventListener('click', changeBackgroundColor);

function changBoxShadow(){
    const mainElement = document.querySelector('.main');
    shadowSize = shadowSize + 5;

    mainElement.style.boxShadow = `
        4px 4px ${shadowSize}px var(--pastel4),
        -3px -3px ${shadowSize}px var(--pastel3),
        10px 10px ${shadowSize}px var(--pastel6);
    `
}

document.querySelector('.main').addEventListener('click', changeBoxShadow);
