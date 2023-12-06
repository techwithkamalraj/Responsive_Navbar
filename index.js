let ham = document.querySelector('.bi');
let menu = document.getElementById('menu');

ham.addEventListener('click',()=>{
    if(menu.style.display === 'block'){
        menu.style.display = 'none'
    }
    else{
        menu.style.display = 'block';
    }
});