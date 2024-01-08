const banner =document.querySelector('.banner')
const headerEl = document.querySelector('#header')
const logo = document.querySelector('#logo')
const scrollBtn = document.querySelector('.ScrollForMore')
const joinEL = document.querySelector('.join')
const logoEl = document.querySelector('.logo-img')
const locationEL = document.querySelector('.l-location')
const slider = document.querySelectorAll('.banner-imgs img')
const boxes = document.querySelectorAll('.box')
const modal = document.querySelector('.modal')
// size of banner
window.addEventListener('load',()=>{
    const header=(headerEl.getBoundingClientRect().top)*2
    const sHeight = (window.innerHeight)-header
    banner.style=`height:${sHeight}px !important`
    setTimeout(()=>{
        modal.classList.add('active')
    },1000)
    setTimeout(()=>{
        modal.classList.remove('active')
    },4000)

})
// scroll page with arrow btn
scrollBtn.addEventListener('click',()=>{
    joinEL.scrollIntoView({ behavior: 'smooth' });
})
slider.forEach(img => {
    setInterval(() => {
        img.classList.toggle('active')
    }, 3000);
});
function resize() {
    window.innerWidth<768 ? hMenu.classList.remove('display-res'):hMenu.classList.add('display-res')
    const header=headerEl.getBoundingClientRect().height
    const sHeight = (window.innerHeight)-header
    banner.style=`height:${sHeight}px !important`
}
window.addEventListener('resize',resize)

window.addEventListener('scroll',()=>{
    if(window.innerHeight>banner.getBoundingClientRect().bottom){
        locationEL.classList.add('display-res')
        logoEl.classList.add('logo-res')
        headerEl.classList.add('header-res')
        // logo.classList.add('logo-res-m')
        resize()
    }else{
        locationEL.classList.remove('display-res')
        logoEl.classList.remove('logo-res')
        headerEl.classList.remove('header-res')
        // logo.classList.remove('logo-res-m')
        // resize()
    }

    showElements()
})
showElements()
function showElements() {
    let screenHeight=window.innerHeight*.9
    boxes.forEach((box)=>{
        const boxTop=box.getBoundingClientRect().top
        if(screenHeight>boxTop){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
})
}


const rawM = document.querySelector('.rawMaterial-container')
async function fastFood() {
    const url = 'https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?nutrition-type=cooking&category%5B0%5D=generic-foods&health%5B0%5D=alcohol-free';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '59f13bab99msh18642c09b976e69p12277ajsn8cb901f6bdc4',
		'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	result.hints.map((e)=>{
        rawM.innerHTML+=`
        <div class="material">
            <img src="${e.food.image}" alt="">
            <h4>${e.food.category}</h4>
        </div>`
    });
} catch (error) {
	console.error(error);
}
}
fastFood()
const hMenu = document.querySelector('#h-menu')
const home = document.querySelector('.home')
const homeEl = document.querySelector('#home')
const more = document.querySelector('.more')
const moreEl = document.querySelector('#more')
const closeBtn = document.querySelector('.close-btn')
const menuHamburger = document.querySelector('.menu-hamburger')
more.addEventListener('click',()=>{
    home.classList.remove('mobile-bg')
    homeEl.classList.remove('mobile-color')
    more.classList.add('mobile-bg')
    moreEl.classList.add('mobile-color')
    menuHamburger.classList.remove('display-res')
})
closeBtn.addEventListener('click',()=>{
    menuHamburger.classList.add('display-res')
    home.classList.add('mobile-bg')
    homeEl.classList.add('mobile-color')
    more.classList.remove('mobile-bg')
    moreEl.classList.remove('mobile-color')
})
