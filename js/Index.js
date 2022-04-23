// The Swiper For Slider
import {ValiData,Inputs} from './Form.js';

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


//   The Aos
AOS.init();

//The Click Btn ValiData
Inputs.Btn.addEventListener("click",ValiData);

// The Function NotRefresh
function NotRefresh(e) {
    e.preventDefault();
  }


Inputs.a.forEach((Link)=>{
    Link.addEventListener("click",NotRefresh);
})