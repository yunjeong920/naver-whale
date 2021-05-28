// $(document).on("mouseenter", ".gnb", function(){
//   $(".submenu").slideDown();
// })
// $(document).on("mouseleave", ".gnb", function(){
//   $(".submenu").slideUp();
// })

$(function(){
  $("#sub").hide();
  $("#main-nav").hover(function(){
    $(this).parent().find('#sub').slideDown();
    $(this).parent().hover(function(){

    },function(){
      $(this).parent().find("#sub").slideUp(900);
    })
  })
})
