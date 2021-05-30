$(function(){
  let oneswiper = new Swiper(".firstSwiper", {
    spaceBetween: 30,
    centerdSlides: true,
    loop: true,
    autoplay: {
         delay: 7000,
         disableOnInteraction: false,
       },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
