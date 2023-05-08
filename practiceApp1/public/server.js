const count = document.querySelector('.count');
const buttons = document.querySelector('.buttons');


buttons.addEventListener('click',counts);
function counts (e){
    if(e.target.classList.contains("add")){
        count.innerHTML++;
    }
    if(e.target.classList.contains("subtract")){
        count.innerHTML--;
        if(count.innerHTML < 0){
            count.innerHTML = 0;
        }
    }
    if(e.target.classList.contains("reset")){
        count.innerHTML = 0;
    }
}