const hexBtn = document.querySelector('.hexBtn');
const bg= document.querySelector('section');
const haxCode = document.querySelector('.haxCode');
hexBtn.addEventListener('click',()=>{
    let color = Math.floor(Math.random()*0xffffff);//0~fff까지의 랜덤색 만들고 정수로 변환
    color = color.toString(16);//정수를 16진수로 변환
    bg.style.background = `#${color}`;
    haxCode.innerHTML = `#${color}`;
});