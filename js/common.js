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
// 
// $(function(){
//   var windowWidth = $(window).width();
//   $(window).resize(function(){
//     if( windowWidth <= 1200px ){
//
//     }
//   })
// })

// $(function scrollHandler(){
//   if($(window).scrollTop() = $("#first").position().top){
//     $(".on").css("opacity","0");
//   }else{
//     $("on").css("opacity","1");
//   }
// })

// 탭메뉴
$(function(){
  $("ul.tabs li").click(function(){
    var tab_id = $(this).attr("data-tab");
    $("ul.tabs li").removeClass("current");
    $(".tab-content").removeClass("current");
    $(this).addClass("current");
    $("#"+tab_id).addClass("current");
  })
})
