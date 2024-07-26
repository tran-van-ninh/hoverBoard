let body = document.querySelector('body');
let container = document.querySelector('.container');
const COUNT = 210;

let interVal = setInterval(randomSquare, 20);
let isPaused = false; // Biến cờ để theo dõi trạng thái của setInterval
let timeoutId;
for(let i = 0; i < COUNT; i++){
    let square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
    square.addEventListener('mouseover',function(e){
        let color = randomColor();
        console.log(e.currentTarget);
        e.currentTarget.style.backgroundColor = `${color}`;
        e.currentTarget.style.boxShadow = `0 0 10px ${color}, 0 0 100px ${color}`;
        clearInterval(interVal);
        clearTimeout(timeoutId);
        isPaused = true;
    });

    square.addEventListener('mouseleave',function(e){
        e.currentTarget.style.backgroundColor = "#1d1d1d";
        e.currentTarget.style.boxShadow = "0px 0px 2px rgba(255, 255, 255, 0.6)";
        timeoutId = setTimeout(() => {
            if (isPaused) {
                interVal = setInterval(randomSquare, 20);
                isPaused = false;
            }
        }, 3000); // Bắt đầu lại sau 3 giây
    });
    
}

function randomColor(){
    let charColor = "123456789ABCDEF";
    let color = "#"
    for(let i = 0; i < 6; i++){
        color += charColor[Math.floor(Math.random() * charColor.length)];
    } 
    return color;
}

function randomSquare() {
    const squares = document.querySelectorAll('.square');
    const randomIndex = Math.floor(Math.random() * squares.length);
    const square = squares[randomIndex];
    const color = randomColor();
    square.style.backgroundColor = `${color}`;
    square.style.boxShadow = `0 0 10px ${color}, 0 0 100px ${color}`;

    setTimeout(() => {
        square.style.backgroundColor = "#1d1d1d";
        square.style.boxShadow = "0px 0px 2px rgba(255, 255, 255, 0.6)";
    }, 500); // Màu sẽ trở lại sau 500ms
}

