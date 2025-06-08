const sliderItem = document.querySelectorAll(".slider-item");
for (let index = 0; index < sliderItem.length; index++) {
  sliderItem[index].style.left = index * 100 + "%";
}

const sliderItems = document.querySelector(".slider-items");

const arrowRight = document.querySelector(".ri-arrow-right-line");
const arrowLeft = document.querySelector(".ri-arrow-left-line");
let i = 0;
arrowRight.addEventListener("click", () => {
  if (i < sliderItem.length - 1) {
    i++;
    silderMove(i);
  } else {
    return false;
  }
});
arrowLeft.addEventListener("click", () => {
  if (i <= 0) {
    return false;
  } else {
    i--;
    silderMove(i);
  }
});
function autoSlider() {
  if (i < sliderItem.length - 1) {
    i++;
    silderMove(i);
  } else {
    i = 0;
    silderMove(i);
  }
}
function silderMove(i) {
  sliderItems.style.left = -i * 100 + "%";
}
setInterval(autoSlider, 3000);

//menubar responsive 
const Menubar = document.querySelector('.header-bar-icon')
const headerNar = document.querySelector('.header-nav')
Menubar.addEventListener('click',()=>{
  headerNar.classList.toggle('active')
})

//stiky header 
window.addEventListener('scroll',()=> {
  if(scrollY>50){
    document.querySelector('#header').classList.add('active')
  }else {
    document.querySelector('#header').classList.remove('active')
  }
})
